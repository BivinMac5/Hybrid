import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SMS } from '@ionic-native/sms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private smsVar: SMS) {

  }

  mobilenum: string;

  sendSMS() {

    // console.log("You entered " + this.mobilenum);
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: ''
      }
    }
    this.smsVar.send(this.mobilenum, 'Hello Buddy!', options)
      .then(() => {
        alert("Message sent");
      }, (error) => {
        alert("failed " + error);
      });
  }

}
