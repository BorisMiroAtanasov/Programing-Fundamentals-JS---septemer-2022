function integerAndFloat(firsNum, secondNum, thirdNum){
    let sum = firsNum + secondNum + thirdNum;

    if (Number.isInteger(sum)){
        console.log(`${sum} - Integer`)

    } else {
        console.log(`${sum} - Float`);
    }

    // sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    // console.log(sum);

 

}
integerAndFloat(100, 200, 303)