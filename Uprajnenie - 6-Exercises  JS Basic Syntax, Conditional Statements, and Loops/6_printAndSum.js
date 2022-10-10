function printAndSum(start, end){
    let startNumber = Number(start);
    let endNumber = Number(end);
    let sum = 0;
    let result = '';
    

    for ( i = startNumber ; i <= endNumber ; i++){
        result = result + i + ' ';
        sum +=i 

    }
    console.log(result)
    console.log(`Sum: ${sum}`)




}
printAndSum(5, 10);
