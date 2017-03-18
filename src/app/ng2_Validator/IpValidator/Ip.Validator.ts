import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { IpValidatorClass } from './IpValidator.class';


@Directive({
  selector: '[IpValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IpValidator),
      multi: true
    }
  ]
})
export class IpValidator implements Validator {


  public validate(control: AbstractControl): { [key: string]: any }{

    let value = control.value;


    var invalidIP = new IpValidatorClass(value).invalidIpAdress();

    if(invalidIP == true){
      return {
        invalidIpAdress : true
      }
    }else{
      return null;
    }







  }

}
