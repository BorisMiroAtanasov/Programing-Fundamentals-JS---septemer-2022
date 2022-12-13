function plantDiscovery(input){
    let plantCount = Number(input.shift());
    let plants = {};
    for ( i=0 ; i < plantCount ; i++){
        let plant = input.shift();
        let [plantName , rarity] = plant.split('<->');

        plants[plantName] = {
            rarity: Number(rarity),
            ratings: [],
        }

    }
    let command = input.shift();
    while (command !== "Exhibition" ){
        let [commandName, args] = command.split(': ');
        let [plantName, argument] = args.split(' - ');
        if (plants[plantName]){
        switch (commandName) {
            case 'Rate':
                let rating = Number(argument)
                plants[plantName].ratings.push(rating)
                break;
            case 'Update':
                let rarity = Number(argument)
               plants[plantName].rarity = rarity;

            break;
            case 'Reset':
                plants[plantName].ratings = [];

            break;

        }
    }else{
        console.log(`error`);
    }
        command = input.shift()
    }
    let platnEntrys = Object.entries(plants);
    platnEntrys.sort((a,b) => {
       let result =  b[1].rarity - a[1].rarity;
       if(result == 0){
        let averigeA = calculateRating(a[1].ratings);
        let averigeB = calculateRating(b[1].ratings);
        return averigeA - averigeB;
       }
       return result;
    });
    
    console.log(`Plants for the exhibition:`);
    for (let [plantName, plant] of platnEntrys) {
        let averigRaintg = calculateRating(plant.ratings);
        console.log(`- ${plantName}; Rarity: ${plant.rarity}; Rating: ${averigRaintg.toFixed(2)}`);
            
        
    }
    function calculateRating(ratings){
        let sum = 0;
        for (const rating of ratings) {
            sum += rating;
            
        }
        let averigeRating = sum / ratings.length
        if(!averigeRating){
            averigeRating = 0;
        }
        return averigeRating;
        

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
