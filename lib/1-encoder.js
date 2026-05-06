'use strict';

var encoder = function(phrase){
  let encoded = replaceChar(phrase).split("").reverse().join("")

  return encoded;

};

const replaceChar = (phrase) => {
  return phrase.replace(/a/g, '0')
  .replace(/e/g, '1')
  .replace(/i/g, '2')
  .replace(/o/g, '3')
  .replace(/\s/g, '$')
}

module.exports = encoder;
