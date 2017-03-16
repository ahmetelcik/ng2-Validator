import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from './Model/User.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  model = new UserModel("");

  public constructor(){

  }
}
