function heartDelivery(array){
    let neighborhood = array
        .shift()
        .split('@')
        .map(Number);
        let command = array.shift();
        let jumpLength = 0

        while (command !=='Love!') {
            
            let currentLine = command.split(' ');
            let jump = currentLine[0];
            let index = Number(currentLine[1]);
             jumpLength += index;
           
           // console.log(jumpLength);

          for ( let i=0 ; i< neighborhood.length; i++ ){
            let currentNeighborhoodIndex = i;
            let currentNeighborhoodHearts = neighborhood[i];
            
            
             if ( jumpLength === currentNeighborhoodIndex ){
                currentNeighborhoodHearts = currentNeighborhoodHearts - 2;
                neighborhood[i] = currentNeighborhoodHearts;
                if (currentNeighborhoodHearts < 0){
                    console.log(`Place ${currentNeighborhoodIndex} has Valentine's day.`)

                }
                
            
            }
            if(jumpLength > neighborhood.length){
                currentNeighborhoodIndex = 0;
                currentNeighborhoodHearts = currentNeighborhoodHearts - 2;
                neighborhood[i] = currentNeighborhoodHearts;
                

            }
            
          }


            command = array.shift()
        }

        console.log(neighborhood);

}
// heartDelivery(["10@10@10@2",
// "Jump 1",
// "Jump 2",
// "Love!"]);

heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);