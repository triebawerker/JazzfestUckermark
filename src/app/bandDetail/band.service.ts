import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import { Band } from './band-detail.model';

import {AppComponent} from '../app.component';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BandService {

  constructor (private http: Http) {}

  getBands() { return {} }

  getBand(id: string) : Observable<any> {

    console.log("id", id);
           // ...using get request

     return this.http.get(AppComponent.apiHost + '/api/band/' + id)
                    // ...and calling .json() on the response to return data
                     .map((res:Response) => res.json())
                     //...errors if any
                     .catch((error:any) => Observable.throw( 'Server error'));
  }
}
