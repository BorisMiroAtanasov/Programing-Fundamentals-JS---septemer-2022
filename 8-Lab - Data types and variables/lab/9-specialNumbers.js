function specialNumbers(num) {

    let sum = 0;
    let result = ' ';


    for (let i = 1; i <= num; i++) {
        let text = i.toString();

        for (let j = 0; j < text.length; j++) {
            sum += Number(text[j]);
        }

        result = sum === 5 || sum === 7 || sum === 11;

        console.log( result ? `${i} -> True` : `${i} -> False`)



//  let output = newString === stringForCheck ? 'Matched':'Not Matched';

        sum = 0;





    }

}
specialNumbers(15)