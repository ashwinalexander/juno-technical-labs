
// Define a function that takes a string, and returns whether it is a palindrome.
// 	Example:
// 		palindrome(“racecar”)
// 	Returns: 
// 		// true



var palindrome = function (x) {
  //not a palindrome
  if (x.length == 0) {
    return false;
  }

  let strNum = x.toString();
  let arrNum = [...strNum];

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] !== arrNum[arrNum.length - 1 - i]) {
      return false;
    } else {
    }
  }
  return true;
};

let x = "ede";
console.log(palindrome(x));