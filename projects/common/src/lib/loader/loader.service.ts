import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }
  setLoading(value: boolean) {
    this.isLoading$.next(value);
    setTimeout(() => {
      this.isLoading$.next(false);
    }, 1500)
  }
}
