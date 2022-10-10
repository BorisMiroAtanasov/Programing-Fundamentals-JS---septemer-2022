function passwordValidator(paswword) {

    let digitCount = 0;
    let charCount = 0;
    let passworLength = paswword.length;
    let outOfRange = 0;


    for (let i = 0; i < passworLength; i++) {
        let curentSign = paswword[i].charCodeAt();
        // console.log(curentSign);
        charCount++;
        if (curentSign >= 48 && curentSign <= 57 ) {
            digitCount++;
        }
        if ((curentSign < 48 || curentSign >57) && (curentSign <65 || curentSign >90) && (curentSign <97 || curentSign >122) ) {
            outOfRange++;
        }
    
    }
    if (charCount < 6 || charCount > 10){
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (outOfRange > 0){
        console.log(`Password must consist only of letters and digits`);

    }

    if ( digitCount <= 0 || digitCount > 2 ){
        console.log(`Password must have at least 2 digits`);

    } if ((digitCount > 2) && (curentSign >= 48 || curentSign <=57) && (curentSign <=65 || curentSign >=90) && (curentSign <=97 || curentSign >=122) && ((curentSign >= 48 && curentSign <= 57 )) && (charCount >= 6 && charCount <= 10)){
        console.log(`Password is valid`);
    }

   
    


    //console.log(charCount);
    // console.log(digitCount);

}
passwordValidator('MyPass123');