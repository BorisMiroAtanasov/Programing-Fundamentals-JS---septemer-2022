function counterStrike(array) {
    let energy = Number(array[0]);
    let winsCounter = 0;
    let arrayLength = array.length;

    for (let i = 1; i < arrayLength; i++) {
        let curentEnergy = Number(array[i]);

        energy -= curentEnergy;
        winsCounter++;
        if (energy > 0) {

            if (winsCounter % 3 === 0) {
                energy += winsCounter;
            } else {
                energy -= curentEnergy;


            }

        } else {
            winsCounter
            console.log()
        }

    }
    console.log(energy);
    console.log(winsCounter);


}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
