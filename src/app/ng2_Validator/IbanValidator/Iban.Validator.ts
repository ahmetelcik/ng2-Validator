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

    var dene = new IbanValidatorClass(value).isvalidIban();

    if(dene == true){
      return null;
    }else{
      return {
        IbanValidate : false
      }
    }


  }

}
