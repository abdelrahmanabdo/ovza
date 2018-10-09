import {Component, ElementRef, ViewChild} from '@angular/core';
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
import {PropdetPage} from "../propdet/propdet";
let result ;
let country, city, ptype;
declare var google ;
/**
 * Generated class for the SearchresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html',
})
export class SearchresultPage {

  maxprice ;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  type = localStorage.getItem('type');
  temp;
  res = [] ;
  structure: any = {lower: 33, upper: 60};
city ;
  constructor(public dash: DashboardProvider, public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
    country = this.navParams.get('country');
    city = this.navParams.get('city');
    this.city  = this.navParams.get('city'); ;
    ptype = this.navParams.get('ptype');
    console.log(ptype);
    console.log(country);
  }

  ngOnInit() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    if (city == undefined) {
      console.log('yes')
    }
    this.dash.search(country, city, ptype).subscribe((data) => {
      console.log('data result', data)
      this.temp = data;
      this.temp = eval(this.temp);
      console.log(this.temp);
      this.res = this.temp;
      console.log(this.res)
      result = this.res ;
      if(result != "")
      this.maxprice = Math.max.apply(Math , result.map(function(o){return o.list_price}))
      for(let i = 0 ; i < this.res.length; i ++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.res[i].lattitude, this.res[i].longitude),
          map: this.map
        });
        marker.setMap(this.map);

      }
      var newlatlng = new google.maps.LatLng(this.res[0].lattitude , this.res[0].longitude)
      this.map.setCenter(newlatlng) ;

    })
  }

  openprop(data) {
    console.log(data)
    this.navCtrl.push(PropdetPage, {data});
  }

  ionViewDidLoad() {


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

  onChange(ev: any) {
    console.log('Changed', ev.value);
    this.res = [] ;
    for (let i = 0 ; i < result.length ; i ++) {
      if(parseInt(result[i].list_price) > ev.value.lower && parseInt(result[i].list_price) <= ev.value.upper) {
        this.res.push(result[i])
      }
    }
    console.log(this.res) ;
  }
}
