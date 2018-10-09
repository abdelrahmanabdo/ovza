import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {LoadingController} from "ionic-angular";

let loading;

/*
  This class has :
  1- Agents  finder data retrieving  function
*/


@Injectable()
export class AgentsProvider {
  // the server URL
  baseURL: string = 'http://ovza.com/oriented/public'

  constructor(public loadingCtrl: LoadingController, public http: Http) {
  }

  loader(data) {

    if (data == 1) {
      loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
    } else {
      loading.dismiss()
    }


  }

  // This function retrieve all agent's data to display it in agent finder page and agent's profile page
  public get_agents() {
    this.loader(1);
    return new Observable((observer) => {
      this.http.get(this.baseURL + '/agents/online').subscribe((data) => {

        var res = data.text();
        this.loader(0)
        observer.next(eval(res));
      })

    })
  }


  // This function retrieve  agent's data to display it in  agent's profile page
  public get_agent_data(userid) {
    return this.http.get(this.baseURL + '/agent/get/data/' + userid).map((res: Response) => res.json())
  }

}
