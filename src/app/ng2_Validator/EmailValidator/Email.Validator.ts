import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { EmailValidatorClass } from './EmailValidator.class';


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

    var inValidEmail = new EmailValidatorClass(value).invalidEmail();

      if(inValidEmail == true){
        return {
          invalidEmailValidate : true
        }
      }else{
        return null;
      }




  }

}
