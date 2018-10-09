import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CountriesProvider} from './../../providers/countries/countries';
import {SearchresultPage} from './../searchresult/searchresult';
import {Component, ElementRef, Pipe, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {ListpropPage} from "../listprop/listprop";


/**
 * Generated class for the SearchpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-searchpopup',
  templateUrl: 'searchpopup.html',

})

export class SearchpopupPage {
  temp;
  type = localStorage.getItem('type');
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
  })
  serviceobject = {type: '0'};
  com;
  res;disablecity = false ;
  type1;

  constructor(public alertCtrl : AlertController , public countries: CountriesProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.com = this.navParams.get('com');

    if (this.com) {
      this.type1 = "Commercial";

    } else {
      this.type1 = "Residential"
    }
  }

  ngOnChanges(changes) {
    console.log(changes);
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
      console.log(data.country) ;
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
    })
  }

  search(validity) {
    console.log(validity)
    var obj = {country: this.selectedcountry, city: this.selectedcity, ptype: this.com ? '2' : "1"}
    console.log(this.searchform.valid)
    if (this.searchform.value.country != 0 && this.searchform.value.city !=0 || this.searchform.value.country == "Dubai - United Arab Emirates" ) {
      this.navCtrl.push(SearchresultPage, obj);
    }else {

    }

  }

  settype(type) {
    this.serviceobject.type = type;
  }

  // dosomething(value) {
  //   console.log(this.searchform.value.country);
  //   this.selectedcountry = value;
  //   this.countries.getCitiesOfSpecficEnglishCountry(value).subscribe((data) => {
  //     console.log(data);
  //     this.citydata = data;
  //     this.citydata = eval(this.citydata)
  //     console.log(this.citydata)
  //   })
  // }


//   dosomething2(value) {
// console.log(this.searchform.value.city) ;
//     this.selectedcity = value;
//   }
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
}

