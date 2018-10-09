import {Component} from '@angular/core';
import {AlertController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
import {MenuPage} from "../menu/menu";
import {HomePage} from "../home/home";
import {ListpropPage} from "../listprop/listprop";
import {WishlistPage} from "../wishlist/wishlist";
import {ChatPage} from "../chat/chat";
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from "../editprofile/editprofile";

let prev;

/**
 * Generated class for the RequestinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-requestinfo',
  templateUrl: 'requestinfo.html',
})
export class RequestinfoPage {
  type = localStorage.getItem('type');
  data = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    subject: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email]),
    content: new FormControl(null, [Validators.required])
  })
submitted = false  ;
  constructor(public popover: PopoverController, public alertCtrl: AlertController, public dash: DashboardProvider, public navCtrl: NavController, public navParams: NavParams) {
    prev = this.navParams.get('p');
  }

  ionViewDidLoad() {
    console.log(prev)
    console.log('ionViewDidLoad RequestinfoPage');
  }

  send() {
    if (this.data.valid) {
      if (localStorage.getItem('userid') != prev.userid) {
        this.dash.requestinfo(prev.id, prev.userid, localStorage.getItem('userid')).subscribe((data) => {
          let alert = this.alertCtrl.create({
            title: 'Done',
            subTitle: 'Request Sent',
            buttons: ['Ok']
          });
          alert.present();
        })
      } else {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'You Either Added This Listing If not Contact us At Info@ovza.com',
          buttons: ['Ok']
        });
        alert.present();
      }

    }
  }

  menuflag ;
  openmenu() {
    let pop = this.popover.create(MenuPage, {}, {cssClass: "menupop"});

    if(!this.menuflag){
      pop.present();
      this.menuflag = 1 ;
    }


    pop.onDidDismiss(() => {
      this.menuflag = 0 ;

    })

  }

  opennav(page) {
    if (page == 'home') {
      this.navCtrl.setRoot(HomePage)
    }
    if (page == 'add') {
      if (this.type == "agent") {
        this.navCtrl.setRoot(ListpropPage)
      } else {
        this.navCtrl.setRoot(WishlistPage);
      }
    }
    if (page == 'chat') {
      this.navCtrl.setRoot(ChatPage)
    }
    if (page == 'profile') {
      if (localStorage.getItem('type') == 'agent') {
        this.navCtrl.setRoot(ManagemyaccountPage)
      } else {
        this.navCtrl.setRoot(EditprofilePage);
      }
    }
  }
}
