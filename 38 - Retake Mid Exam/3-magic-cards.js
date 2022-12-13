function magicCards(array) {
    let oldDeck = array.shift().split(':');
    let newDeck = [];

    let line = array.shift();

    while (line !== 'Ready') {
        let [command, card, cardNum] = line.split(' ');
        

        switch (command) {
            case 'Add':
                if (oldDeck.includes(card)) {
                    newDeck.push(card);
                } else {
                    console.log(`Card not found.`);
                }
                break;
            case 'Insert':
                let index = Number(cardNum)
                if (oldDeck.includes(card) && newDeck[index]) {
                    newDeck.splice(index, 0, card)
                } else {
                    console.log(`Error!`);
                }

                break;
            case 'Remove':
                if (newDeck.includes(card)) {
                    let inexOfCard = newDeck.indexOf(card);
                    newDeck.splice(inexOfCard, 1)
                } else {
                    console.log(`Card not found.`);

                }

                break;
            case 'Swap':
                let firstIndex = newDeck.indexOf(card);
               // console.log(firstIndex);
                let secondCarIndex = newDeck.indexOf(cardNum);
                //console.log(secondCarIndex);
                newDeck.splice(firstIndex,1,cardNum);
                newDeck.splice(secondCarIndex,1,card)

                break;
            case 'Shuffle':
                newDnewDeck = newDeck.reverse();


                break;

        }



        // console.log(command);

        line = array.shift();
    }



    console.log(newDeck.join(' '));


}
magicCards(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
"Add UndergroundSea",
"Add Timetwister",
"Remove Wrath",
"Add CopyArtifact",
"Shuffle deck",
"Ready"]);
