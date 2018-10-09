import {RoomAvailable3Page} from './../room-available3/room-available3';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";

let prev;

/**
 * Generated class for the RoomAvailable2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-room-available2',
  templateUrl: 'room-available2.html',
})
export class RoomAvailable2Page {
  submitted = false  ;
  type = localStorage.getItem('type');
  room = {};

  constructor(public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    prev = this.navParams.get('p');
    console.log(prev);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomAvailable2Page');
  }

  room_available() {
    console.log(this.room)
    let data = {p: merge_options(this.room, prev)};

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

    if (!isEmpty(this.room)) {
      if(checkfalse(this.room)){
        this.navCtrl.push(RoomAvailable3Page, data);
      }else{
        this.room = {} ;
      }

    }
    function checkfalse (objects)  {
      for(var key in objects) {

        var value = objects[key];
        if(value == true) {
          var trueflag =  true ;
        }
      }
      if(trueflag) {
        return true ;
      }else {

        return false  ;
      }
    }

    function isEmpty(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key))
          return false;
      }
      return true;
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
