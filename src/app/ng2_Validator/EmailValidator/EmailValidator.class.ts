export class EmailValidatorClass {

  private email: string;

  /** Email Regexi **/
  private emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  /** Standart inValid Email **/
  private inValid: boolean = true;

  public constructor(email:string = ""){
    this.email = email;
  }


  public invalidEmail(): boolean{

    /** If email address is null **/
    if(this.email == null){
      this.inValid = true;
    }else{
      /** If email adress is not null **/
      var checkRegex = this.email.match(new RegExp(this.emailRegex,'g'));

      /** If the return value is not null **/
      if(checkRegex){
        this.inValid = false;
      }

    }

    return this.inValid;



  }
}
