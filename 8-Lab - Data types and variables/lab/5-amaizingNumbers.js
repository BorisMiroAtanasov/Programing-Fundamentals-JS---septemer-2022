function amaizingNumbers(number){
    let textNum = number.toString();
    let sum = 0;


    for ( let i = 0 ; i < textNum.length ; i++){
        let currentNum = Number(textNum[i]);
        sum +=currentNum
       
        

    }
    let result = sum.toString().includes('9')


    console.log(result ?
        `${number} Amazing? True` :
        `${number} Amazing? False`)
   

}
amaizingNumbers(1233);
