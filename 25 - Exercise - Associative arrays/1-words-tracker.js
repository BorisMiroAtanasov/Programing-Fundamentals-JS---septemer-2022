function wordsTracker(input){
    let wordsForFind = input
    .shift()
    .split(' ');
    
    let words = {}
   
    for (const word of wordsForFind) {
        words[word] = 0;

    }
    for (const word of input) {
        if(words.hasOwnProperty(word)){
            words[word]++
        }
        
    }
    
    let wordsEntrys = Object.entries(words);
    let sortedWods = wordsEntrys.sort((a,b) => b[1] - a[1]);
    for (const [key, value] of sortedWods) {
        console.log(`${key} - ${value}`);
            
        
    }

    

    
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words',
     'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);
