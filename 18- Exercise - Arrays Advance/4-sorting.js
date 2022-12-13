function sorting(array){

    let sortArray = [];
    let arrayLength = array.length;

    sortArray = array.sort((a, b) => b- a);
    //console.log(sortArray);
    let resultArray = [];

    for ( let i = 0; i < arrayLength / 2 ; i++){
        let maxCurentNum = array[i];
        let minCurentNum = array[array.length -i-1];

        resultArray.push(maxCurentNum);
        resultArray.push(minCurentNum)



        // if( maxCurentNum){
        //     resultArray.unshift(maxCurentNum)

        // }else{
        //     minCurentNum
        // }
    }
    console.log(resultArray.join(' '))

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
