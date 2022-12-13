function triplesOfLatinLetters(number) {
    for (let a = 0; a < Number(number); a++) {
        for (let b = 0; b < Number(number); b++) {
            for (let c = 0; c < Number(number); c++) {
                console.log(`${String.fromCharCode(97 + a)}${String.fromCharCode(97 + b)}${String.fromCharCode(97 + c)}`)
            }
        }
    }
}