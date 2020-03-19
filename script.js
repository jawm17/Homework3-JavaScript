// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!",",","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var specialCharacters = false;
var numericCharacters = false;
var lowerCase = false;
var upperCase = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
    // Prompts ----------------------------------------------------------------------------------------
    var numCharacters = numCharactersChecker();
    specialCharacters = confirm("Click OK to include special characters");
    numericCharacters = confirm("Click OK to include numeric characters");
    lowerCase = confirm("Click OK to include lowercase characters");
    upperCase = confirm("Click OK to include uppercase characters");
    // Prompts ----------------------------------------------------------------------------------------

    var pass = "";
    // For loop adds a random character (based on the user inputs) to "pass", numCharacters amount of times
    for (var i = 0; i < numCharacters; i++) {
      var type = Math.ceil(Math.random()*4);
      pass += addCharacter(type);
    }
    return pass;
}

// Selects appropriate character to return based on user inputs
function addCharacter(type){
  if (type === 1) {
    if (specialCharacters){
      // If type = 1 and specialCharacters is true, then return a special character
      return special[Math.floor(Math.random() * special.length)];
    }
    else{
      // Else increment type and start over
      type += 1;
      addCharacter(type);
    }
  }
  if (type === 2) {
    if (numericCharacters){
      return numbers[Math.floor(Math.random() * numbers.length)];
    }
    else{
      type += 1;
      addCharacter(type);
    }
  }
  if (type === 3) {
    if (lowerCase){
      return alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    else{
      type += 1;
      addCharacter(type);
    }
  }
  if (type === 4) {
    if (upperCase){
      return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
    }
    else{
      type = 1;
      return addCharacter(type);
    }
  }

}

// Prompts for number of characters and checks if input is valid
function numCharactersChecker() {
  var numCharactersRaw = prompt("How many characters would you like your password to contain?");
  if (!isNaN(numCharactersRaw) && numCharactersRaw >= 8 && numCharactersRaw <= 128) {
    return numCharactersRaw;
  }
  else {
    alert("You must input a valid integer of at least 8 and no more than 128");
    return numCharactersChecker();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
