function replaceRepaetingsChars(input){
    let result = '';
   


  for ( let index = 0 ; index < input.length ; index++){
    let currentLetter = input[index]
    if(currentLetter !== input[index-1]){
        result += currentLetter;
    }




  }
console.log(result);

}
replaceRepaetingsChars('aaaaabbbbbcdddeeeedssaa');
