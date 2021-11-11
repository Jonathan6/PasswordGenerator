// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerGroup = "abcdefghijklmnopqrstuvwxyz";
var upperGroup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numsGroup = "1234567890";
var specialGroup = "\" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



// Add event listener to generate button
generateBtn.addEventListener("click", start);

function start() {
  // ask user how long they want their password to be
  let passLen = passwordLength();
  // check boxes asking what characters they want their password to have
  
  // run generate password

  // display the password

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


function generatePassword() {
  let charGroup = "";
  // let lower = boolean lower;
  // let upper = boolean upper;
  // let nums= boolean numbers;
  // let special = boolean special;

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
  // while (answer.length < how long the password needs to be) {
  //   let temp = charGroup.charAt(Math.floor(Math.random() * charGroup.length));
  //   answer = answer + temp;
  // }

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
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;
}