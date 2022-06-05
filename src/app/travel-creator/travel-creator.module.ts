import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelCreatorRoutingModule } from './travel-creator-routing.module';
import { TravelCreatorComponent } from './travel-creator.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputModule} from "@common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {NavBarModule} from "../nav-bar/nav-bar.module";


@NgModule({
  declarations: [
    TravelCreatorComponent

  ],
  imports: [
    CommonModule,
    TravelCreatorRoutingModule,
    ReactiveFormsModule,
    InputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    NavBarModule

  ]
})
export class TravelCreatorModule { }
