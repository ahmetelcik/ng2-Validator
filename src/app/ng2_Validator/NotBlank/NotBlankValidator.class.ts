export class NotBlankValidatorClass {

  private strValue: string;

  public constructor(strValue: string = ""){
    this.strValue = strValue;
  }

  public isBlank(){


    if(this.strValue == "" || this.strValue === null || this.strValue === undefined){
      return false;
    }else{
      return true;
    }

  }
}
