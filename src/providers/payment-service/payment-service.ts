import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Loading, LoadingController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import PayfortPaymentAuth from '../../paymentAuth/payfort_payment_auth';

/*
  Generated class for the PaymentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentServiceProvider {
  baseURL: string = 'http://ovza.com/oriented/public';
  payfortConfig = new PayfortPaymentAuth;
  //test Environment URL
  payFortapiUrl = 'https://sbpaymentservices.payfort.com/FortAPI/paymentApi';
  payFortMerchantPageApi = "https://sbcheckout.PayFort.com/FortAPI/paymentPage";
  // production Environment URL
  // payTabsapiUrl   = 'https://paymentservices.payfort.com/FortAPI/paymentApi';

  merchantFormData = new FormData;
  constructor(public http: Http) {
    console.log('Hello PaymentServiceProvider Provider');
  }
  getToken = () => {
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/payment/payfort/getToken').subscribe((data) => {
        observer.next(data.text());
      });
    });
  }

  getForm = (data) => {
    console.log(data)
    return new Observable((observer) => {
      this.http.post(data.url, data.params).subscribe((data) => {
        observer.next(data.text());
      });
    });

  }
  merchant_page_request = (card_number, card_holder_name, card_security_code, expiry_date , customer_reference ) => {
    return new Observable((observer) => {
      let paymentParams = new URLSearchParams();
      paymentParams.set('service_command', "TOKENIZATION");
      paymentParams.set('access_code', this.payfortConfig.access_code);
      paymentParams.set('merchant_identifier', this.payfortConfig.merchant_identifier);
      paymentParams.set('merchant_reference', customer_reference);
      paymentParams.set('language', this.payfortConfig.language);
      paymentParams.set('signature', this.payfortConfig.tokeninzation_generate_signature(customer_reference)),
        paymentParams.set('card_number', card_number),
        paymentParams.set('card_security_code', card_security_code),
        paymentParams.set('card_holder_name', card_holder_name),
        paymentParams.set('expiry_date', expiry_date),  
        paymentParams.set('remember_me', "YES")
       paymentParams.set('return_url', this.payfortConfig.return_url)
      return this.http.post(this.payFortMerchantPageApi, paymentParams 
       ).subscribe((data) => {
        observer.next(data.text());
      });
    });
  }

  get_navigation_url = (token , customer_reference , customer_email , customer_name ) => {
    return new Observable((observer) => {
      return this.http.post(this.payFortapiUrl, {
        "command":"PURCHASE",
        "access_code":this.payfortConfig.access_code,
        "merchant_identifier": this.payfortConfig.merchant_identifier,
        "merchant_reference":customer_reference,
        "amount":this.payfortConfig.amount,
        "currency":this.payfortConfig.currency,
        "language":this.payfortConfig.language,
        "customer_email":customer_email,
        "customer_name":customer_name,
        "token_name":token,
        "customer_ip":"192.168.1.1",
        "return_url":"https://ovza.com/oriented/public/payment/paymentResult?"+customer_reference,
        "order_description":"payFromMobile",
        "signature": this.payfortConfig.operation_generate_signature(customer_reference , customer_email , customer_name , token )
      }).subscribe((data) => {
        observer.next(data.text());
      });
    });
  }

  response = () => {

  }
}
