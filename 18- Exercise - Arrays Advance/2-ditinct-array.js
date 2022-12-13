function distinctArray(array) {

    let uniqueNumArray = []
    let arrayLength = array.length;


    for (let i = 0; i < arrayLength; i++) {
        if(!uniqueNumArray.includes(array[i])){
            uniqueNumArray.push(array[i])
        }
        
    }
    console.log(uniqueNumArray.join(' '));



}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
