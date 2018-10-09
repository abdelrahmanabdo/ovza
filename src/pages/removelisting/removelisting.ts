import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {DashboardProvider} from "../../providers/dashboard/dashboard";

let propdata, type;

/**
 * Generated class for the RemovelistingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-removelisting',
  templateUrl: 'removelisting.html',
})
export class RemovelistingPage {
  showinput = false;
  type = localStorage.getItem('type');

  constructor(public alertCtrl : AlertController , public dash: DashboardProvider, public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    propdata = this.navParams.get('p');
    console.log(propdata)
    type = this.navParams.get('type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemovelistingPage');
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
    if (value == 1) {
      this.showinput = true;
    } else {
      this.showinput = false;
    }
  }

  remove() {
    if (type == "1") {
      this.dash.remove_listing_active(propdata.id.toString()).subscribe((data) => {
        console.log(data);
        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Your Listing Has Been Removed',
          buttons: [
            {
              text: 'Ok',
              handler: () =>
              {
                // user has clicked the alert button
                // begin the alert's dismiss transition
                let navTransition = alert.dismiss();

                // start some async method

                // once the async operation has completed
                // then run the next nav transition after the
                // first transition has finished animating out

                navTransition.then(() => {
                  localStorage.setItem('logged', "0");
                  localStorage.removeItem('email');
                  localStorage.removeItem('password');

                  this.navCtrl.setRoot(HomePage);
                });

                return false;
              }

            }]
        });
        alert.present();



      })
    } else if (type = "2") {
      this.dash.remove_listing_inactive(propdata.id.toString()).subscribe((data) => {
        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Your Listing Has Been Removed',
          buttons: [
            {
              text: 'Ok',
              handler: () =>
              {
                // user has clicked the alert button
                // begin the alert's dismiss transition
                let navTransition = alert.dismiss();

                // start some async method

                // once the async operation has completed
                // then run the next nav transition after the
                // first transition has finished animating out

                navTransition.then(() => {
                  localStorage.setItem('logged', "0");
                  localStorage.removeItem('email');
                  localStorage.removeItem('password');

                  this.navCtrl.setRoot(HomePage);
                });

                return false;
              }

            }]
        });
        alert.present();


      })
    }

    else {
      this.dash.remove_listing_incomplete(propdata.id.toString()).subscribe((data) => {
        console.log(data);
        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'Your Listing Has Been Removed',
          buttons: [
            {
              text: 'Ok',
              handler: () =>
              {
                // user has clicked the alert button
                // begin the alert's dismiss transition
                let navTransition = alert.dismiss();

                // start some async method

                // once the async operation has completed
                // then run the next nav transition after the
                // first transition has finished animating out

                navTransition.then(() => {
                  localStorage.setItem('logged', "0");
                  localStorage.removeItem('email');
                  localStorage.removeItem('password');

                  this.navCtrl.setRoot(HomePage);
                });

                return false;
              }

            }]
        });
        alert.present();



      })

    }

  }
}

