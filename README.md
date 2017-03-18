# Ng2Validator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage 
First. We will be import to app.module.ts 

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2Validator } from './ng2_Validator/'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Validator
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```
 

## Document of the Validators
- [All Document](https://github.com/ahmetelcik/ng2-Validator/wiki)
- [IBAN](https://github.com/ahmetelcik/ng2-Validator/wiki/IBAN-Validator)
- [Ip Adress](https://github.com/ahmetelcik/ng2-Validator/wiki/Ip-Adress-Validator)
- [NotBlank](https://github.com/ahmetelcik/ng2-Validator/wiki/NotBlank-Validator)
- [Email](https://github.com/ahmetelcik/ng2-Validator/wiki/EmailValidator)
