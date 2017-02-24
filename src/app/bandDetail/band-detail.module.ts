import { NgModule }       from '@angular/core';

import { BandDetailComponent }    from './band-detail.component';

import { BandService } from './band.service';

import { BandRoutingModule } from './band-detail.routing';

@NgModule({
  imports: [
    BandRoutingModule
  ],
  declarations: [
    BandDetailComponent
  ],
  providers: [
    BandService
  ]
})
export class BandsModule {}
