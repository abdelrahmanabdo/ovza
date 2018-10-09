import {Profinfo1Page} from './../profinfo1/profinfo1';
import {TermsandconditionsPage} from './../termsandconditions/termsandconditions';
import {AuthProvider} from './../../providers/auth/auth';
import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {ForgetpassPage} from "../forgetpass/forgetpass";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  type = localStorage.getItem('type');
  submitted = false;
  Login = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })
  Register = new FormGroup({
    fname: new FormControl(null, [Validators.required]),
    lname: new FormControl(null, [Validators.required]),
    agentstatus: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    passwordconfirm: new FormControl(null, [Validators.required])
  })
  signup = false;
  login = true;

  constructor(public alertCtrl: AlertController, public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {

  }

  data;

  ionViewDidLoad() {

    // this.auth.mylogin();
  }

  openlogin() {
    this.signup = false;
    this.login = true;
  }

  openregister() {
    this.login = false;
    this.signup = true;

  }

  register() {

  }

  singin() {
    localStorage.setItem('type', "agent");

    if (this.Login.valid) {
      this.auth.login(this.Login.value).subscribe((data) => {
        this.data = data;
        this.data = this.data.replace(/\s/g, '');
        console.log(data);
        this.data = JSON.parse(this.data);

        if (this.data.status == 1) {
          localStorage.setItem('userid', this.data.userData.id)
          localStorage.setItem('photo' , this.data.userData.prof_image)
          if (this.data.agentstatus != undefined) {
            if (this.data.agentstatus == 2) {
              localStorage.setItem('type', 'agent')
            } else {
              localStorage.setItem('type', 'user')
            }
          }
          localStorage.setItem('logged', '1');
          localStorage.setItem('email', this.Login.value.email)
          localStorage.setItem('password', this.Login.value.password);
          if (localStorage.getItem('fav') == undefined) {
            localStorage.setItem('fav', "[]");
          }
          this.navCtrl.push(HomePage, {}, {animate: false});

        } else {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Email Or Password Is Incorrect',
            buttons: ['Ok']
          });
          alert.present();
        }

      })
    }

  }

  signup1() {

    if ((this.Register.value.password == this.Register.value.passwordconfirm) && this.Register.valid) {
      console.log(this.Register.value.agentstatus)

      this.auth.register(this.Register.value).subscribe((data) => {
        this.data = data;
        this.data = this.data.replace(/\s/g, '');
        console.log(data);
        this.data = JSON.parse(this.data);
        if (this.data.message == 0) {
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Email Address Entered Already Registered',
            buttons: ['Ok']
          });
          alert.present();
        } else {
          localStorage.setItem('userid', this.data.userData.id)
          localStorage.setItem('type', this.Register.value.agentstatus == 1 ? 'user' : 'agent')
          if (this.Register.value.agentstatus == '1') {
            let data = {p: this.Register.value}
            if (localStorage.getItem('fav') == undefined) {
              localStorage.setItem('fav', "[]");
            }
            this.navCtrl.push(TermsandconditionsPage, data);
          } else {
            if (localStorage.getItem('fav') == undefined) {
              localStorage.setItem('fav', "[]");
            }
            this.navCtrl.push(TermsandconditionsPage, data);
          }

        }
      })


    }

  }

  forgetpass() {
    this.navCtrl.push(ForgetpassPage);
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
