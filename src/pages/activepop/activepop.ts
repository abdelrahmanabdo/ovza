import {RemovelistingPage} from './../removelisting/removelisting';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Upgrade2featurePage} from "../upgrade2feature/upgrade2feature";
import {StatisticsPage} from "../statistics/statistics";
import {Listdet1Page} from "../listdet1/listdet1";

let propdata;

/**
 * Generated class for the ActivepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({

  templateUrl: 'activepop.html',
})
export class ActivepopPage {
  type = localStorage.getItem('type');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    propdata = this.navParams.get('p');
    console.log(propdata)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivepopPage');
  }

  remove() {
    let data = {p: propdata, type: "1"}
    this.navCtrl.push(RemovelistingPage, data);
  }

  upgrade() {
    let data = {p: propdata}
    console.log(data);
    this.navCtrl.push(Upgrade2featurePage
      , data);
  }

  unlist() {

  }

  viewstat() {
    let data = {p: propdata}
    this.navCtrl.push(StatisticsPage, data);
  }
  editlist() {
    let data = {p: propdata, m: {frommanage: true}};
    this.navCtrl.push(Listdet1Page, data);
  }

}
