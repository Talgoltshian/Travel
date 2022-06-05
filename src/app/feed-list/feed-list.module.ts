import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedListComponent } from './feed-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {LoaderModule} from "../../../projects/common/src/lib/loader/loader.module";
import { AdminButtonsPermissionComponent } from './admin-buttons-permission/admin-buttons-permission.component';
import {NavBarModule} from "../nav-bar/nav-bar.module";



@NgModule({
  declarations: [
    FeedListComponent,
    AdminButtonsPermissionComponent,

  ],
  exports: [
    FeedListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([{path: '', component: FeedListComponent}]),
    LoaderModule,
    NavBarModule

  ]
})
export class FeedListModule { }
