import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HomePage} from './../home/home';
import {Component} from '@angular/core';
import {NavController, NavParams,ActionSheetController,Platform,ToastController} from 'ionic-angular';
import {ChatPage} from './../chat/chat';
import {ListpropPage} from './../listprop/listprop';
import {PopoverController} from 'ionic-angular' ;
import {MenuPage} from './../menu/menu';
import {ImagePicker} from '@ionic-native/image-picker';
import {ManagemyaccountPage} from "../managemyaccount/managemyaccount";
import {WishlistPage} from "../wishlist/wishlist";
import {LoginPage} from "../login/login";
import {Profinfo1Page} from "../profinfo1/profinfo1";
import {DashboardProvider} from "../../providers/dashboard/dashboard";
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;

@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  photo = localStorage.getItem('photo')
  fname;
  lname;
  email;
  agentstatus;
  root;
  selectedphoto;
  res;
  lastImage: string = null;  
  data;
  type = localStorage.getItem('type');
  userid = localStorage.getItem('userid')
  submitted = false;
  userdata = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email]),
  })

  constructor(public dash: DashboardProvider, private imagePicker: ImagePicker, private transfer: FileTransfer,public platform:Platform,public camera :Camera,public photoViewer: PhotoViewer,  private file: File,private filePath: FilePath, public actionSheetCtrl: ActionSheetController,public popover: PopoverController, public navCtrl: NavController, public navParams: NavParams,public toast:ToastController) {
    this.fname = this.navParams.get('fname');
    this.lname = this.navParams.get('lname');
    this.email = this.navParams.get('email');
    this.agentstatus = this.navParams.get('agentstatus')
  }

  ionViewDidLoad() {
    this.userdata.controls.firstName.setValue(this.fname);
    this.userdata.controls.lastName.setValue(this.lname);
    this.userdata.controls.email.setValue(this.email);
    if (!this.fname) {
      this.root = true;
      if (localStorage.getItem('type') == 'agent') {
        this.dash.getdashboardataprofile(localStorage.getItem('userid')).subscribe((data) => {
          this.res = data;
          this.res = this.res.replace(/\s/g, '');
          console.log(data);
          this.res = JSON.parse(this.res);
          console.log(this.res);
          this.fname = this.res.firstname;
          this.lname = this.res.lastname;
          this.email = this.res.email;
          this.userdata.controls.firstName.setValue(this.fname);
          this.userdata.controls.lastName.setValue(this.lname);
          this.userdata.controls.email.setValue(this.email);
        })
      } else {
        this.dash.getDashboardData(localStorage.getItem('userid')).subscribe((data) => {
          this.res = data;
          this.res = this.res.replace(/\s/g, '');
          console.log(data);
          this.res = JSON.parse(this.res);
          console.log(this.res);
          this.fname = this.res.firstname;
          this.lname = this.res.lastname;
          this.email = this.res.email;
          this.userdata.controls.firstName.setValue(this.fname);
          this.userdata.controls.lastName.setValue(this.lname);
          this.userdata.controls.email.setValue(this.email);
        })
      }
    }
  }

  openhome() {
    if (this.userdata.valid) {
      this.dash.updateUserProfile(localStorage.getItem('userid'), this.userdata.value).subscribe((data) => {
        
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
        params: { 'avatar': filename,'id':localStorage.getItem('userid'),type:'Profile'}
      };
    
    const fileTransfer: FileTransferObject = this.transfer.create();
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options, true).then(data => {
     // let response = JSON.parse(data.response);
     localStorage.setItem('photo',filename)
    }, err => {
      this.presentToast('Error while uploading file.');
    });

        this.data = data;
        this.data = this.data.replace(/\s/g, '');
        console.log(data);
        this.data = JSON.parse(this.data);
        localStorage.setItem('email', this.userdata.value.email)
        if (this.data.status == 1) {

          if (this.agentstatus == '2' || localStorage.getItem('type') == 'agent') {
            this.navCtrl.setRoot(Profinfo1Page)
          } else {
            this.navCtrl.setRoot(HomePage)
          }
          ;

        }

      })


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
