import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FeedListService} from "../feed-list/feed-list-service/feed-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DescriptionInterface, FeedListInterface} from "../feed-list/feed-list.interface";
import {LoaderService} from "../../../projects/common/src/lib/loader/loader.service";
import {Observable, ReplaySubject, tap} from "rxjs";
import {TravelCreatorApiService} from "./travel-creator-api.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-travel-creator',
  templateUrl: './travel-creator.component.html',
  styleUrls: ['./travel-creator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelCreatorComponent implements OnInit {
  @Input() card = {userName: '', date: '', countryName: '', title: '', description: '', imgUrl: ''};
  creatorForm = this.formBuilder.group({
      userName: this.formBuilder.control(this.card.countryName, [Validators.required]),
      date: this.formBuilder.control(this.card.countryName, [Validators.required]),
      countryName: this.formBuilder.control(this.card.countryName , Validators.required),
      title: this.formBuilder.control(this.card.title, [Validators.required]),
      description: this.formBuilder.control(this.card.description, [Validators.required]),
      imgUrl: this.formBuilder.control(this.card.imgUrl, [Validators.required])
    }
  );
  isLoading$!: Observable<boolean>;
  countries$: ReplaySubject<any[]> = new ReplaySubject<any[]>(1)
  country: any;
  isEdit$!: Observable<boolean>;

  constructor(private travelCreatorApiService: TravelCreatorApiService, private formBuilder: FormBuilder,
              private feedListService: FeedListService, private router: Router,
              private loaderService: LoaderService,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.isEdit$ = this.travelCreatorApiService.getIsEdited()
    this.isEdit$.subscribe();
    this.isLoading$ = this.loaderService.getIsLoading();
    this.getCountriesName();
    this.editCardFeed();
  }

  OnSubmitCreatAndEditCard(): void {
   if (this.creatorForm.valid) {
      let id;
      this.activatedRoute.params.subscribe(params => {
        id = params['id'];
      })
      const idGenerate = id? id : '_' + Math.random().toString(36).substr(2, 9);
      const templateDescription: DescriptionInterface = {
        mainTitle: this.creatorForm.value.title,
        description: this.creatorForm.value.description,
        img: this.creatorForm.value.imgUrl
      }
      const templateFeed: FeedListInterface = {
        isOpen: false,
        id: idGenerate,
        name: this.creatorForm.value.userName,
        Location: this.creatorForm.value.countryName,
        data: this.creatorForm.value.date,
        description: templateDescription
      };
      this.feedListService.addListItem(templateFeed);
      this.loaderService.setLoading(true);
      this.router.navigateByUrl('homePage');
    }
  }

  getCountriesName() {
    let countriesList: any = []
    this.travelCreatorApiService.getCountries().pipe(tap(countryArr => countryArr.forEach((country: any) => {
      countriesList.push(country.name.common)
    }))).subscribe();
    this.country = countriesList;
    this.countries$.next(countriesList);
  }

  editCardFeed() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (!id) return;
      const item = this.feedListService.getCurrentFeedById(id);
      item.subscribe(feed => this.creatorForm.patchValue({
        userName: feed[0].name,
        date: formatDate(feed[0].data, 'yyyy-MM-dd', 'en'),
        countryName: feed[0].Location,
        title: feed[0].description.mainTitle,
        description: feed[0].description.description,
        imgUrl: feed[0].description.img
      }));
    });
  }

}
