import {AffcalPage} from './../pages/affcal/affcal';
import {MortcalPage} from './../pages/mortcal/mortcal';
import {RentvsbuyPage} from './../pages/rentvsbuy/rentvsbuy';
import {CalpopupPage} from './../pages/calpopup/calpopup';
import {ContactProvider} from './../providers/contact/contact';
import {AgentsProvider} from './../providers/agents/agents';
import {PhotopagepopupPage} from './../pages/photopagepopup/photopagepopup';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { ChatProvider } from './../providers/chat/chat';
// import { Keyboard } from '@ionic-native/keyboard';
import {UploadPhotosPage} from './../pages/upload-photos/upload-photos';
import {RoomAvailable7Page} from './../pages/room-available7/room-available7';
import {RoomAvailable6Page} from './../pages/room-available6/room-available6';
import {RoomAvailable5Page} from './../pages/room-available5/room-available5';
import {RoomAvailable4Page} from './../pages/room-available4/room-available4';
import {RoomAvailable3Page} from './../pages/room-available3/room-available3';
import {RoomAvailable2Page} from './../pages/room-available2/room-available2';
import {RoomAvailable1Page} from './../pages/room-available1/room-available1';
import {OpenhousePage} from './../pages/openhouse/openhouse';
import {NotificationPage} from './../pages/notification/notification';
import {DashboardPage} from './../pages/dashboard/dashboard';
import {AgentlicPage} from './../pages/agentlic/agentlic';
import {Profinfo2Page} from './../pages/profinfo2/profinfo2';
import {Profinfo1Page} from './../pages/profinfo1/profinfo1';
import {ChathandlerPage} from './../pages/chathandler/chathandler';
import {ChatPage} from './../pages/chat/chat';
import {StatisticsPage} from './../pages/statistics/statistics';
import {RemovelistingPage} from './../pages/removelisting/removelisting';
import {ListnwpayPage} from './../pages/listnwpay/listnwpay';
import {Upgrade2featurePage} from './../pages/upgrade2feature/upgrade2feature';
import {SearchresultPage} from './../pages/searchresult/searchresult';
import {CompletepopPage} from './../pages/completepop/completepop';
import {InactivepopPage} from './../pages/inactivepop/inactivepop';
import {ActivepopPage} from './../pages/activepop/activepop';
import {ManaglistingPage} from './../pages/managlisting/managlisting';
import {Listdet2Page} from './../pages/listdet2/listdet2';
import {ListdetpopPage} from './../pages/listdetpop/listdetpop';
import {Listdet1Page} from './../pages/listdet1/listdet1';
import {ListpropPage} from './../pages/listprop/listprop';
import {MenuPage} from './../pages/menu/menu';
import {SearchpopupPage} from './../pages/searchpopup/searchpopup';
import {EditprofilePage} from '../pages/editprofile/editprofile';
import {TermsandconditionsPage} from '../pages/termsandconditions/termsandconditions';
import {CountriesProvider} from './../providers/countries/countries';
import {SearchProvider} from './../providers/home/home';
import {AuthProvider} from './../providers/auth/auth';
import {LoginPage} from './../pages/login/login';
import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {MyDatePickerModule} from 'mydatepicker';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ImagePicker} from '@ionic-native/image-picker';
import {GoogleMaps} from '@ionic-native/google-maps'
import {Geolocation} from '@ionic-native/geolocation';
import {ScrollToModule} from 'ng2-scroll-to-el';
import {ManagemyaccountPage} from "../pages/managemyaccount/managemyaccount";
import {SupportPage} from "../pages/support/support";
import {WishlistPage} from "../pages/wishlist/wishlist";
import {ProfilePage} from "../pages/profile/profile";
import {PropdetPage} from "../pages/propdet/propdet";
import {FeaturedProvider} from "../providers/featured_listing/featured_listing";
import {DashboardProvider} from "../providers/dashboard/dashboard";
import {RequestinfoPage} from "../pages/requestinfo/requestinfo";
import {ForgetpassPage} from "../pages/forgetpass/forgetpass";
import {TransactionsPage} from "../pages/transactions/transactions";
import {ChangepasswordPage} from "../pages/changepassword/changepassword";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FilePath } from '@ionic-native/file-path';
import {FeaturedListingPage} from "../pages/featured-listing/featured-listing";
import { PaymentServiceProvider } from '../providers/payment-service/payment-service';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, LoginPage, TermsandconditionsPage, EditprofilePage, SearchpopupPage, MenuPage, ListpropPage, Listdet1Page,
    ListdetpopPage, Listdet2Page, ManaglistingPage, ActivepopPage, InactivepopPage, CompletepopPage, SearchresultPage,
    Upgrade2featurePage, ListnwpayPage, RemovelistingPage, StatisticsPage, ChatPage, ChathandlerPage, Profinfo1Page, Profinfo2Page, AgentlicPage, DashboardPage, NotificationPage,
    OpenhousePage, RoomAvailable1Page, RoomAvailable2Page, RoomAvailable3Page, RoomAvailable4Page, RoomAvailable5Page, RoomAvailable6Page, RoomAvailable7Page, UploadPhotosPage,
    PhotopagepopupPage, CalpopupPage, RentvsbuyPage, MortcalPage, AffcalPage, ManagemyaccountPage, SupportPage, WishlistPage, ProfilePage, PropdetPage, RequestinfoPage, ForgetpassPage, TransactionsPage, ChangepasswordPage ,FeaturedListingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp), MyDatePickerModule, ScrollToModule.forRoot()


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, LoginPage, TermsandconditionsPage, EditprofilePage, SearchpopupPage, MenuPage, ListpropPage, Listdet1Page,
    ListdetpopPage, Listdet2Page, ManaglistingPage, ActivepopPage, InactivepopPage, CompletepopPage, OpenhousePage,
    SearchresultPage, Upgrade2featurePage, ListnwpayPage, RemovelistingPage, StatisticsPage, ChatPage, ChathandlerPage, Profinfo1Page, Profinfo2Page, AgentlicPage, DashboardPage, NotificationPage, TransactionsPage,FeaturedListingPage ,
    RoomAvailable1Page, RoomAvailable2Page, RoomAvailable3Page, RoomAvailable4Page, RoomAvailable5Page, RoomAvailable6Page, RoomAvailable7Page, UploadPhotosPage,
    PhotopagepopupPage, CalpopupPage, RentvsbuyPage, MortcalPage, AffcalPage, ManagemyaccountPage, SupportPage, WishlistPage, ProfilePage, PropdetPage, RequestinfoPage, ForgetpassPage, ChangepasswordPage],
  providers: [
    StatusBar,
    SplashScreen,PhotoViewer,Camera,File,FileTransfer,ImagePicker,FilePath,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}, ImagePicker,
    AuthProvider, SearchProvider, CountriesProvider, Geolocation, GoogleMaps, AgentsProvider, ContactProvider,ChatProvider, FeaturedProvider, DashboardProvider , Push,
    PaymentServiceProvider
  ]
})
export class AppModule {
}
