import {LoginPage} from './../pages/login/login';
import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';let token ;
// import { Keyboard } from '@ionic-native/keyboard';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';


import {AuthProvider} from "../providers/auth/auth";
import {HomePage} from "../pages/home/home";
import {AgentlicPage} from "../pages/agentlic/agentlic";
import {OpenhousePage} from "../pages/openhouse/openhouse";
import {ChatPage} from "../pages/chat/chat";
import {RoomAvailable1Page} from "../pages/room-available1/room-available1";
import {UploadPhotosPage} from "../pages/upload-photos/upload-photos";
import {WishlistPage} from "../pages/wishlist/wishlist";
import {isPlatformBrowser} from "@angular/common";
declare var firebase ;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  res;

  constructor( private push: Push , public auth: AuthProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    platform.ready().then(() => {


    this.authentication();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if(platform.is('ios')) {
          // this.keyboard.hideKeyboardAccessoryBar(false);
          console.log('yes ios ')
      }
    });

  }

  authentication() {
    console.log('da5l');
    if (localStorage.getItem('logged') != undefined) {

      if (localStorage.getItem('logged') == "1") {

        var email = localStorage.getItem('email');
        var password = localStorage.getItem('password');
        var obj = {email: email, password: password};
        this.auth.login(obj).subscribe((data) => {
          this.res = data;
          this.res = this.res.replace(/\s/g, '');
          console.log(data);
          this.res = JSON.parse(this.res);
          if (this.res.status == 1) {
            localStorage.setItem('userid', this.res.userData.id);
            console.log(this.res.agentstatus);
            this.res.agentstatus == 2 ? localStorage.setItem('type', 'agent') : localStorage.setItem('type', 'user')
            this.rootPage = HomePage;
            localStorage.setItem('photo' , this.res.userData.prof_image)
          } else {
            this.rootPage = LoginPage
          }
        })
      } else {
        this.rootPage = LoginPage;
      }
    }
    else {
      this.rootPage = LoginPage;
    }
  }
}
