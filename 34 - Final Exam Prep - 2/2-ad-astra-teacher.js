function adAstra(input){

    let pattern = /([#|\|])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let exec = pattern.exec(input);
    let totalCalories = 0;
    let productStore = [];


    while(exec){
        let name = exec.groups.name;
        let date = exec.groups.date;
        let calories = exec.groups.calories;
        totalCalories += Number(calories);
        let currentProductData = `Item: ${name}, Best before: ${date}, Nutrition: ${calories}`
        productStore.push(currentProductData);
        exec = pattern.exec(input);


    }
    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    productStore.forEach(p => {
        console.log(p);
        
    });
   

}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
