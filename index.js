'use strict';

var utils = require('./utils.js');

function getAmountInCredits(quotation, alienNumber) {
  let alienNumberSplited = alienNumber.split(' ');

  if(!utils.verifyIfNumbersExistInAllienSystem(alienNumberSplited)) {
    return NaN;
  }

  let romanSymbol = utils.convertAllienToRoman(alienNumberSplited);

  let decimalNumber = utils.convertRomanToDecimal(romanSymbol);

  return utils.convertQuotationValue(quotation, decimalNumber);
}

console.log(getAmountInCredits(1, 'isk isk'));
console.log(getAmountInCredits(2, 'isk isk'));
console.log(getAmountInCredits(3.14, 'isk isk'));
console.log(getAmountInCredits(1.2, 'isk vev'));
console.log(getAmountInCredits(1.2, 'isk not'));
