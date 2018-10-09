webpackJsonp([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagemyaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__changepassword_changepassword__ = __webpack_require__(78);
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
 * Generated class for the ManagemyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManagemyaccountPage = /** @class */ (function () {
    function ManagemyaccountPage(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    ManagemyaccountPage_1 = ManagemyaccountPage;
    ManagemyaccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dash.getDashboardData(localStorage.getItem('userid')).subscribe(function (data) {
            _this.res = data;
            _this.res = _this.res.replace(/\s/g, '');
            _this.res = JSON.parse(_this.res);
            _this.data = _this.res;
            console.log(_this.data);
        });
        console.log('ionViewDidLoad ManagemyaccountPage');
    };
    ManagemyaccountPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(ManagemyaccountPage_1);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    ManagemyaccountPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    ManagemyaccountPage.prototype.dosomething = function (value) {
        var _this = this;
        console.log(value);
        if (value == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__profile_profile__["a" /* ProfilePage */]);
        }
        else if (value == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__editprofile_editprofile__["a" /* EditprofilePage */]);
        }
        else if (value == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__changepassword_changepassword__["a" /* ChangepasswordPage */]);
        }
        else {
            this.dash.deactivate().subscribe(function (data) {
                _this.res2 = data;
                _this.res2 = _this.res2.replace(/\s/g, '');
                console.log(data);
                _this.res2 = JSON.parse(_this.res2);
                if (_this.res2.status == 1) {
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                    localStorage.removeItem('logged');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
                }
            });
        }
    };
    var ManagemyaccountPage_1;
    ManagemyaccountPage = ManagemyaccountPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-managemyaccount',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/managemyaccount/managemyaccount.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a href="javascript:void(0)" class="float_left">\n\n						</a></span>\n          <span class="text_center col-60"><h4>MANAGE MY ACCOUNT</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_10 padding_bottom_40" *ngIf="data">\n        <div class="edit_profile">\n          <form [formGroup]="" style="width : 80% ;     margin: 0 10% 0 10%;" role="form" action="#" method="#">\n\n            <div class="user_img text_center">\n              <img [src]="data.logo != data.logo ? \'http://ovza.com/oriented/userdata/Agencylogo/\'+data.userid+\'/\'+data.logo : \'./assets/images/user_img.png\'" title="Ovza">\n            </div>\n            <h4 class="input_title margin_left_15">NAME</h4>\n            <fieldset>\n              <input class="input" type="text" name="" value="{{data.firm_name}}" disabled>\n            </fieldset>\n            <h4 class="input_title margin_left_15">COMPANY NAME</h4>\n            <fieldset>\n              <input class="input" type="text" name="" value="{{data.firm_addr}}" disabled>\n            </fieldset>\n            <h4 class="input_title margin_left_15">STATUS</h4>\n            <fieldset>\n              <!--<select class="input select_box" disabled>-->\n                <!--<option selected="selected" value="0">ACTIVE</option>-->\n                <!--<option value="1">1</option>-->\n                <!--<option value="2">2</option>-->\n                <!--<option value="3">3</option>-->\n              <!--</select>-->\n              <input class="input" type="text" name="" value="Active" disabled>\n\n            </fieldset>\n            <fieldset>\n              <select class="input select_box" (change)="dosomething($event.target.value)">\n                <option selected="selected" value="0">ACTIONS</option>\n                <option value="1">View Profile</option>\n                <option value="2">Edit Profile</option>\n                <option value="3">Deactivate My Account</option>\n                <option value="4">Change My Password</option>\n              </select>\n            </fieldset>\n          </form>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/managemyaccount/managemyaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ManagemyaccountPage);
    return ManagemyaccountPage;
}());

//# sourceMappingURL=managemyaccount.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChathandlerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_scroll_to_el__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__ = __webpack_require__(9);
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
 * Generated class for the ChathandlerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChathandlerPage = /** @class */ (function () {
    function ChathandlerPage(scrollService, popover, chat, navCtrl, navParams) {
        this.scrollService = scrollService;
        this.popover = popover;
        this.chat = chat;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.receiver = '';
        this.chats = '';
        // for(let i=0 ; i <50 ; i ++) {
        //   this.msgs.push({msg : '1' , sender:'me'})
        // }
        this.receiver = this.navParams.get('userid');
        this.firm_name = this.navParams.get('username');
        this.user = localStorage.getItem('userid');
        this.startChatSession(this.user, this.receiver);
    }
    ChathandlerPage.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChathandlerPage.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChathandlerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChathandlerPage');
    };
    ChathandlerPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
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
    ChathandlerPage.prototype.openmenu = function () {
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        pop.present();
    };
    ChathandlerPage.prototype.startChatSession = function (sender, receiver) {
        var _this = this;
        this.chat.start_chat_session(sender, receiver).subscribe(function (data) {
            console.log(data);
            _this.chat_id = data;
            _this.chat_id = eval(_this.chat_id);
            console.log(_this.chat_id);
            _this.chat.get_chat_messages(_this.chat_id).subscribe(function (data) {
                console.log(data);
                _this.messages = data;
                _this.messages = eval(_this.messages);
                console.log(_this.messages);
                _this.message = "";
            });
        });
    };
    ChathandlerPage.prototype.sendChatMessage = function (message, chat_id, receiver) {
        var _this = this;
        if (chat_id === void 0) { chat_id = this.chat_id; }
        if (receiver === void 0) { receiver = this.receiver; }
        //console.log(this.chat_id+ this.receiver+message)
        this.chat.send_chat_message(message, chat_id = this.chat_id, receiver = this.receiver).subscribe(function (res) {
            console.log(res);
            _this.chat.get_chat_messages(_this.chat_id).subscribe(function (data) {
                console.log(data);
                _this.messages = data;
                _this.messages = eval(_this.messages);
                console.log(_this.messages);
                _this.message = "";
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollMe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ChathandlerPage.prototype, "myScrollContainer", void 0);
    ChathandlerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chathandler',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/chathandler/chathandler.html"*/'\n<ion-content>\n    <div class="wrapper">\n        <div class="ovrly" style="position:fixed ; "></div>\n        <header class="header text_center margin_bottom_40">\n          <div class="container">\n            <div class="row">\n              <span class="col-20"><a (click)="this.navCtrl.pop({animate:false})" class="float_left"><img src="./assets/images/icons/back.svg"></a></span>\n              <span class="text_center col-60"><h4>{{firm_name}}</h4></span>\n              <span class="col-20"><a (click)="openmenu()" class="float_right"><img src="./assets/images/icons/listing-option.svg"></a></span>\n            </div>\n          </div>\n        </header>\n        <div class="container">\n          <div class="chatbox">\n            <section class="centered" style="margin-bottom: 50px">\n                <div   style="text-align:center" class="padding_top_30 margin_bottom_30">\n                  <div>\n                  <div  *ngFor="let msg of messages" >\n                  <div class="chat_text sender" *ngIf="msg.sender != user">\n                    <span class="chat_active"></span>\n\n                    <img src="./assets/images/user_img.png" title="Ovza">\n                    <article ><p>{{msg.message}}</p></article>\n\n                  </div> <!-- //Sender -->\n                  <div class="chat_text me" *ngIf="msg.sender == user">\n                    \n                    <p>{{msg.message}}</p>\n                  </div>\n\n\n                    </div>\n                  <fieldset class="fieldset_box_input">\n                    <input class="input_chat" name="" [(ngModel)]="message" [ngModelOptions]="{standalone:true}"  placeholder="Enter Your Message Here" #input1>\n                       </fieldset>\n                </div>\n\n                </div>\n\n            </section>\n          </div>\n        </div>\n        <nav class="nav_tabs">\n          <ul class="left_side">\n            <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n            <li><a (click)="opennav(\'add\')"><img [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/next.svg\' "></a></li>\n          </ul>\n          <ul class="center_side" (click)="sendChatMessage(message)" >\n            <li><a href="javascript:void(0)"><img src="./assets/images/icons/sent-mail.svg"></a></li>\n          </ul>\n          <ul class="right_side">\n            <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n            <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n          </ul>\n        </nav>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/chathandler/chathandler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ng2_scroll_to_el__["b" /* ScrollToService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChathandlerPage);
    return ChathandlerPage;
}());

//# sourceMappingURL=chathandler.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__ = __webpack_require__(17);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dash.getDashboardData(localStorage.getItem('userid')).subscribe(function (data) {
            _this.res1 = data;
            _this.res1 = _this.res1.replace(/\s/g, '');
            console.log(data);
            _this.res1 = JSON.parse(_this.res1);
            _this.dash.getdashboardataprofile(localStorage.getItem('userid')).subscribe(function (data) {
                _this.res2 = data;
                _this.res2 = _this.res2.replace(/\s/g, '');
                console.log(data);
                _this.res2 = JSON.parse(_this.res2);
            });
        });
    };
    ProfilePage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    ProfilePage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/profile/profile.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>PROFILE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered">\n        <div class="margin_top_40 profile" *ngIf="res2">\n          <div class=" text_center">\n            <img src="./assets/images/user_img.png" title="Ovza">\n            <h5 class="main_color">{{res2.firstname}} {{res2.lastname}}</h5>\n            <h5>{{type}}</h5>\n            <mark>Logo</mark>\n          </div>\n          <div class="bio">\n            <h5>ABOUT</h5>\n            <h5></h5>\n            <p>{{res1.aboutme}}</p>\n\n          </div>\n          <div *ngIf="false" class="feat_listing text_center max_width_400 margin_auto margin_bottom_60">\n            <h5 class="main_color">FEATURED LISTINGS</h5>\n            <img src="./assets/images/property_item.jpg" title="Ovza">\n          </div>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var loading;
var AuthProvider = /** @class */ (function () {
    function AuthProvider(loadingCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        // the server URL
        this.baseURL = 'http://ovza.com/oriented/public';
    }
    /*
      login function which get user data from View as an array 'userLoginData' then send it to server
        @param  : userData[] (email,password)
        @output :
    */
    AuthProvider.prototype.loader = function (data) {
        if (data == 1) {
            loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
        }
        else {
            loading.dismiss();
        }
    };
    AuthProvider.prototype.login = function (userLoginData) {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append first name , last name , email , password and agent status  to url seach parameters to send it to server
            URLSearchParam.append('email', userLoginData['email']);
            URLSearchParam.append('password', userLoginData['password']);
            var bodyOfsentData = URLSearchParam.toString();
            //send post request to server to check user data and return with the respons
            _this.http.post(_this.baseURL + '/login', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0);
                observer.next(data.text());
            });
        });
    };
    // End of Login function
    AuthProvider.prototype.mylogin = function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://ovza.com/oriented/public/home/get/residential/",
            "method": "GET",
            "headers": {
                "cache-control": "no-cache",
                "postman-token": "7ccdf8a0-c16d-b1a2-9a7d-f57d1458b562"
            }
        };
        __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"](settings).done(function (response) {
            var data = eval(response);
            console.log(data);
        });
    };
    /*
      registration function which get user's data from View as an array 'userRegistrationData' then put it into
        @param : userData[] (firstName , lastName,email,password,agentStatus)
        @output : countries' names
    */
    AuthProvider.prototype.register = function (userRegistrationData) {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append first name , last name , email , password and agent status  to url seach parameters to send it to server
            URLSearchParam.append('fname', userRegistrationData['fname']);
            URLSearchParam.append('lname', userRegistrationData['lname']);
            URLSearchParam.append('email', userRegistrationData['email']);
            URLSearchParam.append('password', userRegistrationData['password']);
            URLSearchParam.append('agentstatus', userRegistrationData['agentstatus']);
            URLSearchParam.append(Date.now().toString(), userRegistrationData['regtime']);
            var bodyOfsentData = URLSearchParam.toString();
            //send post request to server to check user data and return with the respons
            _this.http.post(_this.baseURL + '/register', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0);
                observer.next(data.text());
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upgrade2featurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listnwpay_listnwpay__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
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
 * Generated class for the Upgrade2featurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Upgrade2featurePage = /** @class */ (function () {
    function Upgrade2featurePage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.property_data = this.navParams.get('p');
        console.log(this.property_data);
    }
    Upgrade2featurePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Upgrade2featurePage');
    };
    Upgrade2featurePage.prototype.listpay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__listnwpay_listnwpay__["a" /* ListnwpayPage */], { 'userid': this.property_data.userid, 'pid': this.property_data.id });
    };
    Upgrade2featurePage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    Upgrade2featurePage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    Upgrade2featurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-upgrade2feature',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/upgrade2feature/upgrade2feature.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>UPGRADE TO FEATURED LISTING</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div class="margin_top_40">\n\n          <div class="margin_bottom_40 margin_top_30" style="width:80% ; margin-left:10% ; margin-rigth:10% ; ">\n            <div class="property_box text_center">\n              <img src="./assets/images/property_item.jpg" title="Ovza">\n              <h5>House Property for {{property_data.rental_form != null ? \'rent\' : \'sale\' }}</h5>\n              <h5>{{property_data.listaddress2}}</h5>\n              <h5>${{property_data.rental_form != null ? property_data.rental_money : property_data.list_price}} /\n                {{property_data.homesize == undefined || property_data.homesize == \'\' ? property_data.lotsize :\n                property_data.homesize}} sq.ft</h5>\n            </div>\n          </div>\n\n          <ul class="details max_width_400 margin_auto" style="    margin-right: 10%;\n    margin-left: 20%;\n    width: 75%;\n}">\n            <li>\n              <p class="col_2">Start Date</p>\n              <p class="col_2">09/22/2017</p>\n            </li>\n\n            <li>\n              <p class="col_2">End Date</p>\n              <p class="col_2">09/22/2018</p>\n            </li>\n\n            <li>\n              <p class="col_2">Status</p>\n              <p class="col_2">Pending</p>\n            </li>\n\n            <li>\n              <p class="col_2">Total Amount</p>\n              <p class="col_2">$20</p>\n            </li>\n          </ul>\n\n          <div class="max_width_200 margin_auto margin_top_20 margin_bottom_40"\n               style="margin-bottom:101px; !important;">\n            <button class="btn btn_block btn_login" (click)="listpay()">CREDIT/DEBIT</button>\n            <!-- <a href="http://2checkout.com" target="_system">\n              <button class="btn btn_block btn_login">Credit/Debit</button>\n            </a> -->\n\n          </div>\n\n\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/question.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/upgrade2feature/upgrade2feature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], Upgrade2featurePage);
    return Upgrade2featurePage;
}());

//# sourceMappingURL=upgrade2feature.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        prev = this.navParams.get('p');
        this.init(prev);
    }
    StatisticsPage.prototype.init = function (p) {
        var _this = this;
        this.dash.viewstat(localStorage.getItem('userid'), p.id).subscribe(function (data) {
            _this.res = data;
            _this.res = _this.res.replace(/\s/g, '');
            _this.res = JSON.parse(_this.res);
            console.log(_this.res);
        });
    };
    StatisticsPage.prototype.ionViewDidLoad = function () {
    };
    StatisticsPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    StatisticsPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/statistics/statistics.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>LISTING STATISTICS</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div class="margin_top_40">\n          <div class="margin_top_30">\n            <div class="property_box text_center no_border no_bg">\n              <h5>House Property for sale</h5>\n              <h5>12 Chastas, Paris, France 12-2121</h5>\n              <h5>$2121 / 5,675 sq.ft</h5>\n              <img src="./assets/images/property_item.jpg" title="Ovza" class="margin_top_bottom_40">\n            </div>\n          </div>\n          <div class="text_center max_width_400 margin_auto">\n            <form style="width:80%; margin:0 10% 0 10% ; " role="form" action="#" method="#">\n              <fieldset>\n                <select class="input select_box">\n                  <option selected="selected" value="0">LAST 7 DAYS</option>\n                  <option value="1">1</option>\n                  <option value="2">2</option>\n                  <option value="3">3</option>\n                </select>\n              </fieldset>\n            </form>\n          </div>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/question.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var loading;
/*
 class for countries provider which get different types of counties' data
*/
var CountriesProvider = /** @class */ (function () {
    function CountriesProvider(loadingCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        // the server URL
        this.baseURL = 'http://ovza.com/oriented/public';
    }
    CountriesProvider.prototype.loader = function (data) {
        if (data == 1) {
            loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
        }
        else {
            loading.dismiss();
        }
    };
    /*
      function for retrieving arabic residential counties
        @param :
        @output : countries' names
    */
    CountriesProvider.prototype.getArabicResidentialCountries = function () {
        return this.http.get(this.baseURL + '/r_arabicCountries').map(function (res) { return res.json(); }).catch(function (error) { return error.json(); });
    };
    // End of  arabic residential countries function
    /*
      function for retrieving english residential counties
        @param :
        @output : countries' names
    */
    CountriesProvider.prototype.getEnglishResidentialCountries = function () {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/r_englishCountries').subscribe(function (data) {
                var res = data.text();
                _this.loader(0);
                observer.next(res);
            });
        });
    };
    // End of  English residential countries function
    /*
      function for retrieving arabic commercial counties
        @param :
        @output : countries' names
    */
    CountriesProvider.prototype.getArabicCommercialCountries = function () {
        return this.http.get(this.baseURL + '/c_arabicCountries').map(function (res) { return res.json(); }).catch(function (error) { return error.json(); });
    };
    // End of  arabic commercial countries function
    /*
      function for retrieving english commercial counties
         @param :
         @output : countries' names
    */
    CountriesProvider.prototype.getEnglishCommercialCountries = function () {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/c_englishCountries').subscribe(function (data) {
                var res = data;
                _this.loader(0);
                observer.next(res.text());
            });
        });
        //return json data of english commercial countries
    };
    // End of  English commercial countries function
    /*
      function for retrieving english cities of specific country
      @param : countryName
      @output : city data
    */
    CountriesProvider.prototype.getCitiesOfSpecficEnglishCountry = function (Country) {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/englishCities/' + Country).subscribe(function (data) {
                _this.loader(0);
                observer.next(data.text());
            });
        });
    };
    // End of  english cities  function
    /*
      function for retrieving arabic cities of specific country
         @param : countryName
         @output : city data
    */
    CountriesProvider.prototype.getCitiesOfSpecficArabicCountry = function (Country) {
        //return json data of arabic commercial countries
        return this.http.get(this.baseURL + '/arabicCities/' + Country).map(function (res) { return res.json(); }).catch(function (error) { return error.json(); });
    };
    CountriesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CountriesProvider);
    return CountriesProvider;
}());

//# sourceMappingURL=countries.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propdet_propdet__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var result;
var country, city, ptype;
/**
 * Generated class for the SearchresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchresultPage = /** @class */ (function () {
    function SearchresultPage(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.res = [];
        this.structure = { lower: 33, upper: 60 };
        country = this.navParams.get('country');
        city = this.navParams.get('city');
        this.city = this.navParams.get('city');
        ;
        ptype = this.navParams.get('ptype');
        console.log(ptype);
        console.log(country);
    }
    SearchresultPage.prototype.ngOnInit = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        if (city == undefined) {
            console.log('yes');
        }
        this.dash.search(country, city, ptype).subscribe(function (data) {
            console.log('data result', data);
            _this.temp = data;
            _this.temp = eval(_this.temp);
            console.log(_this.temp);
            _this.res = _this.temp;
            console.log(_this.res);
            result = _this.res;
            if (result != "")
                _this.maxprice = Math.max.apply(Math, result.map(function (o) { return o.list_price; }));
            for (var i = 0; i < _this.res.length; i++) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(_this.res[i].lattitude, _this.res[i].longitude),
                    map: _this.map
                });
                marker.setMap(_this.map);
            }
            var newlatlng = new google.maps.LatLng(_this.res[0].lattitude, _this.res[0].longitude);
            _this.map.setCenter(newlatlng);
        });
    };
    SearchresultPage.prototype.openprop = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__propdet_propdet__["a" /* PropdetPage */], { data: data });
    };
    SearchresultPage.prototype.ionViewDidLoad = function () {
    };
    SearchresultPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    SearchresultPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    SearchresultPage.prototype.onChange = function (ev) {
        console.log('Changed', ev.value);
        this.res = [];
        for (var i = 0; i < result.length; i++) {
            if (parseInt(result[i].list_price) > ev.value.lower && parseInt(result[i].list_price) <= ev.value.upper) {
                this.res.push(result[i]);
            }
        }
        console.log(this.res);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SearchresultPage.prototype, "mapElement", void 0);
    SearchresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-searchresult',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/searchresult/searchresult.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop();" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>SEARCH RESULTS</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered search">\n\n        <div class="margin_top_20" style="width:80% ; margin-left:10% ; margin-right:10%" >\n          <p class="margin_bottom_20 text_center">Total {{res.length}} Homes Available in {{city}}</p>\n          <form style="width: 129%;\n    margin-left: -14%;">\n            <!--<fieldset>-->\n              <!--<select class="input select_box">-->\n                <!--<option selected="selected" value="0">SORT BY FEATURED</option>-->\n                <!--<option value="1">1</option>-->\n                <!--<option value="2">2</option>-->\n                <!--<option value="3">3</option>-->\n              <!--</select>-->\n            <!--</fieldset>-->\n            <ion-item>\n              <ion-range min="1" max={{maxprice}} name="slider" dualKnobs="true" pin="true" [(ngModel)]="structure"\n                         (ionChange)="onChange($event)" color="dark" debounce="500">\n                <ion-label range-left>1</ion-label>\n                <ion-label range-right>{{maxprice}}</ion-label>\n              </ion-range>\n            </ion-item>\n          </form>\n          <div class="margin_top_20" style="    text-align: center;width:80% ; margin-left:10% ; margin-right:10%" *ngIf="!res.length"><p>No Results</p></div>\n          <!-- <div class="range">\n            <div class="slider-container">\n              <input type="text" id="slider" class="slider" />\n          </div>\n          </div> -->\n          <div *ngIf="res.length">\n          <div class="property_box text_center" *ngFor="let p of res;let ayhaga = last" (click)="openprop(p)">\n            <div *ngIf="p.images != undefined">\n              <img\n                [src]="\'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image">\n\n            </div>\n            <div *ngIf="p.images == undefined">\n              <img style="height: 387px;" src="./assets/images/splashscreen.png">\n\n            </div>\n            <ul>\n              <li>\n                <div class="left_side">\n                  <address>{{p.listaddress1}}</address>\n                </div>\n                <div class="right_side">\n                  {{p.homesize == undefined || null ? p.lotsize : p.homesize}} Sq.ft\n                </div>\n              </li>\n              <li>\n                <div  *ngIf="false" class="left_side">\n                  <time>Open: 08/29/2017-9:00 am to 3:00 pm</time>\n                </div>\n                <div class="right_side">\n                  <span style="float: right"> <p style=" float: right">{{p.beds}}</p><img\n                    style="height :22px ; margin-right:9px ; width:28px;"\n                    src="./assets/images/icons/bed_gray.svg"></span>\n                  <span style="float: right"> <p style=" float: right">{{p.bathrooms}}</p><img\n                    style="height :22px ;margin-right:9px ;width:28px;"\n                    src="./assets/images/icons/bathtub_gray.svg"></span>\n                </div>\n              </li>\n              <li class="main_color" *ngIf="p.PriceState==1">{{p.list_price}} $</li>\n              <li class="main_color" *ngIf="p.PriceState==0">Hidden Price</li>\n\n            </ul>\n\n          </div>\n\n\n        </div>\n        </div>\n        <section   style="\n  height: 40%;\n  width: 80%;\n    margin-top: -53px;\n    left: 10%;\n    margin-bottom:102px;\n    right: 10%;">\n          <div style="height:100%; width: 100%" #map id="map_canvas"></div>\n\n        </section>\n      </section>\n\n    </div>\n\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/searchresult/searchresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchresultPage);
    return SearchresultPage;
}());

//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffcalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(5);
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
 * Generated class for the AffcalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AffcalPage = /** @class */ (function () {
    function AffcalPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    AffcalPage.prototype.ionViewDidLoad = function () {
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
    };
    AffcalPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    AffcalPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    AffcalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-affcal',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/affcal/affcal.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_10">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>HOME AFFORDABILITY CALCULATOR</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_10 padding_bottom_60">\n        <article class="text_center">\n          <p>\n            Use this calculator to determine the maximum price of a house in your budget. Simply enter the details of\n            your monthly repayment budget, down payment amount, and loan tenure and we will provide you with the maximum\n            amount you can afford to pay for a house.\n          </p>\n        </article>\n        <div class="calc text_center margin_top_bottom_20">\n          <form style="width : 80% ;     margin: 0 10% 0 10%;" role="form" action="#" method="#">\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="MORTGAGE AMOUNT ($)">\n            </fieldset>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="DOWNPAYMENT ($)">\n            </fieldset>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="INTEREST RATE (%)">\n            </fieldset>\n            <fieldset>\n              <select class="input select_box">\n                <option selected="selected" value="0">AGE OF PROPERTY</option>\n                <option value="1">Arabic</option>\n                <option value="2">English</option>\n                <option value="3">Frinsh</option>\n                <option value="4">Spanish</option>\n                <option value="5">Persia</option>\n              </select>\n            </fieldset>\n            <div class="actions">\n              <button class="btn btn_block btn_login">\n                CALCULATE\n              </button>\n            </div>\n          </form>\n          <div class="monthly_pay text_center">\n            <img src="./assets/images/icons/home_white.svg">\n            <article>\n              <h4>Your Monthly Payment</h4>\n              <h5>$ 4,127,505</h5>\n              <p>Based on your income, a house at this price should fit comfortably within your budget.</p>\n            </article>\n            <div class="range_slider">\n              <i class="ion-pricetag pricetag"></i>\n              <i class="ion-android-home home"></i>\n              <!-- Slider Markup -->\n              <div class="Slider js-ranger">\n                <span class="min_price">$ 4,145</span>\n                <span class="max_price">$ 4,565,145</span>\n                <input data-min="0" data-max="100" value="25" type="hidden" name="amount" autocomplete="off"\n                       class="js-ranger-input"/>\n                <div class="Slider-track js-ranger-track">\n                  <div class="Slider-distance js-ranger-distance">\n                    <div class="Slider-handle"></div>\n                  </div>\n                </div>\n                <output class="Slider-indicator js-ranger-indicator">\n                  <small class="Slider-value js-ranger-value"></small>\n                </output>\n              </div>\n              <!-- Slider Markup -->\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/affcal/affcal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AffcalPage);
    return AffcalPage;
}());

