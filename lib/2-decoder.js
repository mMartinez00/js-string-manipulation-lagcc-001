'use strict';

var decoder = function(encoded){
  let decoded = replaceChar(encoded).split("").reverse().join("")

  return decoded;

};

const replaceChar = (phrase) => {
  return phrase.replace(/0/g, 'a')
  .replace(/1/g, 'e')
  .replace(/2/g, 'i')
  .replace(/3/g, 'o')
  .replace(/\$/g, ' ')
}

module.exports = decoder;

