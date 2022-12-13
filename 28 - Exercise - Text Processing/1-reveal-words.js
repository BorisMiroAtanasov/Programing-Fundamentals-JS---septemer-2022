function revealWords(words, text){
    text = ` ${text} `
  let wordArray = words.split(', ');

  wordArray.forEach(word => {
    let machWord = ` ${"*".repeat(word.length)} `;
    text = text.replace(machWord, ` ${word} `)


  });
  console.log(text);

    



}
revealWords('learning, great',
'softuni is ***** place for ******** new programming languages');
