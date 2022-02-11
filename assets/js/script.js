// references the #generate element (generate password button)
var generateBtn = document.querySelector("#generate");
// references the #password element (text area)
var passwordText = document.querySelector("#password");

// character types
var lower = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upper = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];
var numbers =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];

// randomize function
function randomize(array) {
  var randomIndex = Math.floor(Math.random()*array.length);
  var randomCharacter = array[randomIndex];
  return randomCharacter;
};

// user is presented with a series of prompts for password criteria
var passwordPrompts = function(event) {
  // prompts for the type of password needed
  var length = parseInt(prompt("How many characters would you like your password to be? (Min 8, Max 128)"));
  var hasLowerCase = confirm("Would you like to include lowercase letters?");
  var hasUpperCase = confirm("Would you like to include uppercase letters?");
  var hasNumbers = confirm("Would you like to include numbers?");
  var hasSpecialCharacters = confirm("Would you like to include special characters?");

  // array of user choice options
  var userChoices = {
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters,
    length: length
  };

  validateLength(userChoices.length);
  // validateCharacterTypes(userChoices);
  // validate input for at least 1 character type
  // after all prompts are answered
}

var validateLength = function(length) {
  if (length < 8) {
    alert("Password's minimum length is 8 characters, try again!");
    return;
  } else if (length > 128) {
    alert("Password's maximum length is 128 characters, try again! ");
    return;
  } else if (isNaN(length)===true) {
    alert("Please enter a number between 8 and 128.");
    passwordPrompts();
  }
};

// var validateCharacterTypes = function(choices) {
//   console.log(choices.hasLowerCase);
//   if (choices.hasLowerCase || choices.hasUpperCase || choices.hasNumbers || choices.hasSpecialCharacters !== true) {
//     alert("Please choose at least 1 character type.");
//     passwordPrompts();
//   } else {
//     return;
//   }
// }


// password is generated
// passsword is then displayed in either an alert of written into the page


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// when "generate password" button is clicked 
generateBtn.addEventListener("click", passwordPrompts);

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);