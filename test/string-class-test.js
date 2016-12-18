const mocha = require('mocha');
const chai = require('chai');

const should = chai.should();
const expect = chai.expect;
require('../src/string-class');


describe('String Class Tests', () => {
  describe('hasVowels', () => {
    it('should return true for `hello world`', () => {
      expect('hello world'.hasVowels()).to.be.true;
    });
    it('should return false for `sky`', () => {
      expect('sky'.hasVowels()).to.be.false;
    });
  });

  describe('toUpper', () => {
    it('should return `GOOD` for `good`', () => {
      expect('good'.toUpper()).to.equal('GOOD');
    });
    it('should return `WORKS` for `works`', () => {
      expect('works'.toUpper()).to.equal('WORKS');
    });
  });

  describe('toLower', () => {
    it('should return `lower` for `LOWER`', () => {
        expect('LOWER'.toLower()).to.equal('lower');
    });
    it('should return `character` for `ChArActer`', () => {
        expect('ChArActer'.toLower()).to.equal('character');
  });
  });

  describe('ucFirst', () => {
    it('should return `Coolest` for `coolest`', () => {
        expect('coolest'.ucFirst()).to.equal('Coolest');
    });
    it('should return `Example` for `Example`', () => {
        expect('Example'.ucFirst()).to.equal('Example');
    });
  });

  describe('isQuestion', () => {
    it('should return true for `How are you?`', () => {
        expect('How are you?'.isQuestion()).to.be.true;
    });
    it('should return false for `Symbol for question mark is ?.`', () => {
        expect('Symbol for question mark is ?.'.isQuestion()).to.be.false;
    });
  });

  describe('words', () => {
    it('should return `[ "hello", "world" ]` for `hello world`', () => {
        expect('hello world'.words()).to.eql(['hello', 'world']);
    });
    it('should return `["hello"]` for `hello`', () => {
        expect('hello'.words()).to.eql(['hello']);
    });
  });

  describe('wordCount', () => {
    it('should return 2 for `hello world`', () => {
        expect('hello world'.wordCount()).to.equal(2);
    });
    it('should return 1 for `hello`', () => {
        expect('hello'.wordCount()).to.equal(1);
    });
    it('should return `number` for `typeof wordCount("hello")`', () => {
        expect(typeof 'hello'.wordCount()).to.equal('number');
    });
  });

  describe('toCurrency', () => {
    it('should return `111,111` for `111111`', () => {
        expect('111111'.toCurrency()).to.equal('111,111');
    });
    it('should return `12,345.22` for `12345.22`', () => {
        expect('12345.22'.toCurrency()).to.equal('12,345.22');
    });
    it('should return `string` for `typeof toCurrency("11000")`', () => {
        expect(typeof '111111'.toCurrency()).to.equal('string');
    });
  });

  describe('fromCurrency', () => {
    it('should return 11111.11 for 11,111.11', () => {
        expect('11,111.11'.fromCurrency()).to.equal(11111.11);
    });
    it('should return 111111 for `111,111.00`', () => {
        expect('111,111.00'.fromCurrency()).to.equal(111111);
    });
    it('should return `number` for `typeof fromCurrency("111,111")`', () => {
        expect(typeof '111,111'.fromCurrency()).to.equal('number');
    });
  });

  describe('inverseCase', () => {
    it('should return `HeLlO` for `hElLo', () => {
        expect('hElLo'.inverseCase()).to.equal('HeLlO');
    });
    it('should return `ABC` for `abc`', () => {
        expect('abc'.inverseCase()).to.equal('ABC');
    });
    it('should return `abc` for `ABC`', () => {
        expect('ABC'.inverseCase()).to.equal('abc');
    });
  });

  describe('alternatingCase', () => {
    it('should return `hElLo` for `hello', () => {
        expect('hello'.alternatingCase()).to.equal('hElLo');
    });
    it('should return `aBc` for `ABC`', () => {
        expect('ABC'.alternatingCase()).to.equal('aBc');
    });
    it('should return `wOrLd` for `WORLD`', () => {
        expect('WORLD'.alternatingCase()).to.equal('wOrLd');
    });
  });

  describe('getMiddle', () => {
    it('should return `N` for `AND', () => {
        expect('AND'.getMiddle()).to.equal('N');
    });
    it('should return `BC` for `ABCD`', () => {
        expect('ABCD'.getMiddle()).to.equal('BC');
    });
    it('should return `oo` for `Cool`', () => {
        expect('Cool'.getMiddle()).to.equal('oo');
    });
  });

  describe('numberWords', () => {
    it('should return `zero eight zero` for `080`', () => {
        expect('080'.numberWords()).to.equal('zero eight zero');
    });
    it('should return `one one two` for `112`', () => {
        expect('112'.numberWords()).to.equal('one one two');
    });
    it('should return `five Bottles` for `5Bottles`', () => {
        expect('5Bottles'.numberWords()).to.equal('five Bottles');
    });
  });

  describe('isDigit', () => {
    it('should return true for `0`', () => {
        expect('0'.isDigit()).to.be.true;
    });
    it('should return false for `112`', () => {
        expect('112'.isDigit()).to.be.false;
    });
    it('should return false for `one`', () => {
        expect('one'.isDigit()).to.be.false;
    });
  });


  describe('doubleCheck', () => {
    it('should return true for `pappy`', () => {
        expect('pappy'.doubleCheck()).to.be.true;
    });
    it('should return false for `papa`', () => {
        expect('papa'.isDigit()).to.be.false;
    });
    it('should return true for `Ralia and cornNy`', () => {
        expect('Ralia and cornNy'.isDigit()).to.be.false;
    });
  });
});
