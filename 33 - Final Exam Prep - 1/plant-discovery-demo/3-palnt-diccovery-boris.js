function plantDiscovery(array) {
    let plantNum = Number(array.shift());
    let plants = {};
    let currenArrayForAverage = [];
    

    for (let i = 0; i < plantNum; i++) {
        let currentLine = array.shift().split('<->');
        let plant = currentLine[0];
        let rarity = Number(currentLine[1]);
        let rating = 0;
        plants[plant] = {
            rarity,
            rating
        }
    }
    let line = array.shift();
    while (line !== 'Exhibition') {
        let currentLine = line.split(': ');
        let command = currentLine[0];
        let tokens = currentLine[1].split(' - ');
        let currentPlant = tokens[0];
        let currentValue = Number(tokens[1]);

        switch (command) {
            case 'Rate':
               

                if(plants[currentPlant]){
                    plants[currentPlant].rating += currentValue;
                    currenArrayForAverage.push(currentPlant);
                   // console.log(currenArrayForAverage);

                   
                }else{
                    plants[currentPlant].rating = currentValue;
                }
                break;
            case 'Update':
                if(plants[currentPlant]){
                    plants[currentPlant].rarity = currentValue;

                }
                    break;
             case 'Reset':
                    if(plants[currentPlant]){
                            plants[currentPlant].rating = 0;
        
                        }
                            break;
        
           
        }



        line = array.shift();
    }
    
    //console.log(currenArrayForAverage);
    let plantEhibition = Object.entries(plants);
    console.log(`Plants for the exhibition:`);

    for (const name in plants) {
        let counter = 0;
        
            
            
            
        
        console.log(`- ${name}; Rarity: ${plants[name].rarity}; Rating: ${(plants[name].rating).toFixed(2)}`);
        

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
