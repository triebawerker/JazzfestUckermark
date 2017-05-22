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
        {"name": "Dipl. Ing. Alexander Zimmermann", "link": "www.alezimm.de", "linkname":"www.alezimm.de", "img": "AlexanderZimmermann_120.png"},
        {"name": "enertrag", "link": "www.enertrag.com", "linkname":"www.enertrag.com", "img": "Enertrag_120.png"},
        {"name": "energosun", "link": "www.energosun.de", "linkname":"www.energosun.de", "img": "energosun_120.png"},
        {"name": "Uckermark Solartechnik", "link": "uckermark-solartechnik.de", "linkname":"www.uckermark-solartechnik.de", "img": "Solartechnik_120.png"},
        {"name": "Fa. Gerhard Eberwein Hydraulikservice", "link": "www.eberwein-hydraulik.de", "linkname":"www.eberwein-hydraulik.de", "img": "Schlosserei_120.jpg"},
        {"name": "Naturbauhof Prenzlau", "link": "www.naturbauhof-prenzlau.de", "linkname":"www.naturbauhof-prenzlau.de", "img": "Naturbauhof_120.png"}
      ],
      [
        {"name": "Gutshof Kraatz", "link": "www.gutshof-kraatz.de", "linkname":"www.gutshof-kraatz.de", "img": "GutshofKraatz_120.png"},
        {"name": "Hanf-Faser-Fabrik", "link": "www.hanffaser.de", "linkname":"www.hanffaser.de", "img": "Hanf-Faser-Fabrik_120.png"},
        {"name": "Lew Naturkost", "link": "www.lew-baeckerei.de", "linkname":"www.lew-baeckerei.de", "img": "Lew_120.png"},
        {"name": "Maik Schulz", "link": "www.tooltime24.de", "linkname":"www.tooltime24.de", "img": "MaschinenWerkzeuge_120.jpg"},
        {"name": "Buchhandlung32", "link": "www.buchhandlung32.de", "linkname":"www.buchhandlung32.de", "img": "buchhandlung32_120.png"},
        {"name": "", "link": "", "linkname":""}
      ]
    ]
    partners=[
          [
            {"name": "Ahoi", "link": "www.ahoi-kultur.de", "linkname":"www.ahoi-kultur.de", "img": "Ahoi_120.png"},
            {"name": "Wasserburg Gerswalde", "link": "www.gerswalder-wasserburg.de", "linkname":"www.gerswalder-wasserburg.de", "img": "WasserburgGerswalde_120.png"},
            {"name": "Klavier Atelier", "link": "www.klavieratelier.de", "linkname":"www.klavieratelier.de", "img": "KlavierAtelier_120.png"},
            {"name": "Gasthof zum grünen Baum", "link": "www.boitzenburger-landgasthof.de", "linkname":"www.boitzenburger-landgasthof.de", "img": "GasthofZumGruenenBaum_120.png"},
            {"name": "", "link": "", "linkname":""}
          ]
        ]
}
