function dictionary(array){
    let dictionaryArray = [];

    
    for (const element of array) {
        let currentObject = JSON.parse(element);
        let terms = Object.keys(currentObject).join('');
        dictionaryArray.push(currentObject);
        //console.log(currentObject);

    }
    let sortedArray = Object.entries(dictionaryArray)
    sortedArray.sort((a,b) => a[0].localeCompare(b[0]));

    for (const entrys of sortedArray) {
        let term = entrys[0];
        let discription = entrys[1];
        console.log(`Term: ${term} => Definition: ${discription}.`);
        
    }

    
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);
