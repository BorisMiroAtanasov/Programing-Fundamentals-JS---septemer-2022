function employees(array){
    let num = array.shift();
    let string = array.join(',')
   

    let pattern = /(?<name>[A-Z][a-z]{2,} [A-Z][a-z]{2,})(#)+(?<jobPosition>(([A-Za-z&]+)))\d{2}(?<company>[A-Za-z]+ (Ltd.|JSC))/gm;


    let matches = string.matchAll(pattern);

    for (const match of matches) {

        let oldValue = '&';
        let newValue = ' ';
        let secondPattern = new RegExp(oldValue, 'g');

        let result = `${match.groups.name} is ${match.groups.jobPosition} at ${match.groups.company}`;
        let newResult = result.replace(secondPattern, newValue)
        console.log(newResult);

        
    }


}
employees(["4",
"Tanya Petrova##Dental&Assistants25Health Ltd.",
"Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
"George Fill####Orderlies99Health JSC",
"Lily petrova#Speech&Pathology&Assistants60Health Ltd."]);
