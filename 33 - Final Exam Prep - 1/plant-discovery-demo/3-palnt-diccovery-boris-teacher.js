function plantDiscovery(input) {
    let plantCount = Number(input.shift());
    let plants = {};

    for ( let i=0 ; i < plantCount ; i++){
        let line = input.shift();
        let lineArr = line.split('<->');
        let name = lineArr[0];
        let rarity = Number(lineArr[1]);
        plants[name] = {
            rarity: rarity,
            raitings: [],
           // raitings: {   // another variant
           //    count: 0,
           //     sum: 0,
           // }
        }
        
    }
    let line = input.shift();
    while (line !== 'Exhibition') {
        let commandArr = line.split(': ');
        let command = commandArr[0];
        let args = commandArr[1].split(' - ');
        let name = args[0];
        let argument = args[1];
        let plant = plants[name];

        if (plant){
        switch (command) {
            case 'Rate':
                
                let raiting = Number(argument);
                plant.raitings.push(raiting);

                
                break;

        case 'Update':
            let rarity = Number(argument);
            plant.rarity = rarity;
                
                break;

        case 'Reset':
            plant.raitings = [];
                
                break;
        }
    }else{
        console.log(`error`);
    }




        line = input.shift();
    }
    console.log(`Plants for the exhibition:`);
    for (const name in plants){
        let sum = 0;
        let averageRating = plants[name].raitings.length;

        for (const rating of plants[name].raitings) {
            sum +=rating;
            
        }
        let average = sum / averageRating;
        if(!average){
            average = 0
        }




        console.log(`- ${name}; Rarity: ${plants[name].rarity}; Rating: ${average.toFixed(2)}`);

    }


}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
