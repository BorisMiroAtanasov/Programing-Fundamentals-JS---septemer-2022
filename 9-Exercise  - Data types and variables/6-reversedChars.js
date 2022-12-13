function reversedChars(first, second, third) {
    let newLetters = first + second + third;
    let result = '';

    for (let i = newLetters.length-1; i >= 0; i--) {
        let letters = newLetters[i];
        result += letters + ' ';

    }
    console.log(result)


}
reversedChars('A', 'B', 'C')