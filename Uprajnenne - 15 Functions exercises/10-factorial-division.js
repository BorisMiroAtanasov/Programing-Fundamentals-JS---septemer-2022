function factorialDivision(firsNum, secondNum){

    let firstResult = 1;
    let secondResult = 1;


    for(let i = firsNum ; i >= 1 ; i--){
        firstResult = firstResult * i;
    }

    for(let i = secondNum ; i >= 1 ; i--){
        secondResult = secondResult * i;


    }

    console.log((firstResult/secondResult).toFixed(2));
}
factorialDivision(5,2);
