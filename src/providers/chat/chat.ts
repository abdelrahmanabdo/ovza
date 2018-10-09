import { Injectable } from '@angular/core';
import { Http,Response,Headers,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Loading, LoadingController} from "ionic-angular";
import {Observable} from "rxjs/Observable";
let loading ;

/*
  This class has :
  1- chat functions which include starting chat session and ending it , send messages
*/


@Injectable()
export class ChatProvider {
  // the server URL
  baseURL :string = 'http://ovza.com/oriented/public'

  constructor(public http: Http,public loadingCtrl : LoadingController ) {

  }

  // This function start the session between sender and reciever
  public start_chat_session(sender,receiver)
  {
    return new Observable((observer) => {
      this.loader(1) ;

      let headers = new Headers();
      let URLSearchParam= new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //Append the reciever id and sender id  to url seach parameters to send it to server

      URLSearchParam.append('chatfriend_id' ,receiver)                // reciever id
      URLSearchParam.append('chat_sender_id' ,sender)                // usder id

      let bodyOfsentData = URLSearchParam.toString()
      this.http.post(this.baseURL+'/chat/startchatsession' , bodyOfsentData,{headers:headers}).subscribe((data) => {
        this.loader(0) ;
        observer.next(data.text());
      })
    })


    }
      // Start chat's session function end


      // This function start the session between sender and reciever
  public end_chat_session(chat_id,userid)
  {
    return new Observable((observer) => {
      this.loader(1) ;

      let headers = new Headers();
      let URLSearchParam= new URLSearchParams()
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //Append the reciever id and sender id  to url seach parameters to send it to server
      URLSearchParam.append('chat_id' ,chat_id)                // chat id
      URLSearchParam.append('user_id' ,userid)                // usder id

      let bodyOfsentData = URLSearchParam.toString()
      this.http.post(this.baseURL+'/chat/endchatsession' , bodyOfsentData,{headers:headers}).subscribe((data) => {
        this.loader(0) ;
        observer.next(data.text());
      })
    })


    }
    // End chat's session function End


      // This function send messages between sender and reciever

    public send_chat_message(message,chat_id,receiver)
    {
      return new Observable((observer) => {
        this.loader(1) ;
        let headers        = new Headers();
        let URLSearchParam = new URLSearchParams()
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //Append the reciever id , chat id  and message to url seach parameters to send it to server

        URLSearchParam.append('receiver' ,receiver  )                // reciever id
        URLSearchParam.append('to'  , chat_id   )                       // chat id
        URLSearchParam.append('message'  ,message   )                  // message

        let bodyOfsentData = URLSearchParam.toString()
        this.http.post(this.baseURL+'/chat/send',bodyOfsentData,{headers:headers}).subscribe((data) => {
          this.loader(0) ;
          observer.next(data.text());
        })
      })


      }

      public get_chat_messages(chat_id)
      {
        return new Observable((observer) => {
          let headers        = new Headers();
          let URLSearchParam = new URLSearchParams()
          headers.append('Content-Type', 'application/x-www-form-urlencoded');
          URLSearchParam.append('chat_id' ,chat_id  )                // reciever id
          let bodyOfsentData = URLSearchParam.toString()
          this.http.post(this.baseURL+'/chat/get/messages',bodyOfsentData,{headers:headers}).subscribe((data) => {
            observer.next(data.text());
          })
         })
      }


      // End send message function End
      loader (data) {

        if(data ==1){
          loading = this.loadingCtrl.create({
            content: 'Please wait...',

          });

          loading.present();
        }else{
          loading.dismiss()}


      }

}
