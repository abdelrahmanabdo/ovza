import {Profinfo2Page} from './../profinfo2/profinfo2';
import {Component} from '@angular/core';
import {NavController, NavParams,Platform,ActionSheetController,ToastController} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {HomePage} from './../home/home';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {EditprofilePage} from './../editprofile/editprofile';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WishlistPage} from "../wishlist/wishlist";
import {ImagePicker} from "@ionic-native/image-picker";
import {ViewChild, ElementRef} from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
declare var google;
let autocomplete;
declare var cordova: any;

/**
 * Generated class for the Profinfo1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profinfo1',
  templateUrl: 'profinfo1.html',
})

export class Profinfo1Page {
  value;
  @ViewChild('input') private myinput: ElementRef;
  type = localStorage.getItem('type');

  submitted = false;
  autocomplete;
  lastImage: string = null;    
  selectedphoto;
  profinfo = new FormGroup({
    businessname: new FormControl(null, [Validators.required]),
    businessaddress: new FormControl(null, [Validators.required]),
    phonenumber: new FormControl(null, [Validators.required]),
    postalcode: new FormControl(null, [Validators.required]),
    businesslocation: new FormControl(null, [Validators.required]),
  })

  constructor(public imagePicker: ImagePicker, private transfer: FileTransfer,public platform:Platform,public camera :Camera,public photoViewer: PhotoViewer,  private file: File,private filePath: FilePath, public actionSheetCtrl: ActionSheetController,public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams,public toast:ToastController) {


  }

  ngOnInit() {
    var options = {
      types: ['(cities)']

    };
    autocomplete = new google.maps.places.Autocomplete(this.myinput.nativeElement, options);


    console.log(autocomplete)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profinfo1Page');
  }

  dosomething(val) {
    this.value = autocomplete.getPlace()
    console.log(this.value);
  }

  save() {
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
          params: { 'avatar': filename,'id':localStorage.getItem('userid'),type:'Agencylogo'}
        };
      
      const fileTransfer: FileTransferObject = this.transfer.create();
      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options, true).then(data => {
       // let response = JSON.parse(data.response);
      }, err => {
        this.presentToast('Error while uploading file.');
      });
  
      let data = {page1: this.profinfo.value}
      this.navCtrl.push(Profinfo2Page, data);
    }

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



  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Select Image Source',
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
      correctOrientation: true
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


}
