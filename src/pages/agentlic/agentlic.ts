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
import {LoginPage} from "../login/login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DashboardProvider} from "../../providers/dashboard/dashboard";

let counter;

/**
 * Generated class for the AgentlicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-agentlic',
  templateUrl: 'agentlic.html',
})
export class AgentlicPage {
  res;
  type = localStorage.getItem('type');
  licinfo = new FormGroup({
    agentlic: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })

  constructor(public dash: DashboardProvider, public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    counter = this.navParams.get('p')
    if (counter == undefined) {
      counter = 0;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentlicPage');

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

  openhome() {
    if (!this.licinfo.valid) {
      this.navCtrl.setRoot(HomePage);
    } else {
      this.dash.agentlic(localStorage.getItem('userid'), this.licinfo.value).subscribe((data) => {
        this.res = data;
        this.res = this.res.replace(/\s/g, '');

        this.res = JSON.parse(this.res);
        if (this.res.status == 1) {
          this.navCtrl.setRoot(HomePage);
        }
      });
    }


  }

  addmore() {
    if (this.licinfo.valid) {
      if (counter != 3) {
        console.log(counter)
        counter++;
        let data = {p: counter};
        console.log(data);
        this.dash.agentlic(localStorage.getItem('userid'), this.licinfo.value).subscribe((data) => {
          this.res = data;
          this.res = this.res.replace(/\s/g, '');

          this.res = JSON.parse(this.res);
          if (this.res.status == 1) {
            this.navCtrl.push(AgentlicPage, data);
          }
        });

      }

    }
  }
}
