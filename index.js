'use strict';

const UTILS = require('./utils.js');

function getAmountInCredits(quotation, alienNumber) {
  let alienNumberSplited = alienNumber.split(' ');

  if(!UTILS.verifyIfNumbersExistInAllienSystem(alienNumberSplited)) {
    return NaN;
  }

  let romanSymbol = UTILS.convertAllienToRoman(alienNumberSplited);

  let decimalNumber = UTILS.convertRomanToDecimal(romanSymbol);

  return UTILS.convertQuotationValue(quotation, decimalNumber);
}

console.log(getAmountInCredits(1, 'isk isk'));
console.log(getAmountInCredits(2, 'isk isk'));
console.log(getAmountInCredits(3.14, 'isk isk'));
console.log(getAmountInCredits(1.2, 'isk vev'));
console.log(getAmountInCredits(1.2, 'isk not'));
