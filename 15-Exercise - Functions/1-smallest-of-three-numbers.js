function smallestOfThereeNumbers( firstNum, seconNum, thirdNum){
    let result = 0

if ( firstNum < seconNum && firstNum < thirdNum){
    result = firstNum;
} else if(seconNum < firstNum && seconNum < thirdNum){
    result = seconNum;

} else if (thirdNum < firstNum && thirdNum < seconNum){
    result = thirdNum;
} else if ( firstNum === seconNum && firstNum < thirdNum){
    result = firstNum;
} else if ( firstNum === thirdNum && firstNum < seconNum) {
    result = firstNum;

}else if ( thirdNum === seconNum && thirdNum < firstNum){
    result = thirdNum;
} else {
    result = firstNum;
}
console.log(result);

}
smallestOfThereeNumbers(2,5,3);
smallestOfThereeNumbers(600,342,123);
smallestOfThereeNumbers(2,2,2);
