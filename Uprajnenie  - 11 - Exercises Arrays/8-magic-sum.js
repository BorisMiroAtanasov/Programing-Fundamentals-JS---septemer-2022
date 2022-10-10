function magicSum(array, num){

  

    for ( let i = 0 ; i < array.length ; i++){
        
        for ( let j = i+1 ; j < array.length ; j++){
            let resultArray = '';
            if ( (Number(array[i]) + Number(array[j]) ) == num){
                resultArray = `${Number(array[i])} ${Number(array[j])}`
                console.log(resultArray);

            }
        }
        
    }
   

}
magicSum([1, 2, 3, 4, 5, 6],
    6);
