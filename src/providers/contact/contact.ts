import { Injectable } from '@angular/core';
import { Http,Response,Headers,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {LoadingController} from "ionic-angular";
let loading ;


@Injectable()
export class ContactProvider {
  // the server URL
  baseURL :string = 'http://ovza.com/oriented/public'

  constructor(public loadingCtrl : LoadingController ,public http: Http) {

  }

  public sendMail(email,name,subject,message)
  {

    this.loader(1) ;
    return new Observable((observer) => {
      let headers = new Headers();
      let URLSearchParam= new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      // email of sender
      URLSearchParam.append('email',email)
      //subject of email
      URLSearchParam.append('subject' ,subject)
      //content of email
      URLSearchParam.append('content' ,message)
      // name of sender
      URLSearchParam.append('name' ,name)
      
      let bodyOfsentData = URLSearchParam.toString()
  
      this.http.post(this.baseURL+'/contactUs',bodyOfsentData,{headers:headers}).subscribe((data) => {

        var res = data.text();
        this.loader(0)
        observer.next(eval(res)) ;
      })

    })

}
  
loader (data) {
  
      if(data ==1){
        loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
  
        loading.present();
      }else{
        loading.dismiss()}
  
  
    }
}