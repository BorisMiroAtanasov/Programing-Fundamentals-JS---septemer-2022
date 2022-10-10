function mergeArrays(firstArr, secondArr){
    let resultArr = [];

    for ( let i = 0 ; i < firstArr.length ; i++){
        let curentSum = 0;
        let curentString ='';
        if ( i % 2 === 0 ){
            curentSum = Number(firstArr[i]) + Number(secondArr[i]);
            resultArr.push(curentSum);
        } else {
            curentString += `${(firstArr[i] + secondArr[i])}`
            resultArr.push(curentString);
        }
    }
    console.log(resultArr.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
