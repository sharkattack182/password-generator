// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var length;
var upperYN;
var lowerYN;
var specialYN;
var numbersYN;

//Arrays

var lowercaseOpts = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseOpts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialOpts = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
var numberOpts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//Functions

function generatePassword() {
    lengthValue = prompt("Please select a password length between 8 and 128 characters.");
    
    if (lengthValue == null) {
        alert("Tis field is required");
    } else if (lengthValue < 8 || lengthValue > 128) {
            alert("Password must be between 8 and 128 characters");
            lengthValue = prompt("Please select a password length between 8 and 128 characters.");
        } else {
            upperYN = confirm("Do you want password to include uppercase letters?");
            lowerYN = confirm("Do you want password to include uppercase letters?");
            specialYN = confirm("Do you want password to include uppercase letters?");
            numbersYN = confirm("Do you want password to include uppercase letters?");
        }
        
}
    
