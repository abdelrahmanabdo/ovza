import {RentvsbuyPage} from './../rentvsbuy/rentvsbuy';
import {MortcalPage} from './../mortcal/mortcal';
import {AffcalPage} from './../affcal/affcal';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the CalpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calpopup',
  templateUrl: 'calpopup.html',
})
export class CalpopupPage {
  type = localStorage.getItem('type');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalpopupPage');
  }

  affcal() {
    this.navCtrl.push(AffcalPage);
  }

  mortcal() {
    this.navCtrl.push(MortcalPage)
  }

  renvsbuy() {
    this.navCtrl.push(RentvsbuyPage);
  }
}
