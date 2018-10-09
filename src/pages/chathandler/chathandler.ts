import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import { ListpropPage } from './../listprop/listprop';
import { HomePage } from './../home/home';
import { ChatPage } from './../chat/chat';

import { PopoverController} from 'ionic-angular' ;
import { MenuPage } from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import { EditprofilePage } from './../editprofile/editprofile';
import { ScrollToService } from 'ng2-scroll-to-el';
import {WishlistPage} from "../wishlist/wishlist";

/**
 * Generated class for the ChathandlerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chathandler',
  templateUrl: 'chathandler.html',
})
export class ChathandlerPage {type = localStorage.getItem('type') ;
//  msgs = [{msg:"skfd" , sender : "me"},{msg:"sdfv" , sender:"me"} , {msg : "sdfsdf" , sender:"he"}]
@ViewChild('scrollMe') private myScrollContainer: ElementRef;
userid ; receiver ='' ; firm_name ;chats = '';messages ;user ; chat_id;message
  constructor(public scrollService:ScrollToService , public popover : PopoverController  , private chat :ChatProvider,public navCtrl: NavController, public navParams: NavParams) {
// for(let i=0 ; i <50 ; i ++) {
//   this.msgs.push({msg : '1' , sender:'me'})
// }
this.receiver = this.navParams.get('userid')
this.firm_name = this.navParams.get('username')
this.user     = localStorage.getItem('userid')
this.startChatSession(this.user,this.receiver)
}
  ngAfterViewChecked() {

        this.scrollToBottom();

    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop =  this.myScrollContainer.nativeElement.scrollHeight ;
        } catch(err) { }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChathandlerPage');

  }
  opennav(page) {
    if(page == 'home'){this.navCtrl.setRoot(HomePage)}
    if(page == 'add') {
      if (this.type == "agent") {
        this.navCtrl.setRoot(ListpropPage)}else {
        this.navCtrl.setRoot(WishlistPage)  ;
      }

    }
    if(page == 'chat'){this.navCtrl.setRoot(ChatPage)}
    if(page == 'profile'){     if(localStorage.getItem('type') == 'agent'){
      this.navCtrl.setRoot(ManagemyaccountPage)
    }else {
      this.navCtrl.setRoot(EditprofilePage) ;
    }}
  }
  openmenu () {
    let pop = this.popover.create(MenuPage ,{} ,  {cssClass : "menupop"}) ;
    pop.present() ;

  }

  public startChatSession(sender,receiver){
    this.chat.start_chat_session(sender,receiver).subscribe(data => {    console.log(data) ;
            this.chat_id = data ;
            this.chat_id = eval(this.chat_id)
          console.log(this.chat_id);
          this.chat.get_chat_messages(this.chat_id).subscribe(data=>{
            console.log(data) ;
                this.messages = data ;
                this.messages = eval(this.messages)
              console.log(this.messages)
              this.message = ""
          })
         })

  }
  public sendChatMessage(message,chat_id = this.chat_id,receiver = this.receiver){
    //console.log(this.chat_id+ this.receiver+message)
    this.chat.send_chat_message(message,chat_id=this.chat_id,receiver=this.receiver).subscribe(res =>{ console.log(res)
    this.chat.get_chat_messages(this.chat_id).subscribe(data=>{
      console.log(data) ;
          this.messages = data ;
          this.messages = eval(this.messages)
        console.log(this.messages)
        this.message = ""
    })
   })


  }
  // public getChatMessages(chat_id = this.chat_id){
  //   //console.log(this.chat_id+ this.receiver+message)
  //   this.chat.get_chat_messages(chat_id).subscribe(res => console.log(res))
  // }
}
