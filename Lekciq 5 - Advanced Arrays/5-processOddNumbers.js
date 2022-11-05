function processOddNumbers(array){
    let newArr = [];


    for ( let i = 0 ; i < array.length ; i++){
        let curentPosicion = i;
        let curentNum = array[i]

        if ( curentPosicion % 2 !==0){
            newArr.push(curentNum)


        }
        

    }
    let dubbleNewArray = newArr.map( x => x * 2).reverse()

    console.log(dubbleNewArray.join(' '));
    


}
processOddNumbers([10, 15, 20, 25]);
