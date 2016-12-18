/* @file string-class */
const stringClassExtensions = {
  /**
   * hasVowels
   * Test to see if a string contains vowels
   * @return {Boolean} true or false
   */
  hasVowels() {
    const vowels = /[aeiou]/gi;
    return vowels.test(this);
  },

  /**
   * toUpper
   * Converts a string to uppercase
   * @return {String} uppercase equivalent of the string
   */
  toUpper() {
    return this.replace(/[a-z]/g, letter =>
      String.fromCharCode(letter.charCodeAt(0) - 32));
  },

  /**
   * toLower
   * Converts a string to lower
   * @return {String} lowercase equivalent of the string
   */
  toLower() {
    return this.replace(/[A-Z]/g, letter =>
      String.fromCharCode(letter.charCodeAt(0) + 32));
  },

  /**
   * ucFirst
   * Converts the first character in a string to uppercase
   * @return {String} original input capitalizing the first letter
   */
  ucFirst() {
    return this.replace(/[a-z]{1}/, letter => letter.toUpper());
  },

  /**
   * isQuestion
   * Test to check if a string is a question
   * @return {Boolean} true or false
   */
  isQuestion() {
    return /[\w, ]+\?$/.test(this);
  },

  /**
   * words
   * Matches all words in a string
   * @return {Object} An array of all words in string
   */
  words() {
    return this.match(/\w+/gi);
  },

  /**
   * wordCount
   * Counts and return all words in a string
   * @return {Number} number of words in a string
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * toCurrency
   * Converts a string of interger to a currency format
   * @return {String} A currency version of the string
   */
  toCurrency() {
    return this.replace(/[a-z]/gi, '')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  },

  /**
   * fromCurrency
   * Converts a string from currency to it's currency format
   * @return {String} A formatted version of the string
   */
  fromCurrency() {
    return Number(this.match(/[\d/.]/g).join(''));
  },

  /**
   * inverseCase
   * Converts each letter in a string to it's inverse case
   * @return {String} Inversed version of string
   */
  inverseCase() {
    return this.replace(/[a-z]/gi, (letter) => {
      return letter === letter.toUpper() ?
        letter.toLower() :
        letter.toUpper();
    });
  },

  /**
   * alternatingCase
   * Converts and return string with alternated cases.
   * @return {String} A case-alternated version of the string
   */
  alternatingCase() {
    return this.replace(/[a-z]/gi, (letter, position) => {
      return position % 2 ?
        letter.toUpper() :
        letter.toLower();
    });
  },

  /**
   * getMiddle
   * Gets and return the middle character(s) in a string
   * @return {String} The mid character(s) in a string
   */
  getMiddle() {
    const middle = Math.round(this.length / 2);
    return this.length % 2 ?
      this[middle - 1] :
      this.substring(middle - 1, middle + 1);
  },

  /**
   * numberWords
   * Returns an english translated version of each integer in string
   * @return {String} Returns translated version of integers in the string
   */
  numberWords() {
    const words = [
      'zero ',
      'one ',
      'two ',
      'three ',
      'four ',
      'five ',
      'six ',
      'seven ',
      'eight ',
      'nine '];
    return this.replace(/\d/gi, number =>
      `${words[number]}`)
      .trim();
  },

  /**
   * isDigit
   * Test to see if a string contains only a single number digit
   * @return {Boolean} true or false
   */
  isDigit() {
    const pattern = /^\d$/;
    return pattern.test(this);
  },

  /**
   * doubleCheck
   * Test to see if a string contains multiple consecutive characters (pp)
   * @return {Boolean} true or false
   */
  doubleCheck() {
    const pattern = /(.)\1/i;
    return pattern.test(this);
  }
};

Object.assign(String.prototype, stringClassExtensions);
