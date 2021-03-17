// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //create standard alphabet array
    const aToZ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    //check if alphabet argument is 26 characters long
    if(!alphabet || alphabet.length !== 26) return false;
    
    //input should ignore capitals
    input = input.toLowerCase();
    
    //check if there are any duplicated letters in the alphabet argument
    let doubles = [];
    for (let i = 0; i < alphabet.length; i++){
      let letters = alphabet[i];
      if(!doubles.includes(letters)){
        doubles.push(letters)
      }else{
        return false;
      }
    }
    
    //create secret message
    if (encode){
    const secretMessage = input
      .split('').map((letters) => {
        //crate empty string for encoded message
        let message = "";
        //keep symbols and spaces
        if(letters === ' ' || !aToZ.includes(letters)){
          message += letters;
        }else{
          //add characters from the standard aplabet 
          if (aToZ.includes(letters)){
            const nIndex = aToZ.indexOf(letters);
            message += alphabet[nIndex]
          }
        }
        return message;
      });
      return secretMessage.join('');

    }else{
    
      //convert secret message to a legible string
    const standardMessage = input
    //sepparate all letters of message into an array
    .split('').map((letters) => {
      let message = "";
      //find letters in secret message that correspond to the standard alphabet
      if (alphabet.includes(letters)){
        const nIndex = alphabet.indexOf(letters);
        message += aToZ[nIndex];
      }else{
        //keep spaces in message
        if (letters === ' '){
          message += letters;
        }
      }
      return message;
    });
    return standardMessage.join('');
  }
}
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;




