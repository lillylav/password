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

  if (length < 8) {
    alert("Password's minimum length is 8 characters, try again!");
    return;
  } else if (length > 128) {
    alert("Password's maximum length is 128 characters, try again! ");
    return;
  } else if (isNaN(length)===true) {
    alert("Please enter a number between 8 and 128.");
    return;
  };

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

  console.log(userChoices);

  generatePassword(userChoices);
};

// use allowed characters to generate a password
function generatePassword(userInput) {
  var possibleCharacters = [];
  var newPassword = [];

  if (!userInput.hasLowerCase && !userInput.hasUpperCase && !userInput.hasNumbers && !userInput.hasSpecialCharacters) {
    alert("Please choose at least 1 character type.");
    return;
  };
  
  // check for character types
  if (userInput.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lower);
    possibleCharacters.push(randomize(lower));
  }

  if (userInput.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upper);
    possibleCharacters.push(randomize(upper));
  }

  if (userInput.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    possibleCharacters.push(randomize(numbers));
  }

  if (userInput.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(special);
    possibleCharacters.push(randomize(special));
  }

  // create password of desired legth with randomized characters from allowed types
  for(var i = 0; i < userInput.length; i++) {
    var possible = randomize(possibleCharacters);
    newPassword.push(possible);
  }

  writePassword(newPassword.join(''));
};

// write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


// when "generate password" button is clicked 
generateBtn.addEventListener("click", passwordPrompts);