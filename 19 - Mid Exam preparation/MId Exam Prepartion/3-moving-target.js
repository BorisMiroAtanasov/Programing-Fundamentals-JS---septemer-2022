function movingTarget(array) {
    let targetArray = array
        .shift()
        .split(' ')
        .map(Number);
    let index = 0;
    let command = array[index];

    while (command !== 'End') {
        let [task, shootIndex, radius] = array[index].split(' ');
        let commandToDo = task;
        let indexToManipulate = shootIndex;
        let radiusArea = radius;
        switch (commandToDo) {
            case 'Shoot': shoot(indexToManipulate, radiusArea); break;
            case 'Add': add(indexToManipulate, radiusArea); break;
            case 'Strike': strike(indexToManipulate, radiusArea); break;
        }
        index++;
        command = array[index]
    }
    console.log(targetArray.join('|'));

    function shoot(indexToManipulate, radiusArea) {
        let newIndexValue = 0;
        if (indexToManipulate <= array.length && indexToManipulate >= 0) {
            newIndexValue = targetArray[indexToManipulate] - radiusArea;
            targetArray.splice(indexToManipulate, 1, newIndexValue)
            if (newIndexValue <= 0) {
                targetArray.splice(indexToManipulate, 1);
            }
        }
    }
    function add(indexToManipulate, radiusArea) {
        if (indexToManipulate <= targetArray.length && indexToManipulate >= 0) {
            targetArray.splice(indexToManipulate, 0, radiusArea)
        } else {
            console.log(`Invalid placement!`)
        }
    }
    function strike(indexToManipulate, radiusArea) {
        if ((targetArray.indexOf(indexToManipulate) - radiusArea) < 0 || (targetArray.indexOf(indexToManipulate) + radiusArea) > targetArray.length) {
            console.log(`Strike missed!`)
        } else {
            let damageArea = 1 + radiusArea * 2
            targetArray.splice((indexToManipulate - radiusArea), (damageArea))
        }
    }
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
