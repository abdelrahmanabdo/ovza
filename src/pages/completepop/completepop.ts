import {RemovelistingPage} from './../removelisting/removelisting';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Listdet1Page} from "../listdet1/listdet1";

let propdata;

/**
 * Generated class for the CompletepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({

  templateUrl: 'completepop.html',
})
export class CompletepopPage {
  type = localStorage.getItem('type');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    propdata = this.navParams.get('p');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletepopPage');
  }

  remove() {
    let data = {p: propdata, type: "3"}
    this.navCtrl.push(RemovelistingPage, data);
  }

  editlist() {
    let data = {p: propdata, m: {frommanage: true}};
    this.navCtrl.push(Listdet1Page, data);
  }
}
