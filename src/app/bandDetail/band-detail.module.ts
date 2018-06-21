import { NgModule }       from '@angular/core';

import { BandService } from './band.service';

import { BandRoutingModule } from './band-detail.routing';

@NgModule({
  imports: [
    BandRoutingModule
  ],
  declarations: [
  ],
  providers: [
    BandService
  ]
})
export class BandsModule {}
