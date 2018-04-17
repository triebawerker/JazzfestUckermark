import { Component } from '@angular/core';
import { ScheduleService } from './schedule.service';
import { Observable } from 'rxjs/Rx';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.html'
})

export class ScheduleComponent {

  public schedules: Performance[];

  constructor(private _scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getSchedule();
  }

  getSchedule() {
    this._scheduleService.getSchedules().subscribe(
      data => { this.schedules = data},
      () => console.log('done loading schedule')
    );
  }
}
