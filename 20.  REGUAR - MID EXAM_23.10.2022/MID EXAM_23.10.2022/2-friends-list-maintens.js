function friendsListMaintans(array){
    let nameList = array
    .shift()
    .split(', ');
    //let index = 0;
    let currentLine = array.shift();
    let blackListCount = 0;
    let blackListArray = [];
    let lostListCount = 0;


    while ( currentLine != 'Report'){
        let [commadn, index, newPlace] = currentLine.split(' ');
        
        switch (commadn){
            case 'Blacklist': 
                if (index.includes(nameList)){
                blackListCount++;
                blackListArray.push(index);
            }
            
            
            break;
            case 'Error': error(index); break;
            case 'Change': change(index,newPlace); break;
        }
    }

        currentLine = array.shift();
  

    


}
friendsListMaintans(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"]);
