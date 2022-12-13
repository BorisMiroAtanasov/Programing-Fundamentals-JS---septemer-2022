function modernTimeOfHashTag(string){
    let words = string.split(' ');
    const validWords = [];


    words.forEach(word => {
        let isValidWord = word.startsWith('#') && word.length > 1
        if(isValidWord){
            let isLetter = true;
            let copyWord = '';
            for( let index = 1 ; index< word.length ; index++){
                let char = word[index].toLowerCase();
                if(char.charCodeAt() < 97 || char.charCodeAt() > 122){
                    let isLetter = false;
                    break;
                
        
                }else{
                    copyWord += word[index]

                }
                
            }
            if (isLetter){
                console.log(copyWord);
            }
           
        }
        
    });
 

}
modernTimeOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
