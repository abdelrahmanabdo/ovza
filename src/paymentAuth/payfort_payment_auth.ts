import { Observable } from 'rxjs/Observable';
import CryptoJS from 'crypto-js';

class PayfortPaymentAuth {
    access_code  : string ;
    service_command     : string ;
    site_url       : string ;
    return_url     : string ;
    amount : string;
    currency : string;
    language       : string ; 
    merchant_identifier : string ;
    SHA_Request_Phrase  : string; 
    SHA_Response_Phrase : string ;
    signature : string  = "";
    constructor() {

        this.access_code      = "V8RykxXf6XjiLWfOPjnu" ;
        this.service_command  = "SDK_TOKEN";
        this.site_url         = "http://road9.space/appliance/index.php";
        this.return_url       = "https://ovza.com/oriented/public/payment/getToken";
        this.language         = "en"; 
        this.merchant_identifier = "CansDDMX";
        this.amount = "1000";
        this.currency = "USD";
        this.SHA_Request_Phrase = "OVZAIN";
        this.SHA_Response_Phrase = "OVZAOUT";
    }   
    
    tokeninzation_generate_signature = ( merchant_reference  )  => {
        this.signature = this.SHA_Request_Phrase+"access_code="+this.access_code+
                        "language="+this.language+"merchant_identifier="+this.merchant_identifier+"merchant_reference="+merchant_reference+"return_url="+this.return_url+"service_command=TOKENIZATION"+this.SHA_Request_Phrase;
                         return CryptoJS.SHA256(this.signature).toString(CryptoJS.enc.HEX);
    }

    operation_generate_signature = ( merchant_reference , customer_email , customer_name , token_name )  => {
        this.signature = this.SHA_Request_Phrase+"access_code="+this.access_code+"amount="+this.amount+"command=PURCHASE"+"currency="+this.currency+"customer_email="+customer_email+"customer_ip=192.168.1.1"+"customer_name="+customer_name
                         +"language="+this.language+"merchant_identifier="+this.merchant_identifier+"merchant_reference="+merchant_reference+"order_description=payFromMobile"
                         +"return_url=https://ovza.com/oriented/public/payment/paymentResult?"+merchant_reference
                         +"token_name="+token_name+this.SHA_Request_Phrase;
                         console.log(this.signature);
                         return CryptoJS.SHA256(this.signature).toString(CryptoJS.enc.HEX);
    }
}

export default PayfortPaymentAuth;  