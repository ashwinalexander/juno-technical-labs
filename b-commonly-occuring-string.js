// Define a function that takes an array of strings, and returns the most commonly occurring string in that array.

// //function that takes in an array of strings and returns the most commonly occuring string
// //input: an array of strings
// //output: the first most commonly occuring string

// //function algorithm:
// // loop through every string element in the array  ("aaa", "bbbb","ccc", "aaa", "ccc")
// // compare each string with all the prior strings in the array
// // // if we find a match, push that string into a second array



function mostCommonlyOccuring(exampleArray) {
  let frequencyCounter = 0;
  let newArr = [];

  for (let i = 0; i < exampleArray.length; i++) {
    for (let j = 0; j < exampleArray.length; j++) {
      if (exampleArray[i] === exampleArray[j]) {
          frequencyCounter++;
           newArr.push([exampleArray[j], frequencyCounter]);
     
        }
        
      }
      
  }

  console.log(newArr);
}

mostCommonlyOccuring(["ddd", "aaa", "bbbb", "cc", "aaa", "ccc"]);