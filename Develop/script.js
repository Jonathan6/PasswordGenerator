// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerGroup = "abcdefghijklmnopqrstuvwxyz";
var upperGroup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numsGroup = "1234567890";
var specialGroup = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; //I'm missing quotation i don't wanna deal with escape characters



// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword() {
  let passLen = how long the password needs to be;

  let charGroup = "";
  let lower = boolean lower;
  let upper = boolean upper;
  let nums= boolean numbers;
  let special = boolean special;

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
  while (answer.length < how long the password needs to be) {
    let temp = charGroup.charAt(Math.floor(Math.random() * charGroup.length));
    answer = answer + temp;
  }

  return answer;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/* <div class="card-options">
<form action="/action_page.php" oninput="x.value=parseInt(a.value)">
  8
  <input type="range" id="a" name="a" value="50">
  128 =
  <output name="x" for="a b"></output>
</form>
</div> */