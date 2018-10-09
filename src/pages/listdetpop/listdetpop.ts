import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ListdetpopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({

  templateUrl: 'listdetpop.html',
})
export class ListdetpopPage {
  type = localStorage.getItem('type');

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewctrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListdetpopPage');
  }

  dissmiss() {
    this.viewctrl.dismiss();
  }
}
