// Define a function that takes a string and returns the number of vowels.

// Example:
// 		vowels(“Hello World!”)

// 	Returns: 
// 		// 3


function vowels(word) {
    
    var lowerCase = word.toLowerCase();
    var letters = [...lowerCase];
    
    console.log(letters.filter(val => (val === 'e') || (val === 'a') || (val === 'i') || (val === 'o') || (val === 'u')).length);

    return letters.filter(val => (val === 'e') ||(val === 'a') || (val === 'i') || (val === 'o') || (val === 'u') ).length;


}


vowels("hello world");