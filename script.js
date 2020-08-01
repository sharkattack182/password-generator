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
var selections;

//Arrays

var lowercaseOpts = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseOpts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialOpts = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];
var numberOpts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//Functions

function generatePassword() {
    lengthValue = prompt("Please select a password length between 8 and 128 characters.");

    if (!lengthValue) {
        alert("Tis field is required");
    } else if (lengthValue < 8 || lengthValue > 128) {
        alert("Password must be between 8 and 128 characters");
        lengthValue = prompt("Please select a password length between 8 and 128 characters.");
    } else {
        upperYN = confirm("Do you want password to include uppercase letters?");
        lowerYN = confirm("Do you want password to include lowercase letters?");
        specialYN = confirm("Do you want password to include special characters?");
        numbersYN = confirm("Do you want password to include uppercase numbers?");
    };

    if (!upperYN && !lowerYN && !specialYN && !numbersYN) {         //no selctions
        alert("You must choose atleast one character type")
    } else if (upperYN && lowerYN && specialYN && numbersYN) {     //all selections
        selections = lowercaseOpts.concat(uppercaseOpts, specialOpts, numberOpts);
    } else if (lowerYN && specialYN && numbersYN) {           //lower special and numbers
        selections = lowercaseOpts.concat(specialOpts, numberOpts);
    } else if (upperYN && lowerYN && numbersYN) {              //lower upper and numbers
        selections = lowercaseOpts.concat(uppercaseOpts, numberOpts);
    } else if (upperYN && lowerYN && specialYN) {     //lower upper and special
        selections = lowercaseOpts.concat(uppercaseOpts, specialOpts);
    } else if (upperYN && lowerYN && specialYN && numbersYN) {       //upper special and numbers
        selections = uppercaseOpts.concat(specialOpts, numberOpts);
    } else if (upperYN && lowerYN) {                    // upper lower 
        selections = uppercaseOpts.concat(lowercaseOpts);
    } else if (upperYN && specialOpts) {        // upper special
        selections = uppercaseOpts.concat(specialOpts);
    } else if (upperYN && numbersYN) {            //upper number
        selections = uppercaseOpts.concat(numberOpts);
    } else if (lowerYN && numbersYN) {            //lower number
        selections = lowercaseOpts.concat(numberOpts);
    } else if (lowerYN && specialYN) {            //lower special
        selections = lowercaseOpts.concat(specialOpts);
    }  else if (numbersYN && specialYN) {            //numbers special
        selections = numberOpts.concat(specialOpts);
    } else if (upperYN) {           //upper only
        selections = uppercaseOpts;
    } else if (lowerYN) {          //lower only
        selections = lowercaseOpts;
    } else if (specialYN) {     //special only
        selections = specialOpts;
    } else if (numbersYN) {     // numbers only
        selections = numberOpts;
    };

    var randomPW = [];

    
}

