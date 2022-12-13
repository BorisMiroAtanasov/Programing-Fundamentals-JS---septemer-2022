function heroesOfLogicAndCode(array) {
    let heroesNum = array.shift();

    let heroes = {};
    for (let i = 0; i < heroesNum; i++) {
        let currentLine = array.shift();
        let [name, helth, mana] = currentLine.split(' ');
        heroes[name] = {
            helth: Number(helth),
            mana: Number(mana),
        }
    }
    let line = array.shift();
    while (line !== 'End') {
        let currentLine = line.split(' - ');
        let command = currentLine[0];
        let currentName = currentLine[1];
        let currentPoints = Number(currentLine[2]);
        let attacer = currentLine[3];

        switch (command) {
            case 'CastSpell':
                if (heroes[currentName]) {
                    let leftMana = heroes[currentName].mana - currentPoints;
                    if (leftMana >= 0) {
                        heroes[currentName].mana -= currentPoints;
                        console.log(`${currentName} has successfully cast ${attacer} and now has ${heroes[currentName].mana} MP!`);
                    } else {
                        console.log(`${currentName} does not have enough MP to cast ${attacer}!`);
                    }

                }

                break;
            case 'TakeDamage':
                if (heroes[currentName]) {
                    let leftHelth = heroes[currentName].helth - currentPoints;
                    if (leftHelth > 0) {
                        heroes[currentName].helth -= currentPoints;
                        console.log(`${currentName} was hit for ${currentPoints} HP by ${attacer} and now has ${leftHelth} HP left!`);

                    } else {
                        console.log(`${currentName} has been killed by ${attacer}!`);
                        delete heroes[currentName];

                    }
                }

                break;
            case 'Recharge':
                if (heroes[currentName]) {
                    let currentHeroeMana = heroes[currentName].mana;
                    let rechargeMana = heroes[currentName].mana + currentPoints;
                    if (rechargeMana > 200) {
                        rechargeMana = 200;
                        heroes[currentName].mana = rechargeMana;
                        console.log(`${currentName} recharged for ${200 - currentHeroeMana} MP!`);

                    } else {
                        heroes[currentName].mana = rechargeMana;
                        console.log(`${currentName} recharged for ${currentPoints} MP!`);
                    }
                }

                break;
            case 'Heal':
                if (heroes[currentName]) {
                    let currentHeroeHelth = heroes[currentName].helth;
                    let addHelth = heroes[currentName].helth + currentPoints;
                    if (addHelth > 100) {
                        addHelth = 100;
                        heroes[currentName].helth = addHelth;
                        console.log(`${currentName} healed for ${100 - currentHeroeHelth} HP!`);
                    } else {
                        heroes[currentName].helth = addHelth;
                        console.log(`${currentName} healed for ${currentPoints} HP!`);
                    }
                }

                break;

        }

        line = array.shift();
    }
    for (const name in heroes) {
        console.log(`${name}\n HP: ${heroes[name].helth}\n MP: ${heroes[name].mana}`);

    }

    //console.table(heroes);

}
//heroesOfLogicAndCode(['2',
'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
//])

heroesOfLogicAndCode(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])