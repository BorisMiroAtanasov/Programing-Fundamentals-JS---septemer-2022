function worldTour(array){
    let travelStops = array.shift();
    let line = array.shift();

    while (line !== 'Travel') {
        let currentLine = line.split(':');
        let command = currentLine[0];
        let startIndexOrCity = currentLine[1];
        let endIndexOrCity = currentLine[2];

        switch (command) {
            case 'Add Stop':
                startIndexOrCity = Number(startIndexOrCity);
                let currenttravelStops = travelStops.split('')
                let curentEndIndexOrCity = endIndexOrCity.split('')

                 if(startIndexOrCity >= 0 && startIndexOrCity < currenttravelStops.length ){
                   currenttravelStops.splice(startIndexOrCity, 0,curentEndIndexOrCity );
                   travelStops = currenttravelStops.join(',').split(',');
                   travelStops = travelStops.join('')

             }
             console.log(travelStops);
                break;
            case 'Remove Stop':
                let newStartIndexOrCity = Number(startIndexOrCity);//11
                let newEndIndexOrCity = Number(endIndexOrCity);//16
                let currentStopsForRemove = travelStops.split('');

               if(newStartIndexOrCity >= 0 && newStartIndexOrCity < currentStopsForRemove.length && newEndIndexOrCity >= 0 && newEndIndexOrCity <currentStopsForRemove.length ){
                currentStopsForRemove.splice(newStartIndexOrCity,(newEndIndexOrCity - newStartIndexOrCity+1));
                travelStops = currentStopsForRemove.join('')
                }
                console.log(travelStops);
              break;
            case 'Switch':
                let cityForRreplace = startIndexOrCity;
                let replacemant = endIndexOrCity;
                travelStops = travelStops.replace(cityForRreplace,replacemant);
                console.log(travelStops);

                break;

        }
    
        line = array.shift();

        
    }


    console.log(`Ready for world tour! Planned stops: ${travelStops}`);

}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);
