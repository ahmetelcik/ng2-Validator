export class IpValidatorClass {

  private ip_adress: string;

  private inValid: boolean = true;

  private ip_regex = '^([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])[.]([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])[.]([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])[.]([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-5][0-5])$';

  constructor(ip_adress: string = "") {
    this.ip_adress = ip_adress;
  }


  /**
   *
   * @returns {boolean}
   */
  public invalidIpAdress(): boolean{

    if(this.ip_adress !== null){

      /** Check Regex */
      var checkRegex = this.ip_adress.match(new RegExp(this.ip_regex,'g'));

      if(checkRegex){
        this.inValid = false;
      }

    }

    return this.inValid;
  }
}
