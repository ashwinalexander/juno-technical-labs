// Fizz Buzz! Define a function that takes an integer (n), and: 
// Console logs the number from 1 to n
// Logs fizz instead of the number if the number is a multiple of 3
// Logs buzz instead of the number if the number is a multiple of 5
// Logs fizzbuzz instead of the number if the number is a multiple of 3 and 5


function fizzbuzz(n) {
for (let i = 1; i < n+1; i++){
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("fizzbuzz");
    }

    else if (i % 5 === 0) {
        console.log("buzz");
    }
    else if (i % 3 === 0) {
     console.log("fizz")   
    }

    else {
        console.log(i);
    }
        
        
        
}
    



}

fizzbuzz(15);