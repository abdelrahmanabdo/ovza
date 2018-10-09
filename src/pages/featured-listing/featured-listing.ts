
import { IonicPage } from 'ionic-angular';
import {SearchProvider} from './../../providers/home/home';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {MenuPage} from './../menu/menu';
import {SearchpopupPage} from './../searchpopup/searchpopup';
import {Component, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {PropdetPage} from "../propdet/propdet";
import {FeaturedProvider} from "../../providers/featured_listing/featured_listing";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
import {HomePage} from "../home/home";


/**
 * Generated class for the FeaturedListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-featured-listing',
  templateUrl: 'featured-listing.html',
})
export class FeaturedListingPage {
    shownocom;
    shownores;
    type = localStorage.getItem('type');
    commercial = false;
    resedntial = false;
    comdata1;
    comdata2;
    resdata1;
    resdata2;
    comdata;
    resdata;
    comloadedflag = 0;
    fav;

    constructor(public alertCtrl : AlertController , public dash : DashboardProvider , public auth: FeaturedProvider, public search: SearchProvider, public navCtrl: NavController, public navParams: NavParams, public popover: PopoverController) {
        this.resedntial = true;

    }

    ngAfterViewInit() {

    }

    ionViewDidLoad() {
        // this.search.get_home_residential_list().subscribe((data) => {
        //   console.log(data) ;
        // })
        // this.auth.get_featured_listings_list().subscribe((data) => {
        //   console.log(data) ;
        // })
        console.log('ionViewDidLoad HomePage');
        this.search.get_home_residential_list().subscribe((data) => {
            this.resdata = data;
            this.resdata = this.resdata.replace(/\s/g, '');
            console.log(data);
            this.resdata = JSON.parse(this.resdata);

            if (this.resdata.status != undefined) {
                this.shownores = true;
            } else {
                this.resdata = eval(this.resdata)
                this.spliceres();
            }
        })
    }

    openresd() {
        this.commercial = false;
        this.resedntial = true;


    }

    opencommerc() {
        if (!this.comloadedflag) {
            this.search.get_home_commercial_list().subscribe((data) => {

                this.comdata = data;
                this.comdata = this.comdata.replace(/\s/g, '');
                console.log(data);
                this.comdata = JSON.parse(this.comdata);

                if (this.comdata.status != undefined) {
                    this.shownocom = true;
                } else {
                    this.comdata = eval(this.comdata)
                    this.splicecom();
                }

            })
        }

        this.comloadedflag = 1;
        this.resedntial = false;
        this.commercial = true;

    }

    splicecom() {
        if(this.comdata.length ==1) {
            this.comdata1 = this.comdata ;
        }else{
            this.comdata1 = this.comdata.slice(0, Math.floor(this.comdata.length / 2))
            this.comdata2 = this.comdata.slice(Math.round(this.comdata.length / 2), this.comdata.length)
            console.log(this.comdata1);
            console.log(this.comdata2);
        }

    }

    spliceres() {
        if(this.resdata.length == 1) {
            this.resdata1 = this.resdata ;
        }else{
            this.resdata1 = this.resdata.slice(0, Math.floor(this.resdata.length / 2))
            this.resdata2 = this.resdata.slice(Math.round(this.resdata.length / 2), this.resdata.length)

        }
        console.log(this.resdata1);
        console.log(this.resdata2);
    }

    opensearchpop() {
        let pop = this.popover.create(SearchpopupPage, {res: this.resedntial, com: this.commercial}, {cssClass: "regpop"});
        pop.present();
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

    openlistprop() {
        this.navCtrl.push(ListpropPage, {}, {animate: false});
    }

    openchat() {
        this.navCtrl.setRoot(ChatPage, {}, {animate: false})
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

    openprop(data) {
        console.log(data)
        this.navCtrl.push(PropdetPage, {data});
    }

    savetowish(p) {
        this.dash.addtowishlist(p.userid,localStorage.getItem('userid'),p.id,"",1).subscribe((data) => {
            let alert = this.alertCtrl.create({
                title: 'Done!',
                subTitle: 'You Have Added This List To Your Wishlist',
                buttons: ['Ok']
            });
            alert.present();
        })
        console.log(p);
        this.fav = localStorage.getItem("fav");
        this.fav = eval(this.fav);
        if (this.fav.indexOf(p.id) == -1)
            this.fav.push(p.id);

        localStorage.setItem("fav", JSON.stringify(this.fav));

    }

}
