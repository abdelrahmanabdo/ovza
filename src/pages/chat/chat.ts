import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactProvider } from './../../providers/contact/contact';
import { AgentsProvider } from './../../providers/agents/agents';
import { ChathandlerPage } from './../chathandler/chathandler';
import { ChatProvider } from '../../providers/chat/chat';
import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,ToastController} from 'ionic-angular';
import { MenuPage } from './../menu/menu';
import { ListpropPage } from './../listprop/listprop';
import { HomePage } from './../home/home';
import {PopoverController} from 'ionic-angular' ;import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import { EditprofilePage } from './../editprofile/editprofile';import {WishlistPage} from "../wishlist/wishlist";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {type = localStorage.getItem('type') ;
  email = new  FormGroup ( {
    email : new FormControl (null , [Validators.required , Validators.email ]),
    content : new FormControl (null , [Validators.required]) ,
    name : new FormControl (null , [Validators.required])
  })
  ovza = true ; chats = false ;res ;   userid ='' ;

  sendContact={'email':'','name':'','message':''};
    constructor(public contact : ContactProvider,public alert:AlertController ,public toast:ToastController , public agents : AgentsProvider, public popover : PopoverController ,public navCtrl: NavController, public navParams: NavParams) {
        this.userid= localStorage.getItem('userid');

  }

  ionViewDidLoad() {
    // this.agents.get_agents().subscribe((data =>  {
    //   console.log(data)  ;
    // }))
    console.log('ionViewDidLoad ChatPage');
  }
open(page) {
  if(page == 'ovza'){
    this.chats  = false ; this.ovza = true ; }else{

    this.ovza = false ; this.chats = true
  this.agents.get_agents().subscribe((data) => {
      this.res = data ;
      console.log(this.res)
  })
  }
}
openchat(p) {
  this.navCtrl.push(ChathandlerPage , {'userid': p.id ,'username' : p.firstname+' '+p.lastname}) ;
}
  opennav(page) {
    if(page == 'home'){this.navCtrl.setRoot(HomePage)}
    if(page == 'add'){  if (this.type == "agent") {
      this.navCtrl.setRoot(ListpropPage)}else {
      this.navCtrl.setRoot(WishlistPage)  ;
    }}
    if(page == 'chat'){}
    if(page == 'profile'){    if(localStorage.getItem('type') == 'agent'){
      this.navCtrl.setRoot(ManagemyaccountPage)
    }else {
      this.navCtrl.setRoot(EditprofilePage) ;
    }}
  }
  openmenu () {
    let pop = this.popover.create(MenuPage ,{} ,  {cssClass : "menupop"}) ;
    pop.present() ;

  }
  // send() {
  //   this.email.value.to = "" ;
  //   this.email.value.subject = "Ovza" ;
  //   this.contact.sendMail(this.email.value) ;
  // }
  public ovza_contact()
{
  let alert = this.alert.create({
    message:'Your message sent successfully thanks !',
    title : 'Ovza',
    buttons:[{
      text:'ok',
      role:'cancle'
    }]

  })

  if (this.email.valid) {
    
  this.contact.sendMail(this.sendContact.email,this.sendContact.name,'Ovza chat',this.sendContact.message).subscribe(res=>{
    alert.present()

  })
  this.sendContact.email == ''
  this.sendContact.name == ''
  this.sendContact.message == ''
}
}
}
