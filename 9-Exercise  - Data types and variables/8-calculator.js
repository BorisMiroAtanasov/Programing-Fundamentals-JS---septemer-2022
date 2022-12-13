function calculator(firsNum, operator, secondNum){
    let result = 0;

    switch (operator) {
        case '+':result = firsNum + secondNum; break
        case '-':result = firsNum - secondNum; break
        case '*':result = firsNum * secondNum; break
        case '/':result = firsNum / secondNum; break
            
            
    }
    console.log(result.toFixed(2));

     

}
calculator(5,'+',10);
calculator(25.5,'-',3);