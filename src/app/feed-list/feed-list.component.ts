import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FeedListService} from "./feed-list-service/feed-list.service";
import {FeedListInterface} from "./feed-list.interface";
import {map, Observable, tap} from "rxjs";
import {LoaderService} from "../../../projects/common/src/lib/loader/loader.service";
import {TravelCreatorApiService} from "../travel-creator/travel-creator-api.service";

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedListComponent implements OnInit {
  feedList$?:Observable<FeedListInterface[]> = this.feedListService.getAllFeedList();
  feed?: FeedListInterface;
  isLoading$!: Observable<boolean>;


  constructor(private feedListService: FeedListService , private loaderService: LoaderService, private  travelCreatorApiService: TravelCreatorApiService) { }

  ngOnInit(): void {
    this.isLoading$ = this.loaderService.getIsLoading();
    this.travelCreatorApiService.setIsEdited(false);
  }

  onClickPreview(id: string) {
    this.feedList$ = this.feedListService.getAllFeedList()
      .pipe(
        map(list => list.map(feed => {
                return {
                  ...feed,
                  isOpen: feed.id === id
                }
            }
          )
        )
      );
  }
  onDeleteCard(id: string) {
    console.log(id);
    this.feedListService.deleteFeedFromList(id);
  }
}
