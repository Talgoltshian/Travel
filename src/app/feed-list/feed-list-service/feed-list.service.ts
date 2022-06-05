import {Injectable} from '@angular/core';
import {FeedListInterface} from "../feed-list.interface";
import {FeedListApiService} from "./feed-list-api.service";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {TravelCreatorApiService} from "../../travel-creator/travel-creator-api.service";
import {currentAction} from "@datorama/akita";

@Injectable({
  providedIn: 'root'
})
export class FeedListService {

  private readonly list$: BehaviorSubject<FeedListInterface[]> = new BehaviorSubject<FeedListInterface[]>(this.feedListApiService.getAllFeedList());

  constructor(private feedListApiService: FeedListApiService, private travelCreatorApiService: TravelCreatorApiService) {
  }

  getAllFeedList(): Observable<FeedListInterface[]> {
    return this.list$.asObservable();
  }

  addListItem(item: FeedListInterface): void {
    let isEdit;
    const list = this.list$.getValue();
    this.travelCreatorApiService.getIsEdited().pipe(tap(isEditNow => {
      isEdit = isEditNow;
    })).subscribe()
    if (!isEdit) {
      this.list$.next([
        ...list, item
      ]);
    } else {
      list.forEach((feed, index) => {
        if (feed.id === item.id) {
          list[index] = item;
        }
      })
      this.list$.next(list);
    }
  }

  deleteFeedFromList(cradId: string) {
    const feed = this.list$.getValue();
    feed.forEach((card, index) => {
      card.id === cradId ? feed.splice(index, 1) : null;
    })

    this.list$.next(feed);
  }

  getCurrentFeedById(id: string) {
    return this.list$.pipe(map(feedList => feedList.filter(feed => id === feed.id)));
  }

}
