'use strict';

const ALLIEN_NUMBERS = require('./allienNumbers.js');
const ROMAN_NUMBERS = require('./romanNumbers.js');

module.exports = {
  verifyIfNumbersExistInAllienSystem: (numbers) => {
    let numbersExist = true;

    numbers.map((number) => numbersExist = ALLIEN_NUMBERS.hasOwnProperty(number));

    return numbersExist;
  },

  convertAllienToRoman: (numbers) => {
    return numbers.map((key) => ALLIEN_NUMBERS[key])
                  .join()
                  .replace(',', '');
  },
  convertRomanToDecimal: (romanSymbol) => {

      let decimalNumber = 0;

      Object.keys(ROMAN_NUMBERS).map((key) => {
        while (romanSymbol.indexOf(key) === 0) {
          decimalNumber += ROMAN_NUMBERS[key];
          romanSymbol = romanSymbol.replace(key, '');
        }
      });

      return decimalNumber;
  },

  convertQuotationValue: (quotation, decimalNumber) => {
    return quotation * decimalNumber;
  }
};
