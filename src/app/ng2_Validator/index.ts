import { NgModule } from '@angular/core';

import { EmailValidator } from './EmailValidator/'
import { UrlValidator } from './UrlValidator';
@NgModule({
  declarations: [
    EmailValidator,
    UrlValidator
  ],
  exports: [
    EmailValidator,
    UrlValidator
  ]
})
export class Validators {
}
