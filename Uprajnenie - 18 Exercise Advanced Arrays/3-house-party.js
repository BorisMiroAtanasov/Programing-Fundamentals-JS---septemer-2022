function houseParty(array){
    let gestArray = [];

    for (const el of array) {
        let command = el.split(' ');
        let name = command[0];
        console.log(command);

    //     if (command.length === 3 ){
    //         if (gestArray.includes(name)){
    //             console.log(`${name} is already in the list!`);
    //         } else{
    //             gestArray.push(name)
    //         }

    //     } else{
    //         if(!gestArray.includes(name)){
    //             console.log(`${name} is not in the list!`)
    //         } else{
    //             let index = gestArray.indexOf(name);
    //             gestArray.splice(index,1)

    //         }

    //     }

    }
    //console.log(gestArray.join('\n'))

}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])