function addAndSubtract(firstNum, secondNum, thirdNum){

    function add(a, b){
        let sumOfTwoNumbers = a+b;
        return sumOfTwoNumbers
    }
    let sum = add(firstNum, secondNum);
   
    function subtract(sumOfTwo, thirdNum){
        return sumOfTwo - thirdNum

    }
    let result = subtract(sum, thirdNum);
    console.log(result);


}
addAndSubtract(23,6,10);
addAndSubtract(1,7,30);
addAndSubtract(42,58,100);