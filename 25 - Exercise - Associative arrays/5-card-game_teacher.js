function cardGame(data){
    let player = new Map();
    let enumCardPower = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "D": 12,
        "K": 13,
        "A": 14,
    }
    let enumCarType = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }

    for (let line of data) {
        let tokens = line.split(': ');
        let name = tokens.shift();
        let decksString = tokens[0];
        let deckArr = decksString.split(', ');

        if(!player.has(name)){
            player.set(name, new Set())
        }

        for (let card of deckArr) {
            player.get(name).add(card)
            
        }

    }
    for (let [key, value] of player) {
        let sum = 0;
        for (let card of value) {
            let cardInfo = card.split('');
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join('');
            let cardPowerAsNuber = enumCardPower[cardPower];
            let cardTypeAsNumber = enumCarType[cardType];
            sum += cardPowerAsNuber*cardTypeAsNumber
          
            
        }
        console.log(`${key}: ${sum}`);

        
    }
    


 
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);
