import { PaymentServiceProvider } from './../../providers/payment-service/payment-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MenuPage } from './../menu/menu';
import { HomePage } from "../home/home";
import { ListpropPage } from "../listprop/listprop";
import { WishlistPage } from "../wishlist/wishlist";
import { ChatPage } from "../chat/chat";
import { ManagemyaccountPage } from "../managemyaccount/managemyaccount";
import { EditprofilePage } from "../editprofile/editprofile";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ListnwpayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listnwpay',
  templateUrl: 'listnwpay.html',
  providers: [PaymentServiceProvider, InAppBrowser]
})
export class ListnwpayPage {
  value = 5;
  userid;
  pid;
  type = localStorage.getItem('type');
  payment_form: FormGroup;
  enablePay: boolean;
  result1;
  result2;
  paymentRes;
  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no',
    closebuttoncaption: 'Close',
    disallowoverscroll: 'no',
    toolbar: 'yes',
    enableViewportScale: 'no',
    allowInlineMediaPlayback: 'no',
    presentationstyle: 'pagesheet',
    fullscreen: 'yes',
  };

  constructor(public popover: PopoverController,
    public formBuilder: FormBuilder,
    private paymentService: PaymentServiceProvider,
    private inAppBrowser: InAppBrowser,
    private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.userid = this.navParams.get('userid');
    this.pid = this.navParams.get('pid');

    this.payment_form = this.formBuilder.group({
      cardNumber: new FormControl('', Validators.compose([
        Validators.maxLength(16),
        Validators.minLength(16),
        Validators.required,
      ])),
      cardHolderName: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      expiryDateMonth: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(2)
      ])),
      expiryDateYear: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(2)
      ])),

      CVV: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(3)
      ])),
    });
    this.enablePay = this.payment_form.valid;

  }

  validation_messages = {
    'cardNumber': [
      { type: 'required', message: 'card number is required.' },
      { type: 'minlength', message: 'Card number must be 16 number' },
      { type: 'maxlength', message: 'Card number must be 16 number' }

    ],
    'cardHolderName': [
      { type: 'required', message: 'card holder name is required.' },

    ],
    'expiryDateMonth' : [
      { type: 'required', message: 'month  is required.' },
      { type: 'maxlength', message: 'expiry month must be in 2 diget format' },

    ],
    'expiryDateYear' : [
      { type: 'required', message: 'year  is required.' },
      { type: 'maxlength', message: 'expiry year must be in 2 diget format' },

    ],
    'CVV': [
      { type: 'required', message: 'CVV  is required.' },
      { type: 'maxlength', message: 'CCV must be 3 numbers' },

    ]
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListnwpayPage');
  }

  menuflag;
  openmenu() {
    let pop = this.popover.create(MenuPage, {}, { cssClass: "menupop" });

    if (!this.menuflag) {
      pop.present();
      this.menuflag = 1;
    }

    pop.onDidDismiss(() => {
      this.menuflag = 0;

    })

  }

  payByPayfort = (event) => {
    let expiryDate = event.expiryDateMonth + event.expiryDateYear;
    console.log(expiryDate);
    let random = Math.floor(Math.random() * (1000 - 100 + 1)) + 100 ;
    this.paymentService.merchant_page_request(event.cardNumber, event.cardHolderName, event.CVV, expiryDate,random+ '-'  + this.userid + '-' + this.pid).subscribe((result) => {
      this.result1 = result;
      this.result1 = this.result1.replace(/\s/g, '');
      this.result1 = JSON.parse(this.result1);
      console.log(this.result1)
      if (this.result1.status) {
        this.paymentService.get_navigation_url(this.result1.token, random+ '-'  +this.userid + '-' + this.pid, 'test323@gsga.com', 'ali').subscribe((url) => {
          this.result2 = url;
          this.result2 = this.result2.replace(/\s/g, '');
          this.result2 = JSON.parse(this.result2);
          console.log(this.result2['3ds_url'])
          const browser = this.inAppBrowser.create(this.result2['3ds_url'], '_blank', this.options);
          browser.on('loadstart').subscribe(
            event => {
              if (event.url.includes('https://ovza.com')) {
                browser.close();
                console.log(event.url);
                if (event.url.includes('status=14')) {
                  this.navCtrl.push('PaymentResultPage', { "payment_result": 'Your transaction with us has completed successfully.' });
                } else {
                  this.navCtrl.push('PaymentResultPage', { "payment_result": 'Your payment has failed. Please contact admin' });
                }
              }
            });
        });
      } else {
        let toast = this.toast.create({
          message: "Sorry there is an error please try again",
          duration: 2000

        });
        toast.present();
      }



    });
  }
  opennav(page) {
    if (page == 'home') {
      this.navCtrl.setRoot(HomePage)
    }
    if (page == 'add') {
      if (this.type == "agent") {
        this.navCtrl.setRoot(ListpropPage)
      } else {
        this.navCtrl.setRoot(WishlistPage);
      }
    }
    if (page == 'chat') {
      this.navCtrl.setRoot(ChatPage)
    }
    if (page == 'profile') {
      if (localStorage.getItem('type') == 'agent') {
        this.navCtrl.setRoot(ManagemyaccountPage)
      } else {
        this.navCtrl.setRoot(EditprofilePage);
      }
    }
  }

}
