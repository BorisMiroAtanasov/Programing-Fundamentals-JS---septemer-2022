function googleSearches(array) {
    let incomForSearch = Number(array.shift());
    let users = Number(array[0]);
    let newArray = array.map(Number);
    let totalSum = 0;

    for (let i = 1; i <= users; i++) {
        let currentSurches = newArray[i];
        let currentUser = i;
        

        if ( currentUser % 3 !== 0 ){
            if (currentSurches > 5) {
                totalSum += 2 * (incomForSearch * currentSurches);
    
            } else if (currentSurches == 1) {
                totalSum;
    
             } else if (currentSurches > 1 && currentSurches <= 5) {
                totalSum += (incomForSearch * currentSurches);
             }

        } else if(currentUser % 3 == 0) {

            if (currentSurches > 5){
                totalSum = totalSum + 3*2 * (incomForSearch * currentSurches);

            } else if( currentSurches == 1){
                totalSum;

            } else if (currentSurches > 1 && currentSurches <= 5 ){
                totalSum = totalSum + 3 * (currentSurches * incomForSearch);
            }
        }


    }
    console.log(`Total money earned: ${totalSum.toFixed(2)}`);
}
googleSearches(["5.5",
    "3",
    "1",
    "10",
    "5"
]);