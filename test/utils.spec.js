'use strict';

const test = require('ava');
const UTILS = require('../utils.js');

test('number should exist in allien system', t => {
   let numberExists = UTILS.verifyIfNumbersExistInAllienSystem(['isk']);
   t.deepEqual(numberExists, true);
});

test('number should not exist in allien system', t => {
   let numberExists = UTILS.verifyIfNumbersExistInAllienSystem(['not']);
   t.deepEqual(numberExists, false);
});

test('isk should converted to I romam symbol', t => {
   let romamSymbol = UTILS.convertAllienToRoman(['isk']);
   t.deepEqual(romamSymbol, 'I');
});

test('isk vev should converted to IV romam symbol', t => {
   let romamSymbol = UTILS.convertAllienToRoman(['isk', 'vev']);
   t.deepEqual(romamSymbol, 'IV');
});

test('"not" should not converted to any romam symbol', t => {
   let romamSymbol = UTILS.convertAllienToRoman(['not']);
   t.deepEqual(romamSymbol, '');
});

test('"V" should converted to like decimal number', t => {
   let decimalNumber = UTILS.convertRomanToDecimal('V');
   t.deepEqual(decimalNumber, 5);
});

test('"not" or other romam symbol nonexistent should converted to 0 decimal number', t => {
   let decimalNumber = UTILS.convertRomanToDecimal('not');
   t.deepEqual(decimalNumber, 0);
});

test('quotation should converted without errors', t => {
   let quotationValue = UTILS.convertQuotationValue(1.2, 4);
   t.deepEqual(quotationValue, 4.8);
});

test('quotation should return NaN when any params in not numbers', t => {
   let quotationValue = UTILS.convertQuotationValue('1', 'A');
   t.deepEqual(quotationValue, NaN);
});
