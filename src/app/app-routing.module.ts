import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogginComponent} from "./loggin/loggin.component";
import {ErrorComponent} from "./error/error.component";
import {LoginGuard} from "./loggin/login.guard";

const routes: Routes = [
  {path: '', component:LogginComponent, pathMatch: 'full'},
  { path: 'homePage', loadChildren: () => import('./feed-list/feed-list.module').then(m => m.FeedListModule),
  canActivate: [LoginGuard]},
  { path: 'creator' ,  loadChildren: () => import('./travel-creator/travel-creator.module').then(m => m.TravelCreatorModule) },
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
