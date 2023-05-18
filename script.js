//User Entery Options
var passwordLength;
var confirmCharacter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;

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
    passwordLength = parseInt(alert("You must choose between 8 and 128"));
    generatePassword()
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
   //if (confirmNumber) charCodes = charCodes + NUMBER_CHAR_CODES;
   // Attemted to use without concat but characters do not display

    // When no value is selected
    if (!confirmLowercase && !confirmUppercase && !confirmCharacter && !confirmNumber){
      alert ("You Must Select a Value");
      return;
    } 
   
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