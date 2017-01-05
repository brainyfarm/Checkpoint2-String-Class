/* eslint-disable */
const chai = require('chai');

const expect = chai.expect;
require('../src/string-class');


describe('String Class Tests', () => {
  describe('hasVowels', () => {
    const sampleString1 = 'hello';
    const sampleString2 = 'sky';

    it(`should return true for ${sampleString1}`, () => {
      expect(sampleString1.hasVowels()).to.be.true;
    });
    it(`should return false for ${sampleString2}`, () => {
      expect(sampleString2.hasVowels()).to.be.false;
    });
  });

  describe('toUpper', () => {
    const sampleString3 = 'good';
    const upperSampleString3 = 'GOOD';
    const sampleString4 = 'works';
    const upperSampleString4 = 'WORKS';

    it(`should return ${upperSampleString3} for ${sampleString3}`, () => {
      expect(sampleString3.toUpper()).to.equal(upperSampleString3);
    });
    it(`should return WORKS for works`, () => {
      expect(sampleString4.toUpper()).to.equal(upperSampleString4);
    });
  });

  describe('toLower', () => {
    const sampleString5 = 'LOWER';
    const lowerSampleString5 = 'lower';
    const sampleString6 = 'ChArActer';
    const lowerSampleString6 = 'character';

    it(`should return ${lowerSampleString5} for ${sampleString5}`, () => {
      expect(sampleString5.toLower()).to.equal(lowerSampleString5);
    });
    it(`should return character for ChArActer`, () => {
      expect(sampleString6.toLower()).to.equal(lowerSampleString6);
    });
  });

  describe('ucFirst', () => {
    const sampleString7 = 'coolest';
    const convertedSampleString7 = 'Coolest';
    const sampleString8 = 'example';
    const convertedSampleString8 = 'Example';

    it(`should return ${convertedSampleString7} for ${sampleString7}`, () => {
      expect(sampleString7.ucFirst()).to.equal(convertedSampleString7);
    });
    it(`should return ${convertedSampleString8} for ${sampleString8}`, () => {
      expect(sampleString8.ucFirst()).to.equal(convertedSampleString8);
    });
  });

  describe('isQuestion', () => {
    const sampleQuestion = 'How are you?';
    const notAQuestion = '???';
    const notAQuestion2 = 'Symbol for question mark is ?.';

    it(`should return true for ${sampleQuestion}`, () => {
      expect(sampleQuestion.isQuestion()).to.be.true;
    });
    it(`should return false for ${notAQuestion}`, () => {
      expect(notAQuestion.isQuestion()).to.be.false;
    });
    it(`should return false for ${notAQuestion2}`, () => {
      expect(notAQuestion2.isQuestion()).to.be.false;
    });
  });

  describe('words', () => {
    const sampleSentence = 'hello world';
    const sentenceWords = ['hello', 'world'];
    const oneWord = 'hello';
    const oneWordArray = ['hello'];

    it(`should return ${sentenceWords} for ${sampleSentence}`, () => {
      expect(sampleSentence.words()).to.eql(sentenceWords);
    });
    it(`should return ${oneWordArray} for ${oneWord}`, () => {
      expect(oneWord.words()).to.eql(oneWordArray);
    });
  });

  describe('wordCount', () => {
    const sampleSentence = 'hello world';
    const sentenceWords = ['hello', 'world'];
    const oneWord = 'hello';
    const oneWordArray = ['hello'];

    it(`should return 2 for ${sampleSentence}`, () => {
      expect(sampleSentence.wordCount()).to.equal(2);
    });
    it(`should return 1 for ${oneWord}`, () => {
      expect(oneWord.wordCount()).to.equal(1);
    });
    it(`should return 'number' for 'typeof wordCount(${oneWord})'`, () => {
      expect(typeof oneWord.wordCount()).to.equal('number');
    });
  });

  describe('toCurrency', () => {
    const sampleNumber = '111111';
    const sampleNumberCurrency = '111,111';
    const sampleNumber2 = '12345.22';
    const sampleNumber2Currency = '12,345.22';
    const sampleNumber3 = '111';

    it(`should return ${sampleNumberCurrency} for ${sampleNumber}`, () => {
      expect(sampleNumber.toCurrency()).to.equal(sampleNumberCurrency);
    });
    it(`should return ${sampleNumber2Currency} for ${sampleNumber2}`, () => {
      expect(sampleNumber2.toCurrency()).to.equal(sampleNumber2Currency);
    });
    it(`should return ${sampleNumber3} for ${sampleNumber3}`, () => {
      expect(sampleNumber3.toCurrency()).to.equal(sampleNumber3);
    });
    it(`should return 'string' for 'typeof ${sampleNumber}.toCurrency()'`, () => {
      expect(typeof sampleNumber.toCurrency()).to.equal('string');
    });
  });

  describe('fromCurrency', () => {
    const sampleCurrency = '11,111.11';
    const sampleCurrencyNumber = 11111.11;
    const sampleCurrency2 = '111,111.00';
    const sampleCurrency2Number = 111111;

    it(`should return ${sampleCurrencyNumber} for ${sampleCurrency}`, () => {
      expect(sampleCurrency.fromCurrency()).to.equal(sampleCurrencyNumber);
    });
    it(`should return ${sampleCurrency2Number} for ${sampleCurrency2}`, () => {
      expect(sampleCurrency2.fromCurrency()).to.equal(sampleCurrency2Number);
    });
    it(`should return 'number' for 'typeof fromCurrency(${sampleCurrency})'`, () => {
      expect(typeof sampleCurrency.fromCurrency()).to.equal('number');
    });
  });

  describe('inverseCase', () => {
    const firstString = 'hElLo';
    const convertedFirstString = 'HeLlO';
    const secondString = 'abc';
    const convertedSecondString = 'ABC';
    const thirdString = 'ABC';
    const convertedThirdString = 'abc';

    it(`should return ${convertedFirstString} for ${firstString}`, () => {
      expect(firstString.inverseCase()).to.equal(convertedFirstString);
    });
    it(`should return ${convertedSecondString} for ${secondString}`, () => {
      expect(secondString.inverseCase()).to.equal(convertedSecondString);
    });
    it(`should return ${convertedThirdString} for ${thirdString}`, () => {
      expect(thirdString.inverseCase()).to.equal(convertedThirdString);
    });
  });

  describe('alternatingCase', () => {
    const string1 = 'hello';
    const convertedString1 = 'hElLo';
    const string2 = 'ABC';
    const convertedString2 = 'aBc';
    const string3 = 'WORLD';
    const convertedString3 = 'wOrLd';

    it(`should return ${convertedString1} for ${string1}`, () => {
      expect(string1.alternatingCase()).to.equal(convertedString1);
    });
    it(`should return ${convertedString2} for ${string2}`, () => {
      expect(string2.alternatingCase()).to.equal(convertedString2);
    });
    it(`should return ${convertedString3} for ${string3}`, () => {
      expect(string3.alternatingCase()).to.equal(convertedString3);
    });
  });

  describe('getMiddle', () => {
    const sampleText = 'AND';
    const sampleTextMiddle = 'N';
    const sampleText2 = 'ABCD';
    const sampleText2Middle = 'BC'
    const sampleText3 = 'Cool';
    const sampleText3Middle = 'oo'

    it(`should return ${sampleTextMiddle} for ${sampleText}`, () => {
      expect(sampleText.getMiddle()).to.equal(sampleTextMiddle);
    });
    it(`should return ${sampleText2Middle} for ${sampleText2}`, () => {
      expect(sampleText2.getMiddle()).to.equal(sampleText2Middle);
    });
    it(`should return ${sampleText3Middle} for ${sampleText3}`, () => {
      expect(sampleText3.getMiddle()).to.equal(sampleText3Middle);
    });
  });

  describe('numberWords', () => {
    const sampleNumber = '080';
    const sampleNumberWords = 'zero eight zero';
    const sampleNumber2 = '112';
    const sampleNumber2Words = 'one one two';
    const sampleNumber3 = '5Bottles';
    const sampleNumber3Words = 'five Bottles';

    it(`should return ${sampleNumberWords} for ${sampleNumber}`, () => {
      expect(sampleNumber.numberWords()).to.equal(sampleNumberWords);
    });
    it(`should return ${sampleNumber2Words} for ${sampleNumber2}`, () => {
      expect(sampleNumber2.numberWords()).to.equal(sampleNumber2Words);
    });
    it(`should return ${sampleNumber3Words} for ${sampleNumber3}`, () => {
      expect(sampleNumber3.numberWords()).to.equal(sampleNumber3Words);
    });
  });

  describe('isDigit', () => {
    const sampleDigit1 = '0';
    const sampleDigit2 = '112';
    const sampleDigit3 = 'one';
    const sampleDigit4 = 'm';

    it(`should return true for ${sampleDigit1}`, () => {
      expect(sampleDigit1.isDigit()).to.be.true;
    });
    it(`should return false for ${sampleDigit2}`, () => {
      expect(sampleDigit2.isDigit()).to.be.false;
    });
    it(`should return false for ${sampleDigit3}`, () => {
      expect(sampleDigit3.isDigit()).to.be.false;
    });
    it(`should return false for ${sampleDigit4}`, () => {
      expect(sampleDigit4.isDigit()).to.be.false;
    });
  });


  describe('doubleCheck', () => {
    const sampleText1 = 'pappy';
    const sampleText2 = 'papa';
    const sampleText3 = 'Halo Wars!!';
    const sampleText4 = 'Ralia and cornNy';
    const sampleText5 = 't  f';

    it(`should return true for ${sampleText1}`, () => {
      expect(sampleText1.doubleCheck()).to.be.true;
    });
    it(`should return false for ${sampleText2}`, () => {
      expect(sampleText2.doubleCheck()).to.be.false;
    });
    it(`should return true for ${sampleText3}`, () => {
      expect(sampleText3.doubleCheck()).to.be.true;
    });
    it(`should return true for ${sampleText4}`, () => {
      expect(sampleText4.doubleCheck()).to.be.true;
    });
    it(`should return true for ${sampleText5}`, () => {
      expect(sampleText5.doubleCheck()).to.be.true;
    });
  });
});
