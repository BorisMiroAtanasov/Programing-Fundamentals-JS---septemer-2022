function countStringOccurrences(text, word){
    let newText = text.split(' ');

    let counter = 0;
    for (const el of newText) {
        if(el == word ){
            counter++
        }
        
    }
    console.log(counter);
   

}
countStringOccurrences('This is a word and it also is a sentence',
'is');
