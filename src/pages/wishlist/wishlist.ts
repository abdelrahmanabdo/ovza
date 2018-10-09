import {Component} from '@angular/core';
import {AlertController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ListpropPage} from "../listprop/listprop";
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from "../editprofile/editprofile";
import {ChatPage} from "../chat/chat";

import {MenuPage} from "../menu/menu";
import {DashboardProvider} from "../../providers/dashboard/dashboard";

/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  type = localStorage.getItem('type');
favs  ;data ;nolist = true ;data1 = [] ; nodata = false   ;res;
  constructor(public alertCtrl : AlertController , public dash:DashboardProvider , public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dash.getwishlist(localStorage.getItem('userid')).subscribe((data) => {
      this.data = data;
      this.data = this.data.replace(/\s/g, '');
      console.log(data);
      this.data = JSON.parse(this.data);
      console.log(this.data);
      if(this.data.status == "Therearenowishlistlists"){
        this.nolist = true ;
      }else {
        this.nolist = false ;
        for(let i = 0 ; i < this.data.length ; i ++) {
this.dash.getlistdata(this.data[i].lid).subscribe((data) => {
  this.res = data;
  this.res = this.res.replace(/\s/g, '');
  console.log(data);
  this.res = JSON.parse(this.res);
  console.log(this.res);
if(this.res.message != undefined) {
  this.nolist = false ;
  this.nodata = true ;
}else{
  this.data1.push(this.res) ;
  console.log(this.data1)
}

})
        }
      }
    })
    // console.log('ionViewDidLoad WishlistPage');
    // this.favs = localStorage.getItem('fav') ;
    // if(this.favs != undefined) {
    //   this.favs = eval(this.favs) ;
    //
    //   this.favs.forEach((val) => {
    //     console.lodashg(val) ;
    //     // this.dash.getlistinfo(val).subscribe((data) => {
    //     //
    //     // })
    //   })
    // }


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
  remove(p) {
    this.dash.removewish(p.id , localStorage.getItem('userid')).subscribe((data) => {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: 'This Listing Has Been Removed',
        buttons: ['Ok']
      });
      alert.present();
      this.data1 = this.data1.filter(function(el) {
        return el.id !== p.id;
      });
    })

  }

}
