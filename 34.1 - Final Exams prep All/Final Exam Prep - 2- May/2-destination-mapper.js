function destinationMapper(input){
    let array = [];
    let travelPoints = 0;


    let pattern = /([=|\/]{1})(?<country>[A-Z][A-Za-z]{2,})\1/g;
    let matches = input.matchAll(pattern);

    for (const match of matches) {
       // console.log(match);
        let currentCountry = match.groups.country;
        array.push(currentCountry);
    for (let i = 0 ; i < currentCountry.length ; i++){
         if(currentCountry[i]){
            travelPoints++;

         }
       
    }
    
    
    }
  
    console.log(`Destinations: ${array.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}
destinationMapper("=Hawai==/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log(`------------------------------`);
destinationMapper("ThisIs some InvalidInput")
