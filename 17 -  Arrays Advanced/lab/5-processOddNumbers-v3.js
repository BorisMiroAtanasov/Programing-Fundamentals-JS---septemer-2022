function processOddNumbers(array){
    let newArray = array
    .filter(x => x %2 !== 0)
    .map(x => x * 2)
    .reverse()

    console.log(newArray.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
