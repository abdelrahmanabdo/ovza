import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {HomePage} from "../home/home";
import {ListpropPage} from "../listprop/listprop";
import {WishlistPage} from "../wishlist/wishlist";
import {ChatPage} from "../chat/chat";
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from "../editprofile/editprofile";

/**
/**
 * Generated class for the PaymentResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-result',
  templateUrl: 'payment-result.html',
})
export class PaymentResultPage {
  paymentResult ;
  type = localStorage.getItem('type');
  constructor(public popover: PopoverController,
    public navCtrl: NavController, public navParams: NavParams) {
      this.paymentResult = this.navParams.get('payment_result');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentResultPage');
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
