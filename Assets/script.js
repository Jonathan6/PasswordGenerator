// Assignment Code
// Javascript set up
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", start);

// Character type groups
var lowerGroup = "abcdefghijklmnopqrstuvwxyz";
var upperGroup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numsGroup = "1234567890";
var specialGroup = "\" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// TODO : make it so that cancel stops the runtime 
// TODO : make the options selected page cleaner
// The main function the runs when the "Generate Password" button is clicked.
function start() {
  // Boolean values recording the type of characters the user wants
  let passLen;
  let lower;
  let upper;
  let nums;
  let special;

  // While loops repeats until at least one character group is selected and the user is satisfied
  let gate = true;
  while (gate) {
    // ask user how long they want their password to be
    passLen = passwordLength();
    lower = confirm("Do you want lowercase characters?");
    upper = confirm("Do you want uppercase characters?");
    nums= confirm("Do you want numeric characters?");
    special = confirm("Do you want special characters?");

    if (!(lower || upper || nums || special)) {
      alert("We need at least 1 character type to generate the password. Try again");
    } else {
      let response = "Do these settings look good? \nPassword Length: " + passLen + "\nLowercase: " + lower + "\nUppercase: " + upper + "\nNumbers: " + nums + "\nSpecial: " + special;
      gate = !confirm(response);
    }
  }

  //run generate password
  let password = generatePassword(passLen, lower, upper, nums, special);

  // display the password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Input:   none
// Output:  number - between 8 - 128 (includes both 8 and 128)
// Asks the user how long their password will be. Does not take anything other than a number between 8-128.
function passwordLength() {
  var passLen = Number(prompt("How long do you want your password to be? (8-128 char limit)", 12));
  while (!Number.isInteger(passLen) || passLen < 8 || passLen > 128) {
    if (!Number.isInteger(passLen)) {
      // console.log(typeof passLen);
      // console.log(passLen);
      passLen = Number(prompt("This is not a number. Try again (8-128 char limit)", 12));
    } else if (passLen < 8) {
      // console.log(typeof passLen);
      // console.log(passLen);
      passLen = Number(prompt("Minimum length is 8 characters. Try again (8-128 char limit)", 12));
    } else {
      // console.log(typeof passLen);
      // console.log(passLen);
      passLen = Number(prompt("Maximum length is 128 characters. Try again (8-128 char limit)", 12));
    }
  }
  return passLen;
}

// Input:   passLen (number), lower (bool), upper (bool), nums (bool), special (bool)
// Output:  string - the password with characters as specified with passLen length.
// Takes in a number and 4 booleans and creates a random password based on the specifications.
function generatePassword(passLen, lower, upper, nums, special) {
  let charGroup = "";

  if (lower) {
    charGroup = charGroup + lowerGroup;
  }

  if (upper) {
    charGroup = charGroup + upperGroup;
  }

  if (nums) {
    charGroup = charGroup + numsGroup;
  }

  if (special) {
    charGroup = charGroup + specialGroup;
  }


  let answer = "";
  while (answer.length < passLen) {
    let temp = charGroup.charAt(Math.floor(Math.random() * charGroup.length));
    answer = answer + temp;
  }

  return answer;
}