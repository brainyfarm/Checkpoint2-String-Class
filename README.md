[![Build Status](https://travis-ci.org/andela-oakinseye/Checkpoint2-String-Class.svg?branch=develop)](https://travis-ci.org/andela-oakinseye/Checkpoint2-String-Class) [![Coverage Status](https://coveralls.io/repos/github/andela-oakinseye/Checkpoint2-String-Class/badge.svg?branch=develop)](https://coveralls.io/github/andela-oakinseye/Checkpoint2-String-Class?branch=develop) [![Code Climate](https://codeclimate.com/github/andela-oakinseye/Checkpoint2-String-Class/badges/gpa.svg)](https://codeclimate.com/github/andela-oakinseye/Checkpoint2-String-Class)
# Checkpoint2-String-Class
Extending the default javascript `String` Object to support more string manipilation operations

## Extended string methods
  - `hasVowels` - Check to see if a string contains vowels

  - `toUpper` - Converts the string into uppercase

  - `toLower` - Converts the string into lowercase

  - `ucFirst` - Converts the first character of a string into uppercase

  - `isQuestion` - Check to see if a string is a question (ending with '?')

  - `words` - Return all words in a string as an array

  - `wordCount` - Counts and return the number of words in a string

  - `toCurrency` - Converts a string such as '11111` to currency format (11,111)

  - `fromCurrency` -  Converts a string in currency format into a number e.g (11,111 -> 11111)

  - `inverseCase` - Return the string inversing the cases of its characters e.g ('AbC' -> 'aBc')
  
  - `alternatingCase` - Alternates cases of string characters starting with lowercase e.g ('hello' -> 'hElLo')

  - `getMiddle` - Return the middle character(s) in a string e.g ('ABCD' -> 'BC')

  - `numberWords` - Returns the numbers in a string in words e.g ('112' -> 'one one two')

  - `isDigit` - Returns true if a string is a single digit

  - `doubleCheck` - Returns true if a string contains double characters such as 'pp' in 'pappa'


## How to install
1. Fork this repositry to your github account.
2. Clone your repositry: `git clone git@github.com:your-username/checkpoint2-string-class.git`
3. CD in to the folder: `cd Checkpoint-2-string-class`
4. Run `npm install`

## Alternative Use
1. Add to your HTML script tag
2. Call the methods from your from end web app

## Run Test
1. Run test: `npm test`

## Limitations
1. The app does not run in the browser.
2. It assumes a basic familiarity with web technologies.