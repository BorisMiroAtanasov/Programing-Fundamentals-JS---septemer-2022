function wordOccurrences(input){
    let words = {}

    for (const word of input) {
        if(!words[word]){
            words[word] = 0;
        }
        words[word]++;
    }

    let sortedWors = Object.entries(words).sort((a,b) => b[1] - a[1]);

    for (const [word,count] of sortedWors) {
        console.log(`${word} -> ${count} times`);
        
    }
    
    
    
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
 "another", "sentence", "And", "finally", "the", "third", "sentence"]);
