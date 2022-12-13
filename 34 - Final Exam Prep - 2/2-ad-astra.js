function adAstra(array){
    let newArray = array.shift();
    let sumOfCalories = 0;
    let days = 0;

    
   // let pattern = /(#|\|)(?<food>[A-Z][a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
   let pattern = /(#|\|)(?<food>(\w+\s\w+)|(\w+))\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;


    let matches = newArray.matchAll(pattern);
    

    for (const match of matches) {
        sumOfCalories += Number(match.groups.calories)
        days = sumOfCalories / 2000
        
        //console.log(`Item: ${match.groups.food}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);


       // console.log(match.groups.calories);
        
    }
    console.log(`You have food to last you for: ${Math.floor(days)} days!`)
    let match = newArray.matchAll(pattern);

    for (const matchs of match) {
        
        
        console.log(`Item: ${matchs.groups.food}, Best before: ${matchs.groups.date}, Nutrition: ${matchs.groups.calories}`);


       // console.log(match.groups.calories);
        
    }
    
        
    
    


}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
