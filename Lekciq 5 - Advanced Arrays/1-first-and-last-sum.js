function firstAndLastSum(array){
    let firstElement = Number(array.shift(0));
    let secondElement = Number(array.pop(array.length));

    console.log(firstElement + secondElement );
   

}
firstAndLastSum(['20', '30', '40']);
