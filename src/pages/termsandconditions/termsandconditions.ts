import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {WishlistPage} from "./../wishlist/wishlist";
import {EditprofilePage} from './../editprofile/editprofile';

let prev;

/**
 * Generated class for the TermsandconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-termsandconditions',
  templateUrl: 'termsandconditions.html',
})
export class TermsandconditionsPage {
  title = 'Terms';
  type = localStorage.getItem('type');
  isChecked = false;

  constructor(public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    prev = this.navParams.get('p');
    console.log(this.type);
  }

  ionViewDidLoad() {
    console.log(this.type);
    console.log('ionViewDidLoad TermsandconditionsPage');
  }

  openedit() {
    if (this.isChecked) {
      this.navCtrl.push(EditprofilePage, prev, {animate: false});
    }

  }

  opennav(page) {
    // if(page == 'home'){this.navCtrl.setRoot(HomePage)}
    // if(page == 'add'){  if (this.type == "agent") {
    //   this.navCtrl.setRoot(ListpropPage)}else {
    //   this.navCtrl.setRoot(WishlistPage)  ;
    // }}
    // if(page == 'chat'){this.navCtrl.setRoot(ChatPage)}
    // if(page == 'profile'){
    //   if(localStorage.getItem('type') == 'agent'){
    //     this.navCtrl.setRoot(ManagemyaccountPage)
    //   }else {
    //     this.navCtrl.setRoot(EditprofilePage) ;
    //   }
    // }
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
}
