function stringSunSubstring(word, text){

    const tokens = text.split(' ');
    tokens.forEach(token => {
        if (token.toLowerCase() === word.toLowerCase()){
            return console.log(word)
        }
    
   });
   console.log(`${word} not found!`)



}
stringSunSubstring('python',
'JavaScript is the best programming language');