//# sourceMappingURL=affcal.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var loading = {};
/*
   This class has :
   1- get user's data to disaply it in dashboard according to his type (agent or seller or normal user)
   2- update profile
   3- change password
   4- get active lists for  user
   5- get inactive lists for  user
   6- get incomplete lists for  user
   7- get featured lists for  user

*/
var DashboardProvider = /** @class */ (function () {
    function DashboardProvider(loadingCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        // the server URL
        this.baseURL = 'http://ovza.com/oriented/public';
    }
    DashboardProvider.prototype.loader = function (data, id) {
        if (data == 1) {
            var randomnum = Math.round(Math.random() * 100000);
            loading[randomnum] = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading[randomnum].present();
            return randomnum;
        }
        else {
            loading[id].dismiss();
        }
    };
    /*
      This function retrive user's data to display it on dashboard page
      @param  : userid (int)
      @output : userdata[]
    */
    DashboardProvider.prototype.getDashboardData = function (userid) {
        var _this = this;
        if (localStorage.getItem('type') == 'agent') {
            var loaderid = this.loader(1, 0);
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
                _this.http.get(_this.baseURL + '/dashboard/agent/' + userid).subscribe(function (data) {
                    _this.loader(0, loaderid);
                    observer.next(data.text());
                });
            });
        }
        else {
            var loaderid = this.loader(1, 0);
            return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
                _this.http.get(_this.baseURL + '/dashboard/user/' + userid).subscribe(function (data) {
                    _this.loader(0, loaderid);
                    observer.next(data.text());
                });
            });
        }
    };
    DashboardProvider.prototype.getwishlist = function (userid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/get/wishlist/' + userid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.getlistdata = function (lid) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/get/list/' + lid).subscribe(function (data) {
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.addtowishlist = function (ownerid, userid, lid, wishname, wishstatus) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append first name , last name , email and profile picture to url seach parameters to send it to server
            URLSearchParam.append('ownerid', ownerid);
            URLSearchParam.append('userid', userid);
            URLSearchParam.append('listid', lid);
            URLSearchParam.append('wish_name', wishname);
            URLSearchParam.append('wish_status', wishstatus);
            var bodyOfsentData = URLSearchParam.toString();
            //send post request to server to check user data and return with the respons
            _this.http.post(_this.baseURL + '/dashboard/add/wishlist', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.removewish = function (lid, userid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/delete/wishlist/' + userid + '/' + lid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.getdashboardataprofile = function (userid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/user/' + userid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.getDashboardDataAgent = function (userid) {
        return this.http.get(this.baseURL + '/dashboard/lists/statistics/' + userid).map(function (data) { return data.text(); });
    };
    /*  end of get dashboard data */
    /*
      This function update user's data
      @param  : userid (int) , updateData[]
      @output : status 0 (fail) OR 1 (success)
  
    */
    DashboardProvider.prototype.updateUserProfile = function (userid, updatedData) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append first name , last name , email and profile picture to url seach parameters to send it to server
            URLSearchParam.append('firstName', updatedData['firstName']);
            URLSearchParam.append('lastName', updatedData['lastName']);
            URLSearchParam.append('email', updatedData['email']);
            URLSearchParam.append('profile_picture', updatedData['profile_picture']);
            var bodyOfsentData = URLSearchParam.toString();
            //send post request to server to check user data and return with the respons
            _this.http.post(_this.baseURL + '/dashboard/edit/' + userid, bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.requestinfo = function (lid, agentid, userid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append first name , last name , email and profile picture to url seach parameters to send it to server
            URLSearchParam.append('listid', lid);
            URLSearchParam.append('agentid', agentid);
            URLSearchParam.append('userid', userid);
            var bodyOfsentData = URLSearchParam.toString();
            //send post request to server to check user data and return with the respons
            _this.http.post(_this.baseURL + '/send/requestToAgent', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    /* End of update user's profile function */
    /*
      This function take userid as a parameter plus the new password 'without encryption'
      @param : userid (int) , password (string)
      @output : status 0 (fail) OR 1 (success)
    */
    DashboardProvider.prototype.deactivate = function () {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/auth/deactivate/' + localStorage.getItem('userid')).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.forgetpass = function (email) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/auth/forgetpassword/' + email).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.changePassword = function (userid, newPassword, old_password) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append first name , last name , email and profile picture to url seach parameters to send it to server
            URLSearchParam.append('userid', userid);
            URLSearchParam.append('new_password', newPassword);
            URLSearchParam.append('old_password', old_password);
            var bodyOfsentData = URLSearchParam.toString();
            //send post request to server to check user data and return with the respons
            _this.http.post(_this.baseURL + '/dashboard/changPassword', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.viewstat = function (userid, lid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/statistics/' + userid + lid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    /* End of change user's password function */
    // retrieve active lists
    DashboardProvider.prototype.getActivelist = function (userid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/get/active/list/' + userid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    // retrieve inactive lists
    DashboardProvider.prototype.getInactivelist = function (userid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/get/inactive/list/' + userid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    // retrieve incomplete lists
    DashboardProvider.prototype.getIncompletelist = function (userid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/get/incomplete/list/' + userid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    // retrieve featured lists
    DashboardProvider.prototype.getFeaturedlist = function (userid) {
        return this.http.get(this.baseURL + '/dashboard/get/featured/list/' + userid).map(function (data) { return data.json(); });
    };
    DashboardProvider.prototype.profinfo = function (userid, updatedData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //Append first name , last name , email and profile picture to url seach parameters to send it to server
        URLSearchParam.append('business_name', updatedData['businessname']);
        URLSearchParam.append('business_address', updatedData['businessaddress']);
        URLSearchParam.append('phone_number', updatedData['phonenumber']);
        URLSearchParam.append('logo', updatedData['profile_picture']);
        URLSearchParam.append('phone_number', updatedData['email']);
        URLSearchParam.append('about', updatedData['about']);
        URLSearchParam.append('website', updatedData['website']);
        URLSearchParam.append('blog', updatedData['blog']);
        URLSearchParam.append('youtube', updatedData['youtube']);
        URLSearchParam.append('facebook', updatedData['facebook']);
        URLSearchParam.append('twitter', updatedData['twitter']);
        URLSearchParam.append('google', updatedData['google']);
        URLSearchParam.append('languages', updatedData['lang']);
        var bodyOfsentData = URLSearchParam.toString();
        //send post request to server to check user data and return with the respons
        return this.http.post(this.baseURL + '/professional_info/' + userid, bodyOfsentData, { headers: headers })
            .map(function (data) { return data.text(); });
    };
    DashboardProvider.prototype.agentlic = function (userid, licdata) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //Append user id and password to url seach parameters to send it to server
        URLSearchParam.append('license ', licdata['agentlic']);
        URLSearchParam.append('description', licdata['description']);
        var bodyOfsentData = URLSearchParam.toString();
        return this.http.post(this.baseURL + '/agent_license/' + userid, bodyOfsentData, { headers: headers })
            .map(function (data) { return data.text(); });
    };
    DashboardProvider.prototype.remove_listing_featured = function (lid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/delete/featured/list/' + lid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.remove_listing_active = function (lid) {
        var _this = this;
        console.log(lid);
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/delete/active/list/' + lid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.remove_listing_inactive = function (lid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/delete/inactive/list/' + lid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.remove_listing_incomplete = function (lid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/delete/incomplete/list/' + lid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.search = function (country, city, ptype) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            if (city == undefined) {
                _this.http.post(_this.baseURL + '/search/' + country + '/' + ptype, { headers: headers }).subscribe(function (data) {
                    _this.loader(0, loaderid);
                    observer.next(data.text());
                });
            }
            else {
                _this.http.post(_this.baseURL + '/search/' + country + '/' + city + '/' + ptype, { headers: headers }).subscribe(function (data) {
                    _this.loader(0, loaderid);
                    observer.next(data.text());
                });
            }
            //send post request to server to check user data and return with the respons
        });
    };
    DashboardProvider.prototype.getlistinfo = function (lid) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/dashboard/delete/featured/list/' + lid).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.addlisting = function (editedList) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            console.log(editedList);
            URLSearchParam.append('userid', parseInt(editedList['userid']));
            URLSearchParam.append('security_charge', editedList['security_charge']);
            URLSearchParam.append('type', parseInt(editedList['type'])); // usder id
            URLSearchParam.append('listaddress1', editedList['listaddress1']); // city
            URLSearchParam.append('listaddress2', editedList['listaddress2']); // address of property
            URLSearchParam.append('zipcode', parseInt(editedList['zipcode'])); // post code of city
            URLSearchParam.append('lattitude', parseInt(editedList['latitude'])); // lattiude
            URLSearchParam.append('longitude', parseInt(editedList['longtitude'])); // longitude
            URLSearchParam.append('aboutlisting', editedList['aboutlisting']); // about the property
            URLSearchParam.append('beds', parseInt(editedList['beds'])); // number of beds
            URLSearchParam.append('bathrooms', parseInt(editedList['bathrooms'])); // number of bathrooms
            URLSearchParam.append('list_price', parseInt(editedList['list_price'])); // the property price
            URLSearchParam.append('pricelistflag', parseInt(editedList['pricelistflag'])); // 0 or 1 ' show or not'
            URLSearchParam.append('availablestatus', parseInt(editedList['availablestatus'])); // 0 or 1 ' available or not '
            URLSearchParam.append('videolink', editedList['videolink']); // link Of property's video
            URLSearchParam.append('year_built', parseInt(editedList['year_built'])); // year built
            URLSearchParam.append('modification_on', parseInt(editedList['modification_on']));
            URLSearchParam.append('lotsize', editedList['lotsize']);
            URLSearchParam.append('homesize', editedList['homesize']);
            URLSearchParam.append('forclosure', parseInt(editedList['forclosure'])); // 1 or 2  '  yes or no '
            URLSearchParam.append('permonthpayment', editedList['permonthpayment']);
            URLSearchParam.append('rental_money', editedList['rental_money']);
            URLSearchParam.append('rental_form', editedList['rental_form']);
            URLSearchParam.append('minimum_lease', editedList['minimum_lease']);
            URLSearchParam.append('property_type', parseInt(editedList['property_type']));
            URLSearchParam.append('currency', editedList['currency']);
            URLSearchParam.append('maxprice', editedList['maxprice']);
            URLSearchParam.append('PriceState', parseInt(editedList['PriceState']));
            URLSearchParam.append('otherthingsnote', editedList['otherthingsnote']);
            URLSearchParam.append('list_properties', parseInt(editedList['list_properties']));
            URLSearchParam.append('listeddate', Math.round(Date.now() / 1000));
            URLSearchParam.append('liststartdate', parseInt(editedList['liststartdate']));
            URLSearchParam.append('list_status', parseInt(editedList['list_status']));
            URLSearchParam.append('stories', parseInt(editedList['stories']));
            URLSearchParam.append('featured_status', parseInt(editedList['featured_status']));
            URLSearchParam.append('lotsizetype', parseInt(editedList['lotsizetype']));
            URLSearchParam.append('featured_expiry', parseInt(editedList['featured_expired']));
            //URLSearchParam.append('list_propertes', parseInt(editedList['list_propertes']))
            URLSearchParam.append('owner_type', parseInt(editedList['owner_type']));
            var bodyOfsentData = URLSearchParam.toString();
            console.log(URLSearchParam);
            //send post request to server to check user data and return with the respons
            _this.http.post(_this.baseURL + '/featured_lists/add', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.editlisting = function (editedList) {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            URLSearchParam.append('listid', parseInt(editedList['lid']));
            URLSearchParam.append('userid', parseInt(editedList['userid']));
            URLSearchParam.append('security_charge', editedList['security_charge']);
            URLSearchParam.append('type', parseInt(editedList['type'])); // usder id
            URLSearchParam.append('listaddress1', editedList['listaddress1']); // city
            URLSearchParam.append('listaddress2', editedList['listaddress2']); // address of property
            URLSearchParam.append('zipcode', parseInt(editedList['zipcode'])); // post code of city
            URLSearchParam.append('lattitude', parseInt(editedList['latitude'])); // lattiude
            URLSearchParam.append('longitude', parseInt(editedList['longtitude'])); // longitude
            URLSearchParam.append('aboutlisting', editedList['aboutlisting']); // about the property
            URLSearchParam.append('beds', parseInt(editedList['beds'])); // number of beds
            URLSearchParam.append('bathrooms', parseInt(editedList['bathrooms'])); // number of bathrooms
            URLSearchParam.append('list_price', parseInt(editedList['list_price'])); // the property price
            URLSearchParam.append('pricelistflag', parseInt(editedList['pricelistflag'])); // 0 or 1 ' show or not'
            URLSearchParam.append('availablestatus', parseInt(editedList['availablestatus'])); // 0 or 1 ' available or not '
            URLSearchParam.append('videolink', editedList['videolink']); // link Of property's video
            URLSearchParam.append('year_built', parseInt(editedList['year_built'])); // year built
            URLSearchParam.append('modification_on', parseInt(editedList['modification_on']));
            URLSearchParam.append('lotsize', editedList['lotsize']);
            URLSearchParam.append('homesize', editedList['homesize']);
            URLSearchParam.append('forclosure', parseInt(editedList['forclosure'])); // 1 or 2  '  yes or no '
            URLSearchParam.append('permonthpayment', editedList['permonthpayment']);
            URLSearchParam.append('rental_money', editedList['rental_money']);
            URLSearchParam.append('rental_form', editedList['rental_form']);
            URLSearchParam.append('minimum_lease', editedList['minimum_lease']);
            URLSearchParam.append('property_type', parseInt(editedList['property_type']));
            URLSearchParam.append('currency', editedList['currency']);
            URLSearchParam.append('maxprice', editedList['maxprice']);
            URLSearchParam.append('PriceState', parseInt(editedList['PriceState']));
            URLSearchParam.append('otherthingsnote', editedList['otherthingsnote']);
            URLSearchParam.append('list_properties', parseInt(editedList['list_properties']));
            URLSearchParam.append('listeddate', Math.round(Date.now() / 1000));
            URLSearchParam.append('liststartdate', parseInt(editedList['liststartdate']));
            URLSearchParam.append('list_status', parseInt(editedList['list_status']));
            URLSearchParam.append('stories', parseInt(editedList['stories']));
            URLSearchParam.append('featured_status', parseInt(editedList['featured_status']));
            URLSearchParam.append('lotsizetype', parseInt(editedList['lotsizetype']));
            URLSearchParam.append('featured_expiry', parseInt(editedList['featured_expired']));
            //URLSearchParam.append('list_propertes', parseInt(editedList['list_propertes']))
            URLSearchParam.append('owner_type', parseInt(editedList['owner_type']));
            console.log(URLSearchParam);
            var bodyOfsentData = URLSearchParam.toString();
            //send post request to server to check user data and return with the respons
            _this.http.post(_this.baseURL + '/featured_lists/edit', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider.prototype.getcurrency = function () {
        var _this = this;
        var loaderid = this.loader(1, 0);
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/currency/getAll').subscribe(function (data) {
                _this.loader(0, loaderid);
                observer.next(data.text());
            });
        });
    };
    DashboardProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DashboardProvider);
    return DashboardProvider;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/payment-result/payment-result.module": [
		414,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rentvsbuy_rentvsbuy__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mortcal_mortcal__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__affcal_affcal__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
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
 * Generated class for the CalpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalpopupPage = /** @class */ (function () {
    function CalpopupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    CalpopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalpopupPage');
    };
    CalpopupPage.prototype.affcal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__affcal_affcal__["a" /* AffcalPage */]);
    };
    CalpopupPage.prototype.mortcal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__mortcal_mortcal__["a" /* MortcalPage */]);
    };
    CalpopupPage.prototype.renvsbuy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__rentvsbuy_rentvsbuy__["a" /* RentvsbuyPage */]);
    };
    CalpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-calpopup',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/calpopup/calpopup.html"*/'<ion-content>\n  <div class="xs_box center_box mang_list">\n    <ul class="padding_top_bottom_10">\n      <li (click)="mortcal()"><img src="./assets/images/icons/next.svg">Mortgage Calculator</li>\n      <li (click)="affcal()"><img src="./assets/images/icons/next.svg">Affordability Calculator</li>\n      <li (click)="renvsbuy()"><img src="./assets/images/icons/next.svg">Rent Vs Buy</li>\n\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/calpopup/calpopup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], CalpopupPage);
    return CalpopupPage;
}());

//# sourceMappingURL=calpopup.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentvsbuyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(5);
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
 * Generated class for the RentvsbuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RentvsbuyPage = /** @class */ (function () {
    function RentvsbuyPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    RentvsbuyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RentvsbuyPage');
    };
    RentvsbuyPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    RentvsbuyPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RentvsbuyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rentvsbuy',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/rentvsbuy/rentvsbuy.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_10">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a href="javascript:void(0)" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>RENT VS BUY CALCULATOR</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_50 padding_bottom_60">\n        <article class="text_center margin_bottom_40">\n          <p>\n            Use this calculator to help you decide whether<br> renting or buying is cheaper for you.\n          </p>\n        </article>\n        <div class="calc text_center margin_top_bottom_40">\n          <form style="width : 80% ;     margin: 0 10% 0 10%;" role="form" action="#" method="#">\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="DESIRED HOME PRICE ($)">\n            </fieldset>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="DESIRED MONTHLY RATE ($)">\n            </fieldset>\n            <div class="actions">\n              <button class="btn btn_block btn_login">\n                CALCULATE\n              </button>\n            </div>\n          </form>\n          <div class="monthly_pay text_center bg_white margin_top_60 max_width_400 margin_auto">\n            <img src="./assets/images/icons/home_white.svg">\n            <article>\n              <p>Buying will be better than renting <br>after 8 Years and 4 Months</p>\n            </article>\n          </div>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/rentvsbuy/rentvsbuy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RentvsbuyPage);
    return RentvsbuyPage;
}());

//# sourceMappingURL=rentvsbuy.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var loading;
var ContactProvider = /** @class */ (function () {
    function ContactProvider(loadingCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        // the server URL
        this.baseURL = 'http://ovza.com/oriented/public';
    }
    ContactProvider.prototype.sendMail = function (email, name, subject, message) {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            // email of sender
            URLSearchParam.append('email', email);
            //subject of email
            URLSearchParam.append('subject', subject);
            //content of email
            URLSearchParam.append('content', message);
            // name of sender
            URLSearchParam.append('name', name);
            var bodyOfsentData = URLSearchParam.toString();
            _this.http.post(_this.baseURL + '/contactUs', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                var res = data.text();
                _this.loader(0);
                observer.next(eval(res));
            });
        });
    };
    ContactProvider.prototype.loader = function (data) {
        if (data == 1) {
            loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
        }
        else {
            loading.dismiss();
        }
    };
    ContactProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ContactProvider);
    return ContactProvider;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var loading;
/*
  This class has :
  1- Agents  finder data retrieving  function
*/
var AgentsProvider = /** @class */ (function () {
    function AgentsProvider(loadingCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        // the server URL
        this.baseURL = 'http://ovza.com/oriented/public';
    }
    AgentsProvider.prototype.loader = function (data) {
        if (data == 1) {
            loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
        }
        else {
            loading.dismiss();
        }
    };
    // This function retrieve all agent's data to display it in agent finder page and agent's profile page
    AgentsProvider.prototype.get_agents = function () {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/agents/online').subscribe(function (data) {
                var res = data.text();
                _this.loader(0);
                observer.next(eval(res));
            });
        });
    };
    // This function retrieve  agent's data to display it in  agent's profile page
    AgentsProvider.prototype.get_agent_data = function (userid) {
        return this.http.get(this.baseURL + '/agent/get/data/' + userid).map(function (res) { return res.json(); });
    };
    AgentsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AgentsProvider);
    return AgentsProvider;
}());

//# sourceMappingURL=agents.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var loading;
/*
  This class has :
  1- chat functions which include starting chat session and ending it , send messages
*/
var ChatProvider = /** @class */ (function () {
    function ChatProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        // the server URL
        this.baseURL = 'http://ovza.com/oriented/public';
    }
    // This function start the session between sender and reciever
    ChatProvider.prototype.start_chat_session = function (sender, receiver) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.loader(1);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append the reciever id and sender id  to url seach parameters to send it to server
            URLSearchParam.append('chatfriend_id', receiver); // reciever id
            URLSearchParam.append('chat_sender_id', sender); // usder id
            var bodyOfsentData = URLSearchParam.toString();
            _this.http.post(_this.baseURL + '/chat/startchatsession', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0);
                observer.next(data.text());
            });
        });
    };
    // Start chat's session function end
    // This function start the session between sender and reciever
    ChatProvider.prototype.end_chat_session = function (chat_id, userid) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.loader(1);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append the reciever id and sender id  to url seach parameters to send it to server
            URLSearchParam.append('chat_id', chat_id); // chat id
            URLSearchParam.append('user_id', userid); // usder id
            var bodyOfsentData = URLSearchParam.toString();
            _this.http.post(_this.baseURL + '/chat/endchatsession', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0);
                observer.next(data.text());
            });
        });
    };
    // End chat's session function End
    // This function send messages between sender and reciever
    ChatProvider.prototype.send_chat_message = function (message, chat_id, receiver) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            _this.loader(1);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            //Append the reciever id , chat id  and message to url seach parameters to send it to server
            URLSearchParam.append('receiver', receiver); // reciever id
            URLSearchParam.append('to', chat_id); // chat id
            URLSearchParam.append('message', message); // message
            var bodyOfsentData = URLSearchParam.toString();
            _this.http.post(_this.baseURL + '/chat/send', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                _this.loader(0);
                observer.next(data.text());
            });
        });
    };
    ChatProvider.prototype.get_chat_messages = function (chat_id) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"](function (observer) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            URLSearchParam.append('chat_id', chat_id); // reciever id
            var bodyOfsentData = URLSearchParam.toString();
            _this.http.post(_this.baseURL + '/chat/get/messages', bodyOfsentData, { headers: headers }).subscribe(function (data) {
                observer.next(data.text());
            });
        });
    };
    // End send message function End
    ChatProvider.prototype.loader = function (data) {
        if (data == 1) {
            loading = this.loadingCtrl.create({
                content: 'Please wait...',
            });
            loading.present();
        }
        else {
            loading.dismiss();
        }
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listdet2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__openhouse_openhouse__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var obj;
var prev;
/**
 * Generated class for the Listdet2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Listdet2Page = /** @class */ (function () {
    function Listdet2Page(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitted = false;
        this.type = localStorage.getItem('type');
        this.listdata = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            bedrooms: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            bathrooms: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            yearbuilt: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null),
            modmadein: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null),
            videourl: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null),
            about: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
        });
        prev = this.navParams.get('p');
    }
    Listdet2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Listdet2Page');
        if (prev.frommanage) {
            this.listdata.controls.bedrooms.setValue(prev.beds);
            this.listdata.controls.bathrooms.setValue(prev.bathrooms);
            // this.listdata.controls.archmodel.setValue(prev.)
            this.listdata.controls.yearbuilt.setValue(prev.year_built);
            this.listdata.controls.modmadein.setValue(prev.modification_on);
            this.listdata.controls.videourl.setValue(prev.videolink);
            this.listdata.controls.about.setValue(prev.aboutlisting);
        }
    };
    Listdet2Page.prototype.openhouse = function () {
        console.log(this.listdata.value);
        var data = { p: merge_options(this.listdata.value, prev) };
        console.log(data);
        if (this.listdata.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__openhouse_openhouse__["a" /* OpenhousePage */], data, { animate: false });
        }
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
    };
    Listdet2Page.prototype.ionViewWillLeave = function () {
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        obj = merge_options(prev, this.listdata.value);
        var obj2 = obj;
        sendtoincomplete(obj2);
        function sendtoincomplete(obj2) {
            //remove
            rename2("availble", "availablestatus", obj2);
            rename2("bathrooms", "bathrooms", obj2);
            rename2("currency", "currency", obj2);
            rename2("date", "listeddate", obj2);
            //rename("endtime", "listenddate", data)
            rename2("fireclosemonth", "permonthpayment", obj2);
            rename2("floors", "forclosure", obj2);
            rename2("foreclose", "forclosure", obj2);
            rename2("lotsize", "lotsize", obj2);
            rename2("lottype", "lotsizetype", obj2);
            rename2("modmadein", "modification_on", obj2);
            rename2("paddress", "listaddress2", obj2);
            rename2("pcity", "listaddress1", obj2);
            rename2("plabel", "type", obj2);
            rename2("ppostcode", "zipcode", obj2);
            rename2("price", "list_price", obj2);
            rename2("psize", "homesize", obj2);
            rename2("ptype", "property_type", obj2);
            rename2("starttime", "liststartdate", obj2);
            rename2("videourl", "videolink", obj2);
            rename2("yearbuilt", "year_built", obj2);
            rename2("bedrooms", "beds", obj2);
            rename2("about", "aboutlisting", obj2);
            obj2["userid"] = localStorage.getItem('userid');
            obj2["maxprice"] = obj2["price"];
            if (obj2['latitude'] == undefined) {
                obj2['latitude'] = null;
                obj2['longtitude'] = null;
            }
            obj2["liststartdate"] = null;
            obj2["pricelistflag"] = null;
            obj2['otherthingsnote'] = null;
            obj2['stories'] = null;
            console.log(obj2['list_status']);
            if (obj2['list_status'] == undefined) {
                obj2['list_status'] = -1;
            }
            obj2['featured_status'] = null;
            obj2['featured_expired'] = null;
            obj2['list_properties'] = null;
            obj2['owner_type'] = null;
            if (obj2['PriceState'] == true) {
                obj2['PriceState'] = 1;
            }
            else {
                obj2['PriceState'] = 0;
            }
            settozero(obj2);
        }
        function rename2(old_key, new_key, obj) {
            if (obj[old_key] != undefined) {
                if (new_key != "") {
                    if (old_key !== new_key) {
                        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
                        delete obj[old_key];
                    }
                }
            }
            else {
                obj[new_key] = null;
            }
        }
        function settozero(obj) {
            for (var key in obj) {
                if (obj[key] == null) {
                    obj[key] = 0;
                }
            }
        }
        console.log(obj2);
        this.dash.addlisting(obj2).subscribe(function (data) {
        });
    };
    Listdet2Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    Listdet2Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_7__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    Listdet2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-listdet2',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listdet2/listdet2.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>LIST DETAILS</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_10 padding_bottom_40">\n        <div class="list_detail text_center">\n          <form style="width : 80% ;     margin: 0 10% 0 10%;" [formGroup]="listdata">\n            <h4 class="input_title">BEDROOMS</h4>\n            <fieldset>\n              <select class="input select_box" formControlName="bedrooms">\n                <option selected disbaled value="null">STUDIO</option>\n                <option value="1">1</option>\n                <option value="2">2</option>\n                <option value="3">3</option>\n                <option value="4">4</option>\n                <option value="5">5</option>\n                <option value="6">6</option>\n                <option value="7">7</option>\n                <option value="8">8</option>\n                <option value="9">9</option>\n                <option value="10">10+</option>\n              </select>\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.bedrooms.valid)">Please Enter Number Of Bed\n              Rooms</p>\n          </div>\n            <h4 class="input_title">BATHROOMS</h4>\n            <fieldset>\n              <select class="input select_box" formControlName="bathrooms">\n                <option selected disabled value="null">Bathrooms</option>\n                <option value="1">1</option>\n                <option value="1.5">1.5</option>\n                <option value="2">2</option>\n                <option value="2.5">2.5</option>\n                <option value="3">3</option>\n                <option value="3.5">3.5</option>\n                <option value="4">4</option>\n                <option value="4.5">4.5</option>\n                <option value="5">5</option>\n                <option value="5.5">5.5</option>\n                <option value="6">6</option>\n                <option value="6.5">6.5</option>\n                <option value="7">7</option>\n\n              </select>\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.bathrooms.valid)">Please Enter Number Of\n              Bathrooms</p>\n          </div>\n            <!--<fieldset>-->\n              <!--<select class="input select_box" formControlName="archmodel">-->\n                <!--<option selected disabled value="null">ARCHITECTURAL MODEL</option>-->\n                <!--<option value="1">1</option>-->\n                <!--<option value="2">2</option>-->\n                <!--<option value="3">3</option>-->\n              <!--</select>-->\n            <!--</fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;-->\n              <!--margin-top: 2px;">-->\n            <!--<p style="margin-bottom: 13px;color: red ;-->\n              <!--margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.archmodel.valid)">Please Enter Archmodel</p>-->\n          <!--</div>-->\n            <fieldset>\n              <input class="input" type="number" name="" placeholder="Year Built In" formControlName="yearbuilt">\n            </fieldset><div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.yearbuilt.valid)">Please Enter Year\n              Built</p>\n          </div>\n            <fieldset>\n              <input class="input" type="number" name="" placeholder="Modification Made In" formControlName="modmadein">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.modmadein.valid)">Please Enter Modification\n              Made Date</p>\n          </div>\n            <fieldset>\n              <input class="input" type="url" name="" placeholder="VIDEO URL" formControlName="videourl">\n            </fieldset>\n\n            <fieldset>\n              <textarea class="input textarea" name="" placeholder="ABOUT THIS PROPERTY"\n                        formControlName="about"></textarea>\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.about.valid)">Please Enter More Details\n              About Property</p>\n          </div>\n          </form>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="openhouse();submitted=true"><img src="./assets/images/icons/sent-mail.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listdet2/listdet2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], Listdet2Page);
    return Listdet2Page;
}());

//# sourceMappingURL=listdet2.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenhousePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__room_available1_room_available1__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_dashboard_dashboard__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var obj3;
var obj;
var prev;
var counter;
/**
 * Generated class for the OpenhousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpenhousePage = /** @class */ (function () {
    function OpenhousePage(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitted = false;
        this.type = localStorage.getItem('type');
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd.mm.yyyy',
            inline: true,
            showTodayBtn: false,
        };
        prev = this.navParams.get('p');
        counter = this.navParams.get('c');
        if (counter == undefined) {
            counter = 0;
        }
    }
    OpenhousePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpenhousePage');
    };
    OpenhousePage.prototype.onDateChanged = function (event) {
        console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.date = event.epoc;
    };
    OpenhousePage.prototype.room_available = function () {
        obj3 = { date: this.date, starttime: this.timeStarts, endtime: this.timeend };
        var data = { p: merge_options(obj3, prev) };
        if (this.timeend != undefined && this.timeStarts != undefined && this.date != undefined)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__room_available1_room_available1__["a" /* RoomAvailable1Page */], data);
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
    };
    OpenhousePage.prototype.ionViewWillLeave = function () {
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        obj = merge_options(obj3, prev);
        var obj2 = obj;
        sendtoincomplete(obj2);
        function sendtoincomplete(obj2) {
            //remove
            rename2("availble", "availablestatus", obj2);
            rename2("bathrooms", "bathrooms", obj2);
            rename2("currency", "currency", obj2);
            rename2("date", "listeddate", obj2);
            //rename("endtime", "listenddate", data)
            rename2("fireclosemonth", "permonthpayment", obj2);
            rename2("floors", "forclosure", obj2);
            rename2("foreclose", "forclosure", obj2);
            rename2("lotsize", "lotsize", obj2);
            rename2("lottype", "lotsizetype", obj2);
            rename2("modmadein", "modification_on", obj2);
            rename2("paddress", "listaddress2", obj2);
            rename2("pcity", "listaddress1", obj2);
            rename2("plabel", "type", obj2);
            rename2("ppostcode", "zipcode", obj2);
            rename2("price", "list_price", obj2);
            rename2("psize", "homesize", obj2);
            rename2("ptype", "property_type", obj2);
            rename2("starttime", "liststartdate", obj2);
            rename2("videourl", "videolink", obj2);
            rename2("yearbuilt", "year_built", obj2);
            rename2("bedrooms", "beds", obj2);
            rename2("about", "aboutlisting", obj2);
            obj2["userid"] = localStorage.getItem('userid');
            obj2["maxprice"] = obj2["price"];
            if (obj2['latitude'] == undefined) {
                obj2['latitude'] = null;
                obj2['longtitude'] = null;
            }
            obj2["liststartdate"] = null;
            obj2["pricelistflag"] = null;
            obj2['otherthingsnote'] = null;
            obj2['stories'] = null;
            console.log(obj2['list_status']);
            if (obj2['list_status'] == undefined) {
                obj2['list_status'] = -1;
            }
            obj2['featured_status'] = null;
            obj2['featured_expired'] = null;
            obj2['list_properties'] = null;
            obj2['owner_type'] = null;
            if (obj2['PriceState'] == true) {
                obj2['PriceState'] = 1;
            }
            else {
                obj2['PriceState'] = 0;
            }
            settozero(obj2);
        }
        function rename2(old_key, new_key, obj) {
            if (obj[old_key] != undefined) {
                if (new_key != "") {
                    if (old_key !== new_key) {
                        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
                        delete obj[old_key];
                    }
                }
            }
            else {
                obj[new_key] = null;
            }
        }
        function settozero(obj) {
            for (var key in obj) {
                if (obj[key] == null) {
                    obj[key] = 0;
                }
            }
        }
        console.log(obj2);
        this.dash.addlisting(obj2).subscribe(function (data) {
        });
    };
    OpenhousePage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    OpenhousePage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    OpenhousePage.prototype.addmore = function () {
        if (this.date && this.timeStarts && this.timeend) {
            if (counter != 3) {
                console.log(counter);
                counter++;
                var data = { p: counter };
                console.log(data);
                // this.dash.agentlic(localStorage.getItem('userid'), this.licinfo.value).subscribe((data) => {
                //   this.res = data;
                //   this.res = this.res.replace(/\s/g, '');
                //
                //   this.res = JSON.parse(this.res);
                //   if(this.res.status == 1) {
                //     this.navCtrl.push(OpenhousePage , data) ;
                //   }
                // });
            }
        }
    };
    OpenhousePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-openhouse',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/openhouse/openhouse.html"*/'<ion-content>\n\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>OPEN HOUSE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="margin_top_30">\n        <div class="open_house text_center max_width_400 margin_auto margin_bottom_40">\n          <h5>OPEN DATE</h5>\n          <my-date-picker style="margin-left: 12%"  [options]="myDatePickerOptions"\n                          (dateChanged)="onDateChanged($event)"></my-date-picker>\n          <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;"><p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !(date!=undefined))">Please Enter Property Type</p>\n          </div>\n        </div>\n        <form role="form" action="#" method="#" name="openhouse" style="width:80%; margin:0 10% 0 10% ; ">\n          <fieldset class="input select_box">\n\n            <ion-datetime placeholder="Start time" displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="timeStarts"\n                          name="timeStarts"></ion-datetime>\n\n          </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n          <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !(timeStarts!=undefined))">Please Enter Property Type</p>\n        </div>\n          <fieldset class="input select_box">\n\n            <ion-datetime placeholder="End time" displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="timeend"\n                          name="timeend"></ion-datetime>\n\n          </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n          <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !(timeend!=undefined))">Please Enter Property Type</p>\n        </div>\n        </form>\n\n\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="room_available();submitted=true"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/openhouse/openhouse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_dashboard_dashboard__["a" /* DashboardProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], OpenhousePage);
    return OpenhousePage;
}());

//# sourceMappingURL=openhouse.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAvailable1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__room_available2_room_available2__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
/**
 * Generated class for the RoomAvailable1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomAvailable1Page = /** @class */ (function () {
    function RoomAvailable1Page(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitted = false;
        this.type = localStorage.getItem('type');
        this.room = {};
        prev = this.navParams.get('p');
    }
    RoomAvailable1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomAvailable1Page');
    };
    RoomAvailable1Page.prototype.room_available = function () {
        console.log(this.room);
        console.log(this.room);
        var data = { p: merge_options(this.room, prev) };
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        if (!isEmpty(this.room)) {
            if (checkfalse(this.room)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__room_available2_room_available2__["a" /* RoomAvailable2Page */], data);
            }
            else {
                this.room = {};
            }
        }
        function checkfalse(objects) {
            for (var key in objects) {
                var value = objects[key];
                if (value == true) {
                    var trueflag = true;
                }
            }
            if (trueflag) {
                return true;
            }
            else {
                return false;
            }
        }
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
    };
    RoomAvailable1Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    RoomAvailable1Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RoomAvailable1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-room-available1',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available1/room-available1.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>ROOMS AVAILABLE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40">\n        <div class="check_rooms">\n          <div class="text_center title">\n            <h5>Tell users about your home</h5>\n            <h6>Highlight your property’s best features</h6>\n          </div>\n          <div class="check">\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.meeting"/>\n              Meeting Room\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.confroom"/>\n              Conference Room\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.library"/>\n              Library\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.storage"/>\n              Storage Room\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.vault"/>\n              Vault\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.reception"/>\n              Reception\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.break"/>\n              Break Room\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.printer"/>\n              Printer Room\n            </label>\n          </div>\n          <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !((room | json) != ({} | json)))">Please Select One Option Ay Least</p>\n          </div>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="submitted=true;room_available()"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available1/room-available1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], RoomAvailable1Page);
    return RoomAvailable1Page;
}());

