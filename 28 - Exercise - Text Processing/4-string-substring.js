function stringSunSubstring(word, text){

    let newText = text.split(' ');
   

    for (const el of newText) {
        let currentEl = el.toLowerCase();

        if(currentEl === word ){
           return  console.log(word);
        }
           
       

        
    }
    console.log(`${word} not found!`);



}
stringSunSubstring('python',
'JavaScript is the best programming language');
