function monthlyReport(array){
    let backary = {};
    let selles = {};
    let allSells = [];

    
    

    let line = array.shift();

    while (line !== 'End') {
        let current =  line.split(' ');
        let command = current[0];
        let name = current[1];
        let value = current[2];

        switch (command) {
            case 'Deliver':
                if(!backary[command]){
                    backary[command] ={
                         name,
                         value:[Number(value)]
                    } 
                    
                }else{
                    backary[command] ={
                        name,
                        value:[Number(value)].push(Number(value))
                   } 

                }

                
                break;
        
        }




        
        



        line = array.shift();
        
    }
    console.table(backary);

}
monthlyReport(["Deliver Micro 10000.00",
"Sell Nick 500.00",
"Sell Antony 260.50",
"Deliver Micro 2000.50",
"End"]);