//# sourceMappingURL=room-available1.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAvailable2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__room_available3_room_available3__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
/**
 * Generated class for the RoomAvailable2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomAvailable2Page = /** @class */ (function () {
    function RoomAvailable2Page(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitted = false;
        this.type = localStorage.getItem('type');
        this.room = {};
        prev = this.navParams.get('p');
        console.log(prev);
    }
    RoomAvailable2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomAvailable2Page');
    };
    RoomAvailable2Page.prototype.room_available = function () {
        console.log(this.room);
        var data = { p: merge_options(this.room, prev) };
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        if (!isEmpty(this.room)) {
            if (checkfalse(this.room)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__room_available3_room_available3__["a" /* RoomAvailable3Page */], data);
            }
            else {
                this.room = {};
            }
        }
        function checkfalse(objects) {
            for (var key in objects) {
                var value = objects[key];
                if (value == true) {
                    var trueflag = true;
                }
            }
            if (trueflag) {
                return true;
            }
            else {
                return false;
            }
        }
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
    };
    RoomAvailable2Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    RoomAvailable2Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RoomAvailable2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-room-available2',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available2/room-available2.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>ROOMS AVAILABLE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40">\n        <div class="check_rooms">\n          <div class="text_center title">\n            <h5>Tell users about your home</h5>\n            <h6>Highlight your property’s best features</h6>\n          </div>\n          <div class="check">\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.meeting"/>\n              Fans\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.aircorn"/>\n              Aircon\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.heater"/>\n              Heater\n            </label>\n          </div>\n        </div>\n        <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n          <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !((room | json) != ({} | json)))">Please Select One Option Ay Least</p>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="room_available();submitted=true;"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available2/room-available2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], RoomAvailable2Page);
    return RoomAvailable2Page;
}());

//# sourceMappingURL=room-available2.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAvailable3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__room_available4_room_available4__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
var RoomAvailable3Page = /** @class */ (function () {
    function RoomAvailable3Page(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.submitted = false;
        this.type = localStorage.getItem('type');
        this.room = {};
        prev = this.navParams.get('p');
    }
    RoomAvailable3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomAvailable3Page');
    };
    RoomAvailable3Page.prototype.room_available = function () {
        var data = { p: merge_options(this.room, prev) };
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        if (!isEmpty(this.room)) {
            if (checkfalse(this.room)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__room_available4_room_available4__["a" /* RoomAvailable4Page */], data);
            }
            else {
                this.room = {};
            }
        }
        function checkfalse(objects) {
            for (var key in objects) {
                var value = objects[key];
                if (value == true) {
                    var trueflag = true;
                }
            }
            if (trueflag) {
                return true;
            }
            else {
                return false;
            }
        }
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
    };
    RoomAvailable3Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    RoomAvailable3Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RoomAvailable3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-room-available3',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available3/room-available3.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>ROOMS AVAILABLE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40">\n        <div class="check_rooms">\n          <div class="text_center title">\n            <h5>Tell users about your home</h5>\n            <h6>Highlight your property’s best features</h6>\n          </div>\n          <div class="check">\n            <label>\n              <input type="checkbox" class="option-input checkbox"  [(ngModel)]="room.garageattached"/>\n              Garage Attached\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.garagedetached"/>\n              Garage Dettached\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.onstreetparking" />\n              On Street Parking\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.offstreetparking"/>\n              Off Street Parking\n            </label>\n          </div>\n        </div>\n        <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n          <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !((room | json) != ({} | json)))">Please Select One Option Ay Least</p>\n        </div>\n\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="room_available();submitted=true;"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available3/room-available3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], RoomAvailable3Page);
    return RoomAvailable3Page;
}());

//# sourceMappingURL=room-available3.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAvailable4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__room_available5_room_available5__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
/**
 * Generated class for the RoomAvailable4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomAvailable4Page = /** @class */ (function () {
    function RoomAvailable4Page(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.room = {};
        this.submitted = false;
        prev = this.navParams.get('p');
    }
    RoomAvailable4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomAvailable4Page');
    };
    RoomAvailable4Page.prototype.room_available = function () {
        var data = { p: merge_options(this.room, prev) };
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        if (!isEmpty(this.room)) {
            if (checkfalse(this.room)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__room_available5_room_available5__["a" /* RoomAvailable5Page */], data);
            }
            else {
                this.room = {};
            }
        }
        function checkfalse(objects) {
            for (var key in objects) {
                var value = objects[key];
                if (value == true) {
                    var trueflag = true;
                }
            }
            if (trueflag) {
                return true;
            }
            else {
                return false;
            }
        }
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
    };
    RoomAvailable4Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    RoomAvailable4Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RoomAvailable4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-room-available4',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available4/room-available4.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>ROOMS AVAILABLE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40">\n        <div class="check_rooms">\n          <div class="text_center title">\n            <h5>Tell users about your home</h5>\n            <h6>Highlight your property’s best features</h6>\n          </div>\n          <div class="check">\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.balcony"/>\n              Balcony\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.frontlawn"/>\n              Front Lawn\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.garden"/>\n              Garden\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.porch"/>\n              Porch\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.terrace"/>\n              Terrace\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.entrancegate"/>\n              Entrance Gate\n            </label>\n          </div>\n        </div>\n        <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n          <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !((room | json) != ({} | json)))">Please Select One Option Ay Least</p>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="room_available();submitted=true ; "><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available4/room-available4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], RoomAvailable4Page);
    return RoomAvailable4Page;
}());

//# sourceMappingURL=room-available4.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAvailable5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__room_available6_room_available6__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
/**
 * Generated class for the RoomAvailable5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomAvailable5Page = /** @class */ (function () {
    function RoomAvailable5Page(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.room = {};
        this.submitted = false;
        prev = this.navParams.get('p');
    }
    RoomAvailable5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomAvailable5Page');
    };
    RoomAvailable5Page.prototype.room_available = function () {
        var data = { p: merge_options(this.room, prev) };
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        if (!isEmpty(this.room)) {
            if (checkfalse(this.room)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__room_available6_room_available6__["a" /* RoomAvailable6Page */], data);
            }
            else {
                this.room = {};
            }
        }
        function checkfalse(objects) {
            for (var key in objects) {
                var value = objects[key];
                if (value == true) {
                    var trueflag = true;
                }
            }
            if (trueflag) {
                return true;
            }
            else {
                return false;
            }
        }
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
    };
    RoomAvailable5Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    RoomAvailable5Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RoomAvailable5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-room-available5',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available5/room-available5.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>ROOMS AVAILABLE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40">\n        <div class="check_rooms">\n          <div class="text_center title">\n            <h5>Tell users about your home</h5>\n            <h6>Highlight your property’s best features</h6>\n          </div>\n          <div class="check">\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.cabletv"/>\n              Cable TV\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.internet"/>\n              Internet\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.seuritysystem"/>\n              Security System\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.elevator"/>\n              Elevator\n            </label>\n          </div>\n        </div>\n        <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n          <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !((room | json) != ({} | json)))">Please Select One Option Ay Least</p>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="room_available();submitted=true;"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available5/room-available5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], RoomAvailable5Page);
    return RoomAvailable5Page;
}());

//# sourceMappingURL=room-available5.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAvailable6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__room_available7_room_available7__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
/**
 * Generated class for the RoomAvailable6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomAvailable6Page = /** @class */ (function () {
    function RoomAvailable6Page(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.room = {};
        prev = this.navParams.get('p');
    }
    RoomAvailable6Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomAvailable6Page');
    };
    RoomAvailable6Page.prototype.room_available = function () {
        var data = { p: merge_options(this.room, prev) };
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        if (!isEmpty(this.room)) {
            if (checkfalse(this.room)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__room_available7_room_available7__["a" /* RoomAvailable7Page */], data);
            }
            else {
                this.room = {};
            }
        }
        function checkfalse(objects) {
            for (var key in objects) {
                var value = objects[key];
                if (value == true) {
                    var trueflag = true;
                }
            }
            if (trueflag) {
                return true;
            }
            else {
                return false;
            }
        }
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
    };
    RoomAvailable6Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    RoomAvailable6Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RoomAvailable6Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-room-available6',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available6/room-available6.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>ROOMS AVAILABLE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40">\n        <div class="check_rooms">\n          <div class="text_center title">\n            <h5>Tell users about your home</h5>\n            <h6>Highlight your property’s best features</h6>\n          </div>\n          <div class="check">\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.meeting"/>\n              Tile\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.carpet"/>\n              Carpet\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.concrete"/>\n              Concrete\n            </label>\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.hardwood"/>\n              Hardwood\n            </label>\n          </div>\n        </div>\n        <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n          <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !((room | json) != ({} | json)))">Please Select One Option Ay Least</p>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="room_available();submitted=true"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available6/room-available6.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], RoomAvailable6Page);
    return RoomAvailable6Page;
}());

//# sourceMappingURL=room-available6.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomAvailable7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_photos_upload_photos__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
/**
 * Generated class for the RoomAvailable7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomAvailable7Page = /** @class */ (function () {
    function RoomAvailable7Page(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.room = {};
        this.submitted = false;
        prev = this.navParams.get('p');
    }
    RoomAvailable7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomAvailable7Page');
    };
    RoomAvailable7Page.prototype.room_available = function () {
        var data = { p: merge_options(this.room, prev) };
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        if (!isEmpty(this.room)) {
            if (checkfalse(this.room)) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__upload_photos_upload_photos__["a" /* UploadPhotosPage */], data);
            }
            else {
                this.room = {};
            }
        }
        function checkfalse(objects) {
            for (var key in objects) {
                var value = objects[key];
                if (value == true) {
                    var trueflag = true;
                }
            }
            if (trueflag) {
                return true;
            }
            else {
                return false;
            }
        }
        function isEmpty(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
    };
    RoomAvailable7Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    RoomAvailable7Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RoomAvailable7Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-room-available7',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available7/room-available7.html"*/'<ion-content>\n  <header class="header text_center margin_bottom_40">\n    <div class="container">\n      <div class="row">\n        <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n          src="./assets/images/icons/back.svg"></a></span>\n        <span class="text_center col-60"><h4>ROOMS AVAILABLE</h4></span>\n        <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n          src="./assets/images/icons/listing-option.svg"></a></span>\n      </div>\n    </div>\n  </header>\n  <div class="container">\n    <section class="padding_top_bottom_40">\n      <div class="check_rooms">\n        <div class="text_center title">\n          <h5>Tell users about your home</h5>\n          <h6>Highlight your property’s best features</h6>\n        </div>\n        <div class="check">\n          <label>\n            <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.city"/>\n            City\n          </label>\n          <label>\n            <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.mountain"/>\n            Mountain\n          </label>\n          <label>\n            <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.water"/>\n            Water\n          </label>\n          <label>\n            <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.park"/>\n            Park\n          </label>\n          <label>\n            <input type="checkbox" class="option-input checkbox" [(ngModel)]="room.building"/>\n            Building\n          </label>\n        </div>\n      </div>\n      <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n        <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !((room | json) != ({} | json)))">Please Select One Option Ay Least</p>\n      </div>\n    </section>\n  </div>\n  <nav class="nav_tabs">\n    <ul class="left_side">\n      <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n      <li><a (click)="opennav(\'add\')">\n        <img\n          [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n      </li> </ul>\n    <ul class="center_side">\n      <li><a (click)="submitted=true;room_available();"><img src="./assets/images/icons/next.svg"></a></li>\n    </ul>\n    <ul class="right_side">\n      <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n      <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n    </ul>\n  </nav>\n\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/room-available7/room-available7.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], RoomAvailable7Page);
    return RoomAvailable7Page;
}());

//# sourceMappingURL=room-available7.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photopagepopup_photopagepopup__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_image_picker__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__managlisting_managlisting__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var prev;






var UploadPhotosPage = /** @class */ (function () {
    function UploadPhotosPage(alertCtrl, dash, imagePicker, transfer, platform, camera, photoViewer, file, filePath, actionSheetCtrl, popover, navCtrl, navParams, toast) {
        this.alertCtrl = alertCtrl;
        this.dash = dash;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.platform = platform;
        this.camera = camera;
        this.photoViewer = photoViewer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.type = localStorage.getItem('type');
        this.photos = {};
        this.selectedphoto = [];
        this.uriarray = [];
        this.lastImage = null;
        prev = this.navParams.get('p');
    }
    UploadPhotosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadPhotosPage');
    };
    UploadPhotosPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    UploadPhotosPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    UploadPhotosPage.prototype.uploadphoto = function () {
    };
    UploadPhotosPage.prototype.paynow = function () {
        var _this = this;
        var data2 = { p: merge_options(this.photos, prev) };
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        this.temp = data2['p'];
        var data = this.temp;
        rename("archmodel", "", data); //remove
        rename("availble", "availablestatus", data);
        rename("bathrooms", "bathrooms", data);
        rename("currency", "currency", data);
        rename("date", "listeddate", data);
        //rename("endtime", "listenddate", data)
        rename("fireclosemonth", "permonthpayment", data);
        rename("floors", "forclosure", data);
        rename("foreclose", "forclosure", data);
        rename("lotsize", "lotsize", data);
        rename("lottype", "lotsizetype", data);
        rename("modmadein", "modification_on", data);
        rename("paddress", "listaddress2", data);
        rename("pcity", "listaddress1", data);
        rename("plabel", "type", data);
        rename("ppostcode", "zipcode", data);
        rename("price", "list_price", data);
        rename("psize", "homesize", data);
        rename("ptype", "property_type", data);
        rename("starttime", "liststartdate", data);
        rename("videourl", "videolink", data);
        rename("yearbuilt", "year_built", data);
        rename("bedrooms", "beds", data);
        rename("about", "aboutlisting", data);
        data["userid"] = localStorage.getItem('userid');
        data["imgname"] = this.selectedphoto3;
        data["maxprice"] = data["price"];
        if (data['latitude'] == undefined) {
            data['latitude'] = null;
            data['longtitude'] = null;
        }
        data["liststartdate"] = null;
        data["pricelistflag"] = null;
        data['otherthingsnote'] = null;
        data['stories'] = null;
        if (data['list_status'] == 0 || data['list_status'] == undefined) {
            data['list_status'] = null;
        }
        data['featured_status'] = null;
        data['featured_expired'] = null;
        data['list_properties'] = null;
        data['owner_type'] = null;
        if (data['PriceState'] == true) {
            data['PriceState'] = 1;
        }
        else {
            data['PriceState'] = 0;
        }
        settozero(data);
        //console.log(data) ;
        if (data.frommanage) {
            this.dash.addlisting(data).subscribe(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'You Successfully Edited A List',
                    buttons: [{ text: "Ok", handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__managlisting_managlisting__["a" /* ManaglistingPage */]);
                            } }]
                });
                alert.present();
            });
        }
        else {
            var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_0__photopagepopup_photopagepopup__["a" /* PhotopagepopupPage */], { p: data }, { cssClass: "paynowpop" });
            pop.present();
        }
        function rename(old_key, new_key, obj) {
            if (obj[old_key] != undefined) {
                if (new_key != "") {
                    if (old_key !== new_key) {
                        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
                        delete obj[old_key];
                    }
                }
            }
        }
        function settozero(obj) {
            for (var key in obj) {
                if (obj[key] == null) {
                    obj[key] = 0;
                }
            }
        }
        //console.log(this.temp)
    };
    UploadPhotosPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image ',
            buttons: [
                {
                    text: 'Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
            ]
        });
        actionSheet.present();
    };
    UploadPhotosPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    UploadPhotosPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    UploadPhotosPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    UploadPhotosPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.uriarray.push(_this.pathForImage(_this.lastImage));
            //  this.navCtrl.push(UploadImagePage, {
            //     avatar: this.lastImage
            //   })
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    UploadPhotosPage.prototype.presentToast = function (msg) {
        var toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UploadPhotosPage.prototype.upload = function () {
        var _this = this;
        for (var x = 0; x < this.uriarray.length; x++) {
            var filename = this.uriarray[x];
            // File for Upload
            var targetPath = this.pathForImage(this.lastImage);
            // Destination URL
            var url, options;
            url = "http://ovza.com/oriented/public/upload/avatar";
            options = {
                fileKey: "avatar",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'avatar': filename, 'id': localStorage.getItem('userid'), type: 'List' }
            };
            var fileTransfer = this.transfer.create();
            // Use the FileTransfer to upload the image
            fileTransfer.upload(targetPath, url, options, true).then(function (data) {
                // let response = JSON.parse(data.response);
            }, function (err) {
                _this.presentToast('Error while uploading file.');
            });
        }
    };
    UploadPhotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-upload-photos',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/upload-photos/upload-photos.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>PHOTOS</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div class="margin_top_40 margin_bottom_60">\n          <div class="add_listing">\n            <h5>PHOTOS CAN BRING SPACE TO YOUR LIFE</h5>\n            <article>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n                fugiat.\n              </p>\n            </article>\n            <div class="actions padding_left_right_20 text_center">\n              <button class="btn btn_inline btn_login" (click)="presentActionSheet()">\n                <img src="./assets/images/icons/add-plus-button.svg" name="avatar" >  ADD FILES\n              </button>\n              <button class="btn btn_inline btn_login">\n                <img src="./assets/images/icons/upload-to-cloud.svg" (click)="upload()" *ngIf="false"> UPLOAD FILES\n              </button>\n            </div>\n            <div class="gallery">\n              <ul *ngFor="let p of uriarray">\n                <li>\n                  <img [src]="p" title="Ovza">\n                </li>\n\n              </ul>\n            </div>\n          </div>\n\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="paynow()"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/upload-photos/upload-photos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], UploadPhotosPage);
    return UploadPhotosPage;
}());

//# sourceMappingURL=upload-photos.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotopagepopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listnwpay_listnwpay__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managlisting_managlisting__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var data;
/**
 * Generated class for the PhotopagepopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhotopagepopupPage = /** @class */ (function () {
    function PhotopagepopupPage(alertCtrl, dash, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.dash = dash;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        data = this.navParams.get('p');
    }
    PhotopagepopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhotopagepopupPage');
    };
    PhotopagepopupPage.prototype.paynow = function () {
        var _this = this;
        data.list_status = 2;
        if (data.frommanage) {
            rename("id", "lid", data);
            this.dash.editlisting(data).subscribe(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'Your Changes Has Been Added',
                    buttons: [{ text: "Ok", handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__listnwpay_listnwpay__["a" /* ListnwpayPage */]);
                            } }]
                });
                alert.present();
            });
        }
        else {
            this.dash.addlisting(data).subscribe(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'You Successfully Added A List',
                    buttons: [{ text: "Ok", handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__listnwpay_listnwpay__["a" /* ListnwpayPage */]);
                            } }]
                });
                alert.present();
            });
        }
        function rename(old_key, new_key, obj) {
            if (obj[old_key] != undefined) {
                if (new_key != "") {
                    if (old_key !== new_key) {
                        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
                        delete obj[old_key];
                    }
                }
            }
        }
    };
    PhotopagepopupPage.prototype.saveforlater = function () {
        var _this = this;
        data.list_status = 2;
        if (data.frommanage) {
            rename("id", "lid", data);
            this.dash.editlisting(data).subscribe(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'Your Changes Has Been Added',
                    buttons: [{ text: "Ok", handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__managlisting_managlisting__["a" /* ManaglistingPage */]);
                            } }]
                });
                alert.present();
            });
        }
        else {
            this.dash.addlisting(data).subscribe(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'You Successfully Added A List',
                    buttons: [{ text: "Ok", handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__managlisting_managlisting__["a" /* ManaglistingPage */]);
                            } }]
                });
                alert.present();
            });
        }
        function rename(old_key, new_key, obj) {
            if (obj[old_key] != undefined) {
                if (new_key != "") {
                    if (old_key !== new_key) {
                        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
                        delete obj[old_key];
                    }
                }
            }
        }
    };
    PhotopagepopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-photopagepopup',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/photopagepopup/photopagepopup.html"*/'<ion-content>\n  <div class="sm_box center_box text_center list_detail_pop" style="width :inherit ; height: inherit ;  ">\n    <h5>Almost there. <br>Please pay for your listing <br>to upload it to our website</h5>\n    <button class="btn btn_block btn_login width_150" (click)="paynow()">PAY NOW</button>\n    <a (click)="saveforlater()">SAVE FOR LATER</a>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/photopagepopup/photopagepopup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], PhotopagepopupPage);
    return PhotopagepopupPage;
}());

//# sourceMappingURL=photopagepopup.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paymentAuth_payfort_payment_auth__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the PaymentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PaymentServiceProvider = /** @class */ (function () {
    function PaymentServiceProvider(http) {
        var _this = this;
        this.http = http;
        this.baseURL = 'http://ovza.com/oriented/public';
        this.payfortConfig = new __WEBPACK_IMPORTED_MODULE_6__paymentAuth_payfort_payment_auth__["a" /* default */];
        //test Environment URL
        this.payFortapiUrl = 'https://sbpaymentservices.payfort.com/FortAPI/paymentApi';
        this.payFortMerchantPageApi = "https://sbcheckout.PayFort.com/FortAPI/paymentPage";
        // production Environment URL
        // payTabsapiUrl   = 'https://paymentservices.payfort.com/FortAPI/paymentApi';
        this.merchantFormData = new FormData;
        this.getToken = function () {
            return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
                _this.http.get(_this.baseURL + '/payment/payfort/getToken').subscribe(function (data) {
                    observer.next(data.text());
                });
            });
        };
        this.getForm = function (data) {
            console.log(data);
            return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
                _this.http.post(data.url, data.params).subscribe(function (data) {
                    observer.next(data.text());
                });
            });
        };
        this.merchant_page_request = function (card_number, card_holder_name, card_security_code, expiry_date, customer_reference) {
            return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
                var paymentParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                paymentParams.set('service_command', "TOKENIZATION");
                paymentParams.set('access_code', _this.payfortConfig.access_code);
                paymentParams.set('merchant_identifier', _this.payfortConfig.merchant_identifier);
                paymentParams.set('merchant_reference', customer_reference);
                paymentParams.set('language', _this.payfortConfig.language);
                paymentParams.set('signature', _this.payfortConfig.tokeninzation_generate_signature(customer_reference)),
                    paymentParams.set('card_number', card_number),
                    paymentParams.set('card_security_code', card_security_code),
                    paymentParams.set('card_holder_name', card_holder_name),
                    paymentParams.set('expiry_date', expiry_date),
                    paymentParams.set('remember_me', "YES");
                paymentParams.set('return_url', _this.payfortConfig.return_url);
                return _this.http.post(_this.payFortMerchantPageApi, paymentParams).subscribe(function (data) {
                    observer.next(data.text());
                });
            });
        };
        this.get_navigation_url = function (token, customer_reference, customer_email, customer_name) {
            return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
                return _this.http.post(_this.payFortapiUrl, {
                    "command": "PURCHASE",
                    "access_code": _this.payfortConfig.access_code,
                    "merchant_identifier": _this.payfortConfig.merchant_identifier,
                    "merchant_reference": customer_reference,
                    "amount": _this.payfortConfig.amount,
                    "currency": _this.payfortConfig.currency,
                    "language": _this.payfortConfig.language,
                    "customer_email": customer_email,
                    "customer_name": customer_name,
                    "token_name": token,
                    "customer_ip": "192.168.1.1",
                    "return_url": "https://ovza.com/oriented/public/payment/paymentResult?" + customer_reference,
                    "order_description": "payFromMobile",
                    "signature": _this.payfortConfig.operation_generate_signature(customer_reference, customer_email, customer_name, token)
                }).subscribe(function (data) {
                    observer.next(data.text());
                });
            });
        };
        this.response = function () {
        };
        console.log('Hello PaymentServiceProvider Provider');
    }
    PaymentServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PaymentServiceProvider);
    return PaymentServiceProvider;
}());

//# sourceMappingURL=payment-service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profinfo1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profinfo2_profinfo2__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var autocomplete;
/**
 * Generated class for the Profinfo1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Profinfo1Page = /** @class */ (function () {
    function Profinfo1Page(imagePicker, transfer, platform, camera, photoViewer, file, filePath, actionSheetCtrl, popover, navCtrl, navParams, toast) {
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.platform = platform;
        this.camera = camera;
        this.photoViewer = photoViewer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.type = localStorage.getItem('type');
        this.submitted = false;
        this.lastImage = null;
        this.profinfo = new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormGroup */]({
            businessname: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required]),
            businessaddress: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required]),
            phonenumber: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required]),
            postalcode: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required]),
            businesslocation: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required]),
        });
    }
    Profinfo1Page.prototype.ngOnInit = function () {
        var options = {
            types: ['(cities)']
        };
        autocomplete = new google.maps.places.Autocomplete(this.myinput.nativeElement, options);
        console.log(autocomplete);
    };
    Profinfo1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Profinfo1Page');
    };
    Profinfo1Page.prototype.dosomething = function (val) {
        this.value = autocomplete.getPlace();
        console.log(this.value);
    };
    Profinfo1Page.prototype.save = function () {
        var _this = this;
        console.log(autocomplete.getPlace());
        if (this.profinfo.valid || this.selectedphoto != undefined) {
            var filename = this.lastImage;
            // File for Upload
            var targetPath = this.pathForImage(this.lastImage);
            // Destination URL
            var url, options;
            url = "http://ovza.com/oriented/public/upload/avatar";
            options = {
                fileKey: "avatar",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'avatar': filename, 'id': localStorage.getItem('userid'), type: 'Agencylogo' }
            };
            var fileTransfer = this.transfer.create();
            // Use the FileTransfer to upload the image
            fileTransfer.upload(targetPath, url, options, true).then(function (data) {
                // let response = JSON.parse(data.response);
            }, function (err) {
                _this.presentToast('Error while uploading file.');
            });
            var data = { page1: this.profinfo.value };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__profinfo2_profinfo2__["a" /* Profinfo2Page */], data);
        }
    };
    Profinfo1Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    Profinfo1Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    Profinfo1Page.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            // title: 'Select Image Source',
            buttons: [
                {
                    text: 'Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
            ]
        });
        actionSheet.present();
    };
    Profinfo1Page.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    Profinfo1Page.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    Profinfo1Page.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    Profinfo1Page.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            //  this.navCtrl.push(UploadImagePage, {
            //     avatar: this.lastImage
            //   })
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    Profinfo1Page.prototype.presentToast = function (msg) {
        var toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], Profinfo1Page.prototype, "myinput", void 0);
    Profinfo1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profinfo1',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/profinfo1/profinfo1.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <h4>PROFESSIONAL INFORMATION</h4>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_20">\n        <div class="edit_profile edit_profile_2 text_center">\n          <form style="width : 80% ;     margin: 0 10% 0 10%;" [formGroup]="profinfo" role="form" action="#" method="#">\n            <div  (click)="presentActionSheet()" class="user_img">\n              <img [src]="lastImage === null? \'./assets/images/user_img.png\' : pathForImage(lastImage)"  name="avtar" title="Ovza App">              \n              <h4>EDIT LOGO</h4>\n            </div>\n            <fieldset>\n              <label><img src="./assets/images/icons/man-user.svg"></label>\n              <input class="input has_icon" type="text" name="" placeholder="BUSINESS NAME"\n                     formControlName="businessname">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !profinfo.controls.businessname.valid)">Please Enter Business\n              Name</p>\n          </div>\n            <fieldset>\n              <label><img src="./assets/images/icons/locate-places.svg"></label>\n              <input class="input has_icon" type="text" name="" placeholder="BUSINESS ADDRESS"\n                     formControlName="businessaddress">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !profinfo.controls.businessaddress.valid)">Please Enter\n              Business Address </p>\n          </div>\n            <fieldset>\n              <label><img src="./assets/images/icons/phone-receiver.svg"></label>\n              <input class="input has_icon" type="number" name="" placeholder="PHONE NUMBER"\n                     formControlName="phonenumber">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !profinfo.controls.phonenumber.valid)">Please Enter Phone\n              Number</p>\n          </div>\n            <fieldset>\n              <label><img src="./assets/images/icons/gps.svg"></label>\n              <input class="input has_icon" type="text" name="" placeholder="POST CODE" formControlName="postalcode">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !profinfo.controls.postalcode.valid)">Please Enter Postal\n              Code</p>\n          </div>\n            <fieldset>\n              <label><img src="./assets/images/icons/gps.svg"></label>\n              <input #input class="input has_icon" type="text" name="" placeholder="BUSINESS LOCATIONS (CITY)"\n                     formControlName="businesslocation">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !profinfo.controls.businesslocation.valid)">Please Enter a\n              Valid Business Location City</p>\n          </div>\n            <div class="actions">\n              <button class="btn btn_block btn_login" (click)="submitted2=true;save()">\n                SAVE DETAILS\n              </button>\n            </div>\n          </form>\n        </div>\n      </section>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/profinfo1/profinfo1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], Profinfo1Page);
    return Profinfo1Page;
}());

//# sourceMappingURL=profinfo1.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profinfo2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agentlic_agentlic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__ = __webpack_require__(17);
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
 * Generated class for the Profinfo2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Profinfo2Page = /** @class */ (function () {
    function Profinfo2Page(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.submitted = false;
        this.profinfo = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormGroup */]({
            about: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["h" /* Validators */].required]),
            website: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](null),
            blog: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](null),
            youtube: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](null),
            facebook: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](null),
            twitter: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](null),
            google: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](null),
            lang: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */](null),
        });
        this.page1 = this.navParams.get('page1');
        console.log(this.page1);
    }
    Profinfo2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Profinfo2Page');
    };
    Profinfo2Page.prototype.save = function () {
        var _this = this;
        console.log(this.profinfo.valid);
        if (this.profinfo.valid) {
            console.log(merge_options(this.page1, this.profinfo.value));
            this.dash.profinfo(localStorage.getItem('userid'), merge_options(this.page1, this.profinfo.value)).subscribe(function (data) {
                console.log(data);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__agentlic_agentlic__["a" /* AgentlicPage */]);
            });
        }
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
    };
    Profinfo2Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    Profinfo2Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    Profinfo2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profinfo2',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/profinfo2/profinfo2.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_20">\n      <h4>PROFESSIONAL INFORMATION</h4>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_20">\n        <div class="edit_profile edit_profile_2 text_center">\n          <form [formGroup]="profinfo" style="width:80%; margin:0 10% 0 10% ; " role="form" action="#" method="#">\n            <fieldset>\n              <textarea class="input textarea" name="" placeholder="ABOUT" formControlName="about"></textarea>\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;"><p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !profinfo.controls.about.valid)">Please Enter Detailes About\n              You</p></div>\n\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="WEBSITE" formControlName="website">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !profinfo.controls.website.valid)">Please Enter Your Name</p>\n          </div>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="BLOG" formControlName="blog">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !profinfo.controls.blog.valid)">Please Enter Your Name</p>\n          </div>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="YOUTUBE LINK" formControlName="youtube">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !profinfo.controls.youtube.valid)">Please Enter Your Name</p>\n          </div>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="FACEBOOK LINK" formControlName="facebook">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !profinfo.controls.facebook.valid)">Please Enter Your Name</p>\n          </div>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="TWITTER LINK" formControlName="twitter">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !profinfo.controls.twitter.valid)">Please Enter Your Name</p>\n          </div>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="GOOGLE LINK" formControlName="google">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !profinfo.controls.google.valid)">Please Enter Your Name</p>\n          </div>\n            <fieldset>\n              <select class="input select_box" formControlName="lang">\n                <option selected="selected" value="0">LANGUAGES</option>\n                <option value="1">Arabic</option>\n                <option value="2">English</option>\n                <option value="3">Frinsh</option>\n                <option value="4">Spanish</option>\n                <option value="5">Persia</option>\n              </select>\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !profinfo.controls.lang.valid)">Please Enter Your Name</p>\n          </div>\n            <div class="actions">\n              <button class="btn btn_block btn_login" (click)="submitted=true;save()">\n                SAVE DETAILS\n              </button>\n            </div>\n          </form>\n        </div>\n      </section>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/profinfo2/profinfo2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], Profinfo2Page);
    return Profinfo2Page;
}());

