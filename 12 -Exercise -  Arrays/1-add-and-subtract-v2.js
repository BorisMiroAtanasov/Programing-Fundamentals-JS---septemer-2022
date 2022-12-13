function addAndSubtractV2(array) {
    let resultArraySum = 0;
    let inputArraySum = 0;
    let resultArray = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {


        let currentNum = array[i];

        let odd = currentNum + i;
        let even = currentNum - i;

        if (currentNum % 2 === 0) {
            resultArray.push(odd)
        } else {
            resultArray.push(even);

            

        }
        inputArraySum += currentNum;
        resultArraySum += resultArray[i];

    }
    console.log(resultArray);
    console.log(inputArraySum);
    console.log(resultArraySum);





}
addAndSubtractV2([5, 15, 23, 56, 35]);