// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

alphaSquare = {
  11: "a",
  21: "b",
  31: "c",
  41: "d",
  51: "e",
  12: "f",
  22: "g",
  32: "h",
  42: "(i/j)",
  52: "k",
  13: "l",
  23: "m",
  33: "n",
  43: "o",
  53: "p",
  14: "q",
  24: "r",
  34: "s",
  44: "t",
  54: "u",
  15: "v",
  25: "w",
  35: "x",
  45: "y",
  55: "z",
}

//You are welcome to assume that no additional symbols will be 
  //included as part of the input. Only spaces and letters will be included.
//When encoding, your output should still be a string.
//When decoding, the number of characters in the string excluding
  //spaces should be even. Otherwise, return false.
//Spaces should be maintained throughout.
//Capital letters can be ignored.
//The letters "I" and "J" share a space. When encoding, both letters
  //can be converted to 42, but when decoding, both letters should somehow be shown.


const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const codeNum = Object.keys(alphaSquare);
    const letterPolyb = Object.values(alphaSquare);
    if(encode){
      //encode a string to of characters to numbers and ignore casing
      const secretMessage = input.toLowerCase().split('').map((letters) => {
        let message = '';
        //include spaces in encoded message
        if(letters === ' '){
          message += letters;
          //both 'i' and 'j' should be encoded as '42'
        }else if(letters === "i" || letters ==="j"){
          message += "42";
        }else{
          //convert all alphabet characers to numbers
          if(letterPolyb.includes(letters)){
            const nIndex = letterPolyb.indexOf(letters);
            message += codeNum[nIndex];
          }
        }
        return message;
      })
      return secretMessage.join('');
  
    }else{
      //decode a string of numbers into a legible message
      //there should be an even number of digits, not including spaces; or return false
      const isEven = input.split(' ').join('');
      if(isEven.length % 2 !== 0){
        return false;
      }else{
        //get an array of individual number pairs associated with letters
        let message = '';
        let pairedNum = [];
        //keep spaces while decoding
        for(let i = 0; i < input.length; i += 2){
          if(input.charAt(i) === ' ' || input.charAt(i + 1) === ' '){
            i -= 1;
            pairedNum.push(' ');
          }else{
            //separate individual number pairs
            let number = input.slice(i, i + 2);
            pairedNum.push(number);
          }
        }
      //convert numbers into their corresponding letter
      const numToChar = pairedNum.map((num) => {
        if(num === ' '){
          message = ' ';
        }else{
          if(codeNum.includes(num)){
            let newIndex = codeNum.indexOf(num);
            message = letterPolyb[newIndex]
          }
        }
        return message;
      })
      return numToChar.join('');
      }   
    }  
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
