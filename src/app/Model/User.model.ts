export class UserModel {
  public email_adress: string;
  public iban_no: string;
  public ip_adress: string;

  public constructor(
    email_adress: string = "",
    iban_no: string = "",
    ip_adress: string = ""
  ){
    this.email_adress = email_adress;
    this.iban_no = iban_no;
    this.ip_adress = ip_adress;
  }
}
