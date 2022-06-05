import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogginComponent} from "./loggin.component";
import {NavBarModule} from "../nav-bar/nav-bar.module";
import {ReactiveFormsModule} from "@angular/forms";
import {InputModule} from "@common";




@NgModule({
  declarations: [LogginComponent],
  imports: [
    CommonModule,
    InputModule,
    NavBarModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
