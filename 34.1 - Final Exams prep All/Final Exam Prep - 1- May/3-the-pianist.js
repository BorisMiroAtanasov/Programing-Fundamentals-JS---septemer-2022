function thePianist(array){
    let numPieces = Number(array.shift());
    
    let colection = {};
    for (let i = 0; i < numPieces ; i++){
        let currentLine = array.shift();
        let [pieces, compositor, key] = currentLine.split('|');
        colection[pieces] = {
            compositor,
            key
        }
    }
      // console.table(colection);
    //  console.log(array);
    let line = array.shift();
    while (line !== 'Stop') {
        let currentLine = line.split('|');
        let command = currentLine.shift();
        let pieces = currentLine[0];
        let compositor = currentLine[1];
        let key = currentLine[2];
        

        //console.log(command);
        switch (command) {
            case 'Add':
                if(!colection[pieces]){
                colection[pieces] = {
                    compositor,
                    key
                }
                console.log(`${pieces} by ${colection[pieces].compositor} in ${colection[pieces].key} added to the collection!`);
            }else{
                console.log(`${pieces} is already in the collection!`);
            }
                break;
            case 'Remove':
                if(colection[pieces]){
                    delete colection[pieces];
                    console.log(`Successfully removed ${pieces}!`);
                }else{
                    console.log(`Invalid operation! ${pieces} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                 let newKey = currentLine[1];
                if (colection[pieces]){
                    colection[pieces].key = newKey;
                    console.log(`Changed the key of ${pieces} to ${colection[pieces].key}!`);

                }else{
                    console.log(`Invalid operation! ${pieces} does not exist in the collection.`);
                }
                break;
          
        }

        line = array.shift();
    
  }
  for (const pieces in colection) {
    console.log(`${pieces} -> Composer: ${colection[pieces].compositor}, Key: ${colection[pieces].key}`);
    
  }
  
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);
