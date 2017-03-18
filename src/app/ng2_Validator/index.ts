import { NgModule } from '@angular/core';

import { EmailValidator } from './EmailValidator/'
import { IbanValidator} from './IbanValidator';
import { NotBlankValidator } from './NotBlank/';
import { IpValidator } from './IpValidator';
@NgModule({
  declarations: [
    EmailValidator,
    IbanValidator,
    NotBlankValidator,
    IpValidator,
  ],
  exports: [
    EmailValidator,
    IbanValidator,
    NotBlankValidator,
    IpValidator,
  ]
})
export class Ng2Validator {
}
