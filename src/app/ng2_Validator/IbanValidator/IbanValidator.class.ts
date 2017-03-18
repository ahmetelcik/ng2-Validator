export class IbanValidatorClass {

  private formats = {
  'TR' : 'TR\\d{2}\\d{5}[\\d]{1}[\\d]{16}', // Turkey
  };

  private iban:string;

  private inValid: boolean = true;

  public constructor(iban: string){
      this.iban = iban;

      // Boşlukları Kaldırıyoruz
      if(this.iban){
        this.iban=  this.iban.replace(/\s/g,'').toUpperCase();
      }

  }

  /**
   * Iban Numarasından Ülkenin Kodunu Doğrularız
   * @param iban_no
   * @returns {string}
   * @constructor
   */
  private IbanCountryCode(iban_no:string){

      let countryCode = this.iban.substr(0,2);


      return countryCode;

  }

  /**
   * Ülkenin Kodunu Dizi içinde Ararız
   * @param country_code
   * @returns {any}
   */
  private findCountryRegex(country_code: string){
    let regex = this.formats[country_code];
    if(regex){
      return '^' + regex + '$';
    }else{
      return null;
    }

  }



  public isvalidIban(): boolean{

    if(this.iban){
      //  Get CountryCode
      var IbanCountryCode = this.IbanCountryCode(this.iban);

      // Get Regex
      var findRegexOfCountry = this.findCountryRegex(IbanCountryCode);

      var checkRegex = this.iban.match(new RegExp(findRegexOfCountry,'g'));

      /** If it have a regex **/
      if(checkRegex){
        /** If have a regex we can true **/
        this.inValid = false;
      }else{
        /** If have not a regex we can true **/
        this.inValid = true;
      }

    }


    return this.inValid;

  }








}
