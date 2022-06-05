import { Injectable } from '@angular/core';
import {FeedListInterface} from "../feed-list.interface";
import {FEED_LIST} from "../feed-list.mock";

@Injectable({
  providedIn: 'root'
})
export class FeedListApiService {

  constructor() { }

  getAllFeedList ():FeedListInterface[]{
    return FEED_LIST;
  }
}
