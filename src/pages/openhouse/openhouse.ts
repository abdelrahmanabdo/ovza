import {RoomAvailable1Page} from './../room-available1/room-available1';
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
let obj3 ;
let obj ;
let prev;
let counter;

/**
 * Generated class for the OpenhousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-openhouse',
  templateUrl: 'openhouse.html',
})
export class OpenhousePage {
  res;
  submitted = false;
  timeStarts;
  type = localStorage.getItem('type');
  date;
  timeend;
  myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    inline: true,
    showTodayBtn: false,

  };

  constructor(public dash: DashboardProvider
    , public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    prev = this.navParams.get('p');
    counter = this.navParams.get('c');
    if (counter == undefined) {
      counter = 0;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenhousePage');
  }

  onDateChanged(event: IMyDateModel) {
    console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    this.date = event.epoc;
  }

  room_available() {
     obj3 = {date: this.date, starttime: this.timeStarts, endtime: this.timeend};
    let data = {p: merge_options(obj3, prev)}
    if (this.timeend != undefined && this.timeStarts != undefined && this.date != undefined)
      this.navCtrl.push(RoomAvailable1Page, data);

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
        obj = merge_options(obj3, prev) ;
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

  addmore() {
    if (this.date && this.timeStarts && this.timeend) {
      if (counter != 3) {
        console.log(counter)
        counter++;
        let data = {p: counter};
        console.log(data);
        // this.dash.agentlic(localStorage.getItem('userid'), this.licinfo.value).subscribe((data) => {
        //   this.res = data;
        //   this.res = this.res.replace(/\s/g, '');
        //
        //   this.res = JSON.parse(this.res);
        //   if(this.res.status == 1) {
        //     this.navCtrl.push(OpenhousePage , data) ;
        //   }
        // });

      }

    }
  }
}
