function lastKNumberSequence(nElement, kElement){
    let sequence = [1];
    let nextNum = 0
    for ( let i= 1 ; i< nElement ; i++){

        let index = Math.max(sequence.length - kElement, 0)

        let lastElement = sequence.slice(index)

        let sum = 0;
        for (const el of lastElement) {
            sum += el;
            
        }
        sequence.push(sum);

       

    }
    
    console.log(sequence.join(' '));
}
lastKNumberSequence(6, 3);
