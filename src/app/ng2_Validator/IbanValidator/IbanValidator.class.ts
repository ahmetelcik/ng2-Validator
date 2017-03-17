export class IbanValidatorClass {

  private formats = {
  'TR' : 'TR\\d{0,2}\\d{0,5}[\\d]{0,1}[\\d]{1,16}', // Turkey
  };

  private iban:string;


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
    if(iban_no){
      let countryCode = this.iban.substr(0,2);

      return countryCode;
    }
  }

  /**
   * Ülkenin Kodunu Dizi içinde Ararız
   * @param country_code
   * @returns {any}
   */
  private findCountryRegex(country_code: string): string{
    var regex = this.formats[country_code];

    return regex;
  }

  public isvalidIban(): boolean{

    if(this.iban == null){
      return false;
    }


    if(this.iban){
      // Ülke Kodu
      var IbanCountryCode = this.IbanCountryCode(this.iban);

      // Regex
      var findRegexOfCountry = this.findCountryRegex(IbanCountryCode);

      // Full Regex
      var strRegExPattern = '^' + findRegexOfCountry + '$';

      // Iban Varsa
      if(this.iban){
        // Regexi Uygula, Bulamazsa Null Dönecek
        var checkRegex = this.iban.match(new RegExp(strRegExPattern,'g'));
      }

      // Regex Varsa
      if(checkRegex){
        return true;
      }else{
        return false;
      }

    }

  }








}
