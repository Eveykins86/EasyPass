//User Entery Options
var passwordLength;
var confirmCharacter
var confirmNumber
var confirmUppercase
var confirmLowercase

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
    confirmNumber = confirm("Will this contain numers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  }

    let charCodes = LOWERCASE_CHAR_CODES
    if (confirmUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (confirmCharacter) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (confirmNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

console.log("My charCodes: "+charCodes);
    const passwordCharacters = []
    for (let i = 0; i < passwordLength; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      console.log("passwordCharacters.push -->"+ String.fromCharCode(characterCode));
      passwordCharacters.push(String.fromCharCode(characterCode))
}
console.log("Outputting array: "+passwordCharacters.join(""));
document.getElementById('password').textContent = passwordCharacters.join("");
     
}

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);