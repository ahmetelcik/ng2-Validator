import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

/** Email Regex */
const urlRegex = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;


@Directive({
  selector: '[urlValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UrlValidator),
      multi: true
    }
  ]
})
export class UrlValidator implements Validator {


  public validate(control: AbstractControl): { [key: string]: any }{

    let value = control.value;

    if(urlRegex.test(value)){

      return null;

    }else{

      return {
        urlValidate : false
      }

    }

  }

}
