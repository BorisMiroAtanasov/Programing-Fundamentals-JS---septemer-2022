function mirrorWords(array) {
    let text = array.shift();
    let matchArray = [];
    let count = 0;
    let countMirror = 0;
    let mirrorObjeck = {};

    let pattern = /(@|#)(?<word>[A-Za-z]{3,})\1\1(?<mirrorWord>[a-zA-Z]{3,})\1/g;

    let mathces = text.matchAll(pattern);

    for (const match of mathces) {

        if (match) {
            matchArray.push(match);
            count++;
        }
        let originalWord = match.groups.word
        let reverstWord = match.groups.word
        //let mirrorWord = match.groups.mirrorWord
        reverstWord = reverstWord.split('').reverse().join('');
        // console.log(reverstWord);
        let miirorMatch = match.groups.mirrorWord
        if (reverstWord === miirorMatch) {
            countMirror++;
            mirrorObjeck[originalWord] = match.groups.mirrorWord
        }


    }


    if (matchArray.length == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${count} word pairs found!`);

    }
    let result = '';
    let resultArray = [];
    let index = 0;
    let entries = Object.entries(mirrorObjeck)
    for (const [key, value] of entries) {
        result += `${key} <=> ${value}, `
        index = `${key} <=> ${value}`
        resultArray.push(index);

    }
    if (result.length > 0) {
        // console.log(`The mirror words are:\n${result}`);
        console.log(`The mirror words are:\n${resultArray.join(', ')}`);

    } else {
        console.log(`No mirror words!`);
    }



}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
