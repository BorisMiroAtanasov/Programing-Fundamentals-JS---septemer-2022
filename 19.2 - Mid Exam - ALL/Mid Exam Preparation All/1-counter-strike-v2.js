function counterStrike(array) {
    let energy = Number(array[0]);
    let winsCounter = 0;
    let arrayLength = array.length;
    let index = 1
    let command = array[index];

    while (command !== 'End of battle') {
        let energyToReduce = Number(command);
        energy -= energyToReduce;
        winsCounter++;

        if (energy <= 0) {
            energy = 0;
            console.log(`Not enough energy! Game ends with ${winsCounter} won battles and ${energy} energy`);
            winsCounter = 0;

            return;
        }


        if (winsCounter % 3 === 0) {
            energy += winsCounter;
        }
       

        index++;
        command = array[index];

    }

    console.log(`Won battles: ${winsCounter}. Energy left: ${energy}`);

    // console.log(energy);
    // console.log(winsCounter);

}
counterStrike(["100",
    "110",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
