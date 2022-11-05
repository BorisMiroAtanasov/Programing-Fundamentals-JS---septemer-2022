function searchForANumber(array, taskArray) {

    let newArray = array.slice(0, taskArray[0]);
    newArray = newArray.slice(taskArray[1],);
    let counter = 0;

    for (i = 0; i < newArray.length; i++) {
        if (Number(taskArray[2]) === Number(newArray[i])){
            counter++;
            
        }
    }
    
    console.log(`Number ${Number(taskArray[2])} occurs ${counter} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
