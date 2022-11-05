function firstAndLstKNumbers(array){

    let kNumbers = array.shift();
    let firsHalfArr = array.slice(0,kNumbers);
    let lastHalfArr = array.slice(array.length - kNumbers);

    console.log(firsHalfArr.join(' '));
    console.log(lastHalfArr.join(' '));



}
firstAndLstKNumbers([2, 7, 8, 9]);
