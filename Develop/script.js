// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword(){
  var generatePassword="";

  var numberOfCharacters=prompt("How many characters you want the password to have?")
  if (length =>8 && length <=128){
    alert 
  }




















 
// do your things here


// 1- ask the user how many characters
var numberOfCharacters=prompt(passwordLength);
(passwordLength >= 8 && passwordLength <= 128)


// 2- ask if the user want to use special characters
var includeSpecialCharacters=confirm("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

// 3- ask if the user want to use upper case letters
var includedUpperCaseLetter=confirm();
// 4- ask if the user want to use lower case letters
var includedLowerCaseLetter=confirm();
// 5- ask if the user want to use numbers
var includedNumbers=confirm();
// 6- generate a password withth enumber of characters and the types of characters selected by the user and put it in the "password generated"







  return generatePassword;
}

// return "password generated" is actually the password, not the word password generated...
















function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// The "writePassword" function is going to get whatever "var password" function returns.
// It`s going to set the value resulted from "passwordText.value".



generateBtn.addEventListener("click", writePassword);
// Whenever the button is "click" the "writePassword" function will be executed.