//# sourceMappingURL=profinfo2.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentlicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_dashboard_dashboard__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var counter;
/**
 * Generated class for the AgentlicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgentlicPage = /** @class */ (function () {
    function AgentlicPage(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.licinfo = new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormGroup */]({
            agentlic: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required]),
            description: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* Validators */].required])
        });
        counter = this.navParams.get('p');
        if (counter == undefined) {
            counter = 0;
        }
    }
    AgentlicPage_1 = AgentlicPage;
    AgentlicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgentlicPage');
    };
    AgentlicPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    AgentlicPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    AgentlicPage.prototype.openhome = function () {
        var _this = this;
        if (!this.licinfo.valid) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        else {
            this.dash.agentlic(localStorage.getItem('userid'), this.licinfo.value).subscribe(function (data) {
                _this.res = data;
                _this.res = _this.res.replace(/\s/g, '');
                _this.res = JSON.parse(_this.res);
                if (_this.res.status == 1) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
            });
        }
    };
    AgentlicPage.prototype.addmore = function () {
        var _this = this;
        if (this.licinfo.valid) {
            if (counter != 3) {
                console.log(counter);
                counter++;
                var data = { p: counter };
                console.log(data);
                this.dash.agentlic(localStorage.getItem('userid'), this.licinfo.value).subscribe(function (data) {
                    _this.res = data;
                    _this.res = _this.res.replace(/\s/g, '');
                    _this.res = JSON.parse(_this.res);
                    if (_this.res.status == 1) {
                        _this.navCtrl.push(AgentlicPage_1, data);
                    }
                });
            }
        }
    };
    var AgentlicPage_1;
    AgentlicPage = AgentlicPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agentlic',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/agentlic/agentlic.html"*/'<ion-content>\n  <div class="wrapper">\n    <div class="fixed_btn">\n      <a><img (click)="addmore()" style="width: 20px" src="./assets/images/icons/add-plus-button.svg"></a>\n    </div>\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>AGENT LICENSE</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40">\n        <div class="edit_profile text_center">\n          <form [formGroup]="licinfo" style="width:80%; margin:0 10% 0 10% ; " role="form" action="#" method="#">\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="AGENT LICENSE" formControlName="agentlic">\n            </fieldset>\n            <fieldset>\n              <textarea class="input textarea" name="" placeholder="LICENSE INFORMATION"\n                        formControlName="description"></textarea>\n            </fieldset>\n          </form>\n        </div>\n\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="openhome()"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/agentlic/agentlic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AgentlicPage);
    return AgentlicPage;
}());

//# sourceMappingURL=agentlic.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandconditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var prev;
/**
 * Generated class for the TermsandconditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsandconditionsPage = /** @class */ (function () {
    function TermsandconditionsPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Terms';
        this.type = localStorage.getItem('type');
        this.isChecked = false;
        prev = this.navParams.get('p');
        console.log(this.type);
    }
    TermsandconditionsPage.prototype.ionViewDidLoad = function () {
        console.log(this.type);
        console.log('ionViewDidLoad TermsandconditionsPage');
    };
    TermsandconditionsPage.prototype.openedit = function () {
        if (this.isChecked) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__["a" /* EditprofilePage */], prev, { animate: false });
        }
    };
    TermsandconditionsPage.prototype.opennav = function (page) {
        // if(page == 'home'){this.navCtrl.setRoot(HomePage)}
        // if(page == 'add'){  if (this.type == "agent") {
        //   this.navCtrl.setRoot(ListpropPage)}else {
        //   this.navCtrl.setRoot(WishlistPage)  ;
        // }}
        // if(page == 'chat'){this.navCtrl.setRoot(ChatPage)}
        // if(page == 'profile'){
        //   if(localStorage.getItem('type') == 'agent'){
        //     this.navCtrl.setRoot(ManagemyaccountPage)
        //   }else {
        //     this.navCtrl.setRoot(EditprofilePage) ;
        //   }
        // }
    };
    TermsandconditionsPage.prototype.openmenu = function () {
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
    TermsandconditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termsandconditions',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/termsandconditions/termsandconditions.html"*/'<!--\n  Generated template for the TermsandconditionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n  <main>\n    <div class="wrapper">\n      <header class="header text_center">\n        <div class="container">\n          <div class="row">\n            <span class="col-20"><a (click)="this.navCtrl.pop({animate:false})" class="float_left"><img\n              src="./assets/images/icons/back.svg"></a></span>\n            <span class="text_center col-60"><h4>TERMS & CONDITIOMS</h4></span>\n            <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n              src="./assets/images/icons/listing-option.svg"></a></span>\n          </div>\n        </div>\n      </header>\n      <div class="container">\n        <section class="terms margin_top_40 padding_bottom_100">\n          <ul style="    font-family: \'Raleway\', sans-serif;\n    font-weight: 400 !important;\n    line-height: 24px;color: #7e7e7e;font-size: 14px;float:left;margin-left:5%"\n              class="sectionHeading font-size14 paragrphtext robotoregular lgraytext mgnL25 dashedLi">\n            <li>Users should be at least 18 years old</li>\n            <li>The website is only to be used for personal use for browsing available properties, or for the\n              advertising or a property that is for sale or for rent\n            </li>\n            <li>Do not upload any offensive, illegal or unethical information to the website or any other information\n              which could cause harm to us or anyone else\n            </li>\n            <li>Ovza trademarks, logos and designs cannot be used or transferred without first obtaining permission from\n              Ovza since all materials on the website are trademark protected\n            </li>\n            <li>Register all of your personal information with precision before entering our site so we can authenticate\n              your identity quickly\n            </li>\n            <li>Allow us to correspond with you via e-mail to inform you of matters regarding your account, or other\n              services provided by the OVZA or others on the site. Subscribers will be given the option to unsubscribe\n              at any time.\n            </li>\n            <li>Ovza holds its exclusive rights without any responsibility to you or others in changing the terms or\n              conditions of using the site at any time without notice. The act of using the services after the date of\n              the implementation of the changes is considered as an approval of these changes\n            </li>\n            <li>The site or the services could be unavailable due to some maintenance or development of the site, or due\n              to an unauthorized login from you or others, or for any other reasons out of Ovza’s control and you agree\n              that Ovza is not responsible for losing the service in such cases.\n            </li>\n            <li>Ovza reserves its right and exclusive authority to terminate your license, to use the site or the\n              available services without informing you and to block you from it in the future in case of any violation\n              of the terms of use\n            </li>\n            <li></li>\n            <li>Postponing the execution of any right given in the terms of use will not be considered a waiver of that\n              right\n            </li>\n            <li>Our terms of use are governed by the law of the United Kingdom, however, Ovza may initiate take legal\n              procedures in any competent jurisdiction in the following occurs: infringement of intellectual property\n              rights, trademark, or damage to the site or on information provided by the user.\n            </li>\n            <li>All the information listed in the conditions of use are a property of Ovza LLC whose headquarters reside\n              in London England at the following address:\n            </li>\n          </ul>\n          <div class="check main_color">\n            <label>\n              <input type="checkbox" class="option-input checkbox" [(ngModel)]="isChecked"/>\n              Please accept Terms and Conditions\n            </label>\n          </div>\n          <p [hidden]="!(clicked && !isChecked )">Please Accept Terms And Conditions</p>\n        </section>\n      </div>\n      <nav class="nav_tabs">\n        <ul class="left_side">\n          <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n          <li><a (click)="opennav(\'add\')">\n            <img\n              [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n          </li>\n        </ul>\n        <ul class="center_side">\n          <li><a (click)="clicked=true;openedit()"><img src="./assets/images/icons/next.svg"></a></li>\n        </ul>\n        <ul class="right_side">\n          <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n          <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n        </ul>\n      </nav>\n    </div>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/termsandconditions/termsandconditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TermsandconditionsPage);
    return TermsandconditionsPage;
}());

//# sourceMappingURL=termsandconditions.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__ = __webpack_require__(7);
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
 * Generated class for the ForgetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpassPage = /** @class */ (function () {
    function ForgetpassPage(popover, dash, navCtrl, navParams) {
        this.popover = popover;
        this.dash = dash;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.email = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            email1: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required])
        });
    }
    ForgetpassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetpassPage');
    };
    ForgetpassPage.prototype.send = function () {
        var _this = this;
        if (this.email.valid) {
            this.dash.forgetpass(this.email.value.email1).subscribe(function (data) {
                _this.res = data;
                _this.res = _this.res.replace(/\s/g, '');
                _this.res = JSON.parse(_this.res);
                console.log(_this.res);
            });
        }
    };
    ForgetpassPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    ForgetpassPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    ForgetpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgetpass',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/forgetpass/forgetpass.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>FORGOT PASSWORD</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div class="context">\n          <h3 class="main_color margin_bottom_30">REST YOUR PASSWORD</h3>\n          <p>\n            It’s alright if you’ve forgotten your password. <br>Just type your email in below and press ‘request password reset’ , and <br> we will send you a reset link. </p>\n          <form [formGroup]="email" style="width : 80% ;     margin: 0 10% 0 10%;" role="form" action="#" method="#">\n            <fieldset>\n              <label><img src="./assets/images/icons/envelope.svg"></label>\n              <input class="input has_icon" type="text" name="email" placeholder="EMAIL" formControlName="email1">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !email.controls.email1.valid)">Invalid Email</p>\n          </div>\n            <div class="actions">\n              <button class="btn btn_block btn_login" (click)="send();submitted2=true;">\n                REQUEST PASSWORD RESET\n              </button>\n            </div>\n          </form>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/forgetpass/forgetpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ForgetpassPage);
    return ForgetpassPage;
}());

//# sourceMappingURL=forgetpass.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletepopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__removelisting_removelisting__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listdet1_listdet1__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var propdata;
/**
 * Generated class for the CompletepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletepopPage = /** @class */ (function () {
    function CompletepopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        propdata = this.navParams.get('p');
    }
    CompletepopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompletepopPage');
    };
    CompletepopPage.prototype.remove = function () {
        var data = { p: propdata, type: "3" };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__removelisting_removelisting__["a" /* RemovelistingPage */], data);
    };
    CompletepopPage.prototype.editlist = function () {
        var data = { p: propdata, m: { frommanage: true } };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__listdet1_listdet1__["a" /* Listdet1Page */], data);
    };
    CompletepopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/completepop/completepop.html"*/'<ion-content>\n  <div class="xs_box center_box mang_list">\n    <ul class="padding_top_bottom_40">\n      <li (click)="editlist()"><img style="    width: 8px;" src="./assets/images/icons/next.svg">EDIT LISTING</li>\n      <li  (click)="remove()"><img style="    width: 8px;" src="./assets/images/icons/next.svg">REMOVE LISTING</li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/completepop/completepop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], CompletepopPage);
    return CompletepopPage;
}());

//# sourceMappingURL=completepop.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InactivepopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__statistics_statistics__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__removelisting_removelisting__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listdet1_listdet1__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listnwpay_listnwpay__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var propdata;
/**
 * Generated class for the InactivepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InactivepopPage = /** @class */ (function () {
    function InactivepopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        propdata = this.navParams.get('p');
    }
    InactivepopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InactivepopPage');
    };
    InactivepopPage.prototype.remove = function () {
        var data = { p: propdata, type: "2" };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__removelisting_removelisting__["a" /* RemovelistingPage */], data);
    };
    InactivepopPage.prototype.statis = function () {
        var data = { p: propdata };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__statistics_statistics__["a" /* StatisticsPage */], data);
    };
    InactivepopPage.prototype.listnow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__listnwpay_listnwpay__["a" /* ListnwpayPage */]);
    };
    InactivepopPage.prototype.editlist = function () {
        var data = { p: propdata, m: { frommanage: true } };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listdet1_listdet1__["a" /* Listdet1Page */], data);
    };
    InactivepopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/inactivepop/inactivepop.html"*/'<ion-content>\n  <div class="xs_box center_box mang_list">\n    <ul class="padding_top_bottom_10">\n      <li (click)="editlist()"><img src="./assets/images/icons/next.svg">EDIT LISTING</li>\n      <li (click)="remove()"><img src="./assets/images/icons/next.svg">REMOVE LISTING</li>\n      <li (click)="statis()"><img src="./assets/images/icons/next.svg">VIEW STATISTICS</li>\n      <li (click)="listnow()"><img src="./assets/images/icons/next.svg">LIST NOW</li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/inactivepop/inactivepop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], InactivepopPage);
    return InactivepopPage;
}());

//# sourceMappingURL=inactivepop.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivepopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__removelisting_removelisting__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__upgrade2feature_upgrade2feature__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statistics_statistics__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listdet1_listdet1__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var propdata;
/**
 * Generated class for the ActivepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivepopPage = /** @class */ (function () {
    function ActivepopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        propdata = this.navParams.get('p');
        console.log(propdata);
    }
    ActivepopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivepopPage');
    };
    ActivepopPage.prototype.remove = function () {
        var data = { p: propdata, type: "1" };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__removelisting_removelisting__["a" /* RemovelistingPage */], data);
    };
    ActivepopPage.prototype.upgrade = function () {
        var data = { p: propdata };
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__upgrade2feature_upgrade2feature__["a" /* Upgrade2featurePage */], data);
    };
    ActivepopPage.prototype.unlist = function () {
    };
    ActivepopPage.prototype.viewstat = function () {
        var data = { p: propdata };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__statistics_statistics__["a" /* StatisticsPage */], data);
    };
    ActivepopPage.prototype.editlist = function () {
        var data = { p: propdata, m: { frommanage: true } };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__listdet1_listdet1__["a" /* Listdet1Page */], data);
    };
    ActivepopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/activepop/activepop.html"*/'<ion-content>\n  <div class="xs_box center_box mang_list">\n    <ul class="padding_top_bottom_10">\n      <li (click)="editlist()"><img src="./assets/images/icons/next.svg">EDIT LISTING</li>\n      <li (click)="remove()"><img src="./assets/images/icons/next.svg">REMOVE LISTING</li>\n      <li (click)="viewstat()"><img src="./assets/images/icons/next.svg">VIEW STATUS</li>\n      <li (click)="unlist()"><img src="./assets/images/icons/next.svg">UNLIST NOW</li>\n      <li (click)="upgrade()"><img src="./assets/images/icons/next.svg">MAKE FEATURED</li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/activepop/activepop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], ActivepopPage);
    return ActivepopPage;
}());

//# sourceMappingURL=activepop.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var prev;
/**
 * Generated class for the RequestinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestinfoPage = /** @class */ (function () {
    function RequestinfoPage(popover, alertCtrl, dash, navCtrl, navParams) {
        this.popover = popover;
        this.alertCtrl = alertCtrl;
        this.dash = dash;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.data = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            subject: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]),
            content: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])
        });
        this.submitted = false;
        prev = this.navParams.get('p');
    }
    RequestinfoPage.prototype.ionViewDidLoad = function () {
        console.log(prev);
        console.log('ionViewDidLoad RequestinfoPage');
    };
    RequestinfoPage.prototype.send = function () {
        var _this = this;
        if (this.data.valid) {
            if (localStorage.getItem('userid') != prev.userid) {
                this.dash.requestinfo(prev.id, prev.userid, localStorage.getItem('userid')).subscribe(function (data) {
                    var alert = _this.alertCtrl.create({
                        title: 'Done',
                        subTitle: 'Request Sent',
                        buttons: ['Ok']
                    });
                    alert.present();
                });
            }
            else {
                var alert_1 = this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'You Either Added This Listing If not Contact us At Info@ovza.com',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        }
    };
    RequestinfoPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RequestinfoPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    RequestinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requestinfo',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/requestinfo/requestinfo.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_20">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>REQUEST INFO</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40 ">\n        <div class="edit_profile text_center">\n          <h4 class="form_title">TELL ME MORE ABOUT THIS PORPERTY</h4>\n          <form [formGroup]="data" style="width:80%; margin:0 10% 0 10% ; " role="form" action="#" method="#">\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="NAME" formControlName="name">\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !data.controls.name.valid)">Please Enter Your Name</p>\n            </div>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="EMAIL" formControlName="email">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !data.controls.email.valid)">Please Enter Your Email</p>\n          </div>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="SUBJECT" formControlName="subject">\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;"  [hidden]="!(submitted && !data.controls.subject.valid)">Please Enter Subject</p>\n\n            </div>\n\n            <fieldset>\n              <textarea class="input textarea" name="" placeholder="CONTENT" formControlName="content"></textarea>\n              <small class="xs_font">\n                By sending a request you are agreeing to our privacy policy\n              </small>\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !data.controls.content.valid)">Please Enter Content</p>\n            </div>\n          </form>\n        </div>\n      </section>\n\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="submitted=true;send()"><img src="./assets/images/icons/sent-mail.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/requestinfo/requestinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RequestinfoPage);
    return RequestinfoPage;
}());

//# sourceMappingURL=requestinfo.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListdetpopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
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
 * Generated class for the ListdetpopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListdetpopPage = /** @class */ (function () {
    function ListdetpopPage(navCtrl, navParams, viewctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewctrl = viewctrl;
        this.type = localStorage.getItem('type');
    }
    ListdetpopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListdetpopPage');
    };
    ListdetpopPage.prototype.dissmiss = function () {
        this.viewctrl.dismiss();
    };
    ListdetpopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listdetpop/listdetpop.html"*/'<ion-content>\n  <div class="sm_box center_box text_center list_detail_pop" style="width:100%;!important ">\n    <h5>You have successfully <br> created your listing</h5>\n    <h3>3</h3>\n    <p>MORE STEPS TO LIST YOUR PROPERTY</p>\n    <button class="btn btn_block btn_login" (click)="dissmiss()">FINISH MY LISTING</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listdetpop/listdetpop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ListdetpopPage);
    return ListdetpopPage;
}());

//# sourceMappingURL=listdetpop.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__searchpopup_searchpopup__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propdet_propdet__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_featured_listing_featured_listing__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home__ = __webpack_require__(4);
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
 * Generated class for the FeaturedListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeaturedListingPage = /** @class */ (function () {
    function FeaturedListingPage(alertCtrl, dash, auth, search, navCtrl, navParams, popover) {
        this.alertCtrl = alertCtrl;
        this.dash = dash;
        this.auth = auth;
        this.search = search;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popover = popover;
        this.type = localStorage.getItem('type');
        this.commercial = false;
        this.resedntial = false;
        this.comloadedflag = 0;
        this.resedntial = true;
    }
    FeaturedListingPage.prototype.ngAfterViewInit = function () {
    };
    FeaturedListingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.search.get_home_residential_list().subscribe((data) => {
        //   console.log(data) ;
        // })
        // this.auth.get_featured_listings_list().subscribe((data) => {
        //   console.log(data) ;
        // })
        console.log('ionViewDidLoad HomePage');
        this.search.get_home_residential_list().subscribe(function (data) {
            _this.resdata = data;
            _this.resdata = _this.resdata.replace(/\s/g, '');
            console.log(data);
            _this.resdata = JSON.parse(_this.resdata);
            if (_this.resdata.status != undefined) {
                _this.shownores = true;
            }
            else {
                _this.resdata = eval(_this.resdata);
                _this.spliceres();
            }
        });
    };
    FeaturedListingPage.prototype.openresd = function () {
        this.commercial = false;
        this.resedntial = true;
    };
    FeaturedListingPage.prototype.opencommerc = function () {
        var _this = this;
        if (!this.comloadedflag) {
            this.search.get_home_commercial_list().subscribe(function (data) {
                _this.comdata = data;
                _this.comdata = _this.comdata.replace(/\s/g, '');
                console.log(data);
                _this.comdata = JSON.parse(_this.comdata);
                if (_this.comdata.status != undefined) {
                    _this.shownocom = true;
                }
                else {
                    _this.comdata = eval(_this.comdata);
                    _this.splicecom();
                }
            });
        }
        this.comloadedflag = 1;
        this.resedntial = false;
        this.commercial = true;
    };
    FeaturedListingPage.prototype.splicecom = function () {
        if (this.comdata.length == 1) {
            this.comdata1 = this.comdata;
        }
        else {
            this.comdata1 = this.comdata.slice(0, Math.floor(this.comdata.length / 2));
            this.comdata2 = this.comdata.slice(Math.round(this.comdata.length / 2), this.comdata.length);
            console.log(this.comdata1);
            console.log(this.comdata2);
        }
    };
    FeaturedListingPage.prototype.spliceres = function () {
        if (this.resdata.length == 1) {
            this.resdata1 = this.resdata;
        }
        else {
            this.resdata1 = this.resdata.slice(0, Math.floor(this.resdata.length / 2));
            this.resdata2 = this.resdata.slice(Math.round(this.resdata.length / 2), this.resdata.length);
        }
        console.log(this.resdata1);
        console.log(this.resdata2);
    };
    FeaturedListingPage.prototype.opensearchpop = function () {
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_4__searchpopup_searchpopup__["a" /* SearchpopupPage */], { res: this.resedntial, com: this.commercial }, { cssClass: "regpop" });
        pop.present();
    };
    FeaturedListingPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    FeaturedListingPage.prototype.openlistprop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listprop_listprop__["a" /* ListpropPage */], {}, { animate: false });
    };
    FeaturedListingPage.prototype.openchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__chat_chat__["a" /* ChatPage */], {}, { animate: false });
    };
    FeaturedListingPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__chat_chat__["a" /* ChatPage */]);
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
    FeaturedListingPage.prototype.openprop = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__propdet_propdet__["a" /* PropdetPage */], { data: data });
    };
    FeaturedListingPage.prototype.savetowish = function (p) {
        var _this = this;
        this.dash.addtowishlist(p.userid, localStorage.getItem('userid'), p.id, "", 1).subscribe(function (data) {
            var alert = _this.alertCtrl.create({
                title: 'Done!',
                subTitle: 'You Have Added This List To Your Wishlist',
                buttons: ['Ok']
            });
            alert.present();
        });
        console.log(p);
        this.fav = localStorage.getItem("fav");
        this.fav = eval(this.fav);
        if (this.fav.indexOf(p.id) == -1)
            this.fav.push(p.id);
        localStorage.setItem("fav", JSON.stringify(this.fav));
    };
    FeaturedListingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-featured-listing',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/featured-listing/featured-listing.html"*/'<ion-content>\n  <main>\n    <div class="wrapper">\n      <header class="header text_center margin_bottom_40">\n        <div class="container">\n          <div class="row">\n            <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n                    src="./assets/images/icons/back.svg"></a></span>\n            <span class="text_center col-60"><h4>Featured</h4></span>\n            <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n                    src="./assets/images/icons/listing-option.svg"></a></span>\n          </div>\n        </div>\n      </header>\n      <div class="container padding_top_20">\n        <section class="padding_bottom_20">\n          <ul class="tabs">\n            <li [class.active]="resedntial">\n              <a (click)="openresd()">RESIDENTIAL</a>\n            </li>\n            <li [class.active]="commercial">\n              <a (click)="opencommerc()">COMMERCIAL</a>\n            </li>\n          </ul>\n          <div class="feature_listing padding_top_10 padding_bottom_60 text_center" *ngIf="resedntial">\n            <h3>FEATURED LISTINGS</h3>\n            <p *ngIf="shownores">There Are No Listings</p>\n\n            <ion-slides>\n\n              <ion-slide *ngFor="let p of resdata1">\n                <div *ngIf="p.images != undefined">\n                  <img (click)="savetowish(p)" style="width: 23px;\n    float: left;\n    margin-top: 5px;\n    position: absolute;\n    top: 5%;\n    z-index: 11111;\n    right: 2%;\n}" src="./assets/images/icons/icons8-heart.png">\n                  <img (click)="openprop(p)"\n                       [src]="\'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image">\n\n                </div>\n                <div *ngIf="p.images == undefined">\n\n                  <img style="height: 387px;" src="./assets/images/splashscreen.png">\n\n                </div>\n                <div (click)="openprop(p)" class="info" style="    margin-bottom: 24px;">\n                  <p>{{p.listaddress1}}</p>\n                  <p>{{p.homesize == undefined || null ? p.lotsize : p.homesize}} Sq.ft / {{p.beds}} Beds /\n                    {{p.bathrooms}} Bathrooms</p>\n                  <p class="price" *ngIf="p.PriceState==1">$ {{p.list_price}}</p>\n                  <p class="price" *ngIf="p.PriceState==0">Hidden Price</p>\n\n                </div>\n              </ion-slide>\n            </ion-slides>\n            <ion-slides>\n              <ion-slide *ngFor="let p of resdata2">\n                <div *ngIf="p.images != undefined">\n                  <img (click)="savetowish(p)" style="width: 23px;\n    float: left;\n    margin-top: 5px;\n    position: absolute;\n    top: 10%;\n    z-index: 11111;\n    right: 2%;\n}" src="./assets/images/icons/icons8-heart.png">\n                  <img (click)="openprop(p)"\n                       [src]="\'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image">\n\n                </div>\n                <div *ngIf="p.images == undefined">\n                  <img style="height: 387px;" src="./assets/images/splashscreen.png">\n\n                </div>\n                <div (click)="openprop(p)" class="info" style="    margin-bottom: 24px;">\n                  <p>{{p.listaddress1}}</p>\n                  <p>{{p.homesize == undefined || null ? p.lotsize : p.homesize}} Sq.ft / {{p.beds}} Beds /\n                    {{p.bathrooms}} Bathrooms</p>\n                  <p class="price">$ {{p.list_price}}</p>\n                </div>\n              </ion-slide>\n            </ion-slides>\n          </div>\n\n          <!--Commercial from here -->\n          <div class="feature_listing padding_top_10 padding_bottom_60 text_center" *ngIf="commercial">\n            <h3>FEATURED LISTINGS</h3>\n            <p *ngIf="shownocom">There Are No Listings</p>\n            <ion-slides #promoSlider>\n              <ion-slide *ngFor="let p of comdata1">\n                <div *ngIf="p.images != undefined">\n                  <img (click)="savetowish(p)" style="width: 23px;\n    float: left;\n    margin-top: 5px;\n    position: absolute;\n    top: 10%;\n    z-index: 11111;\n    right: 2%;\n}" src="./assets/images/icons/icons8-heart.png">\n                  <img (click)="openprop(p)"\n                       [src]="\'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image">\n                </div>\n                <div *ngIf="p.images == undefined">\n                  <img (click)="openprop(p)" style="height: 387px;" src="./assets/images/splashscreen.png">\n\n                </div>\n                <div (click)="openprop(p)" class="info" style="    margin-bottom: 24px;">\n                  <p>{{p.listaddress1}}</p>\n                  <p>{{p.homesize == undefined || null ? p.lotsize : p.homesize}} Sq.ft / {{p.beds}} Beds /\n                    {{p.bathrooms}} Bathrooms</p>\n                  <p class="price">$ {{p.list_price}}</p>\n                </div>\n              </ion-slide>\n            </ion-slides>\n            <ion-slides>\n              <ion-slide *ngFor="let p of comdata2">\n                <div *ngIf="p.images != undefined">\n                  <img (click)="savetowish(p)" style="width: 23px;\n    float: left;\n    margin-top: 5px;\n    position: absolute;\n    top: 10%;\n    z-index: 11111;\n    right: 2%;\n}" src="./assets/images/icons/icons8-heart.png">\n                  <img (click)="openprop(p)"\n                       [src]="\'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image">\n\n                </div>\n                <div *ngIf="p.images == undefined">\n                  <img (click)="openprop(p)" style="height: 387px;" src="./assets/images/splashscreen.png">\n\n                </div>\n                <div (click)="openprop(p)" class="info" style="    margin-bottom: 24px;">\n                  <p (>{{p.listaddress1}}</p>\n                  <p>{{p.homesize == undefined || null ? p.lotsize : p.homesize}} Sq.ft / {{p.beds}} Beds /\n                    {{p.bathrooms}} Bathrooms</p>\n                  <p class="price">$ {{p.list_price}}</p>\n                </div>\n              </ion-slide>\n            </ion-slides>\n          </div>\n        </section>\n      </div>\n      <nav class="nav_tabs">\n        <ul class="left_side">\n          <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n          <li><a (click)="opennav(\'add\')">\n            <img\n                    [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n          </li>\n        </ul>\n        <ul class="center_side">\n          <li><a (click)="opensearchpop()"><img src="./assets/images/icons/magnifying-glass.svg"></a></li>\n        </ul>\n        <ul class="right_side">\n          <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n          <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n        </ul>\n      </nav>\n    </div>\n\n  </main>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/featured-listing/featured-listing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_12__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_featured_listing_featured_listing__["a" /* FeaturedProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_home_home__["a" /* SearchProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* PopoverController */]])
    ], FeaturedListingPage);
    return FeaturedListingPage;
}());

