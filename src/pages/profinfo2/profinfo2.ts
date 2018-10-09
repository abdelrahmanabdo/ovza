import {AgentlicPage} from './../agentlic/agentlic';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {DashboardProvider} from "../../providers/dashboard/dashboard";

/**
 * Generated class for the Profinfo2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profinfo2',
  templateUrl: 'profinfo2.html',
})
export class Profinfo2Page {
  type = localStorage.getItem('type');
  submitted = false;
  page1;
  profinfo = new FormGroup({
    about: new FormControl(null, [Validators.required]),
    website: new FormControl(null),
    blog: new FormControl(null),
    youtube: new FormControl(null),
    facebook: new FormControl(null),
    twitter: new FormControl(null),
    google: new FormControl(null),
    lang: new FormControl(null),
  })

  constructor(public dash: DashboardProvider, public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    this.page1 = this.navParams.get('page1');
    console.log(this.page1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profinfo2Page');
  }

  save() {
    console.log(this.profinfo.valid)

    if (this.profinfo.valid) {
      console.log(merge_options(this.page1, this.profinfo.value))
      this.dash.profinfo(localStorage.getItem('userid'), merge_options(this.page1, this.profinfo.value)).subscribe((data) => {
        console.log(data)
        this.navCtrl.push(AgentlicPage);
      })


    }

    function merge_options(obj1, obj2) {
      var obj3 = {};
      for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
      }
      for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
      }
      return obj3;
    }
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
