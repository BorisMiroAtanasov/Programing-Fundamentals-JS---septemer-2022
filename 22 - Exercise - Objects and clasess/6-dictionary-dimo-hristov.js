function dictionary(input) {
    let termsAndDescription = []

    input.forEach(row => {
        jsonToObj = JSON.parse(row)
        let product = Object.keys(jsonToObj).join('')
        let description = Object.values(jsonToObj).join('')
        let objToPush = {
            product,
            description
        }

        let isDublicated = termsAndDescription.find(row => row.product == product);

        if (isDublicated) {
            isDublicated.description = description
        } else {
            termsAndDescription.push(objToPush)
        }
    });

    termsAndDescription.sort((a, b) => {
        const nameA = a.product.toUpperCase(); // ignore upper and lowercase
        const nameB = b.product.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    })

    termsAndDescription.forEach(row => {
        console.log(`Term: ${row.product} => Definition: ${row.description}`);
    })

}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);
