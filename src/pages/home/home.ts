import {SearchProvider} from './../../providers/home/home';
import {ChatPage} from './../chat/chat';

import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CountriesProvider} from './../../providers/countries/countries';
import {SearchresultPage} from './../searchresult/searchresult';
//import { ElementRef, Pipe, ViewChild} from '@angular/core';

import {ListpropPage} from "../listprop/listprop";
import {MenuPage} from './../menu/menu';
//import {SearchpopupPage} from './../searchpopup/searchpopup';
import {Component} from '@angular/core';
import {AlertController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {PropdetPage} from "../propdet/propdet";
import {FeaturedProvider} from "../../providers/featured_listing/featured_listing";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
import {FeaturedListingPage} from "../featured-listing/featured-listing";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  shownocom;

  type = localStorage.getItem('type');
  commercial = false;
  resedntial = false;

  comdata;

  comloadedflag = 0;
  fav;
    temp;

///////////////////////////////////////////////////////vars
    submitted = false;
    countriesdata;
    citydata
    selectedItem;
    selectedcountry;
    selectedcity;
/////////////////////////////////////////////////////vars
    searchform = new FormGroup({
        country: new FormControl(0, [Validators.required , Validators.pattern(/[^0]/g)]),
        city: new FormControl(0, [Validators.required , Validators.pattern(/[^0]/g)])
    });
    serviceobject = {type: '0'};
    com = false ;
    res;disablecity = false ;
    type1;

  constructor(public popover : PopoverController , public alertCtrl : AlertController , public countries: CountriesProvider, public navCtrl: NavController, public navParams: NavParams) {
      this.resedntial = true;

  }

  ngAfterViewInit() {

  }

    ionViewDidLoad() {
        this.selectedItem = "0";
        console.log('ionViewDidLoad SearchpopupPage');
        if (this.com) {
            this.countries.getEnglishCommercialCountries().subscribe((data) => {
                this.temp = data;
                this.temp = eval(this.temp)
                this.countriesdata = this.temp;
                console.log(this.countriesdata)
                this.countrychange() ;

            })



        } else {
            this.countries.getEnglishResidentialCountries().subscribe((data) => {

                this.temp = data;
                this.temp = eval(this.temp)
                this.countriesdata = this.temp;
                this.countrychange() ;

            })
        }


    }
    countrychange () {
        this.searchform.valueChanges.subscribe((data) => {
            if(data.country != 0) {
                this.selectedcity = data.city;
                this.selectedcountry = data.country;
                this.countries.getCitiesOfSpecficEnglishCountry(data.country).subscribe((data) => {
                    console.log(data);
                    this.citydata = data;
                    this.citydata = eval(this.citydata)
                    console.log(this.citydata)
                    if(this.citydata == null) {
                        this.disablecity  = true ;
                    }else {
                        this.disablecity = false ;
                    }
                })
            }

        })
    }

    search(validity) {
        console.log(validity)
        var obj = {country: this.selectedcountry, city: this.selectedcity, ptype: this.com ? '2' : "1"}
        console.log(this.searchform.valid)
        if (this.searchform.value.country != 0 && this.searchform.value.city !=0 || this.searchform.value.country == "Dubai - United Arab Emirates" || this.citydata == null ) {
            this.navCtrl.push(SearchresultPage, obj);
        }else {

        }

    }

    settype(type) {
        this.serviceobject.type = type;
    }
    sell () {
        if(this.type == 'agent') {
            this.navCtrl.push(ListpropPage , {} , {animate :false})
        }else {
            let alert = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'You Should Be An agent To Add a New Listing',
                buttons: ['Ok']
            });
            alert.present();
        }
    }
  openresd() {
    this.commercial = false;
    this.resedntial = true;


  }

  opencommerc() {



    this.resedntial = false;
    this.commercial = true;

  }



  opensearchpop() {
   this.navCtrl.push(FeaturedListingPage) ;
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

  openlistprop() {
    this.navCtrl.push(ListpropPage, {}, {animate: false});
  }

  openchat() {
    this.navCtrl.setRoot(ChatPage, {}, {animate: false})
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

  openprop(data) {
    console.log(data)
    this.navCtrl.push(PropdetPage, {data});
  }

  // savetowish(p) {
  //   this.dash.addtowishlist(p.userid,localStorage.getItem('userid'),p.id,"",1).subscribe((data) => {
  //     let alert = this.alertCtrl.create({
  //       title: 'Done!',
  //       subTitle: 'You Have Added This List To Your Wishlist',
  //       buttons: ['Ok']
  //     });
  //     alert.present();
  //   })
  //   console.log(p);
  //   this.fav = localStorage.getItem("fav");
  //   this.fav = eval(this.fav);
  //   if (this.fav.indexOf(p.id) == -1)
  //     this.fav.push(p.id);
  //
  //   localStorage.setItem("fav", JSON.stringify(this.fav));
  //
  // }
}
