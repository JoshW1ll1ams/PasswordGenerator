// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var length;
var lowercase;
var uppercase;
var special;
var numeric;

//Function to check length input is both is both right length and correct format before proceeding
function ValidLengthCheck(){
  length = prompt("Enter a length");
  while (length < 10 || length > 64)
  {
    alert("Length must be between 10 and 64");
    length = prompt("Enter a length");
  }
    getPasswordOptions();
    writePassword();
  }


// Function to prompt user for password options
function getPasswordOptions() {
  lowercase = confirm("Include lower case?");
  uppercase = confirm("Include upper case?");
  special = confirm("Include special character?");
  numeric = confirm("Include numbers?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * ((arr.length-1) - 1 + 1)) + 1;
}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  if(lowercase == true || uppercase == true || special == true || numeric == true)
  {
    for(var i = 0; i < length;)
    {
      var typeChoice = Math.floor(Math.random() * (4 - 1 + 1)) + 1;;
      if (typeChoice == 1 && special == true)
      {
        password += specialCharacters[getRandom(specialCharacters)];
        i++;
      }
      if (typeChoice == 2 && numeric == true)
      {
        password += numericCharacters[getRandom(numericCharacters)];
        i++;
      }
      if (typeChoice == 3 && lowercase == true)
      {
        password += lowerCasedCharacters[getRandom(lowerCasedCharacters)];
        i++;
      }
      if (typeChoice == 4 && uppercase == true)
      {
        password += upperCasedCharacters[getRandom(upperCasedCharacters)];
        i++;
      }
    }
    return password;
  }
  else{
    alert("At least one option must be selected")
    length = 0;
    ValidLengthCheck()
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


ValidLengthCheck()

