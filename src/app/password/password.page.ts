import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  password: string = ""

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // setTimeout(() => {
    //   this.closeModal()
    // }, 1000);
  }


  closeModal(){
    this.modalCtrl.dismiss();
  }

}
