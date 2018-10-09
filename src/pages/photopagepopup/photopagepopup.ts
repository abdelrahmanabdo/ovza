import {ListnwpayPage} from './../listnwpay/listnwpay';
import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {DashboardProvider} from "../../providers/dashboard/dashboard";
import {ManaglistingPage} from "../managlisting/managlisting";
import {HomePage} from "../home/home";
let data ;

/**
 * Generated class for the PhotopagepopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-photopagepopup',
  templateUrl: 'photopagepopup.html',
})
export class PhotopagepopupPage {
  type = localStorage.getItem('type');

  constructor(public alertCtrl : AlertController  , public dash:DashboardProvider , public navCtrl: NavController, public navParams: NavParams) {

    data = this.navParams.get('p') ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotopagepopupPage');
  }

  paynow() {
    data.list_status = 2 ;
    if (data.frommanage) {
      rename("id", "lid", data);

      this.dash.editlisting(data).subscribe((data) => {
        let alert = this.alertCtrl.create({
          title: 'Alert',
          subTitle: 'Your Changes Has Been Added',
            buttons: [{text : "Ok" , handler: () => {
                this.navCtrl.push(ListnwpayPage);
            }}]
        });
        alert.present();
      })
    }else {
      this.dash.addlisting(data).subscribe((data)=> {
        let alert = this.alertCtrl.create({
          title: 'Alert',
          subTitle: 'You Successfully Added A List',
            buttons: [{text : "Ok" , handler: () => {
                this.navCtrl.push(ListnwpayPage);
            }}]
        });
        alert.present();
      })
    }
    function rename(old_key, new_key, obj) {
      if (obj[old_key] != undefined) {
        if (new_key != "") {
          if (old_key !== new_key) {
            Object.defineProperty(obj, new_key,
              Object.getOwnPropertyDescriptor(obj, old_key));
            delete obj[old_key];
          }
        }
      }
    }

  }
  saveforlater() {
    data.list_status = 2 ;
    if (data.frommanage) {
      rename("id", "lid", data);

      this.dash.editlisting(data).subscribe((data) => {
        let alert = this.alertCtrl.create({
          title: 'Alert',
          subTitle: 'Your Changes Has Been Added',
            buttons: [{text : "Ok" , handler: () => {
                this.navCtrl.push(ManaglistingPage);
            }}]
        });
        alert.present();
      })
    }else {
      this.dash.addlisting(data).subscribe((data)=> {
        let alert = this.alertCtrl.create({
          title: 'Alert',
          subTitle: 'You Successfully Added A List',
          buttons: [{text : "Ok" , handler: () => {
              this.navCtrl.push(ManaglistingPage);
          }}]
        });
        alert.present();
      })
    }
    function rename(old_key, new_key, obj) {
      if (obj[old_key] != undefined) {
        if (new_key != "") {
          if (old_key !== new_key) {
            Object.defineProperty(obj, new_key,
              Object.getOwnPropertyDescriptor(obj, old_key));
            delete obj[old_key];
          }
        }
      }
    }


  }
}
