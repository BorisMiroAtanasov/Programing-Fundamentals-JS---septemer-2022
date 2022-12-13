function plantDiscovery(array){
    let nuberOfPlans = Number(array.shift());

    let plantObjectRarity= {};
    let plantObjectRating= {};

    for ( let i =0 ; i < nuberOfPlans ; i++){
        let currentPlant = array.shift().split('<->');
        plantObjectRarity[currentPlant[0]] = Number(currentPlant[1]);
        plantObjectRating[currentPlant[0]] = 0;


    }
    let line = array.shift();
    while ( line !== "Exhibition"){
        let currentData = line.split(': ')
        let command = currentData.shift();
        let newData = currentData.join(' - ');
        let arrayComandValue = newData.split(' - ');
        //arrayComandValue.unshift(command)

        //console.log(arrayComandValue);


        line = array.shift();


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
