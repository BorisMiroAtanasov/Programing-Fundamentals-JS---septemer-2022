function sumOfOddNumbersVtwo(counter){
    let sum = 0;
    let oddNumber = 1;

    for( let i = 0 ; i < counter ; i++){
        console.log(oddNumber);
        sum += oddNumber
        oddNumber +=2;

    }
    console.log(`Sum: ${sum}`)


}
sumOfOddNumbersVtwo(5);