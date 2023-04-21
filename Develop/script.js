
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrayes with characters
var includedLowerCaseLetter=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var includedUpperCaseLetter=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var includedNumbers=["0","1","2","3","4","5","6","7","8","9"];
var includeSpecialCharacters=["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","/","^","_","`","{","|","}","~"];


function getRandomNumber(min, max) {
  // Random number
  var randomNumber=Math.random() 
  var randomNumberUpToMax=randomNumber * max 
  var randomNumberInRange= min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange);
}

function getRandomValueFromArray(array) {
    var randomArrayPosition=getRandomNumber(0,array.length);
    return array[randomArrayPosition];
}


// Write password to the #password input
function generatePassword() {
 var password="";


// Ask the user how many characters. Promt to confirm how many characters. 
  var numberOfCharacters = (prompt("Choose the length of your password. This needs to be between 8 - 128"));
  while (numberOfCharacters <=7 || numberOfCharacters >=128) {
  alert ("Please select a number between 8 - 128");
  var numberOfCharacters = (prompt("Choose the length of your password. This needs to be between 8 - 128"));
  }


// Ask if the user want to use lower case letters
 var withLowerCaseLetter=confirm("Would you like to include lower case characters?");
if (withLowerCaseLetter){
  password+=getRandomValueFromArray(includedLowerCaseLetter);
}

// Ask if the user want to use upper case letters
 var withUpperCaseLetter=confirm("Would you like to include upper case characters?");
if (withUpperCaseLetter){
  password+=getRandomValueFromArray(includedUpperCaseLetter);
}

// Ask if the user want to use numbers
 var withNumbers=confirm("Would you like to include numbers?");
if (withNumbers) {
  password+=getRandomValueFromArray(includedNumbers);
}

// Ask if the user want to use special characters
 var withSpecialCharacters=confirm("Would you like to include special characters?");
if (withSpecialCharacters) {
  password+=getRandomValueFromArray(includeSpecialCharacters);
}


// Generate a password with the number and the types of characters selected by the user
for (var i=0; i<numberOfCharacters;i++) {
  password += password[Math.floor(Math.random()*password.length)];
}

return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
// Whenever the button is "click" the "writePassword" function will be executed.