//# sourceMappingURL=featured-listing.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var loading;
/*
This class has home page functions :
 - retrieve residential list
 - retrieve commercial list
 - retrieve featured list
 - retrieve expired list
 - retrieve blocked list
 - retrieve incomplete list
 - retrieve for sell list
 - retrieve for rent list
*/
var SearchProvider = /** @class */ (function () {
    function SearchProvider(loadingCtrl, http) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        // the server URL
        this.baseURL = 'http://ovza.com/oriented/public';
    }
    SearchProvider.prototype.loader = function (data) {
        if (data == 1) {
            loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
        }
        else {
            loading.dismiss();
        }
    };
    SearchProvider.prototype.search = function (Country, city, property_type) {
        return this.http.get(this.baseURL + '/search/' + Country + '/' + city + '/' + property_type)
            .map(function (res) {
            res.json();
        });
    };
    // This function retrieve residential list according to specific limit which is a param
    SearchProvider.prototype.get_home_residential_list = function () {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/home/get/residential').subscribe(function (data) {
                var res = data.text();
                _this.loader(0);
                console.log(res);
                observer.next(res);
            });
        });
    };
    // This function retrieve commercial list according to specific limit which is a param
    SearchProvider.prototype.get_home_commercial_list = function () {
        var _this = this;
        this.loader(1);
        return new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
            _this.http.get(_this.baseURL + '/home/get/commercial').subscribe(function (data) {
                var res = data.text();
                _this.loader(0);
                console.log(data);
                observer.next(res);
            });
        });
    };
    // This function retrieve featured list according to specific limit which is a param
    SearchProvider.prototype.get_home_featured_list = function () {
        return this.http.get(this.baseURL + '/home/get/featured/').map(function (res) {
            res.json();
        });
    };
    // This function retrieve incomplete list according to specific limit which is a param
    SearchProvider.prototype.get_home_incomplete_list = function () {
        return this.http.get(this.baseURL + '/home/get/incomplete/').map(function (res) {
            res.json();
        });
    };
    // This function retrieve expired list according to specific limit which is a param
    SearchProvider.prototype.get_home_expired_list = function () {
        return this.http.get(this.baseURL + '/home/get/expired/').map(function (res) {
            res.json();
        });
    };
    // This function retrieve blocked list according to specific limit which is a param
    SearchProvider.prototype.get_home_blocked_list = function () {
        return this.http.get(this.baseURL + '/home/get/blocked/').map(function (res) {
            res.json();
        });
    };
    // This function retrieve for sell list according to specific limit which is a param
    SearchProvider.prototype.get_home_forSell_list = function () {
        return this.http.get(this.baseURL + '/home/get/forSell/').map(function (res) {
            res.json();
        });
    };
    // This function retrieve for rent list according to specific limit which is a param
    SearchProvider.prototype.get_home_forRent_list = function () {
        return this.http.get(this.baseURL + '/home/get/forRent/').map(function (res) {
            res.json();
        });
    };
    SearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SearchProvider);
    return SearchProvider;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_countries_countries__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchresult_searchresult__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listprop_listprop__ = __webpack_require__(6);
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
 * Generated class for the SearchpopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchpopupPage = /** @class */ (function () {
    function SearchpopupPage(alertCtrl, countries, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.countries = countries;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        ///////////////////////////////////////////////////////vars
        this.submitted = false;
        /////////////////////////////////////////////////////vars
        this.searchform = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            country: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(/[^0]/g)]),
            city: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].pattern(/[^0]/g)])
        });
        this.serviceobject = { type: '0' };
        this.disablecity = false;
        this.com = this.navParams.get('com');
        if (this.com) {
            this.type1 = "Commercial";
        }
        else {
            this.type1 = "Residential";
        }
    }
    SearchpopupPage.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    SearchpopupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.selectedItem = "0";
        console.log('ionViewDidLoad SearchpopupPage');
        if (this.com) {
            this.countries.getEnglishCommercialCountries().subscribe(function (data) {
                _this.temp = data;
                _this.temp = eval(_this.temp);
                _this.countriesdata = _this.temp;
                console.log(_this.countriesdata);
                _this.countrychange();
            });
        }
        else {
            this.countries.getEnglishResidentialCountries().subscribe(function (data) {
                _this.temp = data;
                _this.temp = eval(_this.temp);
                _this.countriesdata = _this.temp;
                _this.countrychange();
            });
        }
    };
    SearchpopupPage.prototype.countrychange = function () {
        var _this = this;
        this.searchform.valueChanges.subscribe(function (data) {
            console.log(data.country);
            _this.selectedcity = data.city;
            _this.selectedcountry = data.country;
            _this.countries.getCitiesOfSpecficEnglishCountry(data.country).subscribe(function (data) {
                console.log(data);
                _this.citydata = data;
                _this.citydata = eval(_this.citydata);
                console.log(_this.citydata);
                if (_this.citydata == null) {
                    _this.disablecity = true;
                }
                else {
                    _this.disablecity = false;
                }
            });
        });
    };
    SearchpopupPage.prototype.search = function (validity) {
        console.log(validity);
        var obj = { country: this.selectedcountry, city: this.selectedcity, ptype: this.com ? '2' : "1" };
        console.log(this.searchform.valid);
        if (this.searchform.value.country != 0 && this.searchform.value.city != 0 || this.searchform.value.country == "Dubai - United Arab Emirates") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__searchresult_searchresult__["a" /* SearchresultPage */], obj);
        }
        else {
        }
    };
    SearchpopupPage.prototype.settype = function (type) {
        this.serviceobject.type = type;
    };
    // dosomething(value) {
    //   console.log(this.searchform.value.country);
    //   this.selectedcountry = value;
    //   this.countries.getCitiesOfSpecficEnglishCountry(value).subscribe((data) => {
    //     console.log(data);
    //     this.citydata = data;
    //     this.citydata = eval(this.citydata)
    //     console.log(this.citydata)
    //   })
    // }
    //   dosomething2(value) {
    // console.log(this.searchform.value.city) ;
    //     this.selectedcity = value;
    //   }
    SearchpopupPage.prototype.sell = function () {
        if (this.type == 'agent') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__listprop_listprop__["a" /* ListpropPage */], {}, { animate: false });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'You Should Be An agent To Add a New Listing',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    SearchpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-searchpopup',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/searchpopup/searchpopup.html"*/'<ion-content>\n  <div>\n\n    <div class="md_box center_box text_center feature_popup padding_top_20">\n      <h5 class="margin_top_bottom_30 main_color">Search {{type1}} Properties</h5>\n      <form [formGroup]="searchform"  #form="ngForm"  class="padding_left_right_20 margin_bottom_50"\n            style="width:80%; margin:0 10% 0 10% ; ">\n        <fieldset>\n          <select class="input select_box" [ngModel]="selectedItem"\n                  formControlName="country">\n            <option selected disabled value="0" name="country" >Select Country</option>\n            <option [disabled]="p.coming_soon" [value]=p.country *ngFor="let p of countriesdata">{{p.country}}\n            </option>\n\n          </select>\n        </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n        <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !searchform.controls.country.valid)">Please Enter Your\n          Country</p></div>\n        <fieldset *ngIf="!disablecity">\n          <select  name="city" class="input select_box" formControlName="city"\n                  [ngModel]="selectedItem">\n            <option selected disabled value="0">Select City</option>\n            <option  [value]=p *ngFor="let p of citydata">{{p}}</option>\n\n          </select>\n        </fieldset>\n        <div *ngIf="!disablecity" style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n        <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !searchform.controls.city.valid)">Please Enter Your City</p>\n        </div><button class="btn btn_block btn_login" (click)="submitted=true;search(form.valid)">SEARCH</button>\n      </form>\n    </div>\n\n    <!--<p style="margin-bottom: 13px;color: red ;\n                  margin-top: 2px;" [hidden]="!(submitted && !serviceobject.type != undefined)">Please Select What Do You Want To Do</p>-->\n    <ul class="feat_tabs" style="text-align : center ; ">\n      <li [class.active]="serviceobject.type == \'0\'"><a (click)="settype(\'0\')">BUY</a></li>\n      <li [class.active]="serviceobject.type == \'1\'"><a (click)="settype(\'1\')">RENT</a></li>\n      <li [class.active]="serviceobject.type == \'sell\'"><a (click)="sell()">SELL</a></li>\n    </ul>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/searchpopup/searchpopup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__providers_countries_countries__["a" /* CountriesProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], SearchpopupPage);
    return SearchpopupPage;
}());

//# sourceMappingURL=searchpopup.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  This class has footer part :
  1- featured listing list
  2- currencies to display them in dropdown list in add listing
  3- Add listing
*/
var FeaturedProvider = /** @class */ (function () {
    function FeaturedProvider(http) {
        this.http = http;
        // the server URL
        this.baseURL = 'http://ovza.com/oriented/public';
    }
    /*
    This function retreive the featured list with its all data to be viewed
    @param  : -
    @output : list []
    */
    FeaturedProvider.prototype.get_featured_listings_list = function () {
        // return new Observable((observer) => {
        //   this.http.get(this.baseURL+'/featured_lists/get').subscribe((data) => {
        // observer.next("an")) ;
        //   })
        // });
    };
    FeaturedProvider.prototype.get_currencies_list = function () {
        return this.http.get(this.baseURL + '/currency/getAll').map(function (res) {
            res.json();
        });
    };
    // End of featured listing function
    /*
  This function retreive the popular search list
  
  @param  : -
  @output : list []
  */
    FeaturedProvider.prototype.add_feature_listings = function (editedList) {
        /*
          This is the data in database which the list is consists of
    
         id, userid, listaddress1, listaddress2, zipcode, lattitude, longitude, aboutlisting, beds, bathrooms, list_price,
         pricelistflag, availablestatus, videolink, type, year_built, modification_on, lotsize, homesize, forclosure,
         permonthpayment, rental_money, rental_form, minimum_lease, otherthingsnote, security_charge, list_properties,
         listeddate, liststartdate, listenddate, lotsizetype, stories, list_status, featured_status, featured_expiry,
         owner_type, listpayment_status, admin_activation_status, property_type, currency, maxprice, unitscount, PriceState
    
        '112', '0', 'Portland,OR,United States', '23', '12581', '45.52306220000001', '-122.67648150000002', 'very good one ',
        '3', '1.5', '200000000', '0', '1', '', '1', '1853', '1852', '223', '224', '1', '3000000', NULL, NULL, '3', 'no ', '3000',
        '39,19,10,16,24,26', '0', '0', '0', '1', '1', '-1', '0', '0', '1', '0', '0', '2', '2', '', '', '0'
    
       */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //Append email and password to url seach parameters to send it to server
        URLSearchParam.append('userid', editedList['userid']); // usder id
        URLSearchParam.append('listaddress1', editedList['listaddress1']); // city
        URLSearchParam.append('listaddress2', editedList['listaddress2']); // address of property
        URLSearchParam.append('zipcode', editedList['zipcode']); // post code of city
        URLSearchParam.append('lattitude', editedList['lattitude']); // lattiude
        URLSearchParam.append('longitude', editedList['longitude']); // longitude
        URLSearchParam.append('aboutlisting', editedList['aboutlisting']); // about the property
        URLSearchParam.append('beds', editedList['beds']); // number of beds
        URLSearchParam.append('bathrooms', editedList['bathrooms']); // number of bathrooms
        URLSearchParam.append('list_price', editedList['list_price']); // the property price
        URLSearchParam.append('pricelistflag', editedList['pricelistflag']); // 0 or 1 ' show or not'
        URLSearchParam.append('availablestatus', editedList['availablestatus']); // 0 or 1 ' available or not '
        URLSearchParam.append('videolink', editedList['videolink']); // link Of property's video
        URLSearchParam.append('year_built', editedList['year_built']); // year built
        URLSearchParam.append('modification_on', editedList['modification_on']);
        URLSearchParam.append('lotsize', editedList['lotsize']);
        URLSearchParam.append('homesize', editedList['homesize']);
        URLSearchParam.append('forclosure', editedList['forclosure']); // 1 or 2  '  yes or no '
        URLSearchParam.append('permonthpayment', editedList['permonthpayment']);
        URLSearchParam.append('rental_money', editedList['rental_money']);
        URLSearchParam.append('rental_form', editedList['rental_form']);
        URLSearchParam.append('minimum_lease', editedList['minimum_lease']);
        URLSearchParam.append('property_type', editedList['property_type']);
        URLSearchParam.append('currency', editedList['currency']);
        URLSearchParam.append('maxprice', editedList['maxprice']);
        URLSearchParam.append('PriceState', editedList['PriceState']);
        URLSearchParam.append('otherthingsnote', editedList['otherthingsnote']);
        URLSearchParam.append('list_properties', editedList['list_properties']);
        URLSearchParam.append('listeddate', editedList['listeddate']);
        URLSearchParam.append('liststartdate', editedList['liststartdate']);
        URLSearchParam.append('list_status', editedList['list_status']);
        var bodyOfsentData = URLSearchParam.toString();
        return this.http.post(this.baseURL + '/featured_lists/add', bodyOfsentData, { headers: headers }).map(function (res) {
            res.json();
        });
    };
    // End of popular search list function
    FeaturedProvider.prototype.edit_feature_listings = function (editedList) {
        /*
          This is the data in database which the list is consists of
    
         id, userid, listaddress1, listaddress2, zipcode, lattitude, longitude, aboutlisting, beds, bathrooms, list_price,
         pricelistflag, availablestatus, videolink, type, year_built, modification_on, lotsize, homesize, forclosure,
         permonthpayment, rental_money, rental_form, minimum_lease, otherthingsnote, security_charge, list_properties,
         listeddate, liststartdate, listenddate, lotsizetype, stories, list_status, featured_status, featured_expiry,
         owner_type, listpayment_status, admin_activation_status, property_type, currency, maxprice, unitscount, PriceState
    
        '112', '0', 'Portland,OR,United States', '23', '12581', '45.52306220000001', '-122.67648150000002', 'very good one ',
        '3', '1.5', '200000000', '0', '1', '', '1', '1853', '1852', '223', '224', '1', '3000000', NULL, NULL, '3', 'no ', '3000',
        '39,19,10,16,24,26', '0', '0', '0', '1', '1', '-1', '0', '0', '1', '0', '0', '2', '2', '', '', '0'
    
       */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var URLSearchParam = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //Append email and password to url seach parameters to send it to server
        URLSearchParam.append('userid', editedList['userid']); // usder id
        URLSearchParam.append('listaddress1', editedList['listaddress1']); // city
        URLSearchParam.append('listaddress2', editedList['listaddress2']); // address of property
        URLSearchParam.append('zipcode', editedList['zipcode']); // post code of city
        URLSearchParam.append('lattitude', editedList['lattitude']); // lattiude
        URLSearchParam.append('longitude', editedList['longitude']); // longitude
        URLSearchParam.append('aboutlisting', editedList['aboutlisting']); // about the property
        URLSearchParam.append('beds', editedList['beds']); // number of beds
        URLSearchParam.append('bathrooms', editedList['bathrooms']); // number of bathrooms
        URLSearchParam.append('list_price', editedList['list_price']); // the property price
        URLSearchParam.append('pricelistflag', editedList['pricelistflag']); // 0 or 1 ' show or not'
        URLSearchParam.append('availablestatus', editedList['availablestatus']); // 0 or 1 ' available or not '
        URLSearchParam.append('videolink', editedList['videolink']); // link Of property's video
        URLSearchParam.append('year_built', editedList['year_built']); // year built
        URLSearchParam.append('modification_on', editedList['modification_on']);
        URLSearchParam.append('lotsize', editedList['lotsize']);
        URLSearchParam.append('homesize', editedList['homesize']);
        URLSearchParam.append('forclosure', editedList['forclosure']); // 1 or 2  '  yes or no '
        URLSearchParam.append('permonthpayment', editedList['permonthpayment']);
        URLSearchParam.append('rental_money', editedList['rental_money']);
        URLSearchParam.append('rental_form', editedList['rental_form']);
        URLSearchParam.append('minimum_lease', editedList['minimum_lease']);
        URLSearchParam.append('property_type', editedList['property_type']);
        URLSearchParam.append('currency', editedList['currency']);
        URLSearchParam.append('maxprice', editedList['maxprice']);
        URLSearchParam.append('PriceState', editedList['PriceState']);
        URLSearchParam.append('otherthingsnote', editedList['otherthingsnote']);
        URLSearchParam.append('list_properties', editedList['list_properties']);
        URLSearchParam.append('listeddate', editedList['listeddate']);
        URLSearchParam.append('liststartdate', editedList['liststartdate']);
        URLSearchParam.append('list_status', editedList['list_status']);
        var bodyOfsentData = URLSearchParam.toString();
        return this.http.post(this.baseURL + '/featured_lists/edit', bodyOfsentData, { headers: headers }).map(function (res) {
            res.json();
        });
    };
    FeaturedProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], FeaturedProvider);
    return FeaturedProvider;
}());

//# sourceMappingURL=featured_listing.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MortcalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(5);
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
 * Generated class for the MortcalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MortcalPage = /** @class */ (function () {
    function MortcalPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    MortcalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MortcalPage');
    };
    MortcalPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    MortcalPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    MortcalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mortcal',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/mortcal/mortcal.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_10">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>MORTGAGE CALCULATOR</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_10 padding_bottom_60">\n        <article class="text_center">\n          <p>\n            Use this calculator to determine the maximum price of a house in your budget. Simply enter the details of\n            your monthly repayment budget, down payment amount, and loan tenure and we will provide you with the maximum\n            amount you can afford to pay for a house.\n          </p>\n        </article>\n        <div class="calc text_center margin_top_bottom_20">\n          <form style="width : 80% ;     margin: 0 10% 0 10%;" role="form" action="#" method="#">\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="MORTGAGE AMOUNT ($)">\n            </fieldset>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="DOWNPAYMENT ($)">\n            </fieldset>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="INTEREST RATE (%)">\n            </fieldset>\n            <fieldset>\n              <select class="input select_box">\n                <option selected="selected" value="0">AGE OF PROPERTY</option>\n                <option value="1">Arabic</option>\n                <option value="2">English</option>\n                <option value="3">Frinsh</option>\n                <option value="4">Spanish</option>\n                <option value="5">Persia</option>\n              </select>\n            </fieldset>\n            <div class="actions">\n              <button class="btn btn_block btn_login">\n                CALCULATE\n              </button>\n            </div>\n          </form>\n          <div class="monthly_pay text_center">\n            <img src="./assets/images/icons/home_white.svg">\n            <article>\n              <h4>Your Monthly Payment</h4>\n              <h5>$ 4,127,505</h5>\n              <p>Based on your income, a house at this price should fit comfortably within your budget.</p>\n            </article>\n            <div class="range_slider">\n              <i class="ion-pricetag pricetag"></i>\n              <i class="ion-android-home home"></i>\n              <!-- Slider Markup -->\n              <div class="Slider js-ranger">\n                <span class="max_price">$ 4,565,145</span>\n                <input data-min="25" data-max="75" value="25" type="hidden" name="amount" autocomplete="off"\n                       class="js-ranger-input"/>\n                <div class="Slider-track js-ranger-track">\n                  <div class="Slider-distance js-ranger-distance">\n                    <div class="Slider-handle"></div>\n                  </div>\n                </div>\n                <output class="Slider-indicator js-ranger-indicator">\n                  <small class="Slider-value js-ranger-value"></small>\n                </output>\n              </div>\n              <!-- Slider Markup -->\n            </div>\n          </div>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/mortcal/mortcal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MortcalPage);
    return MortcalPage;
}());

