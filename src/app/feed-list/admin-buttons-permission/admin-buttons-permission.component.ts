import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../../loggin/login.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Params, Router} from "@angular/router";
import {TravelCreatorApiService} from "../../travel-creator/travel-creator-api.service";

@Component({
  selector: 'app-admin-buttons-permission',
  templateUrl: './admin-buttons-permission.component.html',
  styleUrls: ['./admin-buttons-permission.component.scss']
})
export class AdminButtonsPermissionComponent implements OnInit {

  @Input() id!: string;
  @Output() deleteFeedFromList: EventEmitter<string> = new EventEmitter<string>();
  isAdmin$: Observable<boolean> = this.loginService.getIsAdmin();

  constructor(private loginService: LoginService , private router:Router, private travelCreatorApiService: TravelCreatorApiService) { }

  ngOnInit(): void {
  }


  onEdit() {
    this.travelCreatorApiService.setIsEdited(true);
    this.router.navigate(['creator', {id : this.id}]);
  }
}
