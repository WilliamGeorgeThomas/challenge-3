


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
  if (passwordLength < 1 || passwordLength > 128) {
    window.alert('Please make sure you choose a password length between 1 and 128 characters');
    generatePassword();
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

  while (isLower !== true && isUpper !== true && isNumbers !== true && isSpecial !== true) {
    window.alert(`Please make sure you select at least one of the following options: \nLowercase Letters \nUppercase Letters \nNumbers \nSpecial Characters`)
    generatePassword();
  }


  password = [];
  if (isLower === true) {
    //TODO: pick one random number and push into password
    allChoices = allChoices.concat(lowerCase);
  }
  if (isUpper === true) {
    allChoices = allChoices.concat(upperCase);
  }
  if (isNumbers === true) {
    allChoices = allChoices.concat(number);
  }
  if (isSpecial === true) {
    allChoices = allChoices.concat(specialCharacter);
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
