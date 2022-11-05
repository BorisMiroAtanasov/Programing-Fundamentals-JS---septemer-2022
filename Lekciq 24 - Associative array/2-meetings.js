function meetings(input){
    let meetingObject = {}

    for (const line of input) {
        let currentLine = line.split(' ');

        let day = currentLine[0];
        let name = currentLine[1];

        
        if ( meetingObject.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        } else {
            meetingObject[day] = name;
            console.log(`Scheduled for ${day}`);

        }

    }
    for (const key in meetingObject) {
        console.log(`${key} -> ${meetingObject[key]}`);
        
    }
   
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
