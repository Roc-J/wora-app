import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import { parseString } from 'xml2js'
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  films: Observable<any>;

  public posts: Object[] = []

  constructor(
    public http:    Http,
    public navCtrl: NavController,
  ) {

  }

  ngOnInit() {

    this.films = this.http.get('http://japi.juhe.cn/health_knowledge/categoryList?=&key=f00733530cda3adc4eae151152938946')
                          .map(res => res.json());
  }

  openDetails(film) {
    this.navCtrl.push(DetailPage, {film: film});
  }

}
