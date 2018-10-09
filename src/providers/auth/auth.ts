import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as $ from 'jquery' ;
import {Observable} from 'rxjs/Observable';
import {LoadingController} from "ionic-angular";

let loading;

@Injectable()
export class AuthProvider {
  // the server URL
  baseURL: string = 'http://ovza.com/oriented/public'

  constructor(public loadingCtrl: LoadingController, public http: Http) {
  }

  /*
    login function which get user data from View as an array 'userLoginData' then send it to server
      @param  : userData[] (email,password)
      @output :
  */
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

  public login(userLoginData) {
    this.loader(1);
    return new Observable((observer) => {
      let headers = new Headers();
      let URLSearchParam = new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //Append first name , last name , email , password and agent status  to url seach parameters to send it to server
      URLSearchParam.append('email', userLoginData['email'])
      URLSearchParam.append('password', userLoginData['password'])
      let bodyOfsentData = URLSearchParam.toString()
      //send post request to server to check user data and return with the respons
      this.http.post(this.baseURL + '/login', bodyOfsentData, {headers: headers}).subscribe((data) => {
        this.loader(0);
        observer.next(data.text())
      })
    })

  }

  // End of Login function
  mylogin() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://ovza.com/oriented/public/home/get/residential/",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "7ccdf8a0-c16d-b1a2-9a7d-f57d1458b562"
      }
    }

    $.ajax(settings).done(function (response) {


      var data = eval(response);
      console.log(data);
    });
  }


  /*
    registration function which get user's data from View as an array 'userRegistrationData' then put it into
      @param : userData[] (firstName , lastName,email,password,agentStatus)
      @output : countries' names
  */
  public register(userRegistrationData) {
    this.loader(1)
    return new Observable((observer) => {
      let headers = new Headers();
      let URLSearchParam = new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //Append first name , last name , email , password and agent status  to url seach parameters to send it to server
      URLSearchParam.append('fname', userRegistrationData['fname'])
      URLSearchParam.append('lname', userRegistrationData['lname'])
      URLSearchParam.append('email', userRegistrationData['email'])
      URLSearchParam.append('password', userRegistrationData['password'])
      URLSearchParam.append('agentstatus', userRegistrationData['agentstatus'])
      URLSearchParam.append(Date.now().toString(), userRegistrationData['regtime'])
      let bodyOfsentData = URLSearchParam.toString()
      //send post request to server to check user data and return with the respons
      this.http.post(this.baseURL + '/register', bodyOfsentData, {headers: headers}).subscribe((data) => {
        this.loader(0);
        observer.next(data.text())
      })
    })


  }

  // End of  register function


}
