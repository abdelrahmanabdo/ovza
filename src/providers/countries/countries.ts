import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {LoadingController} from "ionic-angular";

let loading;

/*
 class for countries provider which get different types of counties' data
*/

@Injectable()
export class CountriesProvider {
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

  /*
    function for retrieving arabic residential counties
      @param :
      @output : countries' names
  */
  public getArabicResidentialCountries() {
    return this.http.get(this.baseURL + '/r_arabicCountries').map((res: Response) => res.json()).catch((error: Response) => error.json())
  }

  // End of  arabic residential countries function


  /*
    function for retrieving english residential counties
      @param :
      @output : countries' names
  */
  public getEnglishResidentialCountries() {
    this.loader(1)
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/r_englishCountries').subscribe((data) => {
        var res = data.text()
        this.loader(0);
        observer.next(res);
      })

    })
  }

  // End of  English residential countries function


  /*
    function for retrieving arabic commercial counties
      @param :
      @output : countries' names
  */
  public getArabicCommercialCountries() {
    return this.http.get(this.baseURL + '/c_arabicCountries').map((res: Response) => res.json()).catch((error: Response) => error.json())
  }

  // End of  arabic commercial countries function


  /*
    function for retrieving english commercial counties
       @param :
       @output : countries' names
  */
  public getEnglishCommercialCountries() {
    this.loader(1)
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/c_englishCountries').subscribe((data) => {
        var res = data;
        this.loader(0)
        observer.next(res.text());
      })

    })
    //return json data of english commercial countries
  }

  // End of  English commercial countries function

  /*
    function for retrieving english cities of specific country
    @param : countryName
    @output : city data
  */
  public getCitiesOfSpecficEnglishCountry(Country) {

    this.loader(1);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/englishCities/' + Country).subscribe((data) => {
        this.loader(0);
        observer.next(data.text());
      })

    })
  }

  // End of  english cities  function


  /*
    function for retrieving arabic cities of specific country
       @param : countryName
       @output : city data
  */
  public getCitiesOfSpecficArabicCountry(Country) {
    //return json data of arabic commercial countries
    return this.http.get(this.baseURL + '/arabicCities/' + Country).map((res: Response) => res.json()).catch((error: Response) => error.json())
  }

  // End of  arabic cities  function

}