//# sourceMappingURL=mortcal.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_notification__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__changepassword_changepassword__ = __webpack_require__(78);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(dashboard, popover, navCtrl, navParams) {
        this.dashboard = dashboard;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('type') == 'agent') {
            this.dashboard.getDashboardDataAgent(localStorage.getItem('userid')).subscribe(function (data) {
                _this.data2 = data;
                _this.data2 = _this.data2.replace(/\s/g, '');
                console.log(data);
                _this.data2 = JSON.parse(_this.data2);
                console.log(_this.data2);
                _this.dashboard.getdashboardataprofile(localStorage.getItem('userid')).subscribe(function (data) {
                    _this.data = data;
                    _this.data = _this.data.replace(/\s/g, '');
                    console.log(data);
                    _this.data = JSON.parse(_this.data);
                    console.log(_this.data);
                });
            });
        }
        else {
            this.dashboard.getDashboardData(localStorage.getItem('userid')).subscribe(function (data) {
                _this.data = data;
                _this.data = _this.data.replace(/\s/g, '');
                console.log(data);
                _this.data = JSON.parse(_this.data);
                console.log(_this.data);
            });
        }
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.opennotif = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__notification_notification__["a" /* NotificationPage */]);
    };
    DashboardPage.prototype.dosomething = function (value) {
        var _this = this;
        if (value == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__profile_profile__["a" /* ProfilePage */]);
        }
        else if (value == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__["a" /* EditprofilePage */]);
        }
        else if (value == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__changepassword_changepassword__["a" /* ChangepasswordPage */]);
        }
        else {
            this.dashboard.deactivate().subscribe(function (data) {
                _this.res2 = data;
                _this.res2 = _this.res2.replace(/\s/g, '');
                console.log(data);
                _this.res2 = JSON.parse(_this.res2);
                if (_this.res2.status == 1) {
                    localStorage.removeItem('email');
                    localStorage.removeItem('password');
                    localStorage.removeItem('logged');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
                }
            });
        }
    };
    DashboardPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */]);
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
    DashboardPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/dashboard/dashboard.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4><img style="width :10px" src="./assets/images/icons/dashboard.svg">  DASHBOARD</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container" *ngIf="data">\n      <section class="centered text_center dashboard">\n        <div class="margin_top_40">\n          <img [src]="data.prof_image != \'\' ? \'http://ovza.com/oriented/userdata/Profile/\'+data.id+\'/\'+data.prof_image : \'./assets/images/user_img.png\'" title="Ovza">\n          <h5 class="main_color">First Name : {{data.firstname}}</h5>\n          <h5>Last Name : {{data.lastname}}</h5>\n          <h5>Member Since: {{data.reg_time | date:\'mediumDate\'}}</h5>\n          <h5>Email Address : {{data.email}}</h5>\n        \n\n        </div>\n        <div *ngIf="type==\'agent\'" class="statistics max_width_400 margin_auto text_center margin_top_bottom_40"\n             style="margin-bottom: 33%">\n          <ul>\n            <li>\n              <h5>{{data2.total}}</h5>\n              <h5>Total Listings</h5>\n            </li>\n            <li>\n              <h5>{{data2.active}}</h5>\n              <h5>Total Active Listings</h5>\n            </li>\n            <li>\n              <h5>{{data2.sold}}</h5>\n              <h5>Total Sold Listings</h5>\n            </li>\n          </ul>\n        </div>\n        <form *ngIf="type==\'user\'"  style="width:80%; margin:0 10% 0 10% ; ">\n          <fieldset>\n            <select class="input select_box" (change)="dosomething($event.target.value)">\n              <option selected="selected" value="0">ACTIONS</option>\n              <option value="1">View Profile</option>\n              <option value="2">Edit Profile</option>\n              <option value="3">Deactivate My Account</option>\n              <option value="4">Change My Password</option>\n            </select>\n          </fieldset>\n        </form>\n\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="opennotif()"><img src="./assets/images/icons/icons8-globe-earth(1).png"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__managlisting_managlisting__ = __webpack_require__(61);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(dash, popover, navCtrl, navParams) {
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.res2 = [];
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dash.getIncompletelist(localStorage.getItem('userid')).subscribe(function (data) {
            _this.res = data;
            _this.res = _this.res.replace(/\s/g, '');
            console.log(_this.res);
            _this.res2 = JSON.parse(_this.res);
        });
    };
    NotificationPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    NotificationPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    NotificationPage.prototype.complete = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__managlisting_managlisting__["a" /* ManaglistingPage */]);
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/notification/notification.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>NOTIFICATIONS</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div class="margin_top_40">\n          <p class="margin_bottom_20" *ngIf="!res2.length">You have No Incomplete Listings</p>\n\n          <p class="margin_bottom_20" *ngIf="res2.length">You have {{res2.length}} Incomplete Listings</p>\n          <div class="actions padding_left_right_20">\n            <button class="btn btn_block btn_login" (click)="complete()">COMPLETE NOW</button>\n          </div>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
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
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupportPage = /** @class */ (function () {
    function SupportPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    SupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupportPage');
    };
    SupportPage.prototype.openmenu = function () {
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
    SupportPage.prototype.opennav = function (page) {
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
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/support/support.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>SUPPORT</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_bottom_40">\n        <div class="edit_profile text_center">\n          <h4 class="form_title">TECHNICAL SUPPORT DESK</h4>\n          <form style="width : 80% ;     margin: 0 10% 0 10%;" role="form" action="#" method="#">\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="NAME">\n            </fieldset>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="EMAIL">\n            </fieldset>\n            <fieldset>\n              <select class="input select_box">\n                <option selected="selected" value="0">PRIORITY</option>\n                <option value="1">1</option>\n                <option value="2">2</option>\n                <option value="3">3</option>\n              </select>\n            </fieldset>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="SUBJECT">\n            </fieldset>\n            <fieldset>\n              <textarea class="input textarea" name="" placeholder="CONTENT"></textarea>\n            </fieldset>\n          </form>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/sent-mail.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/support/support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
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
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
    }
    TransactionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionsPage');
    };
    TransactionsPage.prototype.openmenu = function () {
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
    TransactionsPage.prototype.opennav = function (page) {
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
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/transactions/transactions.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>TRANSACTIONS</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="transactions margin_top_70">\n        <form style="width : 80% ;     margin: 0 10% 0 10%;" role="form" action="#" method="#">\n          <!--<fieldset>-->\n            <!--<select class="input select_box">-->\n              <!--<option selected="selected" value="0">ALL TRANSACTIONS</option>-->\n\n            <!--</select>-->\n          <!--</fieldset>-->\n          <fieldset>\n            <select class="input select_box">\n              <option selected="selected" value="0">Payment Method</option>\n              <option value="1">Paypal</option>\n              <option value="2">Credit/Card</option>\n\n            </select>\n          </fieldset>\n        </form>\n        <div class="no_result text_center">\n          <h4 class="margin_top_70">No results yet</h4>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/transactions/transactions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AboutPage = /** @class */ (function () {
    function AboutPage(popover, navCtrl) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.type = localStorage.getItem('type');
    }
    AboutPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    AboutPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContactPage = /** @class */ (function () {
    function ContactPage(popover, navCtrl) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.type = localStorage.getItem('type');
    }
    ContactPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    ContactPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_affcal_affcal__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_mortcal_mortcal__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_rentvsbuy_rentvsbuy__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_calpopup_calpopup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_agents_agents__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_photopagepopup_photopagepopup__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_chat_chat__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_upload_photos_upload_photos__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_room_available7_room_available7__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_room_available6_room_available6__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_room_available5_room_available5__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_room_available4_room_available4__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_room_available3_room_available3__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_room_available2_room_available2__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_room_available1_room_available1__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_openhouse_openhouse__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notification_notification__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_agentlic_agentlic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profinfo2_profinfo2__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profinfo1_profinfo1__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chathandler_chathandler__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_statistics_statistics__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_removelisting_removelisting__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_listnwpay_listnwpay__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_upgrade2feature_upgrade2feature__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_searchresult_searchresult__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_completepop_completepop__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_inactivepop_inactivepop__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_activepop_activepop__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_managlisting_managlisting__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_listdet2_listdet2__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_listdetpop_listdetpop__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_listdet1_listdet1__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_searchpopup_searchpopup__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_termsandconditions_termsandconditions__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_countries_countries__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_home_home__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__app_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_common_http__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_about_about__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_contact_contact__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_tabs_tabs__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_mydatepicker__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ionic_native_image_picker__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ionic_native_google_maps__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_geolocation__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_ng2_scroll_to_el__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_support_support__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_profile_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_propdet_propdet__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__providers_featured_listing_featured_listing__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_requestinfo_requestinfo__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_forgetpass_forgetpass__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_transactions_transactions__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_changepassword_changepassword__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ionic_native_file_transfer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_file__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_camera__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ionic_native_photo_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__ionic_native_file_path__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_featured_listing_featured_listing__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__providers_payment_service_payment_service__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { Keyboard } from '@ionic-native/keyboard';








































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_46__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_49__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_52__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_45__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_41__pages_termsandconditions_termsandconditions__["a" /* TermsandconditionsPage */], __WEBPACK_IMPORTED_MODULE_40__pages_editprofile_editprofile__["a" /* EditprofilePage */], __WEBPACK_IMPORTED_MODULE_39__pages_searchpopup_searchpopup__["a" /* SearchpopupPage */], __WEBPACK_IMPORTED_MODULE_38__pages_menu_menu__["a" /* MenuPage */], __WEBPACK_IMPORTED_MODULE_37__pages_listprop_listprop__["a" /* ListpropPage */], __WEBPACK_IMPORTED_MODULE_36__pages_listdet1_listdet1__["a" /* Listdet1Page */],
                __WEBPACK_IMPORTED_MODULE_35__pages_listdetpop_listdetpop__["a" /* ListdetpopPage */], __WEBPACK_IMPORTED_MODULE_34__pages_listdet2_listdet2__["a" /* Listdet2Page */], __WEBPACK_IMPORTED_MODULE_33__pages_managlisting_managlisting__["a" /* ManaglistingPage */], __WEBPACK_IMPORTED_MODULE_32__pages_activepop_activepop__["a" /* ActivepopPage */], __WEBPACK_IMPORTED_MODULE_31__pages_inactivepop_inactivepop__["a" /* InactivepopPage */], __WEBPACK_IMPORTED_MODULE_30__pages_completepop_completepop__["a" /* CompletepopPage */], __WEBPACK_IMPORTED_MODULE_29__pages_searchresult_searchresult__["a" /* SearchresultPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_upgrade2feature_upgrade2feature__["a" /* Upgrade2featurePage */], __WEBPACK_IMPORTED_MODULE_27__pages_listnwpay_listnwpay__["a" /* ListnwpayPage */], __WEBPACK_IMPORTED_MODULE_26__pages_removelisting_removelisting__["a" /* RemovelistingPage */], __WEBPACK_IMPORTED_MODULE_25__pages_statistics_statistics__["a" /* StatisticsPage */], __WEBPACK_IMPORTED_MODULE_24__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_23__pages_chathandler_chathandler__["a" /* ChathandlerPage */], __WEBPACK_IMPORTED_MODULE_22__pages_profinfo1_profinfo1__["a" /* Profinfo1Page */], __WEBPACK_IMPORTED_MODULE_21__pages_profinfo2_profinfo2__["a" /* Profinfo2Page */], __WEBPACK_IMPORTED_MODULE_20__pages_agentlic_agentlic__["a" /* AgentlicPage */], __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__["a" /* DashboardPage */], __WEBPACK_IMPORTED_MODULE_18__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_openhouse_openhouse__["a" /* OpenhousePage */], __WEBPACK_IMPORTED_MODULE_16__pages_room_available1_room_available1__["a" /* RoomAvailable1Page */], __WEBPACK_IMPORTED_MODULE_15__pages_room_available2_room_available2__["a" /* RoomAvailable2Page */], __WEBPACK_IMPORTED_MODULE_14__pages_room_available3_room_available3__["a" /* RoomAvailable3Page */], __WEBPACK_IMPORTED_MODULE_13__pages_room_available4_room_available4__["a" /* RoomAvailable4Page */], __WEBPACK_IMPORTED_MODULE_12__pages_room_available5_room_available5__["a" /* RoomAvailable5Page */], __WEBPACK_IMPORTED_MODULE_11__pages_room_available6_room_available6__["a" /* RoomAvailable6Page */], __WEBPACK_IMPORTED_MODULE_10__pages_room_available7_room_available7__["a" /* RoomAvailable7Page */], __WEBPACK_IMPORTED_MODULE_9__pages_upload_photos_upload_photos__["a" /* UploadPhotosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_photopagepopup_photopagepopup__["a" /* PhotopagepopupPage */], __WEBPACK_IMPORTED_MODULE_3__pages_calpopup_calpopup__["a" /* CalpopupPage */], __WEBPACK_IMPORTED_MODULE_2__pages_rentvsbuy_rentvsbuy__["a" /* RentvsbuyPage */], __WEBPACK_IMPORTED_MODULE_1__pages_mortcal_mortcal__["a" /* MortcalPage */], __WEBPACK_IMPORTED_MODULE_0__pages_affcal_affcal__["a" /* AffcalPage */], __WEBPACK_IMPORTED_MODULE_63__pages_managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */], __WEBPACK_IMPORTED_MODULE_64__pages_support_support__["a" /* SupportPage */], __WEBPACK_IMPORTED_MODULE_65__pages_wishlist_wishlist__["a" /* WishlistPage */], __WEBPACK_IMPORTED_MODULE_66__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_67__pages_propdet_propdet__["a" /* PropdetPage */], __WEBPACK_IMPORTED_MODULE_70__pages_requestinfo_requestinfo__["a" /* RequestinfoPage */], __WEBPACK_IMPORTED_MODULE_71__pages_forgetpass_forgetpass__["a" /* ForgetpassPage */], __WEBPACK_IMPORTED_MODULE_72__pages_transactions_transactions__["a" /* TransactionsPage */], __WEBPACK_IMPORTED_MODULE_73__pages_changepassword_changepassword__["a" /* ChangepasswordPage */], __WEBPACK_IMPORTED_MODULE_79__pages_featured_listing_featured_listing__["a" /* FeaturedListingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_47__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_50__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_51__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_48_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_49__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/payment-result/payment-result.module#PaymentResultPageModule', name: 'PaymentResultPage', segment: 'payment-result', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_56_mydatepicker__["MyDatePickerModule"], __WEBPACK_IMPORTED_MODULE_62_ng2_scroll_to_el__["a" /* ScrollToModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_48_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_49__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_52__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_45__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_41__pages_termsandconditions_termsandconditions__["a" /* TermsandconditionsPage */], __WEBPACK_IMPORTED_MODULE_40__pages_editprofile_editprofile__["a" /* EditprofilePage */], __WEBPACK_IMPORTED_MODULE_39__pages_searchpopup_searchpopup__["a" /* SearchpopupPage */], __WEBPACK_IMPORTED_MODULE_38__pages_menu_menu__["a" /* MenuPage */], __WEBPACK_IMPORTED_MODULE_37__pages_listprop_listprop__["a" /* ListpropPage */], __WEBPACK_IMPORTED_MODULE_36__pages_listdet1_listdet1__["a" /* Listdet1Page */],
                __WEBPACK_IMPORTED_MODULE_35__pages_listdetpop_listdetpop__["a" /* ListdetpopPage */], __WEBPACK_IMPORTED_MODULE_34__pages_listdet2_listdet2__["a" /* Listdet2Page */], __WEBPACK_IMPORTED_MODULE_33__pages_managlisting_managlisting__["a" /* ManaglistingPage */], __WEBPACK_IMPORTED_MODULE_32__pages_activepop_activepop__["a" /* ActivepopPage */], __WEBPACK_IMPORTED_MODULE_31__pages_inactivepop_inactivepop__["a" /* InactivepopPage */], __WEBPACK_IMPORTED_MODULE_30__pages_completepop_completepop__["a" /* CompletepopPage */], __WEBPACK_IMPORTED_MODULE_17__pages_openhouse_openhouse__["a" /* OpenhousePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_searchresult_searchresult__["a" /* SearchresultPage */], __WEBPACK_IMPORTED_MODULE_28__pages_upgrade2feature_upgrade2feature__["a" /* Upgrade2featurePage */], __WEBPACK_IMPORTED_MODULE_27__pages_listnwpay_listnwpay__["a" /* ListnwpayPage */], __WEBPACK_IMPORTED_MODULE_26__pages_removelisting_removelisting__["a" /* RemovelistingPage */], __WEBPACK_IMPORTED_MODULE_25__pages_statistics_statistics__["a" /* StatisticsPage */], __WEBPACK_IMPORTED_MODULE_24__pages_chat_chat__["a" /* ChatPage */], __WEBPACK_IMPORTED_MODULE_23__pages_chathandler_chathandler__["a" /* ChathandlerPage */], __WEBPACK_IMPORTED_MODULE_22__pages_profinfo1_profinfo1__["a" /* Profinfo1Page */], __WEBPACK_IMPORTED_MODULE_21__pages_profinfo2_profinfo2__["a" /* Profinfo2Page */], __WEBPACK_IMPORTED_MODULE_20__pages_agentlic_agentlic__["a" /* AgentlicPage */], __WEBPACK_IMPORTED_MODULE_19__pages_dashboard_dashboard__["a" /* DashboardPage */], __WEBPACK_IMPORTED_MODULE_18__pages_notification_notification__["a" /* NotificationPage */], __WEBPACK_IMPORTED_MODULE_72__pages_transactions_transactions__["a" /* TransactionsPage */], __WEBPACK_IMPORTED_MODULE_79__pages_featured_listing_featured_listing__["a" /* FeaturedListingPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_room_available1_room_available1__["a" /* RoomAvailable1Page */], __WEBPACK_IMPORTED_MODULE_15__pages_room_available2_room_available2__["a" /* RoomAvailable2Page */], __WEBPACK_IMPORTED_MODULE_14__pages_room_available3_room_available3__["a" /* RoomAvailable3Page */], __WEBPACK_IMPORTED_MODULE_13__pages_room_available4_room_available4__["a" /* RoomAvailable4Page */], __WEBPACK_IMPORTED_MODULE_12__pages_room_available5_room_available5__["a" /* RoomAvailable5Page */], __WEBPACK_IMPORTED_MODULE_11__pages_room_available6_room_available6__["a" /* RoomAvailable6Page */], __WEBPACK_IMPORTED_MODULE_10__pages_room_available7_room_available7__["a" /* RoomAvailable7Page */], __WEBPACK_IMPORTED_MODULE_9__pages_upload_photos_upload_photos__["a" /* UploadPhotosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_photopagepopup_photopagepopup__["a" /* PhotopagepopupPage */], __WEBPACK_IMPORTED_MODULE_3__pages_calpopup_calpopup__["a" /* CalpopupPage */], __WEBPACK_IMPORTED_MODULE_2__pages_rentvsbuy_rentvsbuy__["a" /* RentvsbuyPage */], __WEBPACK_IMPORTED_MODULE_1__pages_mortcal_mortcal__["a" /* MortcalPage */], __WEBPACK_IMPORTED_MODULE_0__pages_affcal_affcal__["a" /* AffcalPage */], __WEBPACK_IMPORTED_MODULE_63__pages_managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */], __WEBPACK_IMPORTED_MODULE_64__pages_support_support__["a" /* SupportPage */], __WEBPACK_IMPORTED_MODULE_65__pages_wishlist_wishlist__["a" /* WishlistPage */], __WEBPACK_IMPORTED_MODULE_66__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_67__pages_propdet_propdet__["a" /* PropdetPage */], __WEBPACK_IMPORTED_MODULE_70__pages_requestinfo_requestinfo__["a" /* RequestinfoPage */], __WEBPACK_IMPORTED_MODULE_71__pages_forgetpass_forgetpass__["a" /* ForgetpassPage */], __WEBPACK_IMPORTED_MODULE_73__pages_changepassword_changepassword__["a" /* ChangepasswordPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_77__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_76__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_75__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_74__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_59__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_78__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_46__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_48_ionic_angular__["d" /* IonicErrorHandler */] }, __WEBPACK_IMPORTED_MODULE_59__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_44__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_43__providers_home_home__["a" /* SearchProvider */], __WEBPACK_IMPORTED_MODULE_42__providers_countries_countries__["a" /* CountriesProvider */], __WEBPACK_IMPORTED_MODULE_61__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_60__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_5__providers_agents_agents__["a" /* AgentsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_contact_contact__["a" /* ContactProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_chat_chat__["a" /* ChatProvider */], __WEBPACK_IMPORTED_MODULE_68__providers_featured_listing_featured_listing__["a" /* FeaturedProvider */], __WEBPACK_IMPORTED_MODULE_69__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_80__providers_payment_service_payment_service__["a" /* PaymentServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto_js__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_crypto_js__);

var PayfortPaymentAuth = /** @class */ (function () {
    function PayfortPaymentAuth() {
        var _this = this;
        this.signature = "";
        this.tokeninzation_generate_signature = function (merchant_reference) {
            _this.signature = _this.SHA_Request_Phrase + "access_code=" + _this.access_code +
                "language=" + _this.language + "merchant_identifier=" + _this.merchant_identifier + "merchant_reference=" + merchant_reference + "return_url=" + _this.return_url + "service_command=TOKENIZATION" + _this.SHA_Request_Phrase;
            return __WEBPACK_IMPORTED_MODULE_0_crypto_js___default.a.SHA256(_this.signature).toString(__WEBPACK_IMPORTED_MODULE_0_crypto_js___default.a.enc.HEX);
        };
        this.operation_generate_signature = function (merchant_reference, customer_email, customer_name, token_name) {
            _this.signature = _this.SHA_Request_Phrase + "access_code=" + _this.access_code + "amount=" + _this.amount + "command=PURCHASE" + "currency=" + _this.currency + "customer_email=" + customer_email + "customer_ip=192.168.1.1" + "customer_name=" + customer_name
                + "language=" + _this.language + "merchant_identifier=" + _this.merchant_identifier + "merchant_reference=" + merchant_reference + "order_description=payFromMobile"
                + "return_url=https://ovza.com/oriented/public/payment/paymentResult?" + merchant_reference
                + "token_name=" + token_name + _this.SHA_Request_Phrase;
            console.log(_this.signature);
            return __WEBPACK_IMPORTED_MODULE_0_crypto_js___default.a.SHA256(_this.signature).toString(__WEBPACK_IMPORTED_MODULE_0_crypto_js___default.a.enc.HEX);
        };
        this.access_code = "V8RykxXf6XjiLWfOPjnu";
        this.service_command = "SDK_TOKEN";
        this.site_url = "http://road9.space/appliance/index.php";
        this.return_url = "https://ovza.com/oriented/public/payment/getToken";
        this.language = "en";
        this.merchant_identifier = "CansDDMX";
        this.amount = "1000";
        this.currency = "USD";
        this.SHA_Request_Phrase = "OVZAIN";
        this.SHA_Response_Phrase = "OVZAOUT";
    }
    return PayfortPaymentAuth;
}());
/* harmony default export */ __webpack_exports__["a"] = (PayfortPaymentAuth);
//# sourceMappingURL=payfort_payment_auth.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var token;
// import { Keyboard } from '@ionic-native/keyboard';





var MyApp = /** @class */ (function () {
    function MyApp(push, auth, platform, statusBar, splashScreen) {
        var _this = this;
        this.push = push;
        this.auth = auth;
        platform.ready().then(function () {
            _this.authentication();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (platform.is('ios')) {
                // this.keyboard.hideKeyboardAccessoryBar(false);
                console.log('yes ios ');
            }
        });
    }
    MyApp.prototype.authentication = function () {
        var _this = this;
        console.log('da5l');
        if (localStorage.getItem('logged') != undefined) {
            if (localStorage.getItem('logged') == "1") {
                var email = localStorage.getItem('email');
                var password = localStorage.getItem('password');
                var obj = { email: email, password: password };
                this.auth.login(obj).subscribe(function (data) {
                    _this.res = data;
                    _this.res = _this.res.replace(/\s/g, '');
                    console.log(data);
                    _this.res = JSON.parse(_this.res);
                    if (_this.res.status == 1) {
                        localStorage.setItem('userid', _this.res.userData.id);
                        console.log(_this.res.agentstatus);
                        _this.res.agentstatus == 2 ? localStorage.setItem('type', 'agent') : localStorage.setItem('type', 'user');
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
                        localStorage.setItem('photo', _this.res.userData.prof_image);
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
                    }
                });
            }
            else {
                this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
            }
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.type = localStorage.getItem('type');
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts">hello</ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_countries_countries__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__searchresult_searchresult__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__propdet_propdet__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__featured_listing_featured_listing__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ElementRef, Pipe, ViewChild} from '@angular/core';


//import {SearchpopupPage} from './../searchpopup/searchpopup';







/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(popover, alertCtrl, countries, navCtrl, navParams) {
        this.popover = popover;
        this.alertCtrl = alertCtrl;
        this.countries = countries;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.commercial = false;
        this.resedntial = false;
        this.comloadedflag = 0;
        ///////////////////////////////////////////////////////vars
        this.submitted = false;
        /////////////////////////////////////////////////////vars
        this.searchform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(/[^0]/g)]),
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](0, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(/[^0]/g)])
        });
        this.serviceobject = { type: '0' };
        this.com = false;
        this.disablecity = false;
        this.resedntial = true;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ngAfterViewInit = function () {
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.selectedItem = "0";
        console.log('ionViewDidLoad SearchpopupPage');
        if (this.com) {
            this.countries.getEnglishCommercialCountries().subscribe(function (data) {
                _this.temp = data;
                _this.temp = eval(_this.temp);
                _this.countriesdata = _this.temp;
                console.log(_this.countriesdata);
                _this.countrychange();
            });
        }
        else {
            this.countries.getEnglishResidentialCountries().subscribe(function (data) {
                _this.temp = data;
                _this.temp = eval(_this.temp);
                _this.countriesdata = _this.temp;
                _this.countrychange();
            });
        }
    };
    HomePage.prototype.countrychange = function () {
        var _this = this;
        this.searchform.valueChanges.subscribe(function (data) {
            if (data.country != 0) {
                _this.selectedcity = data.city;
                _this.selectedcountry = data.country;
                _this.countries.getCitiesOfSpecficEnglishCountry(data.country).subscribe(function (data) {
                    console.log(data);
                    _this.citydata = data;
                    _this.citydata = eval(_this.citydata);
                    console.log(_this.citydata);
                    if (_this.citydata == null) {
                        _this.disablecity = true;
                    }
                    else {
                        _this.disablecity = false;
                    }
                });
            }
        });
    };
    HomePage.prototype.search = function (validity) {
        console.log(validity);
        var obj = { country: this.selectedcountry, city: this.selectedcity, ptype: this.com ? '2' : "1" };
        console.log(this.searchform.valid);
        if (this.searchform.value.country != 0 && this.searchform.value.city != 0 || this.searchform.value.country == "Dubai - United Arab Emirates" || this.citydata == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__searchresult_searchresult__["a" /* SearchresultPage */], obj);
        }
        else {
        }
    };
    HomePage.prototype.settype = function (type) {
        this.serviceobject.type = type;
    };
    HomePage.prototype.sell = function () {
        if (this.type == 'agent') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */], {}, { animate: false });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'You Should Be An agent To Add a New Listing',
                buttons: ['Ok']
            });
            alert_1.present();
        }
    };
    HomePage.prototype.openresd = function () {
        this.commercial = false;
        this.resedntial = true;
    };
    HomePage.prototype.opencommerc = function () {
        this.resedntial = false;
        this.commercial = true;
    };
    HomePage.prototype.opensearchpop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__featured_listing_featured_listing__["a" /* FeaturedListingPage */]);
    };
    HomePage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    HomePage.prototype.openlistprop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */], {}, { animate: false });
    };
    HomePage.prototype.openchat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__chat_chat__["a" /* ChatPage */], {}, { animate: false });
    };
    HomePage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(HomePage_1);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    HomePage.prototype.openprop = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__propdet_propdet__["a" /* PropdetPage */], { data: data });
    };
    var HomePage_1;
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/home/home.html"*/'<ion-content>\n  <main>\n    <div class="wrapper">\n      <header class="header text_center margin_bottom_40">\n        <div class="container">\n          <div class="row">\n            <span class="col-20"></span>\n            <span class="text_center col-60"><h4>Search</h4></span>\n            <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n              src="./assets/images/icons/listing-option.svg"></a></span>\n          </div>\n        </div>\n      </header>\n      <div class="container padding_top_20">\n        <section class="padding_bottom_20">\n          <ul class="tabs">\n            <li [class.active]="resedntial">\n              <a (click)="openresd();com=false;submitted=false;">RESIDENTIAL</a>\n            </li>\n            <li [class.active]="commercial">\n              <a (click)="opencommerc();com=true;submitted=false">COMMERCIAL</a>\n            </li>\n          </ul>\n          <div class="feature_listing padding_top_10 padding_bottom_60 text_center" *ngIf="resedntial">\n            <h3>Search Residential Properties</h3>\n            <div>\n\n              <div class="md_box center_box text_center feature_popup padding_top_20">\n                <h5 class="margin_top_bottom_30 main_color">Search {{type1}} Properties</h5>\n                <form [formGroup]="searchform"  #form="ngForm"  class="padding_left_right_20 margin_bottom_50"\n                      style="width:80%; margin:0 10% 0 10% ; ">\n                  <fieldset>\n                    <select class="input select_box" [ngModel]="selectedItem"\n                            formControlName="country">\n                      <option selected disabled value="0" name="country" >Select Country</option>\n                      <option [disabled]="p.coming_soon" [value]=p.country *ngFor="let p of countriesdata">{{p.country}}\n                      </option>\n\n                    </select>\n                  </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n                  <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !searchform.controls.country.valid)">Please Enter Your\n                    Country</p></div>\n                  <fieldset *ngIf="!disablecity">\n                    <select  name="city" class="input select_box" formControlName="city"\n                             [ngModel]="selectedItem">\n                      <option selected disabled value="0">Select City</option>\n                      <option  [value]=p *ngFor="let p of citydata">{{p}}</option>\n\n                    </select>\n                  </fieldset>\n                  <div *ngIf="!disablecity" style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n                    <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !searchform.controls.city.valid)">Please Enter Your City</p>\n                  </div><button class="btn btn_block btn_login" (click)="submitted=true;search(form.valid)">SEARCH</button>\n                </form>\n              </div>\n\n              <!--<p style="margin-bottom: 13px;color: red ;\n                            margin-top: 2px;" [hidden]="!(submitted && !serviceobject.type != undefined)">Please Select What Do You Want To Do</p>-->\n              <ul  class="tabs" style="text-align : center ;margin-bottom: 31% ">\n                <li [class.active]="serviceobject.type == \'0\'" class="col3"><a (click)="settype(\'0\')">BUY</a></li>\n                <li [class.active]="serviceobject.type == \'1\'" class="col3"><a (click)="settype(\'1\')">RENT</a></li>\n                <li [class.active]="serviceobject.type == \'sell\'" class="col3"><a (click)="sell()">SELL</a></li>\n              </ul>\n\n            </div>\n          </div>\n\n          <!--Commercial from here -->\n          <div class="feature_listing padding_top_10 padding_bottom_60 text_center" *ngIf="commercial">\n            <h3>Search Commercial Properties</h3>\n            <div>\n\n              <div class="md_box center_box text_center feature_popup padding_top_20">\n                <h5 class="margin_top_bottom_30 main_color">Search {{type1}} Properties</h5>\n                <form [formGroup]="searchform"  #form="ngForm"  class="padding_left_right_20 margin_bottom_50"\n                      style="width:80%; margin:0 10% 0 10% ; ">\n                  <fieldset>\n                    <select class="input select_box" [ngModel]="selectedItem"\n                            formControlName="country">\n                      <option selected disabled value="0" name="country" >Select Country</option>\n                      <option [disabled]="p.coming_soon" [value]=p.country *ngFor="let p of countriesdata">{{p.country}}\n                      </option>\n\n                    </select>\n                  </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n                  <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !searchform.controls.country.valid)">Please Enter Your\n                    Country</p></div>\n                  <fieldset *ngIf="!disablecity">\n                    <select  name="city" class="input select_box" formControlName="city"\n                             [ngModel]="selectedItem">\n                      <option selected disabled value="0">Select City</option>\n                      <option  [value]=p *ngFor="let p of citydata">{{p}}</option>\n\n                    </select>\n                  </fieldset>\n                  <div *ngIf="!disablecity" style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n                    <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !searchform.controls.city.valid)">Please Enter Your City</p>\n                  </div><button class="btn btn_block btn_login" (click)="submitted=true;search(form.valid)">SEARCH</button>\n                </form>\n              </div>\n\n              <!--<p style="margin-bottom: 13px;color: red ;\n                            margin-top: 2px;" [hidden]="!(submitted && !serviceobject.type != undefined)">Please Select What Do You Want To Do</p>-->\n              <ul class="tabs" style="text-align : center ;margin-bottom: 31% ">\n                <li [class.active]="serviceobject.type == \'0\'" class="col3"><a (click)="settype(\'0\')">BUY</a></li>\n                <li [class.active]="serviceobject.type == \'1\'" class="col3"><a (click)="settype(\'1\')">RENT</a></li>\n                <li [class.active]="serviceobject.type == \'sell\'" class="col3"><a (click)="sell()">SELL</a></li>\n              </ul>\n\n            </div>\n          </div>\n        </section>\n      </div>\n      <nav class="nav_tabs">\n        <ul class="left_side">\n          <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n          <li><a (click)="opennav(\'add\')">\n            <img\n              [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n          </li>\n        </ul>\n        <ul class="center_side">\n          <li><a (click)="opensearchpop()"><img src="./assets/images/icons/icons8-features-list-filled-50.png"></a></li>\n        </ul>\n        <ul class="right_side">\n          <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n          <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n        </ul>\n      </nav>\n    </div>\n\n  </main>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_countries_countries__["a" /* CountriesProvider */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calpopup_calpopup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__managlisting_managlisting__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__support_support__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transactions_transactions__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__changepassword_changepassword__ = __webpack_require__(78);
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
 *
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.userid = localStorage.getItem('userid');
        this.photo = localStorage.getItem('photo');
        // if(localStorage.getItem('photo') == undefined) {
        //   this.nophoto = true ;
        // }
    }
    MenuPage_1 = MenuPage;
    MenuPage.prototype.opentrans = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__transactions_transactions__["a" /* TransactionsPage */]);
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.open = function (page) {
        if (page == 'listing') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__managlisting_managlisting__["a" /* ManaglistingPage */]);
        }
    };
    MenuPage.prototype.opendash = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    MenuPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    MenuPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(MenuPage_1, {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    MenuPage.prototype.opencal = function () {
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_0__calpopup_calpopup__["a" /* CalpopupPage */], {}, { cssClass: "shrppop" });
        pop.present();
    };
    MenuPage.prototype.opensupport = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__support_support__["a" /* SupportPage */]);
    };
    MenuPage.prototype.logout = function () {
        localStorage.setItem('logged', "0");
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]);
    };
    MenuPage.prototype.changepass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    var MenuPage_1;
    MenuPage = MenuPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/menu/menu.html"*/'<ion-content style="top:1%;">\n  <div style="height:10% ; ">\n    <div class="md_box text_center menu padding_top_bottom_40">\n      <img [src]="photo != \'\' ? \'http://ovza.com/oriented/userdata/Profile/\'+userid+\'/\'+photo : \'./assets/images/user_img.png\'" title="Ovza">\n      <ul>\n        <li><a (click)="opendash()">Dashboard</a></li>\n        <li *ngIf="type == \'agent\'"><a (click)="open(\'listing\')">Manage my listings</a></li>\n        <li *ngIf="type == \'agent\'"><a (click)="opentrans()">My Transactions</a></li>\n        <li *ngIf="false"><a (click)="opensupport()">Need Any Help?</a></li>\n        <li><a (click)="opencal()" *ngIf="false">Calculators</a></li>\n        <li><a (click)="changepass()">Change Password</a></li>\n        <li><a (click)="logout()">\n          <img style="    width: 14px;\n    height: 17px;\n    margin-bottom: -4px;" src="./assets/images/icons/power.svg">\n          Log Out\n        </a></li>\n        <li><a href="javascript:void(0)"></a></li>\n      </ul>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__termsandconditions_termsandconditions__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__forgetpass_forgetpass__ = __webpack_require__(221);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, popover, navCtrl, navParams, auth) {
        this.alertCtrl = alertCtrl;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.type = localStorage.getItem('type');
        this.submitted = false;
        this.Login = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])
        });
        this.Register = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            fname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            lname: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            agentstatus: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]),
            passwordconfirm: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required])
        });
        this.signup = false;
        this.login = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        // this.auth.mylogin();
    };
    LoginPage.prototype.openlogin = function () {
        this.signup = false;
        this.login = true;
    };
    LoginPage.prototype.openregister = function () {
        this.login = false;
        this.signup = true;
    };
    LoginPage.prototype.register = function () {
    };
    LoginPage.prototype.singin = function () {
        var _this = this;
        localStorage.setItem('type', "agent");
        if (this.Login.valid) {
            this.auth.login(this.Login.value).subscribe(function (data) {
                _this.data = data;
                _this.data = _this.data.replace(/\s/g, '');
                console.log(data);
                _this.data = JSON.parse(_this.data);
                if (_this.data.status == 1) {
                    localStorage.setItem('userid', _this.data.userData.id);
                    localStorage.setItem('photo', _this.data.userData.prof_image);
                    if (_this.data.agentstatus != undefined) {
                        if (_this.data.agentstatus == 2) {
                            localStorage.setItem('type', 'agent');
                        }
                        else {
                            localStorage.setItem('type', 'user');
                        }
                    }
                    localStorage.setItem('logged', '1');
                    localStorage.setItem('email', _this.Login.value.email);
                    localStorage.setItem('password', _this.Login.value.password);
                    if (localStorage.getItem('fav') == undefined) {
                        localStorage.setItem('fav', "[]");
                    }
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */], {}, { animate: false });
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Email Or Password Is Incorrect',
                        buttons: ['Ok']
                    });
                    alert_1.present();
                }
            });
        }
    };
    LoginPage.prototype.signup1 = function () {
        var _this = this;
        if ((this.Register.value.password == this.Register.value.passwordconfirm) && this.Register.valid) {
            console.log(this.Register.value.agentstatus);
            this.auth.register(this.Register.value).subscribe(function (data) {
                _this.data = data;
                _this.data = _this.data.replace(/\s/g, '');
                console.log(data);
                _this.data = JSON.parse(_this.data);
                if (_this.data.message == 0) {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'Email Address Entered Already Registered',
                        buttons: ['Ok']
                    });
                    alert_2.present();
                }
                else {
                    localStorage.setItem('userid', _this.data.userData.id);
                    localStorage.setItem('type', _this.Register.value.agentstatus == 1 ? 'user' : 'agent');
                    if (_this.Register.value.agentstatus == '1') {
                        var data_1 = { p: _this.Register.value };
                        if (localStorage.getItem('fav') == undefined) {
                            localStorage.setItem('fav', "[]");
                        }
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__termsandconditions_termsandconditions__["a" /* TermsandconditionsPage */], data_1);
                    }
                    else {
                        if (localStorage.getItem('fav') == undefined) {
                            localStorage.setItem('fav', "[]");
                        }
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__termsandconditions_termsandconditions__["a" /* TermsandconditionsPage */], data);
                    }
                }
            });
        }
    };
    LoginPage.prototype.forgetpass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__forgetpass_forgetpass__["a" /* ForgetpassPage */]);
    };
    LoginPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    LoginPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/login/login.html"*/'<ion-content style="height: 108%">\n\n  <div class="wrapper">\n    <div class="container">\n      <section class="padding_top_bottom_20">\n        <ul class="tabs">\n          <li [class.active]="login">\n            <a (click)="openlogin()" style="cursor:pointer">login</a>\n          </li>\n          <li [class.active]="signup">\n            <a (click)="openregister()" style="cursor:pointer">register</a>\n          </li>\n        </ul>\n        <div class="login_form text_center" style="    margin-left: 15%;\n    margin-right: 15%;" [hidden]="signup">\n          <h3 style="    text-align: center;">LOG IN WITH YOUR ACCOUNT</h3>\n          <div>\n            <!--login-->\n            <form (ngSubmit)="submitted2=true;singin()" [formGroup]="Login" style="width:100%; ">\n              <fieldset>\n                <label><img src="./assets/images/icons/envelope.svg"></label>\n                <input class="input has_icon" type="text" name="" placeholder="EMAIL" formControlName="email">\n              </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !Login.controls.email.valid)">Invalid Email</p>\n            </div><fieldset>\n                <label><img src="./assets/images/icons/lock.svg"></label>\n                <input class="input has_icon" type="password" name="" placeholder="PASSWORD" formControlName="password">\n              </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !Login.controls.password.valid)">Please Enter Password</p>\n            </div> <div class="forget_pass">\n                <p>Forgot Password? <a (click)="forgetpass()">Click Here</a></p>\n              </div>\n              <div class="actions padding_left_right_20">\n                <button class="btn btn_block btn_login" type="submit">\n                  SIGN IN <img src="./assets/images/icons/login-white.svg">\n                </button>\n                <!--<button class="btn btn_block btn_facebook">-->\n                  <!--<img src="./assets/images/icons/facebook-white.svg"> Login with Facebook-->\n                <!--</button>-->\n                <!--<button class="btn btn_block btn_googleplus">-->\n                  <!--<img src="./assets/images/icons/google-plus-white.svg"> Login with Google-->\n                <!--</button>-->\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class="signup_form text_center" [hidden]="login" style="    margin-left: 15%;\n    margin-right: 15%;">\n          <h4>REGISTER NOW!</h4>\n          <span>Please fill out the required fields.</span>\n          <div>\n            <form name="register" (ngSubmit)="signup1()" [formGroup]="Register"\n                  style="width:100%">\n              <fieldset>\n                <label><img src="./assets/images/icons/man-user.svg"></label>\n                <input class="input has_icon" type="text" name="" placeholder="FIRST NAME" formControlName="fname">\n              </fieldset>\n              <div> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n                <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !Register.controls.fname.valid)">Please Enter Your First\n                  Name</p>\n              </div> </div>\n\n              <fieldset>\n                <label><img src="./assets/images/icons/man-user.svg"></label>\n                <input class="input has_icon" type="text" name="" placeholder="LAST NAME" formControlName="lname">\n              </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !Register.controls.lname.valid)">Please Enter Your Last\n                Name</p>\n            </div><fieldset>\n                <label><img src="./assets/images/icons/envelope.svg"></label>\n                <input class="input has_icon" type="text" name="" placeholder="EMAIL" formControlName="email">\n              </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !Register.controls.email.valid)">Invalid Email</p>\n            </div><fieldset>\n                <label><img src="./assets/images/icons/lock.svg"></label>\n                <input class="input has_icon" type="password" name="" placeholder="PASSWORD" formControlName="password">\n              </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !Register.controls.password.valid)">Please Enter a Password</p>\n            </div> <fieldset>\n                <label><img src="./assets/images/icons/lock.svg"></label>\n                <input class="input has_icon" type="password" name="" placeholder="CONFIRM PASSWORD"\n                       formControlName="passwordconfirm">\n              </fieldset>\n              <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;\n              margin-top: -13px;color:red"\n                 [hidden]="!(submitted && !(Register.value.password == Register.value.passwordconfirm))">Password\n                Doesn\'t Match</p>\n              </div> <div class="account_type">\n                <h4>ACCOUNT TYPE</h4>\n                <div class="radio_input">\n                  <input type="radio" name="agentstatus" id="radio_one" formControlName="agentstatus" value="1">\n                  <label for="radio_one">User</label>\n                </div>\n                <div class="radio_input">\n                  <input type="radio" name="agentstatus" id="radio_two" formControlName="agentstatus" value="2">\n                  <label for="radio_two">Agent</label>\n                </div>\n                <div class="radio_input">\n                  <input type="radio" name="agentstatus" id="radio_three" formControlName="agentstatus" value="3">\n                  <label for="radio_three">Private Seller</label>\n                </div>\n              </div> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !Register.controls.agentstatus.valid)">Please Choose Account\n                Type</p>\n            </div><div class="actions padding_left_right_20">\n                <button class="btn btn_block btn_login" type="submit" (click)="submitted=true">\n                  SIGN UP\n                </button>\n                <!--<button class="btn btn_block btn_facebook" (click)="submitted=true;">-->\n                  <!--<img src="./assets/images/icons/facebook-white.svg"> Login with Facebook-->\n                <!--</button>-->\n                <!--<button class="btn btn_block btn_googleplus">-->\n                  <!--<img src="./assets/images/icons/google-plus-white.svg"> Login with Google-->\n                <!--</button>-->\n              </div>\n            </form>\n          </div>\n        </div>\n\n      </section>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListpropPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listdet1_listdet1__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var autocomplete;
