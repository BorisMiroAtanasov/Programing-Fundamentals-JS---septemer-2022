function maxNumbers(array){
    let resultArr = [];
    

    for ( let i = 0 ; i < array.length ; i++){
        let isBigger = true;
        let curentNum = array[i];
        for ( let k = i+1 ; k < array.length ; k++){
            if ( curentNum <= array[k]){
                isBigger = false;
            }
        }
        if (isBigger){
            resultArr.push(array[i]);
        }

       
    }
    console.log(resultArr.join(' '));

}
maxNumbers([1, 4, 3, 2])