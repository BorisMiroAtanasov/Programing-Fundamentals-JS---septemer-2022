function oddAndEvenSum(number){
    let evenSum = 0;
    let oddSum = 0;
    let numAsString = number.toString();

   

    for ( let i = 0 ; i < numAsString.length ; i++){

        let curentDigit = Number(numAsString[i])
        
        if ( curentDigit % 2 === 0 ){
            evenSum += curentDigit;
        } else {
            oddSum += curentDigit
        }
      
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);




}
oddAndEvenSum( 1000435);
