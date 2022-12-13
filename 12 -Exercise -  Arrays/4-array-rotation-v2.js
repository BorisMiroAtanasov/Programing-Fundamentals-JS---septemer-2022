function arrayRotation(array, num){
    

    for ( let i = 0; i < num ; i++){
        let firstNum = array[0];

        for ( let inerI = 0 ; inerI < array.length ; inerI++){
            array[inerI] = array[inerI +1];

        }
        array[array.length-1] = firstNum

    }
    console.log(array.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2);
