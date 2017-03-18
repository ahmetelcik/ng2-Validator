import { Component,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from './Model/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  model = new UserModel("email adress","iban numarasi","ip adressi");

  public constructor(){

  }

  public OnInit(){

  }

  public formSubmit(form: NgForm){
    console.log(form);
  }
}
