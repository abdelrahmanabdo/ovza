import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

/*
  This class has footer part :
  1- featured listing list
  2- currencies to display them in dropdown list in add listing
  3- Add listing
*/


@Injectable()
export class FeaturedProvider {
  // the server URL
  baseURL: string = 'http://ovza.com/oriented/public'

  constructor(public http: Http) {

  }

  /*
  This function retreive the featured list with its all data to be viewed
  @param  : -
  @output : list []
  */

  public get_featured_listings_list() {
// return new Observable((observer) => {
//   this.http.get(this.baseURL+'/featured_lists/get').subscribe((data) => {
// observer.next("an")) ;
//   })
// });


  }


  public get_currencies_list() {

    return this.http.get(this.baseURL + '/currency/getAll').map((res: Response) => {
      res.json()
    })

  }


  // End of featured listing function

  /*
This function retreive the popular search list

@param  : -
@output : list []
*/

  public add_feature_listings(editedList) {

    /*
      This is the data in database which the list is consists of

     id, userid, listaddress1, listaddress2, zipcode, lattitude, longitude, aboutlisting, beds, bathrooms, list_price,
     pricelistflag, availablestatus, videolink, type, year_built, modification_on, lotsize, homesize, forclosure,
     permonthpayment, rental_money, rental_form, minimum_lease, otherthingsnote, security_charge, list_properties,
     listeddate, liststartdate, listenddate, lotsizetype, stories, list_status, featured_status, featured_expiry,
     owner_type, listpayment_status, admin_activation_status, property_type, currency, maxprice, unitscount, PriceState

    '112', '0', 'Portland,OR,United States', '23', '12581', '45.52306220000001', '-122.67648150000002', 'very good one ',
    '3', '1.5', '200000000', '0', '1', '', '1', '1853', '1852', '223', '224', '1', '3000000', NULL, NULL, '3', 'no ', '3000',
    '39,19,10,16,24,26', '0', '0', '0', '1', '1', '-1', '0', '0', '1', '0', '0', '2', '2', '', '', '0'

   */


    let headers = new Headers();
    let URLSearchParam = new URLSearchParams()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //Append email and password to url seach parameters to send it to server

    URLSearchParam.append('userid', editedList['userid'])                // usder id
    URLSearchParam.append('listaddress1', editedList['listaddress1'])          // city
    URLSearchParam.append('listaddress2', editedList['listaddress2'])          // address of property
    URLSearchParam.append('zipcode', editedList['zipcode'])               // post code of city
    URLSearchParam.append('lattitude', editedList['lattitude'])             // lattiude
    URLSearchParam.append('longitude', editedList['longitude'])             // longitude
    URLSearchParam.append('aboutlisting', editedList['aboutlisting'])          // about the property
    URLSearchParam.append('beds', editedList['beds'])                  // number of beds
    URLSearchParam.append('bathrooms', editedList['bathrooms'])             // number of bathrooms
    URLSearchParam.append('list_price', editedList['list_price'])            // the property price
    URLSearchParam.append('pricelistflag', editedList['pricelistflag'])        // 0 or 1 ' show or not'
    URLSearchParam.append('availablestatus', editedList['availablestatus'])    // 0 or 1 ' available or not '
    URLSearchParam.append('videolink', editedList['videolink'])             // link Of property's video
    URLSearchParam.append('year_built', editedList['year_built'])            // year built
    URLSearchParam.append('modification_on', editedList['modification_on'])
    URLSearchParam.append('lotsize', editedList['lotsize'])
    URLSearchParam.append('homesize', editedList['homesize'])
    URLSearchParam.append('forclosure', editedList['forclosure'])            // 1 or 2  '  yes or no '
    URLSearchParam.append('permonthpayment', editedList['permonthpayment'])
    URLSearchParam.append('rental_money', editedList['rental_money'])
    URLSearchParam.append('rental_form', editedList['rental_form'])
    URLSearchParam.append('minimum_lease', editedList['minimum_lease'])
    URLSearchParam.append('property_type', editedList['property_type'])
    URLSearchParam.append('currency', editedList['currency'])
    URLSearchParam.append('maxprice', editedList['maxprice'])
    URLSearchParam.append('PriceState', editedList['PriceState'])
    URLSearchParam.append('otherthingsnote', editedList['otherthingsnote'])
    URLSearchParam.append('list_properties', editedList['list_properties'])
    URLSearchParam.append('listeddate', editedList['listeddate'])
    URLSearchParam.append('liststartdate', editedList['liststartdate'])
    URLSearchParam.append('list_status', editedList['list_status'])


    let bodyOfsentData = URLSearchParam.toString()

    return this.http.post(this.baseURL + '/featured_lists/add', bodyOfsentData, {headers: headers}).map((res: Response) => {
      res.json()
    })

  }

