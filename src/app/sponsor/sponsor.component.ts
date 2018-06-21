import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Subscription } from '../../../node_modules/rxjs/Subscription.d';

@Component({
  selector: 'sponsor',
  templateUrl: './sponsor.html'
})

export class SponsorComponent {
sponsors =
    [
      [
        {"name": "Hanf-Faser-Fabrik", "link": "www.hanffaser.de", "linkname":"www.hanffaser.de", "img": "Hanf-Faser-Fabrik_120.png"},
        {"name": "Naturbauhof Prenzlau", "link": "www.naturbauhof-prenzlau.de", "linkname":"www.naturbauhof-prenzlau.de", "img": "Naturbauhof_120.png"},
        {"name": "Lew Naturkost", "link": "www.lew-baeckerei.de", "linkname":"www.lew-baeckerei.de", "img": "Lew_120.png"},
        {"name": "Fa. Gerhard Eberwein Hydraulikservice", "link": "www.eberwein-hydraulik.de", "linkname":"www.eberwein-hydraulik.de", "img": "Schlosserei_120.jpg"},
        {"name": "energosun", "link": "www.energosun.de", "linkname":"www.energosun.de", "img": "energosun_120.png"},
      ],
      [

        {"name": "Praxis für Akkupunktur und Chinesische Medizin", "link": "naturheilpraxis-peilstoecker.de/", "linkname":"www.naturheilpraxis-peilstoecker.de", "img": "PeggyPeilstoecker.jpg"},
        {"name": "Martin Völz", "link": "", "linkname":"", "img": "Elektromeister_350.png"},
        {"name": "Café Pina", "link": "cafe-pina.de", "linkname":"www.cafe-pina.de", "img": "CafePina.jpg"}
      ]
    ]
    partners=[
          [
            {"name": "Ahoi", "link": "www.ahoi-kultur.de", "linkname":"www.ahoi-kultur.de", "img": "Ahoi_120.png"},
            {"name": "Wasserburg Gerswalde", "link": "www.gerswalder-wasserburg.de", "linkname":"www.gerswalder-wasserburg.de", "img": "WasserburgGerswalde_120.png"},
            {"name": "Klavier Atelier", "link": "www.klavieratelier.de", "linkname":"www.klavieratelier.de", "img": "KlavierAtelier_120.png"},
            {"name": "uckermark-social-network", "link": "uckermark-social-network.org", "linkname":"www.uckermark-social-network.org", "img": "umsonet.jpg"}
          ]
        ]
}
