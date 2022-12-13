function numbers(input){

    let array = input.split(' ').map(Number);
    //console.log(array);
    let sum = 0;
    let averageSum = 0 ;
    let result = [];
    
    let arraylength = array.length;
    
    for ( let i = 0 ; i < arraylength; i++){
        let currentNum = array[i];
        sum += currentNum;

    }
    
    averageSum = sum/arraylength;

    let sortedArray = array.sort((a,b) => b-a);
   // console.log(sortedArray);
    for (const el of sortedArray) {
        if ( el > averageSum){
            result.push(el);
        }
    }
    let newResult = [];

   // console.log(result);
    if (result.length <= 5 && result.length > 1 ){
        console.log(result.join(' '));
    } else if(result.length > 5 ) {
        for (let i = 0 ; i < 5 ; i++){
            let currenDigit = result[i];
            newResult.push(currenDigit);
        }
        console.log(newResult.join(' '));

    }else if (result.length == 0){
        console.log('No');

    }




}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
