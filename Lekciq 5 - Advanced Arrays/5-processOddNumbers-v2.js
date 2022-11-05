function processOddNumbers(array){
    let filterArray = array.filter(num => num %2 !==0 );

    let dabultArray = filterArray.map(x => x *2 );

    let reversArray = dabultArray.reverse()


    console.log(reversArray.join(' '));

}

processOddNumbers([10, 15, 20, 25]);
