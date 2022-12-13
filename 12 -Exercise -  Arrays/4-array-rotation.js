function arrayRotation(array, num){
    

    for ( let i = 0; i < num ; i++){
        let numberToMove = array.shift();
        array.push(numberToMove);

    }
    console.log(array.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2);
