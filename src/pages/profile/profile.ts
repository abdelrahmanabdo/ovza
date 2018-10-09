import {Component} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ListpropPage} from "../listprop/listprop";
import {WishlistPage} from "../wishlist/wishlist";
import {ChatPage} from "../chat/chat";
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from "../editprofile/editprofile";
import {MenuPage} from "../menu/menu";
import {DashboardProvider} from "../../providers/dashboard/dashboard";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  type = localStorage.getItem('type');
  res1;
  res2;

  constructor(public dash: DashboardProvider, public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dash.getDashboardData(localStorage.getItem('userid')).subscribe((data) => {
      this.res1 = data;
      this.res1 = this.res1.replace(/\s/g, '');
      console.log(data);
      this.res1 = JSON.parse(this.res1);
      this.dash.getdashboardataprofile(localStorage.getItem('userid')).subscribe((data) => {
        this.res2 = data;
        this.res2 = this.res2.replace(/\s/g, '');
        console.log(data);
        this.res2 = JSON.parse(this.res2);
      })
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
