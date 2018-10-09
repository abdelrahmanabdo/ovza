import {Component} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ListpropPage} from "../listprop/listprop";
import {WishlistPage} from "../wishlist/wishlist";
import {ChatPage} from "../chat/chat";
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from "../editprofile/editprofile";
import {MenuPage} from "../menu/menu";
import {RequestinfoPage} from "../requestinfo/requestinfo";
import { ChathandlerPage } from '../chathandler/chathandler';

/**
 * Generated class for the PropdetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-propdet',
  templateUrl: 'propdet.html',
})
export class PropdetPage {
  acq = true ;acq1 = true ; acq3 = false  ;
  acq2 = false ;
  showdet = false;
  generalinfo = false;

  data;
  overview = true;
  photos;
  type = localStorage.getItem("type")
  userid ;
  constructor(public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data')
    this.data.listeddate = parseInt(this.data.listeddate) ;
    this.userid = localStorage.getItem('userid');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropdetPage');
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
  openchat(username,userid)
  {
    this.navCtrl.push(ChathandlerPage,{'username':username,'userid':userid});
  }
  reqinfo(ob) {
    let data = {p: ob};
    this.navCtrl.push(RequestinfoPage, data);
  }
   edittime (current , previous) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerWeek  = 7 * msPerDay ;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      return 'now';
    }

    else if (elapsed < msPerHour) {
      return Math.round(elapsed/msPerMinute) + ':minutes ago';
    }

    else if (elapsed < msPerDay ) {
      return Math.round(elapsed/msPerHour ) + ':hours ago';
    }
    else if (elapsed < msPerWeek) {
      return  Math.round(elapsed/msPerDay) + ':days ago';
    }
    else if (elapsed < msPerMonth) {
      return Math.round(elapsed/msPerWeek) + ':weeks ago';
    }



    else if (elapsed < msPerYear) {
      return   Math.round(elapsed/msPerMonth) + ':months ago';
    }

    else {
      return Math.round(elapsed/msPerYear ) + ':years ago';
    }
  }

}
