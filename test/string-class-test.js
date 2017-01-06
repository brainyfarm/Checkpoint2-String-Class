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
    const sampleString1 = 'good';
    const sampleString2 = 'works';

    it(`should return GOOD for ${sampleString1}`, () => {
      expect(sampleString1.toUpper()).to.equal('GOOD');
    });
    it(`should return WORKS for ${sampleString2}`, () => {
      expect(sampleString2.toUpper()).to.equal('WORKS');
    });
  });

  describe('toLower', () => {
    const sampleString1 = 'LOWER';
    const sampleString2 = 'ChArActer';

    it(`should return 'lower' for ${sampleString1}`, () => {
      expect(sampleString1.toLower()).to.equal('lower');
    });
    it(`should return character for ${sampleString2}`, () => {
      expect(sampleString2.toLower()).to.equal('character');
    });
  });

  describe('ucFirst', () => {
    const sampleString1 = 'coolest';
    const sampleString2 = 'example';

    it(`should return 'Coolest' for ${sampleString1}`, () => {
      expect(sampleString1.ucFirst()).to.equal('Coolest');
    });
    it(`should return 'Example' for ${sampleString2}`, () => {
      expect(sampleString2.ucFirst()).to.equal('Example');
    });
  });

  describe('isQuestion', () => {
    const sampleString1 = 'How are you?';
    const sampleString2 = '???';
    const sampleString3 = 'Symbol for question mark is ?.';

    it(`should return true for ${sampleString1}`, () => {
      expect(sampleString1.isQuestion()).to.be.true;
    });
    it(`should return false for ${sampleString2}`, () => {
      expect(sampleString2.isQuestion()).to.be.false;
    });
    it(`should return false for ${sampleString3}`, () => {
      expect(sampleString3.isQuestion()).to.be.false;
    });
  });

  describe('words', () => {
    const sampleString1 = 'hello world';
    const sampleString2 = 'hello';

    it(`should return ['hello', 'world'] for ${sampleString1}`, () => {
      expect(sampleString1.words()).to.eql(['hello', 'world']);
    });
    it(`should return ['hello'] for ${sampleString2}`, () => {
      expect(sampleString2.words()).to.eql(['hello']);
    });
  });

  describe('wordCount', () => {
    const sampleString1 = 'hello world';
    const sampleString2 = 'hello';

    it(`should return 2 for ${sampleString1}`, () => {
      expect(sampleString1.wordCount()).to.equal(2);
    });
    it(`should return 1 for ${sampleString2}`, () => {
      expect(sampleString2.wordCount()).to.equal(1);
    });
    it(`should return 'number' for 'typeof wordCount(${sampleString1})'`, () => {
      expect(typeof sampleString1.wordCount()).to.equal('number');
    });
  });

  describe('toCurrency', () => {
    const sampleString1 = '111111';
    const sampleString2 = '12345.22';
    const sampleString3 = '111';

    it(`should return  '111,111' for ${sampleString1}`, () => {
      expect(sampleString1.toCurrency()).to.equal('111,111');
    });
    it(`should return '12,345.22' for ${sampleString2}`, () => {
      expect(sampleString2.toCurrency()).to.equal('12,345.22');
    });
    it(`should return '111' for ${sampleString3}`, () => {
      expect(sampleString3.toCurrency()).to.equal('111');
    });
    it(`should return 'string' for 'typeof ${sampleString2}.toCurrency()'`, () => {
      expect(typeof sampleString2.toCurrency()).to.equal('string');
    });
  });

  describe('fromCurrency', () => {
    const sampleString1 = '11,111.11';
    const sampleString2 = '111,111.00';

    it(`should return 11111.11 for ${sampleString1}`, () => {
      expect(sampleString1.fromCurrency()).to.equal(11111.11);
    });
    it(`should return '111,111.00' for ${sampleString2}`, () => {
      expect(sampleString2.fromCurrency()).to.equal(111111);
    });
    it(`should return 'number' for 'typeof fromCurrency(${sampleString2})'`, () => {
      expect(typeof sampleString2.fromCurrency()).to.equal('number');
    });
  });

  describe('inverseCase', () => {
    const sampleString1 = 'hElLo';
    const sampleString2 = 'abc';
    const sampleString3 = 'ABC';

    it(`should return 'HeLlO' for ${sampleString1}`, () => {
      expect(sampleString1.inverseCase()).to.equal('HeLlO');
    });
    it(`should return 'ABC' for ${sampleString2}`, () => {
      expect(sampleString2.inverseCase()).to.equal('ABC');
    });
    it(`should return 'abc' for ${sampleString3}`, () => {
      expect(sampleString3.inverseCase()).to.equal('abc');
    });
  });

  describe('alternatingCase', () => {
    const sampleString1 = 'hello';
    const sampleString2 = 'ABC';
    const sampleString3 = 'WORLD';

    it(`should return 'hElLo' for ${sampleString1}`, () => {
      expect(sampleString1.alternatingCase()).to.equal('hElLo');
    });
    it(`should return 'aBc' for ${sampleString2}`, () => {
      expect(sampleString2.alternatingCase()).to.equal('aBc');
    });
    it(`should return 'wOrLd' for ${sampleString3}`, () => {
      expect(sampleString3.alternatingCase()).to.equal('wOrLd');
    });
  });

  describe('getMiddle', () => {
    const sampleString1 = 'AND';
    const sampleString2 = 'ABCD';
    const sampleString3 = 'Cool';

    it(`should return 'N' for ${sampleString1}`, () => {
      expect(sampleString1.getMiddle()).to.equal('N');
    });
    it(`should return 'BC' for ${sampleString2}`, () => {
      expect(sampleString2.getMiddle()).to.equal('BC');
    });
    it(`should return 'oo' for ${sampleString3}`, () => {
      expect(sampleString3.getMiddle()).to.equal('oo');
    });
  });

  describe('numberWords', () => {
    const sampleString1 = '080';
    const sampleString2 = '112';
    const sampleString3 = '5Bottles';

    it(`should return 'zero eight zero' for ${sampleString1}`, () => {
      expect(sampleString1.numberWords()).to.equal('zero eight zero');
    });
    it(`should return 'one one two' for ${sampleString2}`, () => {
      expect(sampleString2.numberWords()).to.equal('one one two');
    });
    it(`should return 'five Bottles' for ${sampleString3}`, () => {
      expect(sampleString3.numberWords()).to.equal('five Bottles');
    });
  });

  describe('isDigit', () => {
    const sampleString1 = '0';
    const sampleString2 = '112';
    const sampleString3 = 'one';
    const sampleString4 = 'm';

    it(`should return true for ${sampleString1}`, () => {
      expect(sampleString1.isDigit()).to.be.true;
    });
    it(`should return false for ${sampleString2}`, () => {
      expect(sampleString2.isDigit()).to.be.false;
    });
    it(`should return false for ${sampleString3}`, () => {
      expect(sampleString3.isDigit()).to.be.false;
    });
    it(`should return false for ${sampleString4}`, () => {
      expect(sampleString4.isDigit()).to.be.false;
    });
  });


  describe('doubleCheck', () => {
    const sampleString1 = 'pappy';
    const sampleString2 = 'papa';
    const sampleString3 = 'Halo Wars!!';
    const sampleString4 = 'Ralia and cornNy';
    const sampleString5 = 't  f';

    it(`should return true for ${sampleString1}`, () => {
      expect(sampleString1.doubleCheck()).to.be.true;
    });
    it(`should return false for ${sampleString2}`, () => {
      expect(sampleString2.doubleCheck()).to.be.false;
    });
    it(`should return true for ${sampleString3}`, () => {
      expect(sampleString3.doubleCheck()).to.be.true;
    });
    it(`should return true for ${sampleString4}`, () => {
      expect(sampleString4.doubleCheck()).to.be.true;
    });
    it(`should return true for ${sampleString5}`, () => {
      expect(sampleString5.doubleCheck()).to.be.true;
    });
  });
});
