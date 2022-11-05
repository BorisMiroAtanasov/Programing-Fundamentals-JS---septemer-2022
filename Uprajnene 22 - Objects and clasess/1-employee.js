function employee(input){
    let personalInfo = {};


    for (const line of input) {

        let person = line;
       let personalNum = line.length;

       personalInfo.name = person;
       personalInfo.number = personalNum;

       console.log(`Name: ${personalInfo.name} -- Personal Number: ${personalInfo.number}`);

       }
        
        

        
    
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
