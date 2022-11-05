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
            // console.log(index);
            let starCut = index - bombpower;
            let bombarea = bombpower * 2 + 1;

            if (starCut < 0) {
                starCut = 0;
                resultArray = array.splice(starCut, (index + bombpower+ 1));

            } else {
                resultArray = array.splice((starCut), (bombarea));
            }
        }
    }
   console.log(resultArray);
   console.log(array);
    for (let j = 0; j < array.length; j++) {
        result += Number(array[j]);
    }
    console.log(result)
}
bombNumbers([7, 5, 2, 6],
    [2, 2]);
