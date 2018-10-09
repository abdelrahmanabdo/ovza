import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Listdet1Page} from './../listdet1/listdet1';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {PopoverController} from 'ionic-angular' ;
import {HomePage} from './../home/home';
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';

import {Geolocation} from '@ionic-native/geolocation';
import {WishlistPage} from "../wishlist/wishlist";
import {DashboardProvider} from "../../providers/dashboard/dashboard";

let autocomplete ; ;let place  ;
declare var google ;
let obj ;

/**
 * Generated class for the ListpropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listprop',
  templateUrl: 'listprop.html',
})
export class ListpropPage {listdata1 = {value : {}} ;

  @ViewChild('input') private myinput: ElementRef;showrent ;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  submitted = false;
  type = localStorage.getItem('type');
  listdata = new FormGroup({
    ptype: new FormControl(null, [Validators.required]),
    plabel: new FormControl(null, [Validators.required]),
    pcity: new FormControl(null, [Validators.required]),
    paddress: new FormControl(null, [Validators.required]),
    ppostcode: new FormControl(null, [Validators.required]),
    minimum_lease : new FormControl(null),
    security_charge : new FormControl(null)

  }) ;


  constructor(public dash : DashboardProvider , private geolocation: Geolocation, public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

ngOnInit() {
  var options = {
    types: ['(cities)']

  };
  autocomplete = new google.maps.places.Autocomplete(this.myinput.nativeElement, options);
  let latLng = new google.maps.LatLng(-34.9290, 138.6010);
  let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  google.maps.event.trigger(this.mapElement.nativeElement, "resize");
  var marker = new google.maps.Marker({
    position: latLng,
    map: this.map,
    draggable:true,
    title:"Drag me!"
  });
  marker.addListener('dragend', (event)=> {
console.log(this.listdata.value)
    this.listdata1.value['lattitude'] = event.latLng.lat();
    this.listdata1.value['longitude'] = event.latLng.lng();

  });

  autocomplete.addListener('place_changed', ()=> {
    marker.setVisible(false);
    place = autocomplete.getPlace();
    this.listdata.controls.pcity.setValue(place.name) ;

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      this.map.fitBounds(place.geometry.viewport);
    } else {

      console.log(this.listdata.value) ;
      this.map.setCenter(place.geometry.location);
      this.map.setZoom(17);  // Why 17? Because it looks good.
    }
    this.listdata1.value['latitude'] = place.geometry.location.lat()
    this.listdata1.value['longtitude'] = place.geometry.location.lng() ;
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }


  });


}
  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.log('Error getting location');
    });
   // this.loadMap();
  }

  onsubmit() {
    console.log(this.listdata.valid)
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
   obj = merge_options(this.listdata1.value , this.listdata.value) ;
    console.log(obj) ;

      
    let data = {p: obj};
    if (this.listdata.valid)
      this.navCtrl.push(Listdet1Page, data);
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
        obj = merge_options(this.listdata1.value , this.listdata.value) ;
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

  // loadMap() {
  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //       target: {
  //         lat: 43.0741904,
  //         lng: -89.3809802
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   };
  //   this.map = this.googleMaps.create('map_canvas', mapOptions);
  //   this.map.one(GoogleMapsEvent.MAP_READY)
  //     .then(() => {
  //       console.log('Map is ready!');
  //     });
  //
  // }

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

  dosomething7 (value) {
    if(value == 1) {
      this.showrent = true ;

    }else {
      this.showrent = false ;
    }
}
}
