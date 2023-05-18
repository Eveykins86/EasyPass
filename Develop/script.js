//User Entery Options
var passwordLength;
var confirmCharacter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var userChoices;

//Password Variables

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Assignment code here

function generatePassword() {

  passwordLength = parseInt(prompt("How many characters would you like your password to be? (Must be 8-128 characters in length)"));

  if (!passwordLength) {
    alert ("You Must Enter a Number");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    confirmNumber = confirm("Will this contain numers? (OK = Yes, Cancel = No)");
    confirmCharacter = confirm("Will this contain special characters? (OK = Yes, Cancel = No)");
    confirmUppercase = confirm("Will this contain Uppercase letters? (OK = Yes, Cancel = No)");
    confirmLowercase = confirm("Will this contain Lowercase letters? (OK = Yes, Cancel = No)");
  }

  let charCodes = [];
     
    if (confirmLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
    if (confirmUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (confirmCharacter) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    if (confirmNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES);

    // When no value is selected
    if (!confirmLowercase && !confirmUppercase && !confirmCharacter && !confirmNumber){
      alert ("You Must Select a Value");
      return;
    } 

    // 3 true choices  
    else if (confirmLowercase && confirmUppercase && confirmCharacter) {
      userChoices = LOWERCASE_CHAR_CODES.concat(UPPERCASE_CHAR_CODES, SYMBOL_CHAR_CODES);
    }
    else if (confirmLowercase && confirmUppercase && confirmCharacter) {
      userChoices = LOWERCASE_CHAR_CODES.concat(UPPERCASE_CHAR_CODES, SYMBOL_CHAR_CODES);
    }
    else if (confirmLowercase && confirmNumber && confirmCharacter) {
      userChoices = LOWERCASE_CHAR_CODES.concat(NUMBER_CHAR_CODES, SYMBOL_CHAR_CODES);
    }
    else if (confirmUppercase && confirmNumber && confirmCharacter) {
      userChoices = UPPERCASE_CHAR_CODES.concat(NUMBER_CHAR_CODES, SYMBOL_CHAR_CODES);
    }

    // 2 true choices
    else if (confirmLowercase && confirmUppercase) {
      userChoices = LOWERCASE_CHAR_CODES.concat(UPPERCASE_CHAR_CODES);
    }
    else if (confirmLowercase && confirmNumber) {
      userChoices = LOWERCASE_CHAR_CODES.concat(NUMBER_CHAR_CODES);
    }
    else if (confirmLowercase && confirmCharacter) {
      userChoices = LOWERCASE_CHAR_CODES.concat(SYMBOL_CHAR_CODES);
    }
    else if (confirmUppercase && confirmNumber) {
      userChoices = UPPERCASE_CHAR_CODES.concat(NUMBER_CHAR_CODES);
    }
    else if (confirmUppercase && confirmCharacter) {
      userChoices = UPPERCASE_CHAR_CODES.concat(SYMBOL_CHAR_CODES);
    }
    else if (confirmNumber && confirmCharacter) {
      userChoices = NUMBER_CHAR_CODES.concat(SYMBOL_CHAR_CODES);
    }
    // 1 true choices
    else if (confirmLowercase) {
      userChoices = LOWERCASE_CHAR_CODES;
    }
    else if (confirmUppercase) {
      userChoices = UPPERCASE_CHAR_CODES;
    }
    else if (confirmNumber) {
      userChoices = NUMBER_CHAR_CODES;
    }
    else if (confirmCharacter) {
      userChoices = SYMBOL_CHAR_CODES;
    };

   
    const passwordCharacters = []
    for (let i = 0; i < passwordLength; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
}
document.getElementById('password').textContent = passwordCharacters.join("");
     
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);