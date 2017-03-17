export class UserModel {
  public email_adress: string;
  public url_adress: string;
  public iban_no: string;

  public constructor(email_adress: string = "",url_adress:string = "",iban_no: string = ""){
    this.email_adress = email_adress;
    this.url_adress = url_adress;
    this.iban_no = iban_no;
  }
}
