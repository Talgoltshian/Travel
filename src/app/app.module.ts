import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FeedListModule} from "./feed-list/feed-list.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './error/error.component';
import {InputModule, LoaderModule} from "@common";
import {CommonModule} from "@angular/common";
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {LoginModule} from "./loggin/login.module";




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeedListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    InputModule,
    LoaderModule,
    MatFormFieldModule,
    CommonModule,
    NavBarModule,
    LoginModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
