import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import { Location } from './location-detail.model';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LocationService {

  constructor (private http: Http) {}

  getLocations() { return {} }

  getLocation(id: string) : Observable<any> {

    console.log("id", id);
           // ...using get request

     return this.http.get('http://localhost:3000/api/location/' + id)
                    // ...and calling .json() on the response to return data
                     .map((res:Response) => res.json())
                     //...errors if any
                     .catch((error:any) => Observable.throw( 'Server error'));
  }
}
