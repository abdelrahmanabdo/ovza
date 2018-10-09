import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {LoadingController} from "ionic-angular";

let loading;

/*
This class has home page functions :
 - retrieve residential list
 - retrieve commercial list
 - retrieve featured list
 - retrieve expired list
 - retrieve blocked list
 - retrieve incomplete list
 - retrieve for sell list
 - retrieve for rent list
*/

@Injectable()
export class SearchProvider {

  // the server URL
  baseURL: string = 'http://ovza.com/oriented/public'

  constructor(public loadingCtrl: LoadingController, public http: Http) {

  }

  loader(data) {

    if (data == 1) {
      loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
    } else {
      loading.dismiss()
    }


  }


  public search(Country, city, property_type) {
    return this.http.get(this.baseURL + '/search/' + Country + '/' + city + '/' + property_type)
      .map((res: Response) => {

        res.json()
      })

  }

  // This function retrieve residential list according to specific limit which is a param
  public get_home_residential_list() {
    this.loader(1);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/home/get/residential').subscribe((data) => {
        var res = data.text();
        this.loader(0);
        console.log(res);
        observer.next(res);
      })

    })

  }

  // This function retrieve commercial list according to specific limit which is a param
  public get_home_commercial_list() {
    this.loader(1);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/home/get/commercial').subscribe((data) => {
        var res = data.text();
        this.loader(0);
        console.log(data);
        observer.next(res);
      })

    });
  }

  // This function retrieve featured list according to specific limit which is a param
  public get_home_featured_list() {

    return this.http.get(this.baseURL + '/home/get/featured/').map((res: Response) => {
      res.json()
    })

  }

  // This function retrieve incomplete list according to specific limit which is a param
  public get_home_incomplete_list() {

    return this.http.get(this.baseURL + '/home/get/incomplete/').map((res: Response) => {
      res.json()
    })

  }

  // This function retrieve expired list according to specific limit which is a param
  public get_home_expired_list() {

    return this.http.get(this.baseURL + '/home/get/expired/').map((res: Response) => {
      res.json()
    })

  }

  // This function retrieve blocked list according to specific limit which is a param
  public get_home_blocked_list() {

    return this.http.get(this.baseURL + '/home/get/blocked/').map((res: Response) => {
      res.json()
    })

  }

  // This function retrieve for sell list according to specific limit which is a param
  public get_home_forSell_list() {

    return this.http.get(this.baseURL + '/home/get/forSell/').map((res: Response) => {
      res.json()
    })

  }

  // This function retrieve for rent list according to specific limit which is a param
  public get_home_forRent_list() {

    return this.http.get(this.baseURL + '/home/get/forRent/').map((res: Response) => {
      res.json()
    })

  }


}
