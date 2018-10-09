import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Loading, LoadingController} from "ionic-angular";
import {Observable} from "rxjs/Observable";

let loading = {};

/*
   This class has :
   1- get user's data to disaply it in dashboard according to his type (agent or seller or normal user)
   2- update profile
   3- change password
   4- get active lists for  user
   5- get inactive lists for  user
   6- get incomplete lists for  user
   7- get featured lists for  user

*/


@Injectable()
export class DashboardProvider {
  // the server URL
  baseURL: string = 'http://ovza.com/oriented/public'

  constructor(public loadingCtrl: LoadingController, public http: Http) {

  }

  loader(data , id) {

    if (data == 1) {
      var randomnum = Math.round(Math.random()*100000)
        
      loading[randomnum] = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading[randomnum].present();
      return randomnum ; 
    } else {
      loading[id].dismiss()
    }


  }

  /*
    This function retrive user's data to display it on dashboard page
    @param  : userid (int)
    @output : userdata[]
  */

  public getDashboardData(userid) {

    if (localStorage.getItem('type') == 'agent') {

      var loaderid = this.loader(1,0);
      return new Observable((observer) => {
        this.http.get(this.baseURL + '/dashboard/agent/' + userid).subscribe((data) => {
          this.loader(0,loaderid);
          observer.next(data.text());
        })

      })
    } else {
      var loaderid = this.loader(1,0);
      return new Observable((observer) => {
        this.http.get(this.baseURL + '/dashboard/user/' + userid).subscribe((data) => {
          this.loader(0,loaderid);
          observer.next(data.text());
        })

      })
    }
  }
  getwishlist(userid) {
    var loaderid = this.loader(1,0) ;
    return new Observable ((observer) => {
      this.http.get(this.baseURL+'/dashboard/get/wishlist/'+userid).subscribe((data) => {
        this.loader(0,loaderid) ;
        observer.next(data.text()) ;
      })

    })

  }
getlistdata (lid) {

  return new Observable ((observer) => {
    this.http.get(this.baseURL+'/dashboard/get/list/'+lid).subscribe((data) => {

      observer.next(data.text()) ;
    })

  })
}
addtowishlist (ownerid , userid , lid , wishname , wishstatus) {
  var loaderid = this.loader(1,0);
  return new Observable((observer) => {

    let headers = new Headers();
    let URLSearchParam = new URLSearchParams()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //Append first name , last name , email and profile picture to url seach parameters to send it to server
    URLSearchParam.append('ownerid',ownerid)
    URLSearchParam.append('userid', userid)
    URLSearchParam.append('listid', lid)
    URLSearchParam.append('wish_name', wishname)
    URLSearchParam.append('wish_status', wishstatus)
    let bodyOfsentData = URLSearchParam.toString();
    //send post request to server to check user data and return with the respons
    this.http.post(this.baseURL + '/dashboard/add/wishlist' , bodyOfsentData, {headers: headers}).subscribe((data) => {
      this.loader(0,loaderid);
      observer.next(data.text());
    })
  })
}
removewish(lid , userid) {
  var loaderid = this.loader(1,0);
  return new Observable((observer) => {
    this.http.get(this.baseURL + '/dashboard/delete/wishlist/' + userid +'/'+lid).subscribe((data) => {
      this.loader(0,loaderid);
      observer.next(data.text());
    })

  })
}
  public getdashboardataprofile(userid) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/user/' + userid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })
  }

  public getDashboardDataAgent(userid) {
    return this.http.get(this.baseURL + '/dashboard/lists/statistics/' + userid).map((data: Response) => data.text())
  }

  /*  end of get dashboard data */


  /*
    This function update user's data
    @param  : userid (int) , updateData[]
    @output : status 0 (fail) OR 1 (success)

  */
  public updateUserProfile(userid, updatedData) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {

      let headers = new Headers();
      let URLSearchParam = new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //Append first name , last name , email and profile picture to url seach parameters to send it to server
      URLSearchParam.append('firstName', updatedData['firstName'])
      URLSearchParam.append('lastName', updatedData['lastName'])
      URLSearchParam.append('email', updatedData['email'])
      URLSearchParam.append('profile_picture', updatedData['profile_picture'])
      let bodyOfsentData = URLSearchParam.toString()
      //send post request to server to check user data and return with the respons
      this.http.post(this.baseURL + '/dashboard/edit/' + userid, bodyOfsentData, {headers: headers}).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })
    })


  }

  public requestinfo(lid, agentid, userid) {
    var loaderid = this.loader(1,0)
    return new Observable((observer) => {

      let headers = new Headers();
      let URLSearchParam = new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //Append first name , last name , email and profile picture to url seach parameters to send it to server
      URLSearchParam.append('listid', lid)
      URLSearchParam.append('agentid', agentid)
      URLSearchParam.append('userid', userid)
      let bodyOfsentData = URLSearchParam.toString()
      //send post request to server to check user data and return with the respons
      this.http.post(this.baseURL + '/send/requestToAgent', bodyOfsentData, {headers: headers}).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })
    })
  }

  /* End of update user's profile function */


  /*
    This function take userid as a parameter plus the new password 'without encryption'
    @param : userid (int) , password (string)
    @output : status 0 (fail) OR 1 (success)
  */
  public deactivate() {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/auth/deactivate/' + localStorage.getItem('userid')).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })
  }

  public forgetpass(email) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/auth/forgetpassword/' + email).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })
  }

  public changePassword(userid, newPassword, old_password) {


    var loaderid = this.loader(1,0)
    return new Observable((observer) => {

      let headers = new Headers();
      let URLSearchParam = new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //Append first name , last name , email and profile picture to url seach parameters to send it to server
      URLSearchParam.append('userid', userid)
      URLSearchParam.append('new_password', newPassword)
      URLSearchParam.append('old_password', old_password)
      let bodyOfsentData = URLSearchParam.toString()
      //send post request to server to check user data and return with the respons
      this.http.post(this.baseURL + '/dashboard/changPassword', bodyOfsentData, {headers: headers}).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })
    })
  }

  viewstat(userid, lid) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/statistics/' + userid + lid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })
  }

  /* End of change user's password function */

  // retrieve active lists
  public getActivelist(userid) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/get/active/list/' + userid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })
  }

  // retrieve inactive lists
  public getInactivelist(userid) {

    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/get/inactive/list/' + userid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })

  }

  // retrieve incomplete lists
  public getIncompletelist(userid) {

    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/get/incomplete/list/' + userid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })
  }

  // retrieve featured lists
  public getFeaturedlist(userid) {
    return this.http.get(this.baseURL + '/dashboard/get/featured/list/' + userid).map((data: Response) => data.json())
  }

  public profinfo(userid, updatedData) {
    let headers = new Headers();
    let URLSearchParam = new URLSearchParams()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //Append first name , last name , email and profile picture to url seach parameters to send it to server
    URLSearchParam.append('business_name', updatedData['businessname'])
    URLSearchParam.append('business_address', updatedData['businessaddress'])
    URLSearchParam.append('phone_number', updatedData['phonenumber'])
    URLSearchParam.append('logo', updatedData['profile_picture'])
    URLSearchParam.append('phone_number', updatedData['email'])
    URLSearchParam.append('about', updatedData['about'])
    URLSearchParam.append('website', updatedData['website'])
    URLSearchParam.append('blog', updatedData['blog'])
    URLSearchParam.append('youtube', updatedData['youtube'])
    URLSearchParam.append('facebook', updatedData['facebook'])
    URLSearchParam.append('twitter', updatedData['twitter'])
    URLSearchParam.append('google', updatedData['google'])
    URLSearchParam.append('languages', updatedData['lang'])
    let bodyOfsentData = URLSearchParam.toString()
    //send post request to server to check user data and return with the respons
    return this.http.post(this.baseURL + '/professional_info/' + userid, bodyOfsentData, {headers: headers})
      .map((data: Response) => data.text())

  }

  public agentlic(userid, licdata) {
    let headers = new Headers();
    let URLSearchParam = new URLSearchParams()
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //Append user id and password to url seach parameters to send it to server
    URLSearchParam.append('license ', licdata['agentlic'])
    URLSearchParam.append('description', licdata['description'])
    let bodyOfsentData = URLSearchParam.toString()
    return this.http.post(this.baseURL + '/agent_license/' + userid, bodyOfsentData, {headers: headers})
      .map((data: Response) => data.text())

  }

  public remove_listing_featured(lid) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/delete/featured/list/' + lid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })

  }

  public remove_listing_active(lid) {
    console.log(lid)
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/delete/active/list/' + lid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })

  }

  public remove_listing_inactive(lid) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/delete/inactive/list/' + lid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })

  }

  public remove_listing_incomplete(lid) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/delete/incomplete/list/' + lid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })

  }

  search(country, city, ptype) {

    var loaderid = this.loader(1,0)
    return new Observable((observer) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      if (city == undefined) {
        this.http.post(this.baseURL + '/search/' + country + '/' + ptype, {headers: headers}).subscribe((data) => {
          this.loader(0,loaderid);
          observer.next(data.text());
        })
      } else {
        this.http.post(this.baseURL + '/search/' + country + '/' + city + '/' + ptype, {headers: headers}).subscribe((data) => {
          this.loader(0,loaderid);
          observer.next(data.text());
        })
      }
      //send post request to server to check user data and return with the respons

    })

  }

  getlistinfo(lid) {
    var loaderid = this.loader(1,0);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/dashboard/delete/featured/list/' + lid).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })

    })

  }

  addlisting (editedList) {
    var loaderid = this.loader(1,0)
    return new Observable((observer) => {

      let headers = new Headers();
      let URLSearchParam = new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
console.log(editedList) ;
      URLSearchParam.append('userid',parseInt(editedList['userid']))
      URLSearchParam.append('security_charge', editedList['security_charge'])
      URLSearchParam.append('type',parseInt(editedList['type']))  // usder id
      URLSearchParam.append('listaddress1', editedList['listaddress1'])          // city
      URLSearchParam.append('listaddress2', editedList['listaddress2'])          // address of property
      URLSearchParam.append('zipcode', parseInt(editedList['zipcode']))               // post code of city
      URLSearchParam.append('lattitude', parseInt(editedList['latitude']))             // lattiude
      URLSearchParam.append('longitude', parseInt(editedList['longtitude']))             // longitude
      URLSearchParam.append('aboutlisting', editedList['aboutlisting'])          // about the property
      URLSearchParam.append('beds',  parseInt(editedList['beds']))                  // number of beds
      URLSearchParam.append('bathrooms', parseInt(editedList['bathrooms']))             // number of bathrooms
      URLSearchParam.append('list_price', parseInt(editedList['list_price']))            // the property price
      URLSearchParam.append('pricelistflag', parseInt(editedList['pricelistflag']))        // 0 or 1 ' show or not'
      URLSearchParam.append('availablestatus', parseInt(editedList['availablestatus']))    // 0 or 1 ' available or not '
      URLSearchParam.append('videolink', editedList['videolink'])             // link Of property's video
      URLSearchParam.append('year_built', parseInt(editedList['year_built']))            // year built
      URLSearchParam.append('modification_on', parseInt(editedList['modification_on']))
      URLSearchParam.append('lotsize', editedList['lotsize'])
      URLSearchParam.append('homesize', editedList['homesize'])
      URLSearchParam.append('forclosure', parseInt(editedList['forclosure']))            // 1 or 2  '  yes or no '
      URLSearchParam.append('permonthpayment', editedList['permonthpayment'])
      URLSearchParam.append('rental_money', editedList['rental_money'])
      URLSearchParam.append('rental_form', editedList['rental_form'])
      URLSearchParam.append('minimum_lease', editedList['minimum_lease'])
      URLSearchParam.append('property_type', parseInt(editedList['property_type']))
      URLSearchParam.append('currency', editedList['currency'])
      URLSearchParam.append('maxprice', editedList['maxprice'])
      URLSearchParam.append('PriceState', parseInt(editedList['PriceState']))
      URLSearchParam.append('otherthingsnote', editedList['otherthingsnote'])
      URLSearchParam.append('list_properties', parseInt(editedList['list_properties']))
      URLSearchParam.append('listeddate', Math.round(Date.now()/1000))
      URLSearchParam.append('liststartdate', parseInt(editedList['liststartdate']))
      URLSearchParam.append('list_status', parseInt(editedList['list_status']))
      URLSearchParam.append('stories', parseInt(editedList['stories']))
      URLSearchParam.append('featured_status', parseInt(editedList['featured_status']))
      URLSearchParam.append('lotsizetype', parseInt(editedList['lotsizetype']))
      URLSearchParam.append('featured_expiry', parseInt(editedList['featured_expired']))
      //URLSearchParam.append('list_propertes', parseInt(editedList['list_propertes']))
      URLSearchParam.append('owner_type', parseInt(editedList['owner_type']))

      let bodyOfsentData = URLSearchParam.toString()
      console.log(URLSearchParam)  ;
      //send post request to server to check user data and return with the respons
      this.http.post(this.baseURL + '/featured_lists/add', bodyOfsentData, {headers: headers}).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })
    })
  }

  editlisting (editedList) {
    var loaderid = this.loader(1,0)
    return new Observable((observer) => {

      let headers = new Headers();
      let URLSearchParam = new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      URLSearchParam.append('listid', parseInt(editedList['lid']))

      URLSearchParam.append('userid', parseInt(editedList['userid']))
      URLSearchParam.append('security_charge', editedList['security_charge'])
      URLSearchParam.append('type',parseInt(editedList['type']))  // usder id
      URLSearchParam.append('listaddress1', editedList['listaddress1'])          // city
      URLSearchParam.append('listaddress2', editedList['listaddress2'])          // address of property
      URLSearchParam.append('zipcode', parseInt(editedList['zipcode']))               // post code of city
      URLSearchParam.append('lattitude', parseInt(editedList['latitude']))             // lattiude
      URLSearchParam.append('longitude', parseInt(editedList['longtitude']))             // longitude
      URLSearchParam.append('aboutlisting', editedList['aboutlisting'])          // about the property
      URLSearchParam.append('beds', parseInt(editedList['beds']))                  // number of beds
      URLSearchParam.append('bathrooms', parseInt(editedList['bathrooms']))             // number of bathrooms
      URLSearchParam.append('list_price', parseInt(editedList['list_price']))            // the property price
      URLSearchParam.append('pricelistflag', parseInt(editedList['pricelistflag']))        // 0 or 1 ' show or not'
      URLSearchParam.append('availablestatus', parseInt(editedList['availablestatus']))    // 0 or 1 ' available or not '
      URLSearchParam.append('videolink', editedList['videolink'])             // link Of property's video
      URLSearchParam.append('year_built', parseInt(editedList['year_built']))            // year built
      URLSearchParam.append('modification_on', parseInt(editedList['modification_on']))
      URLSearchParam.append('lotsize', editedList['lotsize'])
      URLSearchParam.append('homesize', editedList['homesize'])
      URLSearchParam.append('forclosure', parseInt(editedList['forclosure']))            // 1 or 2  '  yes or no '
      URLSearchParam.append('permonthpayment', editedList['permonthpayment'])
      URLSearchParam.append('rental_money', editedList['rental_money'])
      URLSearchParam.append('rental_form', editedList['rental_form'])
      URLSearchParam.append('minimum_lease', editedList['minimum_lease'])
      URLSearchParam.append('property_type', parseInt(editedList['property_type']))
      URLSearchParam.append('currency', editedList['currency'])
      URLSearchParam.append('maxprice', editedList['maxprice'])
      URLSearchParam.append('PriceState', parseInt(editedList['PriceState']))
      URLSearchParam.append('otherthingsnote', editedList['otherthingsnote'])
      URLSearchParam.append('list_properties', parseInt(editedList['list_properties']))
      URLSearchParam.append('listeddate', Math.round(Date.now()/1000))
      URLSearchParam.append('liststartdate', parseInt(editedList['liststartdate']))
      URLSearchParam.append('list_status', parseInt(editedList['list_status']))
      URLSearchParam.append('stories', parseInt(editedList['stories']))
      URLSearchParam.append('featured_status', parseInt(editedList['featured_status']))
      URLSearchParam.append('lotsizetype', parseInt(editedList['lotsizetype']))
      URLSearchParam.append('featured_expiry', parseInt(editedList['featured_expired']))
      //URLSearchParam.append('list_propertes', parseInt(editedList['list_propertes']))
      URLSearchParam.append('owner_type', parseInt(editedList['owner_type']))

      console.log(URLSearchParam) ;
      let bodyOfsentData = URLSearchParam.toString()
      //send post request to server to check user data and return with the respons
      this.http.post(this.baseURL + '/featured_lists/edit', bodyOfsentData, {headers: headers}).subscribe((data) => {
        this.loader(0,loaderid);
        observer.next(data.text());
      })
    })
  }

  getcurrency () {
    var loaderid = this.loader(1,0) ;
    return new Observable ((observer) => {
      this.http.get(this.baseURL+'/currency/getAll').subscribe((data) => {
        this.loader(0,loaderid) ;
        observer.next(data.text()) ;
      })

    })
  }
}
