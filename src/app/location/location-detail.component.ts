import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { LocationService }  from './location.service';
import { Location } from './location-detail.model';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subscription } from '../../../node_modules/rxjs/Subscription.d';

@Component({
  selector: 'location',
  templateUrl: './location-detail.html'
})

export class LocationDetailComponent {

  public location: Location;
  public id: string;
  public test: string;
  private activatedRoute: ActivatedRoute;
  private subscription: Subscription;

  constructor(
    private _locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router,
    private service: LocationService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getLocation(this.id);
  }

  getLocation(location_id: string) {
    this.service.getLocation(location_id).subscribe(
      data => { this.location = data},
      err => console.error(err),
      () => console.log('done loading band', this.location),
    );
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
 }
}
