import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar.component";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class NavBarModule { }
