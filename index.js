// const { stringify } = require("mocha/lib/utils");

function isPalindrome(string) {
  const word = string.split('').join('')
  const wordReverse = string.split('').reverse().join('')

if(string === wordReverse){
  return true
} else{
  return false
 }
}

/* 
  Add your pseudocode here
*/

/*
  -Split operator takes a string and puts all characters into an array
  -Join basically does the reverse of split
  -Reverse turns an array backwards
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("book"));
}

module.exports = isPalindrome;
