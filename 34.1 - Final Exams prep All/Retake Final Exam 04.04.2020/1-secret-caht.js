function secretCaht(array) {
    let message = array.shift();

    let line = array.shift();

    while (line !== 'Reveal') {
        let [command, first, secoond] = line.split(':|:');

        switch (command) {
            case 'InsertSpace':
                let index = (first);
                let firstPart = message.substring(0, index);
                let secoondPart = message.substring(index,);
                message = firstPart + ' ' + secoondPart;
                console.log(message);

                break;
            case 'Reverse':
                let reversPart = first.split('').reverse().join('')
                if (message.includes(first)) {
                    message = message.replace(first, '')
                    message = message + reversPart;
                    console.log(message);
                } else {
                    console.log(`error`);
                }
                break;
            case 'ChangeAll':
                if (message.includes(first)) {
                    while (message.includes(first)) {
                        message = message.replace(first, secoond);

                    }
                    console.log(message);

                }

                break;

        }
        line = array.shift();

    }

    console.log(`You have a new text message: ${message}`);



}
secretCaht([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);
