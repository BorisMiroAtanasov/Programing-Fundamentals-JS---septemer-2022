function towns(input){
    let towns = {};


    for (const line of input) {
        let curentLine = line.split(' | ');
        //let [town, latitude, longitude] = curentLine.split(' ');
        let town = curentLine[0];
        let latitude = Number(curentLine[1]).toFixed(2);
        let longitude = Number(curentLine[2]).toFixed(2);
        
         towns.town = town,
         towns.latitude = latitude,
        towns.longitude = longitude,

        console.log(towns);
        
    }


}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
