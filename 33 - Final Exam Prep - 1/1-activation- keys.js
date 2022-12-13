function activationKeys(array){

    let activationKey = array.shift();
    let command = array.shift();
    let result = [];


    while( command !== "Generate"){
        let currentCommand = command.split('>>>');

        if (currentCommand.includes('Slice')){
            result = activationKey.split('');
            result.splice(currentCommand[1],(currentCommand[2]-currentCommand[1]));
            result = result.join('')

            console.log(result);
        }
        
        stringForReplace = ''


         if(currentCommand.includes('Flip') && currentCommand.includes('Upper')){
               stringForReplace = result.substring(currentCommand[2],(currentCommand[3]))
           
               let newStringForReplace = stringForReplace.toUpperCase()
               
                result = result.replace(`${stringForReplace}`,`${newStringForReplace}`)
                console.log(result);

              
         }
        
         
       




        command = array.shift();
    }


  



}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);
