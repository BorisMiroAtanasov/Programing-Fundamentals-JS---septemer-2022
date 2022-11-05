function sortArrayByTwoCriteria(array){

    let sortedArray = array.sort((a, b) => a-b);

    let sortedArraySecond = sortedArray.sort((a,b) => a.localeCompare(b));

    console.log(sortedArraySecond.join('\n'));


}
sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
