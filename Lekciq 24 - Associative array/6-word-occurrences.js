function wordOccurrences(input){
    let words = {};

    
    for (const word of input) {
        let currentCounter = 0;
        for (const sameWord of input) {
            if(word === sameWord) {

                currentCounter++;
                words[word] = currentCounter
            }

        }
      
        
    }
    let sortedEntry = Object.entries(words);
    let sortedWords = sortedEntry.sort((a,b) => b[1] - a[1]);

    for (const [word, number] of sortedWords) {
        console.log(`${word} -> ${number} times`);
        
    }
    
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
 "another", "sentence", "And", "finally", "the", "third", "sentence"]);
