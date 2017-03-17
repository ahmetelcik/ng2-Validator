export class NotBlankValidatorClass {


  /**
   * @type {string}
   */
  private strValue: string;

  /**
   * @type {boolean}
   */
  private inValid: boolean = true;

  /**
   * @param strValue
   */
  public constructor(strValue: string = ""){
    this.strValue = strValue;
  }

  public isBlank(){

    /** If not null of value **/
    if(this.strValue){
      this.inValid = false;
    }

    return this.inValid;
  }
}
