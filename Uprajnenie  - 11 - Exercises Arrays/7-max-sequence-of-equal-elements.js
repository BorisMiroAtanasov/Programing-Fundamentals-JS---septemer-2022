function maxSequenceOfEqualElements(inputArray){
    let maxSequence = [];

    for(let i = 0 ; i < inputArray.length ; i++ ){
        let currentSequence = [];

        for( let j = i; j < inputArray.length ; j++){

            if ( inputArray[i] === inputArray[j]){
                currentSequence.push(inputArray[i]);

            } else {
                break;
            }

            if (maxSequence.length < currentSequence.length ){

                maxSequence = currentSequence;

            }

        }
        
    }
    console.log(maxSequence.join(' '));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
