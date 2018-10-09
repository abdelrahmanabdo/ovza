import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {ProfilePage} from "../profile/profile";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
import {LoginPage} from "../login/login";
import {ChangepasswordPage} from "../changepassword/changepassword";


/**
 * Generated class for the ManagemyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-managemyaccount',
  templateUrl: 'managemyaccount.html',
})
export class ManagemyaccountPage {
  type = localStorage.getItem('type');
  data;
  res;
  res2;
  photo
  constructor(public dash: DashboardProvider, public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dash.getDashboardData(localStorage.getItem('userid')).subscribe((data) => {
      this.res = data;
      this.res = this.res.replace(/\s/g, '');

      this.res = JSON.parse(this.res);
      this.data = this.res;
      console.log(this.data);
    })
    console.log('ionViewDidLoad ManagemyaccountPage');
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

  dosomething(value) {
    console.log(value)
    if (value == 1) {
      this.navCtrl.push(ProfilePage);
    } else if (value == 2) {
      this.navCtrl.push(EditprofilePage)
    }else if (value == 4) {
      this.navCtrl.push(ChangepasswordPage)
    } else {
      this.dash.deactivate().subscribe((data) => {
        this.res2 = data;
        this.res2 = this.res2.replace(/\s/g, '');
        console.log(data);
        this.res2 = JSON.parse(this.res2);
        if (this.res2.status == 1) {
          localStorage.removeItem('email')
          localStorage.removeItem('password')
          localStorage.removeItem('logged')
          this.navCtrl.setRoot(LoginPage);
        }
      })
    }
  }
}
