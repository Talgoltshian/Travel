import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelCreatorComponent } from './travel-creator.component';

const routes: Routes = [{ path: '', component: TravelCreatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelCreatorRoutingModule { }
