import { NgModule }       from '@angular/core';

import { LocationService } from './location.service';

import { LocationRoutingModule } from './location-detail.routing';

@NgModule({
  imports: [
    LocationRoutingModule
  ],
  declarations: [
  ],
  providers: [
    LocationService
  ]
})
export class LocationModule {}
