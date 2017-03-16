import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

/** Email Regex */
const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


@Directive({
  selector: '[emailValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    }
  ]
})
export class EmailValidator implements Validator {


  public validate(control: AbstractControl): { [key: string]: any }{


    let value = control.value;

    if(emailRegex.test(value)){

      return null;

    }else{

      return {
        EmailValidate : false
      }

    }

  }

}
