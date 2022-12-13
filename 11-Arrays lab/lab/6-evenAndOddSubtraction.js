function evenAndOddSustraction(arr){
    let sumEven = 0;
    let sumOdd = 0;

    for ( let num of arr){
        if ( num % 2 == 0){
            sumEven +=num;
        } else{
            sumOdd +=num;
        }
        
    }
    console.log(sumEven - sumOdd);

}
evenAndOddSustraction([1,2,3,4,5,6]);
evenAndOddSustraction([3,5,7,9]);
evenAndOddSustraction([2,4,6,8,10]);
