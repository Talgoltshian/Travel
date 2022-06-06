import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, tap} from "rxjs";
import {UserInterface} from "./user-interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly loginUser$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly user$: ReplaySubject<UserInterface | null> = new ReplaySubject<UserInterface | null>(1);

  constructor(private httpClient: HttpClient) {
  }

  getUserInformation(currentEmail: string, currentPassword: string): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(`http://localhost:3000/users?email=${currentEmail}&&password=${currentPassword}`);
  }

  setLoginUser(user: string, password: string) {
    this.getUserInformation(user, password).pipe(tap(currentUser => {
      this.loginUser$.next(currentUser[0].isAdmin);
      this.user$.next(currentUser[0]);

    })).subscribe();
  }

  getIsAdmin(): Observable<boolean> {
    return this.loginUser$.asObservable();
  }

  getUser() {
    return this.user$.asObservable();
  }
}

