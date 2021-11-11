// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerGroup = "abcdefghijklmnopqrstuvwxyz";
var upperGroup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numsGroup = "1234567890";
var specialGroup = "\" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



// Add event listener to generate button
generateBtn.addEventListener("click", start);

function start() {
  let passLen;
  let lower;
  let upper;
  let nums;
  let special;

  let gate = true;
  while (gate) {
    // ask user how long they want their password to be
    passLen = passwordLength();
    lower = confirm("Do you want lowercase characters?");
    upper = confirm("Do you want uppercase characters?");
    nums= confirm("Do you want numeric characters?");
    special = confirm("Do you want uppercase characters?");

    if (!(lower || upper || nums || special)) {
      alert("We need at least 1 character type to generate the password. Try again");
    } else {
      let response = "Do these settings look good?\nLowercase: " + lower + "\nUppercase: " + upper + "\nNumbers: " + nums + "\nSpecial: " + special;
      gate = !confirm(response);
    }
  }

  //run generate password
  let password = generatePassword(passLen, lower, upper, nums, special);

  // display the password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

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


/* <div class="card-options">
<form action="/action_page.php" oninput="x.value=parseInt(a.value)">
  8
  <input type="range" id="a" name="a" value="50">
  128 =
  <output name="x" for="a b"></output>
</form>
</div> */



function writePassword() {

  // var password = generatePassword();
}