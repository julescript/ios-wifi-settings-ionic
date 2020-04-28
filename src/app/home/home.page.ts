import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PasswordPage } from '../password/password.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  WifiisToggled: boolean = true;
  asktojoin: boolean = false;
  isloading: boolean = true;

  activeWifi = [
    {name: "Connecting...", password:"hjfj"}
  ]
  constructor(public modalController: ModalController) {
  }
  async presentModal() {
    console.log("wifi clicked")
    const modal = await this.modalController.create({
      component: PasswordPage
    });
    return await modal.present();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.isloading = false
    }, 4500);
  }

  wifiToggled(){
    if(this.WifiisToggled){
      this.isloading = true;
      setTimeout(() => {
        this.isloading = false
      }, 4500);
    }else{
      this.isloading = true;
    }
  }

}
