//function signCheck(firstNum, secondNum, thirdNUm){

    function checkNegativOrPositive(a, b){
        if ((a * b) < 0){
            return 'negative';

        } else{
            return 'positive';
        }
        
    }

let check = checkNegativOrPositive(firstNum, secondNum);
let secondChek = checkNegativOrPositive(firstNum, thirdNUm);

if ( check == 'positive' && secondChek == 'positive' ){
    console.log('positive');
} else {
    console.log('negative');
}

}
signCheck( 5,  12,-15);
signCheck( -6, -12, 14);
signCheck( -1,-2,-3);
