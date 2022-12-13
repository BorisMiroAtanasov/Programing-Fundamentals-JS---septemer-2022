function palindromeIntegers(numberArray){

    let numberArrayLength = numberArray.length;

    for (let index = 0 ; index < numberArrayLength ; index++){
     
        let numAsString = numberArray[index].toString();
        


        let reverstString = numAsString.split('').reverse().join('')

        

         if ( numAsString == reverstString ){
             console.log('true');
         } else {
             console.log('false');
        }
  


   }


}
palindromeIntegers([123,323,421,121]);
