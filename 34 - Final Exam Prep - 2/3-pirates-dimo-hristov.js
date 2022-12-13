function pirates(input) {
    let townList = {};

    targetsCreator(input);
    commandsExecutor(input);

    let remainingCities = Object.values(townList).length;

    if (remainingCities > 0) {
        console.log(`Ahoy, Captain! There are ${remainingCities} wealthy settlements to go to:`);
        for (const town in townList) {
            console.log(`${town} -> Population: ${townList[town].population} citizens, Gold: ${townList[town].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

    function commandsExecutor(input) {
        let data = input.shift();

        while (data !== 'End') {
            data = data.split('=>');
            let command = data.shift();

            switch (command) {
                case 'Plunder':
                    let [town, killedPeople, stolenGold] = data;
                    killedPeople = Number(killedPeople);
                    stolenGold = Number(stolenGold);

                    if (townList[town]) {
                        townList[town].population -= killedPeople;
                        townList[town].gold -= stolenGold;
                        console.log(`${town} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);
                    }

                    if (townList[town].gold < 1 || townList[town].population < 1) {
                        delete townList[town];
                        console.log(`${town} has been wiped off the map!`);
                    }
                    break;

                case 'Prosper':
                    let [prosperTown, goldToAdd] = data;
                    goldToAdd = Number(goldToAdd);

                    if (goldToAdd < 0) {
                        console.log(`Gold added cannot be a negative number!`);
                    }

                    if (goldToAdd >= 0 && townList[prosperTown]) {
                        townList[prosperTown].gold += goldToAdd;
                        console.log(`${goldToAdd} gold added to the city treasury. ${prosperTown} now has ${townList[prosperTown].gold} gold.`);
                    }
                    break;
            }

            data = input.shift();
        }

    }

    function targetsCreator(input) {
        let command = input.shift();

        while (command !== 'Sail') {
            let [town, population, gold] = command.split('||');
            population = Number(population);
            gold = Number(gold);

            if (!townList[town]) {
                townList[town] = { population, gold };
            } else {
                townList[town].population += population;
                townList[town].gold += gold;
            }
            command = input.shift();
        }
    }

}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);

