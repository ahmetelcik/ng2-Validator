export class UserModel {
  public email_adress: string;
  public url_adress: string;

  public constructor(email_adress: string = "",url_adress:string = ""){
    this.email_adress = email_adress;
    this.url_adress = url_adress;
  }
}
