'use strict';

const ALLIEN_DICTIONARY = require('./dictionaries/allienDictionary.js');
const ROMAN_DICTIONARY = require('./dictionaries/romanDictionary.js');

module.exports = {
  verifyIfNumbersExistInAllienSystem: (numbers) => {
    let numbersExist = true;

    numbers.every((number) => {
      numbersExist = ALLIEN_DICTIONARY.hasOwnProperty(number);
      return numbersExist;
    });

    return numbersExist;
  },

  convertAllienToRoman: (numbers) => {
    return numbers.map((key) => ALLIEN_DICTIONARY[key])
                  .join()
                  .replace(',', '');
  },
  convertRomanToDecimal: (romanSymbol) => {

      let decimalNumber = 0;

      Object.keys(ROMAN_DICTIONARY).map((key) => {
        while (romanSymbol.indexOf(key) === 0) {
          decimalNumber += ROMAN_DICTIONARY[key];
          romanSymbol = romanSymbol.replace(key, '');
        }
      });

      return decimalNumber;
  },

  convertQuotationValue: (quotation, decimalNumber) => {
    return quotation * decimalNumber;
  }
};
