import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import { Performance } from './performance.model';

import {AppComponent} from '../app.component';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ScheduleService {

    constructor (private http: Http) {}

    getSchedules() : Observable<any> {

             // ...using get request
             return this.http.get(AppComponent.apiHost + '/api/schedule')
                            // ...and calling .json() on the response to return data
                             .map((res:Response) => res.json())
                            //...errors if any
                             .catch((error:any) => Observable.throw(error.json() || 'Server error'));
    }

}
