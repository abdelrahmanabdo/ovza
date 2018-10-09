webpackJsonp([0],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentResultPageModule", function() { return PaymentResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_result__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentResultPageModule = /** @class */ (function () {
    function PaymentResultPageModule() {
    }
    PaymentResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_result__["a" /* PaymentResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_result__["a" /* PaymentResultPage */]),
            ],
        })
    ], PaymentResultPageModule);
    return PaymentResultPageModule;
}());

//# sourceMappingURL=payment-result.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
/**
 * Generated class for the PaymentResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentResultPage = /** @class */ (function () {
    function PaymentResultPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.paymentResult = this.navParams.get('payment_result');
    }
    PaymentResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentResultPage');
    };
    PaymentResultPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    PaymentResultPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    PaymentResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment-result',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/payment-result/payment-result.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60">\n            <h4>PAYMENT RESULT</h4>\n          </span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div  style="margin-top:35%;">\n            <p class="text_center"> {{paymentResult}}</p>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n            <img [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li>\n      </ul>\n      <!-- <ul class="center_side">\n        <li><button class="payButton" (click)="payByPayfort($event)" [disabled]="!enablePay" >Pay</button></li>\n      </ul> -->\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/payment-result/payment-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PaymentResultPage);
    return PaymentResultPage;
}());

//# sourceMappingURL=payment-result.js.map

/***/ })

});
//# sourceMappingURL=0.js.map