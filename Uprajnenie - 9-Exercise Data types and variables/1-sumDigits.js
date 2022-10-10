function sumDigits(num) {
    let numToString = num.toString();
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let curentNum = Number(numToString[i]);
        sum += curentNum;

    }
    console.log(sum);

}
sumDigits(245678)