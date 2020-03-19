// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
    var numCharacters = numCharactersPrompt();
    var specialCharacters = confirm("Click OK to include special characters");
    var numericCharacters = confirm("Click OK to include numeric characters");
    var lowerCase = confirm("Click OK to include lowercase characters");
    var upperCase = confirm("Click OK to include uppercase characters");
}

function numCharactersPrompt() {
  var numCharactersRaw = prompt("How many characters would you like your password to contain?");
  if (!isNaN(numCharactersRaw) && numCharactersRaw >= 8 && numCharactersRaw <= 128) {
    return numCharactersRaw;
  }
  else {
    alert("You must input a valid integer of at least 8 and no more than 128");
    numCharactersPrompt();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