;
var place;
var obj;
/**
 * Generated class for the ListpropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListpropPage = /** @class */ (function () {
    function ListpropPage(dash, geolocation, popover, navCtrl, navParams) {
        this.dash = dash;
        this.geolocation = geolocation;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listdata1 = { value: {} };
        this.submitted = false;
        this.type = localStorage.getItem('type');
        this.listdata = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            ptype: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            plabel: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            pcity: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            paddress: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            ppostcode: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            minimum_lease: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null),
            security_charge: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null)
        });
    }
    ListpropPage_1 = ListpropPage;
    ListpropPage.prototype.ngOnInit = function () {
        var _this = this;
        var options = {
            types: ['(cities)']
        };
        autocomplete = new google.maps.places.Autocomplete(this.myinput.nativeElement, options);
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.event.trigger(this.mapElement.nativeElement, "resize");
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.map,
            draggable: true,
            title: "Drag me!"
        });
        marker.addListener('dragend', function (event) {
            console.log(_this.listdata.value);
            _this.listdata1.value['lattitude'] = event.latLng.lat();
            _this.listdata1.value['longitude'] = event.latLng.lng();
        });
        autocomplete.addListener('place_changed', function () {
            marker.setVisible(false);
            place = autocomplete.getPlace();
            _this.listdata.controls.pcity.setValue(place.name);
            if (!place.geometry) {
                // User entered the name of a Place that was not suggested and
                // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }
            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                _this.map.fitBounds(place.geometry.viewport);
            }
            else {
                console.log(_this.listdata.value);
                _this.map.setCenter(place.geometry.location);
                _this.map.setZoom(17); // Why 17? Because it looks good.
            }
            _this.listdata1.value['latitude'] = place.geometry.location.lat();
            _this.listdata1.value['longtitude'] = place.geometry.location.lng();
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);
            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }
        });
    };
    ListpropPage.prototype.ionViewDidLoad = function () {
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
        }).catch(function (error) {
            console.log('Error getting location');
        });
        // this.loadMap();
    };
    ListpropPage.prototype.onsubmit = function () {
        console.log(this.listdata.valid);
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        obj = merge_options(this.listdata1.value, this.listdata.value);
        console.log(obj);
        var data = { p: obj };
        if (this.listdata.valid)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__listdet1_listdet1__["a" /* Listdet1Page */], data);
    };
    ListpropPage.prototype.ionViewWillLeave = function () {
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        obj = merge_options(this.listdata1.value, this.listdata.value);
        var obj2 = obj;
        sendtoincomplete(obj2);
        function sendtoincomplete(obj2) {
            //remove
            rename2("availble", "availablestatus", obj2);
            rename2("bathrooms", "bathrooms", obj2);
            rename2("currency", "currency", obj2);
            rename2("date", "listeddate", obj2);
            //rename("endtime", "listenddate", data)
            rename2("fireclosemonth", "permonthpayment", obj2);
            rename2("floors", "forclosure", obj2);
            rename2("foreclose", "forclosure", obj2);
            rename2("lotsize", "lotsize", obj2);
            rename2("lottype", "lotsizetype", obj2);
            rename2("modmadein", "modification_on", obj2);
            rename2("paddress", "listaddress2", obj2);
            rename2("pcity", "listaddress1", obj2);
            rename2("plabel", "type", obj2);
            rename2("ppostcode", "zipcode", obj2);
            rename2("price", "list_price", obj2);
            rename2("psize", "homesize", obj2);
            rename2("ptype", "property_type", obj2);
            rename2("starttime", "liststartdate", obj2);
            rename2("videourl", "videolink", obj2);
            rename2("yearbuilt", "year_built", obj2);
            rename2("bedrooms", "beds", obj2);
            rename2("about", "aboutlisting", obj2);
            obj2["userid"] = localStorage.getItem('userid');
            obj2["maxprice"] = obj2["price"];
            if (obj2['latitude'] == undefined) {
                obj2['latitude'] = null;
                obj2['longtitude'] = null;
            }
            obj2["liststartdate"] = null;
            obj2["pricelistflag"] = null;
            obj2['otherthingsnote'] = null;
            obj2['stories'] = null;
            console.log(obj2['list_status']);
            if (obj2['list_status'] == undefined) {
                obj2['list_status'] = -1;
            }
            obj2['featured_status'] = null;
            obj2['featured_expired'] = null;
            obj2['list_properties'] = null;
            obj2['owner_type'] = null;
            if (obj2['PriceState'] == true) {
                obj2['PriceState'] = 1;
            }
            else {
                obj2['PriceState'] = 0;
            }
            settozero(obj2);
        }
        function rename2(old_key, new_key, obj) {
            if (obj[old_key] != undefined) {
                if (new_key != "") {
                    if (old_key !== new_key) {
                        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
                        delete obj[old_key];
                    }
                }
            }
            else {
                obj[new_key] = null;
            }
        }
        function settozero(obj) {
            for (var key in obj) {
                if (obj[key] == null) {
                    obj[key] = 0;
                }
            }
        }
        console.log(obj2);
        this.dash.addlisting(obj2).subscribe(function (data) {
        });
    };
    // loadMap() {
    //   let mapOptions: GoogleMapOptions = {
    //     camera: {
    //       target: {
    //         lat: 43.0741904,
    //         lng: -89.3809802
    //       },
    //       zoom: 18,
    //       tilt: 30
    //     }
    //   };
    //   this.map = this.googleMaps.create('map_canvas', mapOptions);
    //   this.map.one(GoogleMapsEvent.MAP_READY)
    //     .then(() => {
    //       console.log('Map is ready!');
    //     });
    //
    // }
    ListpropPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(ListpropPage_1);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */]);
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
    ListpropPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    ListpropPage.prototype.dosomething7 = function (value) {
        if (value == 1) {
            this.showrent = true;
        }
        else {
            this.showrent = false;
        }
    };
    var ListpropPage_1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], ListpropPage.prototype, "myinput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* ElementRef */])
    ], ListpropPage.prototype, "mapElement", void 0);
    ListpropPage = ListpropPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-listprop',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listprop/listprop.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"></span>\n          <span class="text_center col-60"><h4>LIST YOUR PROPERTY</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_10 padding_bottom_40">\n        <div class="list_detail text_center">\n          <form style="width : 80% ;     margin: 0 10% 0 10%;" [formGroup]="listdata">\n            <h4 class="input_title">PROPERTY TYPE</h4>\n            <fieldset>\n              <select class="input select_box" formControlName="ptype">\n                <option selected disabled value="null">Commercial / Residential</option>\n\n                <option value="1">RESIDENTIAL</option>\n                <option value="0">COMMERCIAL</option>\n\n              </select>\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.ptype.valid)">Please Enter Property Type</p>\n          </div>\n\n  <fieldset>\n    <h4 class="input_title">LABEL</h4>\n\n    <select (change)="dosomething7($event.target.value)" class="input select_box" formControlName="plabel">\n      <option disabled selected value="null">PROPERTY FOR RENT/SALE</option>\n\n      <option value=0>PROPERTY FOR SALE</option>\n      <option value=1>PROPERTY FOR RENT</option>\n\n    </select>\n  </fieldset>\n  <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n    <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.plabel.valid)">Please Enter Property\n      Label</p>\n  </div>\n<div [hidden] = "!showrent">\n  <fieldset>\n    <input  class="input" type="text" name="" placeholder="Minimum Lease Period" formControlName="minimum_lease">\n  </fieldset>\n  <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n    <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.minimum_lease.valid)">Please Enter City</p>\n  </div>\n\n  <fieldset>\n    <input class="input" type="text" name="" placeholder="Security Deposit" formControlName="security_charge">\n  </fieldset>\n  <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n    <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.security_charge.valid)">Please Enter City</p>\n  </div>\n</div>\n            <fieldset>\n              <input #input class="input" type="text" name="" placeholder="CITY / REGION" formControlName="pcity">\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.pcity.valid)">Please Enter City</p>\n          </div>\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="HOUSE / STREET ADDRESS" formControlName="paddress">\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.paddress.valid)">Please Enter Address</p>\n          </div>\n            <fieldset>\n              <input class="input" type="number" name="" placeholder="POST CODE" formControlName="ppostcode">\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.ppostcode.valid)">Please Enter Postal\n              Code</p>\n          </div>\n          </form>\n        </div>\n      </section>\n      <section style="    width: 80%;\n    height: 300px;\n    margin-top: -53px;\n    position: absolute;\n    left: 10%;\n    margin-bottom:70px;\n    right: 10%;">\n        <div style="height:100%; width: 100%" #map id="map_canvas"></div>\n\n      </section>\n\n\n\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="onsubmit();submitted=true;"><img src="./assets/images/icons/next.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listprop/listprop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], ListpropPage);
    return ListpropPage;
}());

//# sourceMappingURL=listprop.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listdet1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listdet2_listdet2__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listdetpop_listdetpop__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_dashboard_dashboard__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var obj;
var prev;
var frommanage;
/**
 * Generated class for the Listdet1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Listdet1Page = /** @class */ (function () {
    function Listdet1Page(dash, navCtrl, navParams, popover) {
        this.dash = dash;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popover = popover;
        this.submitted = false;
        this.type = localStorage.getItem('type');
        this.listdata = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            price: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            currency: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            availble: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            p1type: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            lottype: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            lotsize: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            psize: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            floors: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            foreclose: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null),
            fireclosemonth: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null),
            PriceState: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](0, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required])
        });
        prev = this.navParams.get('p');
        frommanage = this.navParams.get('m');
    }
    Listdet1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(prev);
        this.dash.getcurrency().subscribe(function (data) {
            _this.currencylist = data;
            _this.currencylist = eval(_this.currencylist);
        });
        console.log('ionViewDidLoad Listdet1Page');
        if (!frommanage) {
            var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_2__listdetpop_listdetpop__["a" /* ListdetpopPage */], {}, { cssClass: "shrppop" });
            pop.present();
        }
        else {
            this.listdata.controls.price.setValue(prev.list_price);
            //this.listdata.controls.currency.setValue(prev.currency)
            this.listdata.controls.availble.setValue(prev.availablestatus);
            //this.listdata.controls.p1type.setValue(prev.)
            this.listdata.controls.lottype.setValue(prev.lotsizetype);
            this.listdata.controls.lotsize.setValue(prev.lotsize);
            this.listdata.controls.psize.setValue(prev.homesize);
            //this.listdata.controls.floors.setValue(prev)
            this.listdata.controls.foreclose.setValue(prev.forclosure);
            this.listdata.controls.fireclosemonth.setValue(prev.permonthpayment);
            if (prev.PriceState) {
                this.listdata.controls.PriceState.setValue(1);
            }
            else {
                this.listdata.controls.PriceState.setValue(0);
            }
            //this.listdata.controls.PriceState.setValue(prev.PriceState)
        }
    };
    Listdet1Page.prototype.forward = function () {
        console.log(this.listdata.value);
        if (frommanage) {
            console.log('da5l');
            prev.frommanage = true;
        }
        if (this.listdata.valid) {
            var data = { p: merge_options(this.listdata.value, prev) };
            console.log(data);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__listdet2_listdet2__["a" /* Listdet2Page */], data);
        }
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
    };
    Listdet1Page.prototype.ionViewWillLeave = function () {
        function merge_options(obj1, obj2) {
            var obj3 = {};
            for (var attrname in obj1) {
                obj3[attrname] = obj1[attrname];
            }
            for (var attrname in obj2) {
                obj3[attrname] = obj2[attrname];
            }
            return obj3;
        }
        obj = merge_options(prev, this.listdata.value);
        var obj2 = obj;
        sendtoincomplete(obj2);
        function sendtoincomplete(obj2) {
            //remove
            rename2("availble", "availablestatus", obj2);
            rename2("bathrooms", "bathrooms", obj2);
            rename2("currency", "currency", obj2);
            rename2("date", "listeddate", obj2);
            //rename("endtime", "listenddate", data)
            rename2("fireclosemonth", "permonthpayment", obj2);
            rename2("floors", "forclosure", obj2);
            rename2("foreclose", "forclosure", obj2);
            rename2("lotsize", "lotsize", obj2);
            rename2("lottype", "lotsizetype", obj2);
            rename2("modmadein", "modification_on", obj2);
            rename2("paddress", "listaddress2", obj2);
            rename2("pcity", "listaddress1", obj2);
            rename2("plabel", "type", obj2);
            rename2("ppostcode", "zipcode", obj2);
            rename2("price", "list_price", obj2);
            rename2("psize", "homesize", obj2);
            rename2("ptype", "property_type", obj2);
            rename2("starttime", "liststartdate", obj2);
            rename2("videourl", "videolink", obj2);
            rename2("yearbuilt", "year_built", obj2);
            rename2("bedrooms", "beds", obj2);
            rename2("about", "aboutlisting", obj2);
            obj2["userid"] = localStorage.getItem('userid');
            obj2["maxprice"] = obj2["price"];
            if (obj2['latitude'] == undefined) {
                obj2['latitude'] = null;
                obj2['longtitude'] = null;
            }
            obj2["liststartdate"] = null;
            obj2["pricelistflag"] = null;
            obj2['otherthingsnote'] = null;
            obj2['stories'] = null;
            console.log(obj2['list_status']);
            if (obj2['list_status'] == undefined) {
                obj2['list_status'] = -1;
            }
            obj2['featured_status'] = null;
            obj2['featured_expired'] = null;
            obj2['list_properties'] = null;
            obj2['owner_type'] = null;
            if (obj2['PriceState'] == true) {
                obj2['PriceState'] = 1;
            }
            else {
                obj2['PriceState'] = 0;
            }
            settozero(obj2);
        }
        function rename2(old_key, new_key, obj) {
            if (obj[old_key] != undefined) {
                if (new_key != "") {
                    if (old_key !== new_key) {
                        Object.defineProperty(obj, new_key, Object.getOwnPropertyDescriptor(obj, old_key));
                        delete obj[old_key];
                    }
                }
            }
            else {
                obj[new_key] = null;
            }
        }
        function settozero(obj) {
            for (var key in obj) {
                if (obj[key] == null) {
                    obj[key] = 0;
                }
            }
        }
        console.log(obj2);
        this.dash.addlisting(obj2).subscribe(function (data) {
        });
    };
    Listdet1Page.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    Listdet1Page.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    Listdet1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-listdet1',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listdet1/listdet1.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>LIST DETAILS</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_top_10 padding_bottom_40">\n        <div class="list_detail text_center">\n          <form style="width:80%; margin:0 10% 0 10% ; " [formGroup]="listdata">\n            <fieldset>\n\n              <input class="input" type="number" name="" placeholder="PRICE" formControlName="price">\n              <ion-item>\n                <ion-label>Show Price</ion-label>\n                <ion-toggle color="secondary" formControlName="PriceState"></ion-toggle>\n              </ion-item>\n             </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.price.valid)">Please Enter Price</p>\n\n          </div>\n            <fieldset>\n              <select class="input select_box" formControlName="currency">\n                <option selected disabled value="null">CURRENCY</option>\n                <option *ngFor="let p of currencylist" value={{p.currency}}>{{p.currency}}</option>\n\n              </select>\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.currency.valid)">Please Choose Currency</p>\n\n          </div>\n            <fieldset>\n              <select class="input select_box" formControlName="availble" placeholder="AVAILABILITY STATUS">\n                <option\n                  value="null" disabled selected>AVAILABILITY STATUS\n                </option>\n                <option  value=1>Available</option>\n                <option value=0>Under Construction</option>\n\n              </select>\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.availble.valid)">Please Enter\n              Availability</p>\n          </div>\n\n            <fieldset>\n              <input class="input" type="text" name="" placeholder="eg Villa , Apartment" formControlName="p1type">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.p1type.valid)">Please Enter Property Type</p>\n\n          </div>\n            <fieldset>\n              <select class="input select_box" formControlName="lottype">\n                <option selected disabled value="null">Measurement Unit</option>\n                <option value="0">Acre</option>\n                <option value="1">Sq.ft</option>\n\n              </select>\n            </fieldset>\n            <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;"> <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.lottype.valid)">Please Enter Measurement Unit</p>\n            </div>\n            <fieldset>\n              <input class="input" type="number" name="" placeholder="LOT SIZE" formControlName="lotsize">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.lotsize.valid)">Please Enter Lot Size</p>\n          </div>\n            <fieldset>\n              <input class="input" type="number" name="" placeholder="PROPERY SIZE" formControlName="psize">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.psize.valid)">Please Enter Property Size</p>\n          </div>\n            <fieldset>\n              <select class="input select_box" formControlName="floors">\n                <option selected disabled value="null">FLOORS</option>\n                <option value=1>1</option>\n                <option value=2>2</option>\n                <option value=3>3</option>\n                <option value=4>4</option>\n                <option value=5>5</option>\n                <option value=6>6</option>\n                <option value=7>7</option>\n                <option value=8>8</option>\n                <option value=9>9</option>\n                <option value=10>10</option>\n                <option value=10>11</option>\n                <option value=10>12</option>\n\n              </select>\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.floors.valid)">Please Enter Number Of\n              Floors</p>\n          </div>\n            <fieldset>\n              <select class="input select_box" formControlName="foreclose">\n                <option selected disabled value="null">FORECLOSE?</option>\n                <option value="1">YES</option>\n                <option value="0">NO</option>\n              </select>\n            </fieldset>\n            <!--<div style="margin-bottom: 13px;color: red ; height: 19px;-->\n              <!--margin-top: 2px;">-->\n            <!--<p style="margin-bottom: 13px;color: red ;-->\n              <!--margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.foreclose.valid)">Please Enter Foreclose</p>-->\n          <!--</div>-->\n            <fieldset *ngIf="listdata.value.foreclose==\'1\'">\n              <input class="input" type="number" name="" placeholder="FORECLOSE PAYMENT MONTHLY"\n                     formControlName="fireclosemonth">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !listdata.controls.fireclosemonth.valid)">\n              Please Enter Monthly Foreclosure Payment Amounts</p>\n          </div>\n          </form>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="forward();submitted=true;"><img src="./assets/images/icons/sent-mail.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listdet1/listdet1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* PopoverController */]])
    ], Listdet1Page);
    return Listdet1Page;
}());

//# sourceMappingURL=listdet1.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManaglistingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upgrade2feature_upgrade2feature__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completepop_completepop__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inactivepop_inactivepop__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activepop_activepop__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__propdet_propdet__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var inactiveflag = 0, incompleteflag = 0, activeflag = 0;
/**
 * Generated class for the ManaglistingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManaglistingPage = /** @class */ (function () {
    function ManaglistingPage(dash, navCtrl, navParams, popover) {
        this.dash = dash;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popover = popover;
        this.type = localStorage.getItem('type');
        this.active = false;
        this.inactive = false;
        this.noactivelisting = false;
        this.noinactivelisting = false;
        this.noincompletelisting = false;
        this.incomplete = false;
        console.log(activeflag);
        console.log(this.navCtrl.last().name);
        if (this.navCtrl.last().name == "NotificationPage") {
            this.open('incomplete');
        }
        else {
            this.open('active');
        }
    }
    ManaglistingPage.prototype.ionViewDidLoad = function () {
    };
    ManaglistingPage.prototype.openprop = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__propdet_propdet__["a" /* PropdetPage */], { data: data });
    };
    ManaglistingPage.prototype.open = function (segment) {
        var _this = this;
        if (segment == 'active') {
            this.noinactivelisting = false;
            this.noincompletelisting = false;
            this.inactive = false;
            this.incomplete = false;
            this.active = true;
            this.dash.getActivelist(localStorage.getItem('userid')).subscribe(function (data) {
                _this.res = data;
                _this.res = _this.res.replace(/\s/g, '');
                //this.res = JSON.parse(this.res);
                if (JSON.parse(_this.res).status != undefined) {
                    _this.noactivelisting = true;
                    activeflag = 1;
                }
                else {
                    _this.noactivelisting = false;
                    _this.activedata = eval(_this.res);
                }
            });
            console.log('ionViewDidLoad ManaglistingPage');
        }
        else if (segment == 'inactive') {
            this.noactivelisting = false;
            this.noincompletelisting = false;
            this.active = false;
            this.incomplete = false;
            this.inactive = true;
            this.dash.getInactivelist(localStorage.getItem('userid')).subscribe(function (data) {
                _this.res = data;
                _this.res = _this.res.replace(/\s/g, '');
                //this.res = JSON.parse(this.res);
                if (JSON.parse(_this.res).status != undefined) {
                    _this.noinactivelisting = true;
                    inactiveflag = 1;
                }
                else {
                    _this.noinactivelisting = false;
                    _this.inactivedata = eval(_this.res);
                }
            });
        }
        else {
            this.noactivelisting = false;
            this.noinactivelisting = false;
            this.active = false;
            this.inactive = false;
            this.incomplete = true;
            this.dash.getIncompletelist(localStorage.getItem('userid')).subscribe(function (data) {
                _this.res = data;
                _this.res = _this.res.replace(/\s/g, '');
                //this.res = JSON.parse(this.res);
                console.log('fired');
                console.log(_this.res);
                if (JSON.parse(_this.res).status != undefined) {
                    _this.noincompletelisting = true;
                    incompleteflag = 1;
                }
                else {
                    console.log('show data');
                    _this.noincompletelisting = false;
                    _this.incompletedata = eval(_this.res);
                }
            });
        }
    };
    ManaglistingPage.prototype.openpopactive = function (p) {
        var data = { p: p };
        console.log(p);
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_4__activepop_activepop__["a" /* ActivepopPage */], data, { cssClass: "shrppop" });
        pop.present();
    };
    ManaglistingPage.prototype.openpopinactive = function (p) {
        var data = { p: p };
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_3__inactivepop_inactivepop__["a" /* InactivepopPage */], data, { cssClass: "shrppop" });
        pop.present();
    };
    ManaglistingPage.prototype.opencompletepop = function (p) {
        var data = { p: p };
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_2__completepop_completepop__["a" /* CompletepopPage */], data, { cssClass: "shrppop" });
        pop.present();
    };
    ManaglistingPage.prototype.upgrade = function (p) {
        var data = { p: p };
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__upgrade2feature_upgrade2feature__["a" /* Upgrade2featurePage */], data);
    };
    ManaglistingPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    ManaglistingPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_9__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    ManaglistingPage.prototype.removefeatured = function (prop) {
        var _this = this;
        this.dash.remove_listing_featured(prop.id).subscribe(function (data) {
            console.log(data);
            _this.removed = true;
        });
    };
    ManaglistingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-managlisting',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/managlisting/managlisting.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop();this.navCtrl.pop();" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>MANAGE MY LISTING</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div class="margin_top_40">\n          <ul class="tabs">\n            <li class="col3" [class.active]="active">\n              <a (click)="open(\'active\')">ACTIVE</a>\n            </li>\n            <li class="col3" [class.active]="inactive">\n              <a (click)="open(\'inactive\')">INACTIVE</a>\n            </li>\n            <li class="col3" [class.active]="incomplete">\n              <a (click)="open(\'incomplete\')">INCOMPLETE</a>\n            </li>\n          </ul>\n\n          <div class="margin_bottom_40 margin_top_30" *ngIf="active">\n            <p *ngIf="noactivelisting">There Are No Listings</p>\n            <div class="property_box text_center"  *ngFor="let p of activedata">\n              <div (click)="openprop(p)">\n                <img\n                  [src]="p.images != undefined ? \'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image : \'./assets/images/splashscreen.png\'"\n                  title="Ovza">\n                <h5>House Property for {{p.rental_form != null ? \'rent\' : \'sale\' }}</h5>\n                <h5>{{p.listaddress2}}</h5>\n                <h5>$ {{p.rental_form != 0  ? p.rental_money : p.list_price}} / {{p.homesize == undefined || p.homesize\n                  == \'\' ? p.lotsize : p.homesize}} {{p.lotsizetype==1 ? \'Sq.ft\' : "Acre"}}</h5>\n              </div>\n\n              <div class="actions padding_left_right_20">\n                <button class="btn btn_block btn_login" (click)="openpopactive(p)">MANAGE MY LISTINGS</button>\n                <button class="btn btn_block btn_login" (click)="upgrade(p)" *ngIf="p.featured_status==0">UPGRADE TO\n                  FEATURED\n                </button>\n                <button class="btn btn_block btn_login" (click)="removefeatured(p);" *ngIf="p.featured_status==1">REMOVE\n                  FROM FEATURED\n                </button>\n\n              </div>\n            </div>\n          </div>\n          <div class="margin_bottom_40 margin_top_30" *ngIf="inactive">\n            <p *ngIf="noinactivelisting">There Are No Listings</p>\n            <div class="property_box text_center"  *ngFor="let p of inactivedata">\n             <div (click)="openprop(p)">\n               <img\n                 [src]="p.images != undefined ? \'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image : \'./assets/images/splashscreen.png\'"\n                 title="Ovza">\n               <h5>House Property for {{p.rental_form != null ? \'rent\' : \'sale\' }}</h5>\n               <h5>{{p.listaddress2}}</h5>\n               <h5>$ {{p.rental_form != null ? p.rental_money : p.list_price}} / {{p.homesize == undefined || p.homesize\n                 == \'\' ? p.lotsize : p.homesize}} {{p.lotsizetype==1 ? \'Sq.ft\' : "Acre"}}</h5>\n             </div>\n\n              <div class="actions padding_left_right_20">\n                <button class="btn btn_block btn_login" (click)="openpopinactive(p)">MANAGE MY LISTINGS</button>\n              </div>\n            </div>\n\n          </div>\n          <div class="margin_bottom_40 margin_top_30" *ngIf="incomplete">\n            <p *ngIf="noincompletelisting">There Are No Listings</p>\n            <div class="property_box text_center" *ngFor="let p of incompletedata">\n             <div (click)="openprop(p)" >\n               <img\n                 [src]="p.images != undefined ? \'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image : \'./assets/images/splashscreen.png\'"\n                 title="Ovza">\n               <h5>House Property for {{p.rental_form != null ? \'rent\' : \'sale\' }}</h5>\n               <h5>{{p.listaddress2}}</h5>\n               <h5>$ {{p.rental_form != null ? p.rental_money : p.list_price}} / {{p.homesize == undefined || p.homesize\n                 == \'\' ? p.lotsize : p.homesize}} {{p.lotsizetype==1 ? \'Sq.ft\' : "Acre"}}</h5>\n             </div>\n\n              <div class="actions padding_left_right_20">\n                <button class="btn btn_block btn_login" (click)="opencompletepop(p)">MANAGE MY LISTINGS</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n\n      <ul class="center_side">\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/question.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/managlisting/managlisting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* PopoverController */]])
    ], ManaglistingPage);
    return ManaglistingPage;
}());

//# sourceMappingURL=managlisting.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropdetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__requestinfo_requestinfo__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chathandler_chathandler__ = __webpack_require__(110);
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
 * Generated class for the PropdetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PropdetPage = /** @class */ (function () {
    function PropdetPage(popover, navCtrl, navParams) {
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.acq = true;
        this.acq1 = true;
        this.acq3 = false;
        this.acq2 = false;
        this.showdet = false;
        this.generalinfo = false;
        this.overview = true;
        this.type = localStorage.getItem("type");
        this.data = this.navParams.get('data');
        this.data.listeddate = parseInt(this.data.listeddate);
        this.userid = localStorage.getItem('userid');
    }
    PropdetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PropdetPage');
    };
    PropdetPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    PropdetPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_8__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    PropdetPage.prototype.openchat = function (username, userid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__chathandler_chathandler__["a" /* ChathandlerPage */], { 'username': username, 'userid': userid });
    };
    PropdetPage.prototype.reqinfo = function (ob) {
        var data = { p: ob };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__requestinfo_requestinfo__["a" /* RequestinfoPage */], data);
    };
    PropdetPage.prototype.edittime = function (current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerWeek = 7 * msPerDay;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
        if (elapsed < msPerMinute) {
            return 'now';
        }
        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ':minutes ago';
        }
        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ':hours ago';
        }
        else if (elapsed < msPerWeek) {
            return Math.round(elapsed / msPerDay) + ':days ago';
        }
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed / msPerWeek) + ':weeks ago';
        }
        else if (elapsed < msPerYear) {
            return Math.round(elapsed / msPerMonth) + ':months ago';
        }
        else {
            return Math.round(elapsed / msPerYear) + ':years ago';
        }
    };
    PropdetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-propdet',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/propdet/propdet.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>PROPERTY DETAILS</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="property_details margin_top_20 padding_bottom_60 margin_bottom_50">\n        <h4 class="text_center">{{data.property_type == 1 ? "Residential" : "Commercial"}}</h4>\n        <div class="short_info">\n          <ul>\n            <li>\n              <h6>Duplex Property for {{rental_form ? \'rent\' : \'sale\'}}</h6>\n              <span>{{data.listaddress2}}</span>\n              <h5 *ngIf="data.PriceState==1">$ {{data.list_price}}</h5>\n              <h5 *ngIf="data.PriceState==0">Hidden Price</h5>\n\n            </li>\n            <li>\n              <h6 *ngIf="data.userdata">Added By {{data.userdata ? data.userdata.firm_name : ""}}</h6>\n              <span *ngIf="data.userdata">{{data.userdata ? data.userdata.firm_addr : ""}}</span>\n              <h5 *ngIf="data.is_logged == 1 && userid != data.userid " (click)="openchat(data.userdata.firm_name,data.userdata.id)"><img src="./assets/images/icons/interface.svg"></h5>\n            </li>\n          </ul>\n        </div>\n        <div class="slider">\n          <img\n            [src]="data.images != undefined ? \'https://ovza.com/oriented/userdata/List/\'+data.userid+\'/\'+data.images[0].lid+\'/\'+data.images[0].list_image  :\'./assets/images/splashscreen.png\'"\n            title="Ovza">\n        </div>\n        <ul class="main_info text_center">\n          <li>\n            <img style="width:20px;" src="./assets/images/icons/icons8-grid-filled-50.png">\n            <h6>{{data.homesize == undefined || null ? data.lotsize : data.homesize}} {{data.lotsizetype==1 ? \'Sq.ft\' : "Acre"}}</h6>\n          </li>\n          <li>\n            <img style="width:20px;" src="./assets/images/icons/icons8-grid-filled-50.png">\n            <h6>{{data.beds}} Beds</h6>\n          </li>\n          <li>\n            <img style="width:20px;" src="./assets/images/icons/icons8-grid-filled-50.png">\n            <h6>{{data.bathrooms}} Bathroom</h6>\n          </li>\n          <li>\n            <img style="width:20px;" src="./assets/images/icons/icons8-grid-filled-50.png">\n            <h6>{{data.listeddate | date :\'longDate\'}}</h6>\n          </li>\n        </ul>\n        <ul class="overview">\n          <li [class.active]="overview" (click)="overview = true;photos = false;">OVERVIEW</li>\n          <li [class.active]="photos" (click)="overview = false;photos = true;"> PHOTOS</li>\n        </ul>\n\n        <div class="accordion-container" *ngIf="overview">\n          <div class="ac">\n            <a href="#" [class.ac-q]="acq1" [class.ac-q2]="acq3" (click)="acq1 ? acq1=false : acq1=true" (click)="acq3 ? acq3=false : acq3=true" (click)="showdet ? showdet=false : showdet=true">Details</a>\n            <div class="ac-a" [hidden]="!showdet">\n              <p>\n                {{data.aboutlisting}}\n              </p></div>\n          </div>\n\n          <div class="ac">\n            <a  [class.ac-q]="acq" [class.ac-q2]="acq2" (click)="generalinfo ? generalinfo=false : generalinfo=true;acq ? acq=false : acq=true;acq2 ? acq2=false : acq2=true" >General\n              Informations</a>\n            <div class="ac-a" [hidden]="!generalinfo">\n\n              <div class="prop_info">\n                <ul>\n                  <li>\n                    <p><img src="./assets/images/iconcs/007-bed.svg"><span>Beds</span></p>\n                    <h6>{{data.beds}} Beds</h6>\n                  </li>\n                  <li>\n                    <p><img src="./assets/images/icons/002-cube-with-arrows.svg"><span>Property Size</span></p>\n                    <h6>{{data.homesize == undefined || null ? \'N/A\' :data.homesize }} {{data.lotsizetype==1 ? \'Sq.ft\' : "Acre"}}</h6>\n\n                  </li>\n                  <li>\n                    <p><img src="./assets/images/icons/006-tag.svg"><span>Price</span></p>\n                    <h6 *ngIf="data.PriceState==1">$ {{data.list_price}}</h6>\n                    <h6 *ngIf="data.PriceState==0">Hidden Price</h6>\n                  </li>\n                  <li *ngIf="type==\'agent\'">\n                    <p><img src="./assets/images/icons/003-black.svg"><span>Status</span></p>\n                    <h6 *ngIf="data.list_status==2">Inactive</h6>\n                    <h6 *ngIf="data.list_status==-1">Incomplete</h6>\n                    <h6 *ngIf="data.list_status==1">Active</h6>\n                  </li>\n                  <li>\n                    <p><img src="./assets/images/icons/005-bathtub.svg"><span>Bathrooms</span></p>\n                    <h6>{{data.bathrooms}} Bathrooms</h6>\n                  </li>\n                  <li>\n                    <p><img src="./assets/images/icons/001-dimension.svg"><span>Lot Size</span></p>\n                    <h6>{{data.lotsize == undefined || null ? \'N/A\' : data.lotsize}} {{data.lotsizetype==1 ? \'Sq.ft\' : "Acre"}}</h6>\n\n                  </li>\n                  <li>\n                    <p><img src="./assets/images/icons/004-calendar.svg"><span>Year Built</span></p>\n                    <h6>{{data.listeddate | date :\'yyyy\'}}</h6>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n        <div *ngIf="photos && data.images != undefined">\n          <img *ngFor="let e of data.images"\n               [src]="\'https://ovza.com/oriented/userdata/List/\'+data.userid+\'/\'+e.lid+\'/\'+e.list_image">\n        </div>\n        <div *ngIf="photos && data.images == undefined">\n          <p style="text-align: center">No Photos To Show</p>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="type != \'agent\' ? reqinfo(data) : this.navCtrl.pop()"><img  [src]="type == \'agent\' ? \'./assets/images/icons/back.svg\' : \'./assets/images/icons/down.png\'"></a>\n        </li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/propdet/propdet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PropdetPage);
    return PropdetPage;
}());

