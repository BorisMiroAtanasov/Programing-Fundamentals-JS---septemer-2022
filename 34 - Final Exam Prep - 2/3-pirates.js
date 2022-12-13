function pirates(array){
    let targetCityes = {};
    let command = array.shift();

    while (command !== 'Sail') {
        let currentLine = command.split('||');
        let cityName = currentLine[0];
        let population = Number(currentLine[1]);
        let gold  = Number(currentLine[2]);
        
        
        if ( !targetCityes[cityName]){
            targetCityes[cityName] = {population, gold}

        }else{
            targetCityes[cityName].population += population;
            targetCityes[cityName].gold += gold;
        }


        command = array.shift();
    }
    console.table(targetCityes);
    // let line = array.shift();
    // while (line !== 'End') {
    //     let currentLine = line.split('=>');
    //     let command = currentLine[0];
    //     let currentCity = currentLine[1];
    //     let currentNum = Number(currentLine[2]);
    //     let currentGold = Number(currentLine[3]);
    //     if ( command === 'Plunder'){
    //         if( currentCity.includes(targetCityes)){
    //             targetCityes[cityName].population -= currentNum;
    //             targetCityes[cityName].gold -=currentGold;
    //         }
    //     }
    //     console.table(targetCityes);
       
        

    //    line = array.shift();
        
    // }
   



}
pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
//"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]));
