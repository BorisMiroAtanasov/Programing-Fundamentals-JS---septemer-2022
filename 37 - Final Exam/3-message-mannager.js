function messageMannager(array){
    let maxCapacity = Number(array.shift());

    let line = array.shift();
    let messageList = {};
    let totalCount = 0;


    while (line !=='Statistics') {
        let currentLine = line.split('=');
       let [command, name , firstIndex, secondIndex] = line.split('=');
    //     let command = currentLine[0];
    //     let name = currentLine[1];
    //     let firstIndex = Number(currentLine[2]);
    //     let secondIndex = Number(currentLine[3]);

        switch (command) {
            case 'Add':
                if(!messageList[name]){
                    messageList[name] = {
                        firstIndex:Number(firstIndex),
                        secondIndex :Number(secondIndex)
                    }
                }
               
                break;
            case 'Message':
                let sender = name; //firstIndex
                let reciver = (currentLine[2]); //secondIndex

                if ( messageList[sender] && messageList[reciver]){
                    messageList[name].firstIndex = Number(messageList[name].firstIndex) + 1;
                    messageList[firstIndex].firstIndex = Number(messageList[firstIndex].firstIndex + 1);

                } 
                if((Number(messageList[name].firstIndex) + Number(messageList[name].secondIndex)) >= maxCapacity ){
                    delete messageList[name];
                    console.log(`${name} reached the capacity!`);
            

                }
         
                // if(messageList[name] && messageList[firstIndex]){
                //     messageList[name].firstIndex = Number(messageList[name].firstIndex) + 1;
                //     messageList[firstIndex].firstIndex = Number(messageList[firstIndex].firstIndex) + 1;
                    
                    
              //  }
                  
                    break;
            case 'Empty':
                let dellCommand = name
                if(messageList[name]){
                    delete messageList[name]
              }
            //      if (name === 'All'){
            //         name = 
                    
            //   }
                          
                         break;
  
         }
       

        line = array.shift();
        
    }
   for (const name in messageList) {
    if (name){
        totalCount++
    }
    
   }
   console.log(`Users count: ${totalCount}`);

    //console.table(messageList);
for (const name in messageList) {
    let currrentTotal = (Number(messageList[name].firstIndex) + Number(messageList[name].secondIndex))
    

    console.log(`${name} - ${currrentTotal}`);


}

                

}
messageMannager(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]);
