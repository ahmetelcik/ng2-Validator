import { NgModule } from '@angular/core';

import { EmailValidator } from './EmailValidator/'
import { IbanValidator} from './IbanValidator';
import { NotBlankValidator } from './NotBlank/';
@NgModule({
  declarations: [
    EmailValidator,
    IbanValidator,
    NotBlankValidator
  ],
  exports: [
    EmailValidator,
    IbanValidator,
    NotBlankValidator
  ]
})
export class Validators {
}
