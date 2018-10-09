import {StatisticsPage} from './../statistics/statistics';
import {RemovelistingPage} from './../removelisting/removelisting';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Listdet1Page} from "../listdet1/listdet1";
import {ListnwpayPage} from "../listnwpay/listnwpay";

let propdata;

/**
 * Generated class for the InactivepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({

  templateUrl: 'inactivepop.html',
})
export class InactivepopPage {
  type = localStorage.getItem('type');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    propdata = this.navParams.get('p');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InactivepopPage');
  }

  remove() {
    let data = {p: propdata, type: "2"}
    this.navCtrl.push(RemovelistingPage, data);
  }

  statis() {
    let data = {p: propdata}
    this.navCtrl.push(StatisticsPage, data);
  }

  listnow() {
this.navCtrl.push(ListnwpayPage) ;
  }

  editlist() {
    let data = {p: propdata, m: {frommanage: true}};
    this.navCtrl.push(Listdet1Page, data);
  }
}
