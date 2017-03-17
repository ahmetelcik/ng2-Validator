import { Directive, forwardRef,Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { NotBlankValidatorClass } from './NotBlankValidator.class';


@Directive({
  selector: '[NotBlankValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NotBlankValidator),
      multi: true
    }
  ]
})
export class NotBlankValidator implements Validator {


  public validate(control: AbstractControl): { [key: string]: any }{

    let value = control.value;

    var dene = new NotBlankValidatorClass(value).isBlank();

    if(dene == true){
      return {
        invalidNotBlankValidate : true
      }
    }else{
      return null;
    }




  }

}