  // End of popular search list function


  public edit_feature_listings(editedList) {

    /*
      This is the data in database which the list is consists of

     id, userid, listaddress1, listaddress2, zipcode, lattitude, longitude, aboutlisting, beds, bathrooms, list_price,
     pricelistflag, availablestatus, videolink, type, year_built, modification_on, lotsize, homesize, forclosure,
     permonthpayment, rental_money, rental_form, minimum_lease, otherthingsnote, security_charge, list_properties,
     listeddate, liststartdate, listenddate, lotsizetype, stories, list_status, featured_status, featured_expiry,
     owner_type, listpayment_status, admin_activation_status, property_type, currency, maxprice, unitscount, PriceState

    '112', '0', 'Portland,OR,United States', '23', '12581', '45.52306220000001', '-122.67648150000002', 'very good one ',
    '3', '1.5', '200000000', '0', '1', '', '1', '1853', '1852', '223', '224', '1', '3000000', NULL, NULL, '3', 'no ', '3000',
    '39,19,10,16,24,26', '0', '0', '0', '1', '1', '-1', '0', '0', '1', '0', '0', '2', '2', '', '', '0'

   */


    let headers = new Headers();
    let URLSearchParam = new URLSearchParams()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //Append email and password to url seach parameters to send it to server

    URLSearchParam.append('userid', editedList['userid'])                // usder id
    URLSearchParam.append('listaddress1', editedList['listaddress1'])          // city
    URLSearchParam.append('listaddress2', editedList['listaddress2'])          // address of property
    URLSearchParam.append('zipcode', editedList['zipcode'])               // post code of city
    URLSearchParam.append('lattitude', editedList['lattitude'])             // lattiude
    URLSearchParam.append('longitude', editedList['longitude'])             // longitude
    URLSearchParam.append('aboutlisting', editedList['aboutlisting'])          // about the property
    URLSearchParam.append('beds', editedList['beds'])                  // number of beds
    URLSearchParam.append('bathrooms', editedList['bathrooms'])             // number of bathrooms
    URLSearchParam.append('list_price', editedList['list_price'])            // the property price
    URLSearchParam.append('pricelistflag', editedList['pricelistflag'])        // 0 or 1 ' show or not'
    URLSearchParam.append('availablestatus', editedList['availablestatus'])    // 0 or 1 ' available or not '
    URLSearchParam.append('videolink', editedList['videolink'])             // link Of property's video
    URLSearchParam.append('year_built', editedList['year_built'])            // year built
    URLSearchParam.append('modification_on', editedList['modification_on'])
    URLSearchParam.append('lotsize', editedList['lotsize'])
    URLSearchParam.append('homesize', editedList['homesize'])
    URLSearchParam.append('forclosure', editedList['forclosure'])            // 1 or 2  '  yes or no '
    URLSearchParam.append('permonthpayment', editedList['permonthpayment'])
    URLSearchParam.append('rental_money', editedList['rental_money'])
    URLSearchParam.append('rental_form', editedList['rental_form'])
    URLSearchParam.append('minimum_lease', editedList['minimum_lease'])
    URLSearchParam.append('property_type', editedList['property_type'])
    URLSearchParam.append('currency', editedList['currency'])
    URLSearchParam.append('maxprice', editedList['maxprice'])
    URLSearchParam.append('PriceState', editedList['PriceState'])
    URLSearchParam.append('otherthingsnote', editedList['otherthingsnote'])
    URLSearchParam.append('list_properties', editedList['list_properties'])
    URLSearchParam.append('listeddate', editedList['listeddate'])
    URLSearchParam.append('liststartdate', editedList['liststartdate'])
    URLSearchParam.append('list_status', editedList['list_status'])


    let bodyOfsentData = URLSearchParam.toString()

    return this.http.post(this.baseURL + '/featured_lists/edit', bodyOfsentData, {headers: headers}).map((res: Response) => {
      res.json()
    })

  }


}
