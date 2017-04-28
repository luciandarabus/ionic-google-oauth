import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus) {

  }
  login(){
          // this.googlePlus.login({
          //   'webClientId': '*****************************'
          // }).then((res) => {
          //     alert(res);
          // }, (err) => {
          //     alert(err);
          // });
          //
  }

  logout(){

      // GooglePlus.logout().then(() => {
      //     console.log("logged out");
      // });

  }
}
