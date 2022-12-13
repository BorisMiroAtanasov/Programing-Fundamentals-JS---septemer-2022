function sumEvenNumbers(arrayOfString) {
    let newArray = [];
   
    for (let i = 0; i < arrayOfString.length; i++) {
        newArray[i] = Number(arrayOfString[i]);
        
       
    }

    let sum = 0;
    for (let num of newArray) {
        if ( num % 2 === 0 ){

            sum += num;
            
        }
       

    }
    console.log(sum);
   

    }
   

sumEvenNumbers(['1','2','3','4','5','6']);