//# sourceMappingURL=propdet.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profinfo1_profinfo1__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(dash, imagePicker, transfer, platform, camera, photoViewer, file, filePath, actionSheetCtrl, popover, navCtrl, navParams, toast) {
        this.dash = dash;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.platform = platform;
        this.camera = camera;
        this.photoViewer = photoViewer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.photo = localStorage.getItem('photo');
        this.lastImage = null;
        this.type = localStorage.getItem('type');
        this.userid = localStorage.getItem('userid');
        this.submitted = false;
        this.userdata = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].email]),
        });
        this.fname = this.navParams.get('fname');
        this.lname = this.navParams.get('lname');
        this.email = this.navParams.get('email');
        this.agentstatus = this.navParams.get('agentstatus');
    }
    EditprofilePage_1 = EditprofilePage;
    EditprofilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userdata.controls.firstName.setValue(this.fname);
        this.userdata.controls.lastName.setValue(this.lname);
        this.userdata.controls.email.setValue(this.email);
        if (!this.fname) {
            this.root = true;
            if (localStorage.getItem('type') == 'agent') {
                this.dash.getdashboardataprofile(localStorage.getItem('userid')).subscribe(function (data) {
                    _this.res = data;
                    _this.res = _this.res.replace(/\s/g, '');
                    console.log(data);
                    _this.res = JSON.parse(_this.res);
                    console.log(_this.res);
                    _this.fname = _this.res.firstname;
                    _this.lname = _this.res.lastname;
                    _this.email = _this.res.email;
                    _this.userdata.controls.firstName.setValue(_this.fname);
                    _this.userdata.controls.lastName.setValue(_this.lname);
                    _this.userdata.controls.email.setValue(_this.email);
                });
            }
            else {
                this.dash.getDashboardData(localStorage.getItem('userid')).subscribe(function (data) {
                    _this.res = data;
                    _this.res = _this.res.replace(/\s/g, '');
                    console.log(data);
                    _this.res = JSON.parse(_this.res);
                    console.log(_this.res);
                    _this.fname = _this.res.firstname;
                    _this.lname = _this.res.lastname;
                    _this.email = _this.res.email;
                    _this.userdata.controls.firstName.setValue(_this.fname);
                    _this.userdata.controls.lastName.setValue(_this.lname);
                    _this.userdata.controls.email.setValue(_this.email);
                });
            }
        }
    };
    EditprofilePage.prototype.openhome = function () {
        var _this = this;
        if (this.userdata.valid) {
            this.dash.updateUserProfile(localStorage.getItem('userid'), this.userdata.value).subscribe(function (data) {
                var filename = _this.lastImage;
                // File for Upload
                var targetPath = _this.pathForImage(_this.lastImage);
                // Destination URL
                var url, options;
                url = "http://ovza.com/oriented/public/upload/avatar";
                options = {
                    fileKey: "avatar",
                    fileName: filename,
                    chunkedMode: false,
                    mimeType: "multipart/form-data",
                    params: { 'avatar': filename, 'id': localStorage.getItem('userid'), type: 'Profile' }
                };
                var fileTransfer = _this.transfer.create();
                // Use the FileTransfer to upload the image
                fileTransfer.upload(targetPath, url, options, true).then(function (data) {
                    // let response = JSON.parse(data.response);
                    localStorage.setItem('photo', filename);
                }, function (err) {
                    _this.presentToast('Error while uploading file.');
                });
                _this.data = data;
                _this.data = _this.data.replace(/\s/g, '');
                console.log(data);
                _this.data = JSON.parse(_this.data);
                localStorage.setItem('email', _this.userdata.value.email);
                if (_this.data.status == 1) {
                    if (_this.agentstatus == '2' || localStorage.getItem('type') == 'agent') {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__profinfo1_profinfo1__["a" /* Profinfo1Page */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                    }
                    ;
                }
            });
        }
    };
    EditprofilePage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(EditprofilePage_1);
            }
        }
    };
    EditprofilePage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    EditprofilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image ',
            buttons: [
                {
                    text: 'Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
            ]
        });
        actionSheet.present();
    };
    EditprofilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    EditprofilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    EditprofilePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    EditprofilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            //  this.navCtrl.push(UploadImagePage, {
            //     avatar: this.lastImage
            //   })
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    EditprofilePage.prototype.presentToast = function (msg) {
        var toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    var EditprofilePage_1;
    EditprofilePage = EditprofilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/editprofile/editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n  <main>\n    <div class="wrapper">\n      <header class="header text_center margin_bottom_40">\n        <div class="container">\n          <div class="row">\n            <span class="col-20"><a (click)="!root ? this.navCtrl.pop() : \'\'" class="float_left"><img\n              src="./assets/images/icons/back.svg"></a></span>\n            <span class="text_center col-60"><h4>EDIT PROFILE</h4></span>\n            <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n              src="./assets/images/icons/listing-option.svg"></a></span>\n          </div>\n        </div>\n      </header>\n      <div class="container">\n        <section class="padding_top_bottom_40">\n          <div class="edit_profile text_center" style="margin-right: 15%;\n    margin-left: 15%;" *ngIf="fname">\n            <form [formGroup]="userdata" style="width:80%; margin:0 10% 0 10% ; "\n                  (ngSubmit)="submitted=true;openhome()">\n              <div class="user_img" (click)="presentActionSheet()">\n                <img [src]="lastImage === null? \'./assets/images/user_img.png\' : pathForImage(lastImage)" title="Ovza" name="avatar">\n                <!-- <input type="file" name="avtar" title="Ovza"  > -->\n                \n                <h4 (click)="presentActionSheet()">EDIT PROFILE IMAGE</h4>\n              </div>\n              <fieldset>\n                <label><img [src]="selectedphoto"></label>\n                <input class="input has_icon" type="text" name="fname" placeholder="FIRST NAME"\n                       formControlName="firstName" value="{{fname}}">\n              </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !userdata.controls.firstName.valid)">Please Enter Your First\n                Name</p></div>\n              <fieldset>\n                <label><img src="./assets/images/icons/user.svg"></label>\n                <input class="input has_icon" type="text" name="lname" placeholder="LAST NAME"\n                       formControlName="lastName" value="{{lname}}">\n              </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !userdata.controls.lastName.valid)">Please Enter Your Last\n                Name</p></div>\n              <fieldset>\n                <label><img src="./assets/images/icons/envelope.svg"></label>\n                <input disabled class="input has_icon" type="email" name="email" placeholder="EMAIL" formControlName="email"\n                       value="{{email}}">\n              </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n              <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted && !userdata.controls.email.valid)">Invalid Email</p>\n            </div> <div class="actions">\n                <button class="btn btn_block btn_login" type="submit">\n                  SAVE DETAILS\n                </button>\n              </div>\n            </form>\n          </div>\n        </section>\n      </div>\n      <nav class="nav_tabs">\n        <ul class="left_side">\n          <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n          <li><a (click)="opennav(\'add\')">\n            <img\n              [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n          </li>\n        </ul>\n        <ul class="center_side">\n          <li><a (click)="submitted=true;openhome()"><img src="./assets/images/icons/next.svg"></a></li>\n        </ul>\n        <ul class="right_side">\n          <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n          <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n        </ul>\n      </nav>\n    </div>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/editprofile/editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListnwpayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_payment_service_payment_service__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(366);
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
 * Generated class for the ListnwpayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListnwpayPage = /** @class */ (function () {
    function ListnwpayPage(popover, formBuilder, paymentService, inAppBrowser, toast, navCtrl, navParams) {
        var _this = this;
        this.popover = popover;
        this.formBuilder = formBuilder;
        this.paymentService = paymentService;
        this.inAppBrowser = inAppBrowser;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.value = 5;
        this.type = localStorage.getItem('type');
        this.options = {
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
        this.validation_messages = {
            'cardNumber': [
                { type: 'required', message: 'card number is required.' },
                { type: 'minlength', message: 'Card number must be 16 number' },
                { type: 'maxlength', message: 'Card number must be 16 number' }
            ],
            'cardHolderName': [
                { type: 'required', message: 'card holder name is required.' },
            ],
            'expiryDateMonth': [
                { type: 'required', message: 'month  is required.' },
                { type: 'maxlength', message: 'expiry month must be in 2 diget format' },
            ],
            'expiryDateYear': [
                { type: 'required', message: 'year  is required.' },
                { type: 'maxlength', message: 'expiry year must be in 2 diget format' },
            ],
            'CVV': [
                { type: 'required', message: 'CVV  is required.' },
                { type: 'maxlength', message: 'CCV must be 3 numbers' },
            ]
        };
        this.payByPayfort = function (event) {
            var expiryDate = event.expiryDateMonth + event.expiryDateYear;
            console.log(expiryDate);
            var random = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
            _this.paymentService.merchant_page_request(event.cardNumber, event.cardHolderName, event.CVV, expiryDate, random + '-' + _this.userid + '-' + _this.pid).subscribe(function (result) {
                _this.result1 = result;
                _this.result1 = _this.result1.replace(/\s/g, '');
                _this.result1 = JSON.parse(_this.result1);
                console.log(_this.result1);
                if (_this.result1.status) {
                    _this.paymentService.get_navigation_url(_this.result1.token, random + '-' + _this.userid + '-' + _this.pid, 'test323@gsga.com', 'ali').subscribe(function (url) {
                        _this.result2 = url;
                        _this.result2 = _this.result2.replace(/\s/g, '');
                        _this.result2 = JSON.parse(_this.result2);
                        console.log(_this.result2['3ds_url']);
                        var browser = _this.inAppBrowser.create(_this.result2['3ds_url'], '_blank', _this.options);
                        browser.on('loadstart').subscribe(function (event) {
                            if (event.url.includes('https://ovza.com')) {
                                browser.close();
                                console.log(event.url);
                                if (event.url.includes('status=14')) {
                                    _this.navCtrl.push('PaymentResultPage', { "payment_result": 'Your transaction with us has completed successfully.' });
                                }
                                else {
                                    _this.navCtrl.push('PaymentResultPage', { "payment_result": 'Your payment has failed. Please contact admin' });
                                }
                            }
                        });
                    });
                }
                else {
                    var toast = _this.toast.create({
                        message: "Sorry there is an error please try again",
                        duration: 2000
                    });
                    toast.present();
                }
            });
        };
    }
    ListnwpayPage.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.userid = this.navParams.get('userid');
        this.pid = this.navParams.get('pid');
        this.payment_form = this.formBuilder.group({
            cardNumber: new __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].maxLength(16),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].minLength(16),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
            ])),
            cardHolderName: new __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
            ])),
            expiryDateMonth: new __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].maxLength(2)
            ])),
            expiryDateYear: new __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].maxLength(2)
            ])),
            CVV: new __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* Validators */].maxLength(3)
            ])),
        });
        this.enablePay = this.payment_form.valid;
    };
    ListnwpayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListnwpayPage');
    };
    ListnwpayPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    ListnwpayPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    ListnwpayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-listnwpay',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listnwpay/listnwpay.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60">\n            <h4>LIST NOW PAYMENT </h4>\n          </span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div  style="margin-top:35%;">\n          <form [formGroup]="payment_form" style="width:80%; margin:0 10% 0 10% ; " role="form" action="#" method="#">\n            <ion-item>\n              <ion-label>Card Holder Name </ion-label>\n              <ion-input type="text"  placeholder="Card holder name" formControlName="cardHolderName"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.cardHolderName">\n                <div class="error-message" *ngIf="payment_form.get(\'cardHolderName\').hasError(validation.type) && (payment_form.get(\'cardHolderName\').dirty)">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label>Card Number </ion-label>\n              <ion-input type="text" placeholder="Card Number" formControlName="cardNumber"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.cardNumber">\n                <div class="error-message" *ngIf="payment_form.get(\'cardNumber\').hasError(validation.type) && (payment_form.get(\'cardNumber\').dirty)">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label>Expiration Date</ion-label>\n              <ion-input type="number" placeholder="Year" formControlName="expiryDateMonth"></ion-input>\n              <ion-input type="number" placeholder="Month" formControlName="expiryDateYear"></ion-input>\n\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.expiryDateMonth">\n                <div class="error-message" *ngIf="payment_form.get(\'expiryDateMonth\').hasError(validation.type) && (payment_form.get(\'expiryDateMonth\').dirty)">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.expiryDateYear">\n                <div class="error-message" *ngIf="payment_form.get(\'expiryDateYear\').hasError(validation.type) && (payment_form.get(\'expiryDateYear\').dirty)">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n            <ion-item>\n              <ion-label>Card Verification Number </ion-label>\n              <ion-input type="number" placeholder="CVV" formControlName="CVV"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n              <ng-container *ngFor="let validation of validation_messages.CVV">\n                <div class="error-message" *ngIf="payment_form.get(\'CVV\').hasError(validation.type) && (payment_form.get(\'CVV\').dirty)">\n                  {{ validation.message }}\n                </div>\n              </ng-container>\n            </div>\n<!-- \n             <ion-item>\n              <button ion-button round outline type="submit" [disabled]="!payment_form" (tap)="payByPayfort(payment_form.value)">pay</button>\n            </ion-item> -->\n          </form>\n          <!-- <p>If youu select yearly package,<br> you will get discount of 20%.</p>\n          <h4 class="price">AMOUNT <br> {{value}}$</h4> -->\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n            <img [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li>\n      </ul>\n      <ul class="center_side">\n        <li><button class="payButton" (click)="payByPayfort(payment_form.value)" >Pay</button></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/listnwpay/listnwpay.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_0__providers_payment_service_payment_service__["a" /* PaymentServiceProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__providers_payment_service_payment_service__["a" /* PaymentServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], ListnwpayPage);
    return ListnwpayPage;
}());

//# sourceMappingURL=listnwpay.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dashboard_dashboard__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(53);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(alertCtrl, popover, dash, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.popover = popover;
        this.dash = dash;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.oldpass = false;
        this.type = localStorage.getItem('type');
        this.submitted2 = false;
        this.userdata = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            oldpass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            newpass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            confpass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])
        });
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.save = function () {
        var _this = this;
        if (this.userdata.valid) {
            if (localStorage.getItem('password') == this.userdata.value.oldpass) {
                this.oldpass = true;
                this.dash.changePassword(localStorage.getItem('userid'), this.userdata.value.newpass, this.userdata.value.oldpass).subscribe(function (data) {
                    _this.res = data;
                    _this.res = _this.res.replace(/\s/g, '');
                    _this.res = JSON.parse(_this.res);
                    _this.res = _this.res;
                    console.log(_this.res);
                    if (_this.res.status == 1) {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Success',
                            subTitle: 'Your Password Has Been Changed',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        // user has clicked the alert button
                                        // begin the alert's dismiss transition
                                        var navTransition = alert_1.dismiss();
                                        // start some async method
                                        // once the async operation has completed
                                        // then run the next nav transition after the
                                        // first transition has finished animating out
                                        navTransition.then(function () {
                                            localStorage.setItem('logged', "0");
                                            localStorage.removeItem('email');
                                            localStorage.removeItem('password');
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
                                        });
                                        return false;
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                });
            }
            else {
                this.oldpass = false;
            }
        }
    };
    ChangepasswordPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    ChangepasswordPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/changepassword/changepassword.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center margin_bottom_40">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<img src="./assets/images/icons/back.svg">\n						</a></span>\n          <span class="text_center col-60"><h4>Change My Password</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="padding_bottom_40 padding_top_20per">\n        <div class="edit_profile text_center">\n          <h4 class="form_title">Change My Password\n          </h4>\n          <form [formGroup]="userdata" style="width:80% ; margin:0 10% 0 10%" role="form" action="#" method="#">\n            <fieldset>\n              <input class="input" type="password" name="" placeholder="OLD PASSWORD" formControlName="oldpass">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !oldpass)">Old\n              Password Is Invalid</p>\n          </div>\n            <fieldset>\n              <input class="input" type="password" name="" placeholder="NEW PASSWORD" formControlName="newpass">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !userdata.controls.newpass.valid)">Please Enter New\n              Password</p>\n          </div>\n            <fieldset>\n              <input class="input" type="password" name="" placeholder="CONFIRM PASSOWRD" formControlName="confpass">\n            </fieldset> <div style="margin-bottom: 13px;color: red ; height: 19px;\n              margin-top: 2px;">\n            <p style="margin-bottom: 13px;color: red ;\n              margin-top: 2px;" [hidden]="!(submitted2 && !(userdata.value.newpass ==userdata.value.confpass) )">\n              Password Doesn\'t Match</p>\n          </div>\n            <div class="actions">\n              <button (click)="save();submitted2=true;" class="btn btn_block btn_login">\n                SAVE\n              </button>\n            </div>\n          </form>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovelistingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var propdata, type;
/**
 * Generated class for the RemovelistingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RemovelistingPage = /** @class */ (function () {
    function RemovelistingPage(alertCtrl, dash, popover, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showinput = false;
        this.type = localStorage.getItem('type');
        propdata = this.navParams.get('p');
        console.log(propdata);
        type = this.navParams.get('type');
    }
    RemovelistingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RemovelistingPage');
    };
    RemovelistingPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    RemovelistingPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    RemovelistingPage.prototype.dosomething = function (value) {
        if (value == 1) {
            this.showinput = true;
        }
        else {
            this.showinput = false;
        }
    };
    RemovelistingPage.prototype.remove = function () {
        var _this = this;
        if (type == "1") {
            this.dash.remove_listing_active(propdata.id.toString()).subscribe(function (data) {
                console.log(data);
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Your Listing Has Been Removed',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                // user has clicked the alert button
                                // begin the alert's dismiss transition
                                var navTransition = alert.dismiss();
                                // start some async method
                                // once the async operation has completed
                                // then run the next nav transition after the
                                // first transition has finished animating out
                                navTransition.then(function () {
                                    localStorage.setItem('logged', "0");
                                    localStorage.removeItem('email');
                                    localStorage.removeItem('password');
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                });
                                return false;
                            }
                        }
                    ]
                });
                alert.present();
            });
        }
        else if (type = "2") {
            this.dash.remove_listing_inactive(propdata.id.toString()).subscribe(function (data) {
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Your Listing Has Been Removed',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                // user has clicked the alert button
                                // begin the alert's dismiss transition
                                var navTransition = alert.dismiss();
                                // start some async method
                                // once the async operation has completed
                                // then run the next nav transition after the
                                // first transition has finished animating out
                                navTransition.then(function () {
                                    localStorage.setItem('logged', "0");
                                    localStorage.removeItem('email');
                                    localStorage.removeItem('password');
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                });
                                return false;
                            }
                        }
                    ]
                });
                alert.present();
            });
        }
        else {
            this.dash.remove_listing_incomplete(propdata.id.toString()).subscribe(function (data) {
                console.log(data);
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    subTitle: 'Your Listing Has Been Removed',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                // user has clicked the alert button
                                // begin the alert's dismiss transition
                                var navTransition = alert.dismiss();
                                // start some async method
                                // once the async operation has completed
                                // then run the next nav transition after the
                                // first transition has finished animating out
                                navTransition.then(function () {
                                    localStorage.setItem('logged', "0");
                                    localStorage.removeItem('email');
                                    localStorage.removeItem('password');
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                });
                                return false;
                            }
                        }
                    ]
                });
                alert.present();
            });
        }
    };
    RemovelistingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-removelisting',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/removelisting/removelisting.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n          <span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left"><img\n            src="./assets/images/icons/back.svg"></a></span>\n          <span class="text_center col-60"><h4>REMOVE LISTING</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right"><img\n            src="./assets/images/icons/listing-option.svg"></a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center">\n        <div class="margin_top_40">\n          <div class="margin_bottom_40 margin_top_30">\n            <div class="property_box text_center">\n              <img src="assets/images/property_item.jpg" title="Ovza">\n              <h5>House Property for sale</h5>\n              <h5>12 Chastas, Paris, France 12-2121</h5>\n              <h5>$2121 / 5,675 sq.ft</h5>\n            </div>\n          </div>\n          <div class="margin_top_40 text_center max_width_400 margin_auto">\n            <form style="width:80%; margin:0 10% 0 10% ; " role="form" action="#" method="#">\n              <h4 class="input_title">PROPERTY STATUS</h4>\n              <fieldset>\n                <select class="input select_box" (change)="dosomething($event.target.value)">\n                  <option selected="selected" value="0">\n                    NO LONGER AVAILABLE FOR SALE\n                  </option>\n                  <option value="1">SOLD</option>\n\n                </select>\n              </fieldset>\n              <fieldset *ngIf="showinput">\n                <input class="input" type="text">\n                <input class="input" type="text">\n              </fieldset>\n\n            </form>\n          </div>\n        </div>\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li></ul>\n      <ul class="center_side">\n        <li><a (click)="remove()"><img src="./assets/images/icons/question.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/removelisting/removelisting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RemovelistingPage);
    return RemovelistingPage;
}());

//# sourceMappingURL=removelisting.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agents_agents__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chathandler_chathandler__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__ = __webpack_require__(9);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(contact, alert, toast, agents, popover, navCtrl, navParams) {
        this.contact = contact;
        this.alert = alert;
        this.toast = toast;
        this.agents = agents;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.email = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].email]),
            content: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required]),
            name: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */].required])
        });
        this.ovza = true;
        this.chats = false;
        this.userid = '';
        this.sendContact = { 'email': '', 'name': '', 'message': '' };
        this.userid = localStorage.getItem('userid');
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        // this.agents.get_agents().subscribe((data =>  {
        //   console.log(data)  ;
        // }))
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.open = function (page) {
        var _this = this;
        if (page == 'ovza') {
            this.chats = false;
            this.ovza = true;
        }
        else {
            this.ovza = false;
            this.chats = true;
            this.agents.get_agents().subscribe(function (data) {
                _this.res = data;
                console.log(_this.res);
            });
        }
    };
    ChatPage.prototype.openchat = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chathandler_chathandler__["a" /* ChathandlerPage */], { 'userid': p.id, 'username': p.firstname + ' ' + p.lastname });
    };
    ChatPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__wishlist_wishlist__["a" /* WishlistPage */]);
            }
        }
        if (page == 'chat') { }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    ChatPage.prototype.openmenu = function () {
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        pop.present();
    };
    // send() {
    //   this.email.value.to = "" ;
    //   this.email.value.subject = "Ovza" ;
    //   this.contact.sendMail(this.email.value) ;
    // }
    ChatPage.prototype.ovza_contact = function () {
        var alert = this.alert.create({
            message: 'Your message sent successfully thanks !',
            title: 'Ovza',
            buttons: [{
                    text: 'ok',
                    role: 'cancle'
                }]
        });
        if (this.email.valid) {
            this.contact.sendMail(this.sendContact.email, this.sendContact.name, 'Ovza chat', this.sendContact.message).subscribe(function (res) {
                alert.present();
            });
            this.sendContact.email == '';
            this.sendContact.name == '';
            this.sendContact.message == '';
        }
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/chat/chat.html"*/'\n\n<ion-content>\n    <div class="wrapper">\n        <div [class.ovrly]="chats"></div>\n        <div class="chat_2">\n          <section class="centered">\n              <div class="padding_top_10 margin_bottom_30">\n                <ul class="tabs">\n                  <li [class.active]="ovza">\n                    <a (click)="open(\'ovza\')">OVZA</a>\n                  </li>\n                  <li [class.active]="chats">\n                    <a (click)="open(\'agents\')">AGENTS</a>\n                  </li>\n                </ul>\n              </div>\n            <!--agents from here -->\n              <div [hidden]="ovza">\n                <div *ngFor="let p of res">\n                  <div *ngIf="userid != p.userid">\n\n                  <div class="chat_row" (click)="openchat(p)">\n                    <div class="chat_img">\n                      <img src="./assets/images/user_img.png" title="Ovza">\n                    </div>\n                    <div class="chat_context">\n                      <div class="info">\n                        <h5>{{p.firstname }}  {{ p.lastname}}</h5>\n                        <!-- <span class="counter">4</span> -->\n                      </div>\n                      <!-- <div class="prgrph">\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>\n                      </div> -->\n                    </div>\n                  </div>\n                </div>\n                <!-- <div *ngIf="">\n                  <div class="chat_row" >\n                      <p3 class="info">There are no online agents</p3>\n                  </div>\n                </div> -->\n          <!-- //Chat Row -->\n                  </div>\n              </div>\n\n              <div class="edit_profile padding_top_40" [hidden]="chats">\n                               <form style="width:80% ; margin:0 10% 0 10%" [formGroup]="email">\n                                 <fieldset>\n                                   <input class="input" type="text" name="" placeholder="FULL NAME" formControlName= "name" [(ngModel)]="this.sendContact.name" >\n                                 </fieldset>\n                                  <p style="margin-bottom: 13px;color: red ;\n                           margin-top: 2px;" [hidden]="!(submitted && !email.controls.name.valid)">Please Enter Your Name</p>\n                                 <fieldset>\n                                   <input class="input" type="text" name="" placeholder="EMAIL" formControlName= "email" [(ngModel)]="this.sendContact.email">\n                                 </fieldset>\n                                  <p style="margin-bottom: 13px;color: red ;\n                           margin-top: 2px;" [hidden]="!(submitted && !email.controls.email.valid)">Invalid Email</p>\n                                 <fieldset>\n                                   <textarea class="input textarea" name="" placeholder="MESSAGE" formControlName= "content" [(ngModel)]="this.sendContact.message"></textarea>\n                                 </fieldset>\n                                  <p style="margin-bottom: 13px;color: red ;\n                           margin-top: 2px;" [hidden]="!(submitted && !email.controls.content.valid)">Please Enter Your Message</p>\n                                 <div class="captch margin_top_30">\n                                   <div class="account_type captch_side_check float_left">\n                                       <div class="radio_input margin_top_5">\n                                         <input type="checkbox" name="" id="checkbox_one" >\n                                         <label for="checkbox_one">I’m not a robot</label>\n                                       </div>\n                                   </div>\n                                   <div class="float_right captch_side_title text_center">\n                                     <img src="./assets/images/recaptch.png" title="Ovza">\n                                     <h6>reCAPTCHA</h6>\n                                     <span>Privacy - Terms</span>\n                                   </div>\n                                 </div>\n                               </form>\n                             </div>\n\n\n\n          </section>\n        </div>\n        <nav class="nav_tabs">\n          <ul class="left_side">\n            <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n            <li><a (click)="opennav(\'add\')"><img [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/next.svg\' "></a></li>\n          </ul>\n          <ul class="center_side">\n            <li><a (click)="submitted=true;" (click)="ovza_contact()"><img src="./assets/images/icons/next.svg"></a></li>\n          </ul>\n          <ul class="right_side">\n            <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n            <li><a (click)="opennav(\'profile\')"><img src="./assets/images/icons/avatar.svg"></a></li>\n          </ul>\n        </nav>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_contact_contact__["a" /* ContactProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_agents_agents__["a" /* AgentsProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listprop_listprop__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managemyaccount_managemyaccount__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_dashboard_dashboard__ = __webpack_require__(17);
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
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishlistPage = /** @class */ (function () {
    function WishlistPage(alertCtrl, dash, popover, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.dash = dash;
        this.popover = popover;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.type = localStorage.getItem('type');
        this.nolist = true;
        this.data1 = [];
        this.nodata = false;
    }
    WishlistPage_1 = WishlistPage;
    WishlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dash.getwishlist(localStorage.getItem('userid')).subscribe(function (data) {
            _this.data = data;
            _this.data = _this.data.replace(/\s/g, '');
            console.log(data);
            _this.data = JSON.parse(_this.data);
            console.log(_this.data);
            if (_this.data.status == "Therearenowishlistlists") {
                _this.nolist = true;
            }
            else {
                _this.nolist = false;
                for (var i = 0; i < _this.data.length; i++) {
                    _this.dash.getlistdata(_this.data[i].lid).subscribe(function (data) {
                        _this.res = data;
                        _this.res = _this.res.replace(/\s/g, '');
                        console.log(data);
                        _this.res = JSON.parse(_this.res);
                        console.log(_this.res);
                        if (_this.res.message != undefined) {
                            _this.nolist = false;
                            _this.nodata = true;
                        }
                        else {
                            _this.data1.push(_this.res);
                            console.log(_this.data1);
                        }
                    });
                }
            }
        });
        // console.log('ionViewDidLoad WishlistPage');
        // this.favs = localStorage.getItem('fav') ;
        // if(this.favs != undefined) {
        //   this.favs = eval(this.favs) ;
        //
        //   this.favs.forEach((val) => {
        //     console.lodashg(val) ;
        //     // this.dash.getlistinfo(val).subscribe((data) => {
        //     //
        //     // })
        //   })
        // }
    };
    WishlistPage.prototype.opennav = function (page) {
        if (page == 'home') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        if (page == 'add') {
            if (this.type == "agent") {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__listprop_listprop__["a" /* ListpropPage */]);
            }
            else {
                this.navCtrl.setRoot(WishlistPage_1);
            }
        }
        if (page == 'chat') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */]);
        }
        if (page == 'profile') {
            if (localStorage.getItem('type') == 'agent') {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__managemyaccount_managemyaccount__["a" /* ManagemyaccountPage */]);
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile__["a" /* EditprofilePage */]);
            }
        }
    };
    WishlistPage.prototype.openmenu = function () {
        var _this = this;
        var pop = this.popover.create(__WEBPACK_IMPORTED_MODULE_7__menu_menu__["a" /* MenuPage */], {}, { cssClass: "menupop" });
        if (!this.menuflag) {
            pop.present();
            this.menuflag = 1;
        }
        pop.onDidDismiss(function () {
            _this.menuflag = 0;
        });
    };
    WishlistPage.prototype.remove = function (p) {
        var _this = this;
        this.dash.removewish(p.id, localStorage.getItem('userid')).subscribe(function (data) {
            var alert = _this.alertCtrl.create({
                title: 'Alert',
                subTitle: 'This Listing Has Been Removed',
                buttons: ['Ok']
            });
            alert.present();
            _this.data1 = _this.data1.filter(function (el) {
                return el.id !== p.id;
            });
        });
    };
    var WishlistPage_1;
    WishlistPage = WishlistPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wishlist',template:/*ion-inline-start:"/home/pokevirus/Desktop/Projects/ovza/src/pages/wishlist/wishlist.html"*/'<ion-content>\n  <div class="wrapper">\n    <header class="header text_center">\n      <div class="container">\n        <div class="row">\n						<span class="col-20"><a (click)="this.navCtrl.pop()" class="float_left">\n							<!--<img src="./assets/images/icons/back.svg">-->\n						</a></span>\n          <span class="text_center col-60"><h4>MY WISHLIST</h4></span>\n          <span class="col-20"><a (click)="openmenu()" class="float_right">\n							<img src="./assets/images/icons/listing-option.svg">\n						</a></span>\n        </div>\n      </div>\n    </header>\n    <div class="container">\n      <section class="centered text_center wishlist max_width_400 margin_auto">\n       <div style="margin-top: 16px;" *ngIf="nolist">\n         There Are No Listings\n       </div>\n        <div style="margin-top: 16px;" *ngIf="nodata">\n\n          There Are No Listings\n        </div>\n        <div *ngIf="!nolist" >\n          <div *ngFor="let p of data1" class="margin_top_40">\n            <h5 *ngIf="p.userdata" class="main_color">Wishlist New house ({{p.length}}) <br> By {{p.userdata ? p.userdata1.firm_name : ""}}</h5>\n            <div  class="wish_item">\n              <img\n                [src]="p.images != undefined ? \'https://ovza.com/oriented/userdata/List/\'+p.userid+\'/\'+p.images[0].lid+\'/\'+p.images[0].list_image  :\'./assets/images/splashscreen.png\'"\n                title="Ovza">\n              <ul class="price_space">\n                <li *ngIf="p.PriceState==1">$ {{p.list_price}}</li>\n                <li *ngIf="p.PriceState==0">Hidden Price</li>\n\n                <li>{{p.homesize == undefined || null ? p.lotsize : p.homesize}} Sq.ft</li>\n              </ul>\n              <div class="remove_more">\n                <div class="remove"><a (click)="remove(p)">Remove</a></div>\n                <ul>\n                  <li><img src="./assets/images/icons/bed_gray.svg">{{p.beds}}</li>\n                  <li><img src="./assets/images/icons/bathtub_gray.svg"> {{p.bathrooms}}</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </section>\n    </div>\n    <nav class="nav_tabs">\n      <ul class="left_side">\n        <li><a (click)="opennav(\'home\')"><img src="./assets/images/icons/home.svg"></a></li>\n        <li><a (click)="opennav(\'add\')">\n          <img\n            [src]="type==\'agent\' ? \'./assets/images/icons/plus-button.svg\' : \'./assets/images/icons/icons8-heart.png\' "></a>\n        </li> </ul>\n      <ul class="center_side">\n        <li><a (click)="this.navCtrl.pop()"><img src="./assets/images/icons/back.svg"></a></li>\n      </ul>\n      <ul class="right_side">\n        <li><a (click)="opennav(\'chat\')"><img src="./assets/images/icons/interface.svg"></a></li>\n        <li><a href="javascript:void(0)"><img src="./assets/images/icons/avatar.svg"></a></li>\n      </ul>\n    </nav>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/pokevirus/Desktop/Projects/ovza/src/pages/wishlist/wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__providers_dashboard_dashboard__["a" /* DashboardProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map