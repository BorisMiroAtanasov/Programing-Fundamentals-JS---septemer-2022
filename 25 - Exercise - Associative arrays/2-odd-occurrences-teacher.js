function oddOcurrences(words){
    let resultObjeckt = {};
    let allWords = words
    .split(' ')
    .map(w => w.toLowerCase());
    for (const word of allWords) {
        if(!resultObjeckt[word]){
            resultObjeckt[word]= 1;

        }else{
            resultObjeckt[word]++;

        }
        
        
    }
    result= '';
    for (const word of allWords) {
        if(resultObjeckt[word] %2 === 1 ){
            result += `${word} `;
            delete resultObjeckt[word]

        }
        
    }
    console.log(result);
  


}
oddOcurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

