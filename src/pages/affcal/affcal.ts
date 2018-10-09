import {Component} from '@angular/core';
import {NavController, NavParams, PopoverController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ListpropPage} from "../listprop/listprop";
import {WishlistPage} from "../wishlist/wishlist";
import {ChatPage} from "../chat/chat";
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from "../editprofile/editprofile";
import {MenuPage} from "../menu/menu";
import * as $ from 'jquery' ;
/**
 * Generated class for the AffcalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-affcal',
  templateUrl: 'affcal.html',
})
export class AffcalPage {
  type = localStorage.getItem('type');

  constructor(public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  //   var affordminv='{$affordmin}';
  //
  //   var homeaffoardvalu=parseInt(affordminv)*2;
  //   $("#range").ionRangeSlider({
  //     type: "single",
  //     min: '{$affordmin}',
  //     max: '{$affordmax}',
  //     from: homeaffoardvalu,
  //     to: 50000,
  //
  //     prefix: "{$currency_symbol}",
  //     grid: false,
  //     grid_num: 10,
  //     max_postfix: "<b>+<b>",
  //     prettify_enabled: false,
  //     onFinish: function (data) {
  //
  //       // var value = $(this).prop("value");
  //
  //
  //       $('#monthlypayment').val(data.from);
  //       $('#rateofinterest').val('{$std_intrest}');
  //
  //       $( "#homeaffordcalbut" ).click();
  //
  //
  //     }
  //   });
  //
  //
  //
  //
  //
  //
  //     $(document).ready(function() {
  //
  //       var affordmin='{$affordmin}';
  //
  //       var homeaffoardval=parseInt(affordmin)*2;
  //       $('#monthlypayment').val(homeaffoardval);
  //
  //       firstone();
  //
  //
  //       function removedisps(){
  //
  //         $('.rederror').css('visibility', 'hidden');
  //         return true;
  //
  //       }
  //       $("#homeaffordcalbut").click(function(){
  //
  //
  //         var monthlypayment=$('#monthlypayment').val().trim();
  //         var downpayment=$('#downpayment').val().trim();
  //         var rateofinterest=$('#rateofinterest').val().trim();
  //         var noofyears=$('#noofyears').val().trim();
  //
  //
  //         if(monthlypayment=="")
  //         {
  //           $('#err1').html("{cfn:checkmsg(379)}");
  //           $('#err1').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //         if(monthlypayment < 0)
  //         {
  //           $('#err1').html("{cfn:checkmsg(103)}");
  //           $('#err1').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //
  //
  //         if(isNaN(monthlypayment))
  //         {
  //           $('#err1').html("{cfn:checkmsg(380)}");
  //           $('#err1').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //         if(!parseInt(monthlypayment)>0)
  //         {
  //           $('#err1').html("{cfn:checkmsg(381)}");
  //           $('#err1').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //
  //         if(downpayment!="")
  //         {
  //           if(isNaN(downpayment))
  //           {
  //             $('#err2').html("{cfn:checkmsg(382)}");
  //             $('#err2').css('visibility', 'visible');
  //             setTimeout(removedisps, 3000);
  //             return false;
  //           }
  //           if(downpayment < 0)
  //           {
  //             $('#err2').html("{cfn:checkmsg(103)}");
  //             $('#err2').css('visibility', 'visible');
  //             setTimeout(removedisps, 3000);
  //             return false;
  //           }
  //           if(parseInt(downpayment)!=0)
  //           {
  //             if((!parseInt(downpayment)>0))
  //             {
  //               $('#err2').html("{cfn:checkmsg(383)}");
  //               $('#err2').css('visibility', 'visible');
  //               setTimeout(removedisps, 3000);
  //
  //               return false;
  //             }
  //           }
  //
  //         }
  //
  //
  //
  //         if(rateofinterest=="")
  //         {
  //           $('#err3').html("{cfn:checkmsg(376)}");
  //           $('#err3').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //         if(rateofinterest < 0)
  //         {
  //           $('#err3').html("{cfn:checkmsg(103)}");
  //           $('#err3').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //         if(!parseInt(rateofinterest)>0)
  //         {
  //           $('#err3').html("{cfn:checkmsg(377)}");
  //           $('#err3').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //         if(parseInt(rateofinterest)>20)
  //         {
  //           $('#err3').html("{cfn:checkmsg(378)}");
  //           $('#err3').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //
  //
  //
  //
  //
  //
  //
  //
  //         // 2000((1+0.00331667)^360-1)/(0.00331667(1+0.00331667)^360
  //
  //
  //
  //
  //
  //
  //         var monthpay=parseFloat(monthlypayment);
  //
  //
  //         var slider = $("#range").data("ionRangeSlider");
  //
  //         if(monthpay > 50000)
  //         {
  //           slider.update({
  //             from:50000
  //           });
  //         }else {
  //
  //           slider.update({
  //             from:monthpay
  //           });
  //
  //
  //         }
  //         if(downpayment!='')
  //         {
  //           var downpay=parseFloat(downpayment);
  //         }
  //         else
  //         {
  //           var downpay=0;
  //         }
  //         var rate=parseFloat(rateofinterest);
  //         var noyr=parseInt(noofyears);
  //
  //         var ratenomonth=parseFloat(rate)/(12*100);//r
  //         //alert(ratenomonth);
  //         var rateadd=parseFloat(ratenomonth)+1;//r+1
  //         var nomonth=noyr*12;//n
  //         var i;
  //         var numpow=1;
  //         for(i=1;i<=nomonth;i++)
  //         {
  //
  //           numpow=parseFloat(numpow)*parseFloat(rateadd);
  //
  //         }
  //
  //
  //
  //         var emi=monthpay;
  //
  //
  //         var homeaffor=(emi*(numpow-1))/(ratenomonth*numpow);
  //
  //         homeaffor+=downpay;
  //
  //
  //         var newfdf=number_format(homeaffor,0);
  //
  //         //
  //         //alert("homeaffor="+homeaffor);
  //         //	homeaffor=Math.round(homeaffor,2);
  //         $('#amthomeafford').html("{$currency_symbol}"+" "+ newfdf);
  //
  //
  //       });
  //
  //
  //     });
  //
  //   function firstone()
  //
  //   {
  //     var monthlypayment=$('#monthlypayment').val().trim();
  //     var downpayment=$('#downpayment').val().trim();
  //     var rateofinterest=$('#rateofinterest').val().trim();
  //     var noofyears=$('#noofyears').val().trim();
  //
  //
  //     if(monthlypayment=="")
  //     {
  //       $('#err1').html("{cfn:checkmsg(379)}");
  //       $('#err1').css('visibility', 'visible');
  //       setTimeout(removedisps, 3000);
  //
  //       return false;
  //     }
  //     if(monthlypayment < 0)
  //     {
  //       $('#err1').html("{cfn:checkmsg(103)}");
  //       $('#err1').css('visibility', 'visible');
  //       setTimeout(removedisps, 3000);
  //
  //       return false;
  //     }
  //
  //
  //     if(isNaN(monthlypayment))
  //     {
  //       $('#err1').html("{cfn:checkmsg(380)}");
  //       $('#err1').css('visibility', 'visible');
  //       setTimeout(removedisps, 3000);
  //
  //       return false;
  //     }
  //     if(!parseInt(monthlypayment)>0)
  //     {
  //       $('#err1').html("{cfn:checkmsg(381)}");
  //       $('#err1').css('visibility', 'visible');
  //       setTimeout(removedisps, 3000);
  //
  //       return false;
  //     }
  //
  //     if(downpayment!="")
  //     {
  //       if(isNaN(downpayment))
  //       {
  //         $('#err2').html("{cfn:checkmsg(382)}");
  //         $('#err2').css('visibility', 'visible');
  //         setTimeout(removedisps, 3000);
  //         return false;
  //       }
  //       if(downpayment < 0)
  //       {
  //         $('#err2').html("{cfn:checkmsg(103)}");
  //         $('#err2').css('visibility', 'visible');
  //         setTimeout(removedisps, 3000);
  //         return false;
  //       }
  //       if(parseInt(downpayment)!=0)
  //       {
  //         if((!parseInt(downpayment)>0))
  //         {
  //           $('#err2').html("{cfn:checkmsg(383)}");
  //           $('#err2').css('visibility', 'visible');
  //           setTimeout(removedisps, 3000);
  //
  //           return false;
  //         }
  //       }
  //
  //     }
  //
  //
  //
  //     if(rateofinterest=="")
  //     {
  //       $('#err3').html("{cfn:checkmsg(376)}");
  //       $('#err3').css('visibility', 'visible');
  //       setTimeout(removedisps, 3000);
  //
  //       return false;
  //     }
  //     if(rateofinterest < 0)
  //     {
  //       $('#err3').html("{cfn:checkmsg(103)}");
  //       $('#err3').css('visibility', 'visible');
  //       setTimeout(removedisps, 3000);
  //
  //       return false;
  //     }
  //     if(!parseInt(rateofinterest)>0)
  //     {
  //       $('#err3').html("{cfn:checkmsg(377)}");
  //       $('#err3').css('visibility', 'visible');
  //       setTimeout(removedisps, 3000);
  //
  //       return false;
  //     }
  //     if(parseInt(rateofinterest)>20)
  //     {
  //       $('#err3').html("{cfn:checkmsg(378)}");
  //       $('#err3').css('visibility', 'visible');
  //       setTimeout(removedisps, 3000);
  //
  //       return false;
  //     }
  //
  //
  //
  //
  //
  //
  //
  //
  //     // 2000((1+0.00331667)^360-1)/(0.00331667(1+0.00331667)^360
  //
  //
  //
  //
  //
  //
  //     var monthpay=parseFloat(monthlypayment);
  //
  //
  //     var slider = $("#range").data("ionRangeSlider");
  //
  //     if(monthpay > 50000)
  //     {
  //       slider.update({
  //         from:50000
  //       });
  //     }else {
  //
  //       slider.update({
  //         from:monthpay
  //       });
  //
  //
  //     }
  //     if(downpayment!='')
  //     {
  //       var downpay=parseFloat(downpayment);
  //     }
  //     else
  //     {
  //       var downpay=0;
  //     }
  //     var rate=parseFloat(rateofinterest);
  //     var noyr=parseInt(noofyears);
  //
  //     var ratenomonth=parseFloat(rate)/(12*100);//r
  //     //alert(ratenomonth);
  //     var rateadd=parseFloat(ratenomonth)+1;//r+1
  //     var nomonth=noyr*12;//n
  //     var i;
  //     var numpow=1;
  //     for(i=1;i<=nomonth;i++)
  //     {
  //
  //       numpow=parseFloat(numpow)*parseFloat(rateadd);
  //
  //     }
  //
  //
  //
  //     var emi=monthpay;
  //
  //
  //     var homeaffor=(emi*(numpow-1))/(ratenomonth*numpow);
  //
  //     homeaffor+=downpay;
  //
  //
  //     var newfdf=number_format(homeaffor,0);
  //
  //     //
  //     //alert("homeaffor="+homeaffor);
  //     //	homeaffor=Math.round(homeaffor,2);
  //     $('#amthomeafford').html("{$currency_symbol}"+" "+ newfdf);
  //
  //   }
  //
  //
  //   function number_format(number, decimals, decPoint, thousandsSep){
  //     decimals = decimals || 0;
  //     number = parseFloat(number);
  //     if(!decPoint || !thousandsSep){
  //       decPoint = '.';
  //       thousandsSep = ',';
  //     }
  //     var roundedNumber = Math.round( Math.abs( number ) * ('1e' + decimals) ) + '';
  //     var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber;
  //     var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';
  //     var formattedNumber = "";
  //     while(numbersString.length > 3){
  //       formattedNumber += thousandsSep + numbersString.slice(-3)
  //       numbersString = numbersString.slice(0,-3);
  //     }
  //     return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
  //   }

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

  menuflag ;
  openmenu() {
    let pop = this.popover.create(MenuPage, {}, {cssClass: "menupop"});

    if(!this.menuflag){
      pop.present();
      this.menuflag = 1 ;
    }


    pop.onDidDismiss(() => {
      this.menuflag = 0 ;

    })

  }
}
