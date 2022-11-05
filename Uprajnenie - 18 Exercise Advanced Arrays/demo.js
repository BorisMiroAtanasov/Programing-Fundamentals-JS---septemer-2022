function demo(array){

    let spliceArray = array.splice(0, 1);

    console.log(spliceArray);
    console.log(array);

}
demo([5, 2, 3, 4, 1, 6])