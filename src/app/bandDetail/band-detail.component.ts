import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { BandService }  from './band.service';
import { Band } from './band-detail.model';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subscription } from '../../../node_modules/rxjs/Subscription.d';

@Component({
  selector: 'band',
  templateUrl: './band-detail.html'
})

export class BandDetailComponent {

  public band: Band;
  public id: string;
  public test: string;
  private activatedRoute: ActivatedRoute;
  private subscription: Subscription;

  constructor(
    private _bandService: BandService,
    private route: ActivatedRoute,
    private router: Router,
    private service: BandService,
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getBand(this.id);
  }

  getBand(band_id: string) {
    this.service.getBand(band_id).subscribe(
      data => { this.band = data},
      err => console.error(err),
      () => console.log('done loading band', this.band),
    );
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
 }
}
