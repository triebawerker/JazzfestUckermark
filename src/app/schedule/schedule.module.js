import { NgModule }       from '@angular/core';

import { ScheduleComponent }    from './band-detail.component';

import { FestivalService } from '../festival.service';

import { BandRoutingModule } from '../bandDetail/band-detail.routing';
import { BandDetailComponent } from '../bandDetail/band-detail.component';

@NgModule({
  imports: [
    CommonModule, BandRoutingModule
  ],
  declarations: [
    ScheduleComponent,
    BandDetailComponent
  ],
  providers: [

  ]
})
export class ScheduleModule {}
