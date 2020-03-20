// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!",",","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var bigAlphabet = alphabet.map(letters => letters.toUpperCase());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  document.querySelector("#password").value = password;
}

function generatePassword() {
  var types = [];
  var pass = "";
  // Prompts ---------------------------------------------------------------------------------------------------------
  var numCharacters = numCharactersChecker();
  if (confirm("Click OK to include special characters")) {
    types.push(special);} // If user confrimed special characters, add special array to types array
  if (confirm("Click OK to include numeric characters")) {
    types.push(numbers);} // If user confrimed numeric characters, add numbers array to types array
  if (confirm("Click OK to include lowercase characters")) {
    types.push(alphabet);} // If user confrimed lowercase characters, add alphabet array to types array
  if (confirm("Click OK to include uppercase characters")) {
    types.push(bigAlphabet);} // If user confrimed uppercase characters, add bigAlphabet array to types array
  // Prompts ---------------------------------------------------------------------------------------------------------

  // For loop adds a random character (based on the user's inputs) to "pass", numCharacters amount of times
  for (var i = 0; i < numCharacters; i++) {
    var randomType = types[Math.floor(Math.random()*types.length)];
    pass += randomType[Math.floor(Math.random()*randomType.length)];
  }
  return pass;
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
