import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {UserInterface} from "../loggin/user-interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TravelCreatorApiService {
  isEdited: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<any> {
    return this.httpClient.get<any>("https://restcountries.com/v3.1/all");
  }

  setIsEdited(isEdit: boolean): void {
    this.isEdited.next(isEdit);
  }

  getIsEdited(): Observable<boolean> {
    return this.isEdited.asObservable();
  }

}
