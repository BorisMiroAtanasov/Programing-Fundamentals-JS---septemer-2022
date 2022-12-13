function bombNumbers(array, bombNumsArray) {
    let bombNumer = bombNumsArray[0];
    let bombpower = bombNumsArray[1];
    let arrayLength = array.length;
    let resultArray = [];
    let result = 0;
    
    for (let i = 0; i < arrayLength; i++) {
        let curentNum = Number(array[i]);

        if (curentNum === bombNumer) {
            let index = array.indexOf(curentNum);
           //console.log(index)
            resultArray = array.splice((index - bombpower), (bombpower *2+1));
        }

    }
   // console.log(resultArray);
    for (let j= 0; j < array.length ; j++ ){
        result += Number(array[j]);
    }

    console.log(result)

}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);
