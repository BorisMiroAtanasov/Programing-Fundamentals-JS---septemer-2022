function reversAnArrayOfNumbers(num, arrayToReverse){
    let newArray = [];

    for ( let i = 0 ; i < num ; i++){
        newArray[i]  = Number(arrayToReverse[i]);
      
    
    }
   let output = '';
    for ( let r = newArray.length - 1 ; r >= 0 ; r--){
        output += `${newArray[r]} `
        
    
    }
    console.log(output); 

    
    
   
    

}
reversAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
