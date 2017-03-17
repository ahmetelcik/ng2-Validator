import { NgModule } from '@angular/core';

import { EmailValidator } from './EmailValidator/'
import { IbanValidator} from './IbanValidator';
@NgModule({
  declarations: [
    EmailValidator,
    IbanValidator
  ],
  exports: [
    EmailValidator,
    IbanValidator
  ]
})
export class Validators {
}
