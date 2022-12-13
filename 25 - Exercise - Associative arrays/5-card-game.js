function cardGame(input){

    let result = {};

    input.forEach(line => {
        let [name, personCards] = line.split(': ');
        if(!result.hasOwnProperty(name)){
            result[name] = [];

        }
        result[name].push(personCards);
        
    });

  
        for (const key in result) {
            let allCards = result[key].map(x=> x.split(', '))
            let first = allCards[0]
            let second = allCards[1]
            let all = first.concat(second);
         
            let uniqueCards = new Set(all);
            console.log(uniqueCards);


    // for (const key in result) {
    //   let firstArray = result[key][0];
    //   let secondArray = result[key][1];
    //   let allCards = firstArray.concat(secondArray)
    //   console.log(allCards);


       
    // }





       
    // console.log(result);
        }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);
