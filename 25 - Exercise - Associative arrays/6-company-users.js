function companyUsers(input){
    let result = {};

    input.forEach(line => {
        let[companyName, personId] = line.split(' -> ');
       if(!result.hasOwnProperty(companyName)){
        result[companyName] = [];

       }
       result[companyName].push(personId);
        
    });

    let sortedCompanys = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));
    
    sortedCompanys.forEach(el => {
        let copmanys = el[0];
        let allIds= el[1];
        console.log(copmanys);
        let uniqueId = new Set(allIds);

        for (const id of uniqueId) {
            console.log(`-- ${id}`);
            
        }
    
    });
    
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);
