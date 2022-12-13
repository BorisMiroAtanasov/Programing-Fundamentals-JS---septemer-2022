function passwordReset(array) {
    let rowPassword = array.shift();
    let result = '';

    let line = array.shift();

    while (line !== 'Done') {
        let [command, starIndex, endIndex] = line.split(' ');
        switch (command) {
            case 'TakeOdd':
                let rowPasswordLength = rowPassword.length
                for (let i = 0; i < rowPasswordLength; i++) {
                    let curentIndex = rowPassword[i];

                    if (i % 2 !== 0) {
                        result += curentIndex;
                    }
                }
                console.log(result);
                break;
            case 'Cut':
                let firstParam = Number(starIndex);
                let secondParam = Number(endIndex);
                let firstPart = result.substring(0, firstParam)
                let secondPart = result.substring((firstParam + secondParam),);
                result = firstPart + secondPart;
                console.log(result);
                break;
            case 'Substitute':
                let char = starIndex;
                let charForReplace = endIndex;
                
                if ( result.includes(char)){
                    let pattern = new RegExp(char, 'g')
                    result = result.replace(pattern, charForReplace)
                   
                    console.log(result);

                } else{
                    console.log(`Nothing to replace!`);
                }
                break;
        }
        line = array.shift();
    }
    console.log(`Your password is: ${result}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);
