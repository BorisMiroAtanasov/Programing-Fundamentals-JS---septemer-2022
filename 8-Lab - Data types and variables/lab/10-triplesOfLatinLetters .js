function triplesOfLatinLetters(num){
    let letterNumber = Number(num);
    let start = 97;
    let end = 97+letterNumber;

    

    for ( let i = start ; i < end ; i++){
        
       
        for ( let j = start ; j < end ; j++){
            
            for ( let k = start ; k < end ; k++){
                let result = '';

                result += String.fromCharCode(i)+String.fromCharCode(j)+String.fromCharCode(k)
                console.log(result);
               

            }
        }
        
    
    }
   

}
triplesOfLatinLetters('2')