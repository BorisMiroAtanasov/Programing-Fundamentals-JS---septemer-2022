function stringManipulator(array) {
    let myString = array.shift();

    let line = array.shift();


    while (line !== 'End') {

        let [command, firstIndex, secondIndex] = line.split(' ');

        switch (command) {

            case 'Translate':
               let oldValue = firstIndex;
               let newVAlue = secondIndex;
               let pattern = new RegExp(oldValue, 'g');
               myString =  myString.replace(pattern, newVAlue);
               console.log(myString);

                break;
        case 'Includes':
            let stringForFound = firstIndex;
            if (myString.includes(stringForFound)){
                console.log('True');
            }else{
                console.log(`False`);
            }
            break;
        case 'Start':
            let start = firstIndex;
            if (myString.startsWith(start)){
                console.log('True');
            }else{
                console.log(`False`);
            }
            break;
         case 'Lowercase':
            myString = myString.toLowerCase();
            console.log(myString);
              
                break;
        case 'FindIndex':
            let findIndex = firstIndex
            
            console.log(myString.lastIndexOf(findIndex));
           
                break;
        case 'Remove':
            let starIndex = Number(firstIndex) ;
            let count = Number(secondIndex);
            let firstPart = myString.substring(0, starIndex);
            let secondPart = myString.substring((starIndex+count),);
            let result = firstPart + secondPart;

           
          console.log(result);

                 
           break;

        }






        line = array.shift();
    }



}
stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"]);
