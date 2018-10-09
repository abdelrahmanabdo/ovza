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
import {LoginPage} from "../login/login";

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  oldpass = false  ;
  type = localStorage.getItem('type');
  submitted2 = false;
  res;
  userdata = new FormGroup({
    oldpass: new FormControl(null, [Validators.required]),
    newpass: new FormControl(null, [Validators.required]),
    confpass: new FormControl(null, [Validators.required])
  })

  constructor(public alertCtrl : AlertController , public popover: PopoverController, public dash: DashboardProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

  save() {
    if (this.userdata.valid) {

      if(localStorage.getItem('password') == this.userdata.value.oldpass){
        this.oldpass = true  ;
        this.dash.changePassword(localStorage.getItem('userid'), this.userdata.value.newpass, this.userdata.value.oldpass).subscribe((data) => {
          this.res = data;
          this.res = this.res.replace(/\s/g, '');

          this.res = JSON.parse(this.res);
          this.res = this.res;
          console.log(this.res);
          if(this.res.status == 1) {
            let alert = this.alertCtrl.create({
              title: 'Success',
              subTitle: 'Your Password Has Been Changed',
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

                        this.navCtrl.setRoot(LoginPage);
                      });

                    return false;
                  }

                 }]
            });
            alert.present();

          }
        })
      }else{
        this.oldpass = false ;
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
