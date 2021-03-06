import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleService } from './schedule/schedule.service';
import { BandService } from './bandDetail/band.service';
import { LocationService } from './location/location.service'

import { AppComponent } from './app.component';
import { AboutComponent }  from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BandDetailComponent } from './bandDetail/band-detail.component';
import { LocationDetailComponent } from './location/location-detail.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NaviComponent } from './navi/navi.component';
import { HomeComponent } from './home/home.component';
import { SponsorComponent } from './sponsor/sponsor.component';

import { LOCALE_ID } from '@angular/core';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'price', component: PriceComponent },
  { path: 'band/:id', component: BandDetailComponent },
  { path: 'location/:id', component: LocationDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent, AboutComponent, PriceComponent, ScheduleComponent, BandDetailComponent, LocationDetailComponent, FooterComponent, HeaderComponent, NaviComponent, HomeComponent, SponsorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ScheduleService,
    BandService,
    LocationService,
    { provide: LOCALE_ID, useValue: "de-DE" }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
