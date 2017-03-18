import { Directive, forwardRef,Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { IbanValidatorClass } from './IbanValidator.class';


@Directive({
  selector: '[IbanValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IbanValidator),
      multi: true
    }
  ]
})
export class IbanValidator implements Validator {


  public validate(control: AbstractControl): { [key: string]: any }{

    let value = control.value;

    var invalidIbanKontrol = new IbanValidatorClass(value).isvalidIban();

    if(invalidIbanKontrol == true){
      return {
        "invalidIbanValidate" : true
      }
    }else{
     return null;
    }


  }

}
