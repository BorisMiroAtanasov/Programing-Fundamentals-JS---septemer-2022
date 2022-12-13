function reversAnArrayOfNumbers(num, arrayToReverse){
    let newArray = [];

    for ( let i = 0 ; i < num ; i++){
        newArray[num -1 -i]  = Number(arrayToReverse[i]);
      
    
    }

    console.log(newArray.join(' '))
    
   
    

}
reversAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
