import {CalpopupPage} from './../calpopup/calpopup';
import {DashboardPage} from './../dashboard/dashboard';
import {ManaglistingPage} from './../managlisting/managlisting';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {SupportPage} from "../support/support";
import {WishlistPage} from "../wishlist/wishlist";
import {LoginPage} from "../login/login";
import {TransactionsPage} from "../transactions/transactions";
import {ChangepasswordPage} from "../changepassword/changepassword";

/**
 *
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({

  templateUrl: 'menu.html',
})
export class MenuPage {
  type = localStorage.getItem('type');
  userid = localStorage.getItem('userid') ;
  photo = localStorage.getItem('photo')
nophoto ;
  constructor(public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  // if(localStorage.getItem('photo') == undefined) {
  //   this.nophoto = true ;
  // }
  }

  opentrans() {
    this.navCtrl.push(TransactionsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  open(page) {
    if (page == 'listing') {
      this.navCtrl.push(ManaglistingPage);
    }
  }

  opendash() {
    this.navCtrl.push(DashboardPage);
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

  opencal() {
    let pop = this.popover.create(CalpopupPage, {}, {cssClass: "shrppop"});
    pop.present();
  }

  opensupport() {
    this.navCtrl.push(SupportPage);
  }

  logout() {
    localStorage.setItem('logged', "0");
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.navCtrl.pop()
    this.navCtrl.setRoot(LoginPage);

  }

  changepass() {
    this.navCtrl.push(ChangepasswordPage);
  }
}
