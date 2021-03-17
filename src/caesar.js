// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

  //instruction tips
    //If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
    //Spaces should be maintained throughout, as should other non-alphabetic symbols.
    //Capital letters can be ignored.
    //If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

//research js text manipulation
  //idexOf() and charAt() will be useful for encoding and decoding these functions; check MDN

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // create and alphabet array
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //all input letters should be lowercase
    input = input.toLowerCase();
    //shift argument needs to be within the length of the alphabet, and can't be zero
    if(shift === 0 || shift < -25 || shift > 25 || shift === undefined){
      return false;
    }
    //this will contain encoded or decoded message
    let result = '';
    //index of shifted letters
    let nIndex = 0;
    //loop over all characters of the input
    for(let char in input){
      let character = input[char];
      //compare characters to the alphabet array
      alphabet.find(letter => {
        if(letter === character){
          //shift characters if encode is true
          encode ? nIndex = alphabet.indexOf(letter) + shift : nIndex = alphabet.indexOf(letter) - shift;
          //account for a new index that is more or less than the alphabet length; wrap around alphabet
          if(nIndex <= -1){
            nIndex += 26
          }
          else if(nIndex >= 26){
            nIndex -= 26
          }
          //new index values are pushed to the empty string variable
          result += alphabet[nIndex];
        }
      })
      //need to retain characters that are not letters and add them to the result string
      //indexOf() a character that is not a letter = -1
      if(alphabet.indexOf(character) === -1){
        result += character;
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
