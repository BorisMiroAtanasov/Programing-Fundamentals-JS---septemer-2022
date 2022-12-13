function addAndSubstract(array){
    let newArray = [];

    for ( let i = 0 ; i < array.length ; i++){

        if ( array[i] % 2 === 0){
            newArray[i] = array[i] + i;

        } else {
            newArray[i] = array[i] - i

        }
        
    }


    console.log(newArray);
    let sumOriginal = 0;
    let sumNew = 0;

    for ( i= 0 ; i< array.length ; i++){
        sumOriginal +=array[i];

    }
    console.log(sumOriginal);

    for ( i= 0 ; i< newArray.length ; i++){
        sumNew +=newArray[i];

    }
    console.log(sumNew);


}
addAndSubstract([5, 15, 23, 56, 35]);