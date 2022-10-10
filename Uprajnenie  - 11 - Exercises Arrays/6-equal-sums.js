function equalSum(array) {
    let borderIndex = 'no';
    let arrayLenth = array.length;


    for (let i = 0; i < arrayLenth; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum = leftSum + array[l];

        }
        for (let r = i + 1; r < arrayLenth; r++) {
            rightSum = rightSum + array[r];
        }

        if (leftSum === rightSum) {
            borderIndex = i
        }

    }
    console.log(borderIndex)

}
equalSum([1]);