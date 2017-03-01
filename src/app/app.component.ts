import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  public static apiHost=environment.api_host
}
