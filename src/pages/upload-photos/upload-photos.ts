import {PhotopagepopupPage} from '../photopagepopup/photopagepopup';
import {Component} from '@angular/core';
import {NavController, NavParams,ActionSheetController,Platform,ToastController,AlertController} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {WishlistPage} from "../wishlist/wishlist";
import {ImagePicker} from "@ionic-native/image-picker";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
let prev;
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {ManaglistingPage} from "../managlisting/managlisting";
/**
 * Generated class for the UploadPhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;

@Component({
  selector: 'page-upload-photos',
  templateUrl: 'upload-photos.html',
})
export class UploadPhotosPage {
  type = localStorage.getItem('type');
  photos = {};
  temp;
  selectedphoto = [];
  uriarray = [];selectedphoto3 ;
  lastImage: string = null;  
  
  constructor(public alertCtrl : AlertController ,public dash:DashboardProvider,public imagePicker: ImagePicker, private transfer: FileTransfer,public platform:Platform,public camera :Camera,public photoViewer: PhotoViewer,  private file: File,private filePath: FilePath, public actionSheetCtrl: ActionSheetController,public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams,public toast:ToastController) {
    prev = this.navParams.get('p')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPhotosPage');
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

  uploadphoto() {
 
  }

  paynow() {

    let data2 = {p: merge_options(this.photos, prev)};

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
    let data = this.temp ;
    rename("archmodel", "", data) //remove
    rename("availble", "availablestatus", data)
    rename("bathrooms", "bathrooms", data)
    rename("currency", "currency", data)
    rename("date", "listeddate", data)
    //rename("endtime", "listenddate", data)
    rename("fireclosemonth", "permonthpayment", data)
    rename("floors", "forclosure", data)
    rename("foreclose", "forclosure", data)
    rename("lotsize", "lotsize", data)
    rename("lottype", "lotsizetype", data)
    rename("modmadein", "modification_on", data)
    rename("paddress", "listaddress2", data)
    rename("pcity", "listaddress1", data)
    rename("plabel", "type", data)
    rename("ppostcode", "zipcode", data)
    rename("price", "list_price", data)
    rename("psize", "homesize", data)
    rename("ptype", "property_type", data)
    rename("starttime", "liststartdate", data)
    rename("videourl", "videolink", data)
    rename("yearbuilt", "year_built", data)
    rename("bedrooms", "beds", data)
    rename("about", "aboutlisting", data)
    data["userid"] = localStorage.getItem('userid');
    data["imgname"] = this.selectedphoto3 ;
    data["maxprice"] = data["price"] ;
      if(data['latitude'] == undefined) {
          data['latitude'] = null  ;
          data['longtitude'] = null  ;
      }
    data["liststartdate"] = null ;
    data["pricelistflag"] = null ;
    data['otherthingsnote'] = null ;
    data['stories'] = null ;
    if( data['list_status'] == 0 || data['list_status'] == undefined){
        data['list_status'] = null ;
    }

    data['featured_status'] = null ;
    data['featured_expired'] = null ;
    data['list_properties'] = null ;
    data['owner_type'] = null ;
if(data['PriceState'] == true) {
  data['PriceState'] = 1 ;
}else {data['PriceState'] = 0}
    settozero(data) ;
    //console.log(data) ;
if(data.frommanage) {
  this.dash.addlisting(data).subscribe((data)=> {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'You Successfully Edited A List',
        buttons: [{text : "Ok" , handler: () => {
            this.navCtrl.push(ManaglistingPage);
        }}]
    });
    alert.present();
  })
}else {

  let pop = this.popover.create(PhotopagepopupPage, {p :data}, {cssClass: "paynowpop"});
  pop.present();
}

    function rename(old_key, new_key, obj) {
      if (obj[old_key] != undefined) {
        if (new_key != "") {
          if (old_key !== new_key) {
            Object.defineProperty(obj, new_key,
              Object.getOwnPropertyDescriptor(obj, old_key));
            delete obj[old_key];
          }
        }
      }
    }
    function settozero (obj){
      for (var key in obj) {
        if(obj[key]==null){
          obj[key] = 0 ;
        }
      }
    }
    //console.log(this.temp)

  }

 
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image ',
      buttons: [
        {
          text: 'Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);

          }
        },
        // {
        //   text: 'Camera',
        //   handler: () => {
        //     this.takePicture(this.camera.PictureSourceType.CAMERA, type);

        //   }
        // }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      

    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
      return newFileName;
  }
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
     this.lastImage = newFileName;
     this.uriarray.push(this.pathForImage(this.lastImage))
    //  this.navCtrl.push(UploadImagePage, {
    //     avatar: this.lastImage
    //   })
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }
  presentToast(msg) {
    let toast = this.toast.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  upload() {
    for(let x = 0;x<this.uriarray.length;x++)
    {

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
          params: { 'avatar': filename,'id':localStorage.getItem('userid'),type:'List'}
        };
      
      const fileTransfer: FileTransferObject = this.transfer.create();
      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options, true).then(data => {
       // let response = JSON.parse(data.response);
      }, err => {
        this.presentToast('Error while uploading file.');
      });
    }
   
  }
  }




