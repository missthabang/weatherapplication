import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ViewController } from 'ionic-angular';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  template: `
  <ion-list>
    <ion-list-header>Ionic</ion-list-header>
    <button ion-item (click)="close()">Learn Ionic</button>
    <button ion-item (click)="close()">Documentation</button>
    <button ion-item (click)="close()">Showcase</button>
    <button ion-item (click)="close()">GitHub Repo</button>
  </ion-list>
`
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
