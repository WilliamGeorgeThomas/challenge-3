


let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharacter = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
let password = [];



// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword() {
  let allChoices = []

  //ask user how long password
  let passwordLength = window.prompt('Please choose a number between 1 and 128 for your password length');
  //TODO: validate that they entered a number between 1-128
  if (passwordLength < 1 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert('Please make sure you choose a password length between 1 and 128 characters');
    return null;
  }

  //ask user if they want lowercase
  let isLower = window.confirm("Would you like to include lowercase letters?");

  //ask user if they want uppercase
  let isUpper = window.confirm("Would you like to include uppercase letters?");

  //ask user if they want numbers
  let isNumbers = window.confirm("Would you like to include numbers?");

  //ask user if they want special characters
  let isSpecial = window.confirm("Would you like to include special characters?");


  //validate that at least one of the 4 criteria has been selected 

  if (isLower === false && isUpper === false && isNumbers === false && isSpecial === false) {
    window.alert(`Please make sure you select at least one of the following options: \nLowercase Letters \nUppercase Letters \nNumbers \nSpecial Characters`)
    isLower = true;
    return null;
  }


  password = [];
  if (isLower === true) {
    //TODO: pick one random number and push into password
    allChoices = allChoices.concat(lowerCase);
    let maximum = lowerCase.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(lowerCase[rnd]);
    passwordLength--;
  }
  if (isUpper === true) {
    allChoices = allChoices.concat(upperCase);
    let maximum = upperCase.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(upperCase[rnd]);
    passwordLength--;
  }
  if (isNumbers === true) {
    allChoices = allChoices.concat(number);
    let maximum = number.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(number[rnd]);
    passwordLength--;
  }
  if (isSpecial === true) {
    allChoices = allChoices.concat(specialCharacter);
    let maximum = specialCharacter.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(specialCharacter[rnd]);
    passwordLength--;
  }
  for (let i = 0; i < passwordLength; i++) {

    let maximum = allChoices.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);

  }
}



// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
