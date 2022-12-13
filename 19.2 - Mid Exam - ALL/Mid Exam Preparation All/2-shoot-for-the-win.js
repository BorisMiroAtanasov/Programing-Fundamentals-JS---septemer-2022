function shootForTheWin(array) {
    let shotTargets = array
        .shift()
        .split(' ')
        .map(Number);
    let count = 0;


    let command = array.shift();
    while (command !== 'End') {
        let curentCommand = Number(command);

        if (curentCommand >= 0 && curentCommand <shotTargets.length ) {
            for (let i = 0; i < shotTargets.length; i++) {
                let currentTarget = shotTargets[curentCommand];

                if (i !== curentCommand && shotTargets[i] !== -1) {
                    if (shotTargets[i] > currentTarget) {
                        shotTargets[i] -= currentTarget;

                    } else {
                        shotTargets[i] += currentTarget;

                    }
                }

            }
            shotTargets[curentCommand] = -1;
            count++;

        }

        command = array.shift();

    }
    console.log(`Shot targets: ${count} -> ${shotTargets.join(' ')}`);



}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
