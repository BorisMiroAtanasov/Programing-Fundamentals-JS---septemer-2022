function emojiDetector(array){
    let patternEmoji = /([\:|**]{2})(?<emoji>[A-Z][a-z]{2,})\1/g
    let patternDigit = /\d/g;
    let threshold = 1;
    let counrteEmoji = 0;
    let emojiResultArray = [];
    let emojiCount = 0;
    

    
    let text = array.shift();
    // console.log(text);
    let digitString = text.match(patternDigit);
    digitString = digitString.join('');
    for (const digit of digitString) {
        let currentDigit = Number(digit);
        threshold *=currentDigit;
        
    }
    let emojiArray = text.match(patternEmoji);
    for (const match of emojiArray) {
       // console.log(match);
        counrteEmoji ++;
        let emojiValue = 0;
        for( let i = 2 ; i < match.length-2 ; i++ ){
            let currentValue = match[i].charCodeAt();
            emojiValue +=currentValue;
            
        }
        
       // console.log(emojiValue);
       if ( emojiValue > threshold ){
        emojiResultArray.push(match)

       // console.log(match);
       }

    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${counrteEmoji} emojis found in the text. The cool ones are:\n${emojiResultArray.join('\n')}`)

  


}

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
