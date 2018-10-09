import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Listdet2Page} from './../listdet2/listdet2';
import {ListdetpopPage} from './../listdetpop/listdetpop';
import {Component} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
let obj ;
let prev;
let frommanage;

/**
 * Generated class for the Listdet1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listdet1',
  templateUrl: 'listdet1.html',
})
export class Listdet1Page {
  currencylist ;
  submitted = false;PriceState ;
  type = localStorage.getItem('type');
  listdata = new FormGroup({
    price: new FormControl(null, [Validators.required]),
    currency: new FormControl(null, [Validators.required]),
    availble: new FormControl(null, [Validators.required]),
    p1type: new FormControl(null, [Validators.required]),
    lottype: new FormControl(null, [Validators.required]),
    lotsize: new FormControl(null, [Validators.required]),
    psize: new FormControl(null, [Validators.required]),
    floors: new FormControl(null, [Validators.required]),
    foreclose: new FormControl(null),
    fireclosemonth: new FormControl(null),
    PriceState :  new FormControl(0, [Validators.required])

})

  constructor(public dash : DashboardProvider ,public navCtrl: NavController, public navParams: NavParams, public popover: PopoverController) {
    prev = this.navParams.get('p');
    frommanage = this.navParams.get('m');

  }

  ionViewDidLoad() {
    console.log(prev)

      this.dash.getcurrency().subscribe((data) => {
        this.currencylist = data ;
        this.currencylist = eval (this.currencylist);

      })

    console.log('ionViewDidLoad Listdet1Page');
    if (!frommanage) {
      let pop = this.popover.create(ListdetpopPage, {}, {cssClass: "shrppop"});
      pop.present();

    }else {

      this.listdata.controls.price.setValue(prev.list_price) ;
      //this.listdata.controls.currency.setValue(prev.currency)
        this.listdata.controls.availble.setValue(prev.availablestatus)
        //this.listdata.controls.p1type.setValue(prev.)
        this.listdata.controls.lottype.setValue(prev.lotsizetype)
        this.listdata.controls.lotsize.setValue(prev.lotsize)
        this.listdata.controls.psize.setValue(prev.homesize)
        //this.listdata.controls.floors.setValue(prev)
        this.listdata.controls.foreclose.setValue(prev.forclosure)
        this.listdata.controls.fireclosemonth.setValue(prev.permonthpayment)
      if(prev.PriceState) {
        this.listdata.controls.PriceState.setValue(1)
      }else{
        this.listdata.controls.PriceState.setValue(0)

      }
        //this.listdata.controls.PriceState.setValue(prev.PriceState)

    }

  }

  forward() {
    console.log(this.listdata.value);
    if (frommanage) {
      console.log('da5l');
      prev.frommanage = true;
    }
    if (this.listdata.valid) {

      let data = {p: merge_options(this.listdata.value, prev)}
      console.log(data)
      this.navCtrl.push(Listdet2Page, data);
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
