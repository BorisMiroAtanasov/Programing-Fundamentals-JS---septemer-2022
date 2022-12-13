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
        let line = currentLine.split(' ')
        let commadn = line[0];
        let index = line[1];
        let newName = line[2]
        
        switch (commadn){
            case 'Blacklist': 
                if (nameList.includes(index)){
                console.log(`${index} was blacklisted.`);
                blackListCount++;
                blackListArray.push(index);
                nameList.splice(index,1,'Blacklisted')

            }else{
                ( !nameList.includes(index))
                    console.log(`${index} was not found.`)

            }
            
            break;
             case 'Error': 
             let currentIndex = Number(index)
             let nameForCheck = nameList[currentIndex]
             if ( (currentIndex >= 0 && currentIndex < nameList.length  )&& (nameForCheck != 'Blacklisted' && nameForCheck != 'Lost') ){
                nameList.splice(currentIndex,1,'Lost');
                lostListCount++;
                console.log(`${nameForCheck} was lost due to an error.`)
             }
             break;
             case 'Change': 
             let changeCurrentIndex = Number(index)
             if(changeCurrentIndex >= 0 && changeCurrentIndex < nameList.length ){
                
                console.log(`${nameList[changeCurrentIndex]} changed his username to ${newName}.`);
                nameList.splice(changeCurrentIndex, 1, newName );
                
             }
             
             break;
        }
        currentLine = array.shift();
    }
    console.log(`Blacklisted names: ${blackListCount}`);
    console.log(`Lost names: ${lostListCount}`);
    console.log(nameList.join(' '));


}
friendsListMaintans(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"]);
