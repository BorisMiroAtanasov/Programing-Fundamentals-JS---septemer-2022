function reversInPlace(array){
;

    for ( let i = 0 ; i < array.length / 2 ; i++){
        let tempElemnt = array[i];
        array[i] = array[array.length - 1- i];
        array[array.length - 1- i] = tempElemnt



       
    }
    console.log(array.join(" "));


}
reversInPlace(['a', 'b', 'c', 'd', 'e']);
