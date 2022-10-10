function passwordValidator(paswword) {

    let digitCounter = 0;
    let charCount = 0;
    let passworLength = paswword.length;
    let outOfRange = 0;
    let isSibol = false;


    for (let i = 0; i < passworLength; i++) {
        let charNum = paswword[i].charCodeAt();
        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLetter = charNum >= 97 && charNum <= 122;
        let isBigLetter = charNum >= 65 && charNum <= 90;

        if (isDigit) {
            digitCounter++;
        }
        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSibol = true;

        }

    }
    if (paswword.length < 6 || paswword.length > 10) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (isSibol) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (digitCounter < 2) {
        console.log(`Password must have at least 2 digits`);
    }
    if (digitCounter >= 2 && !isSibol && (paswword.length >= 6 || paswword.length <= 10)) {
        console.log(`Password is valid`);

    }

}
passwordValidator('logIn');