// Given a string, reverse every word in the sentence.



function reverseEveryWord(sentence) {
    
    words = sentence.split(" ");
    
    var newWords = words.map(word => reverseWord(word.trim()));

    function reverseWord(notreversed) {
      
        var notyet = [...notreversed];
        var yet = "";
        
        for (let i = notyet.length - 1; i > -1; i--){
            yet = yet + notyet[i];
            
        }
        return yet;



    }

    return newWords.join(' ');

}


reverseEveryWord("hello world");