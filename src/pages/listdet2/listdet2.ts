import {FormGroup, FormControl, Validators} from '@angular/forms';
import {OpenhousePage} from './../openhouse/openhouse';
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
import {DashboardProvider} from "../../providers/dashboard/dashboard";
let obj ;
let prev;

/**
 * Generated class for the Listdet2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listdet2',
  templateUrl: 'listdet2.html',
})
export class Listdet2Page {
  submitted = false;modmadein1 ;
  type = localStorage.getItem('type');
  listdata = new FormGroup({
    bedrooms: new FormControl(null, [Validators.required]),
    bathrooms: new FormControl(null, [Validators.required]),

    yearbuilt: new FormControl(null),
    modmadein: new FormControl(null),
    videourl: new FormControl(null),
    about: new FormControl(null, [Validators.required]),

  })

  constructor(public dash : DashboardProvider , public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    prev = this.navParams.get('p');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Listdet2Page');
    if(prev.frommanage) {
      this.listdata.controls.bedrooms.setValue(prev.beds)
        this.listdata.controls.bathrooms.setValue(prev.bathrooms)
       // this.listdata.controls.archmodel.setValue(prev.)
        this.listdata.controls.yearbuilt.setValue(prev.year_built)
        this.listdata.controls.modmadein.setValue(prev.modification_on)
        this.listdata.controls.videourl.setValue(prev.videolink)
        this.listdata.controls.about.setValue(prev.aboutlisting)

    }
  }

  openhouse() {
    console.log(this.listdata.value);

    let data = {p: merge_options(this.listdata.value, prev)}
    console.log(data) ;
    if (this.listdata.valid) {
      this.navCtrl.push(OpenhousePage, data, {animate: false})

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
    ionViewWillLeave () {
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
        obj = merge_options(prev, this.listdata.value) ;
        var obj2 = obj ;
        sendtoincomplete(obj2) ;
        function sendtoincomplete (obj2) {
            //remove
            rename2("availble", "availablestatus", obj2)
            rename2("bathrooms", "bathrooms", obj2)
            rename2("currency", "currency", obj2)
            rename2("date", "listeddate", obj2)
            //rename("endtime", "listenddate", data)
            rename2("fireclosemonth", "permonthpayment", obj2)
            rename2("floors", "forclosure", obj2)
            rename2("foreclose", "forclosure", obj2)
            rename2("lotsize", "lotsize", obj2)
            rename2("lottype", "lotsizetype", obj2)
            rename2("modmadein", "modification_on", obj2)
            rename2("paddress", "listaddress2", obj2)
            rename2("pcity", "listaddress1", obj2)
            rename2("plabel", "type", obj2)
            rename2("ppostcode", "zipcode", obj2)
            rename2("price", "list_price", obj2)
            rename2("psize", "homesize", obj2)
            rename2("ptype", "property_type", obj2)
            rename2("starttime", "liststartdate", obj2)
            rename2("videourl", "videolink", obj2)
            rename2("yearbuilt", "year_built", obj2)
            rename2("bedrooms", "beds", obj2)
            rename2("about", "aboutlisting", obj2)
            obj2["userid"] = localStorage.getItem('userid');

            obj2["maxprice"] = obj2["price"] ;
            if(obj2['latitude'] == undefined) {
                obj2['latitude'] = null  ;
                obj2['longtitude'] = null  ;
            }
            obj2["liststartdate"] = null ;
            obj2["pricelistflag"] = null ;
            obj2['otherthingsnote'] = null ;
            obj2['stories'] = null ;
            console.log(obj2['list_status'])
            if( obj2['list_status'] == undefined){
                obj2['list_status'] = -1 ;
            }

            obj2['featured_status'] = null ;
            obj2['featured_expired'] = null ;
            obj2['list_properties'] = null ;
            obj2['owner_type'] = null ;
            if(obj2['PriceState'] == true) {
                obj2['PriceState'] = 1 ;
            }else {obj2['PriceState'] = 0}
            settozero(obj2) ;


        }
        function rename2(old_key, new_key, obj) {
            if (obj[old_key] != undefined) {
                if (new_key != "") {
                    if (old_key !== new_key) {
                        Object.defineProperty(obj, new_key,
                            Object.getOwnPropertyDescriptor(obj, old_key));
                        delete obj[old_key];
                    }
                }
            }else{
                obj[new_key] = null ;
            }
        }
        function settozero (obj){
            for (var key in obj) {
                if(obj[key]==null){
                    obj[key] = 0 ;
                }
            }
        }
        console.log(obj2) ;
        this.dash.addlisting(obj2).subscribe((data)=> {

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
