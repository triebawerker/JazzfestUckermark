import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BandDetailComponent }  from './band-detail.component';

const bandsRoutes: Routes = [
  { path: 'band/:id', component: BandDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(bandsRoutes)
  ]
})
export class BandRoutingModule { }
