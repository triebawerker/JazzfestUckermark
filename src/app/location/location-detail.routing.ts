import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationDetailComponent }  from './location-detail.component';

const locationsRoutes: Routes = [
  { path: 'location/:id', component: LocationDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(locationsRoutes)
  ],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
