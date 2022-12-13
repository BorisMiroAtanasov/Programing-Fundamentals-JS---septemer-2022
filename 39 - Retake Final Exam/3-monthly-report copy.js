function monthlyReport(array){
    let type = ''
    let bacary = {};
    let selles = {};
    let allSells = [];
    bacary[type]= {
        name:[],
        value:[],
    }

    
    

    let line = array.shift();

    while (line !== 'End') {
        let current =  line.split(' ');
        let deliveryOrSell = current[0];
        let name = current[1];
        let value = current[2];
        
        


        switch (deliveryOrSell) {
            case 'Deliver':
                bacary[deliveryOrSell].name = name;
                bacary[deliveryOrSell].value = value;
                
               

            
                break;
        
        




        
        

        }

        line = array.shift();
        
    }
    console.table(bacary);

}
monthlyReport(["Deliver Micro 10000.00",
"Sell Nick 500.00",
"Sell Antony 260.50",
"Deliver Micro 2000.50",
"End"]);
