import {HomePage} from './../home/home';
import {Upgrade2featurePage} from './../upgrade2feature/upgrade2feature';
import {CompletepopPage} from './../completepop/completepop';
import {InactivepopPage} from './../inactivepop/inactivepop';
import {ActivepopPage} from './../activepop/activepop';
import {Component} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
import {PropdetPage} from "../propdet/propdet";

let inactiveflag = 0, incompleteflag = 0, activeflag = 0;

/**
 * Generated class for the ManaglistingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-managlisting',
  templateUrl: 'managlisting.html',
})
export class ManaglistingPage {
  type = localStorage.getItem('type');
  active = false;
  inactive = false;
  noactivelisting = false;
  noinactivelisting = false;
  noincompletelisting = false  ;
  incomplete = false;
  res;
  activedata;
  inactivedata;
  incompletedata;
  removed;

  constructor(public dash: DashboardProvider, public navCtrl: NavController, public navParams: NavParams, public popover: PopoverController) {
    console.log(activeflag)
    console.log(this.navCtrl.last().name)
    if (this.navCtrl.last().name == "NotificationPage") {
      this.open('incomplete')
    } else {
      this.open('active')

    }
  }

  ionViewDidLoad() {


  }

  openprop(data) {
    console.log(data)
    this.navCtrl.push(PropdetPage, {data});
  }

  open(segment) {
    if (segment == 'active') {
this.noinactivelisting = false  ;
this.noincompletelisting = false ;

      this.inactive = false;
      this.incomplete = false;
      this.active = true;

        this.dash.getActivelist(localStorage.getItem('userid')).subscribe((data) => {
          this.res = data;

          this.res = this.res.replace(/\s/g, '');

          //this.res = JSON.parse(this.res);

          if (JSON.parse(this.res).status != undefined) {
            this.noactivelisting = true;
            activeflag = 1;
          } else {
            this.noactivelisting = false;
            this.activedata = eval(this.res);


          }
        })


      console.log('ionViewDidLoad ManaglistingPage');


    }
    else if (segment == 'inactive') {
      this.noactivelisting = false  ;
      this.noincompletelisting = false  ;
      this.active = false;
      this.incomplete = false;
      this.inactive = true

        this.dash.getInactivelist(localStorage.getItem('userid')).subscribe((data) => {
          this.res = data;

          this.res = this.res.replace(/\s/g, '');

          //this.res = JSON.parse(this.res);

          if (JSON.parse(this.res).status != undefined) {
            this.noinactivelisting = true;
            inactiveflag = 1;
          } else {
            this.noinactivelisting = false;
            this.inactivedata = eval(this.res);


          }
        })


    }
    else {
      this.noactivelisting = false ;
      this.noinactivelisting  = false ;
      this.active = false;
      this.inactive = false;
      this.incomplete = true;

        this.dash.getIncompletelist(localStorage.getItem('userid')).subscribe((data) => {
          this.res = data;

          this.res = this.res.replace(/\s/g, '');

          //this.res = JSON.parse(this.res);


          console.log('fired')
          console.log(this.res)
          if (JSON.parse(this.res).status != undefined) {
            this.noincompletelisting = true;
            incompleteflag = 1;
          } else {
            console.log('show data')
            this.noincompletelisting = false;
            this.incompletedata = eval(this.res);


          }

        })

    }
  }

  openpopactive(p) {
    let data = {p: p};
    console.log(p);
    let pop = this.popover.create(ActivepopPage, data, {cssClass: "shrppop"});
    pop.present();
  }

  openpopinactive(p) {
    let data = {p: p};
    let pop = this.popover.create(InactivepopPage, data, {cssClass: "shrppop"});
    pop.present();
  }

  opencompletepop(p) {
    let data = {p: p};
    let pop = this.popover.create(CompletepopPage, data, {cssClass: "shrppop"});
    pop.present();
  }

  upgrade(p) {
    let data = {p: p}
    console.log(data);
    this.navCtrl.push(Upgrade2featurePage, data);
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
  removefeatured(prop) {
    this.dash.remove_listing_featured(prop.id).subscribe((data) => {
      console.log(data);
      this.removed = true;
    })
  }
}
