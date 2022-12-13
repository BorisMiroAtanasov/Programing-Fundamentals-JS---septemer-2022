function monthlyReport(array){
    
    let bacary = {};
 
    let allSells = [];
   



    let line = array.shift();

    while (line !== 'End') {
        let current =  line.split(' ');
        let deliveryOrSell = current[0];
        let name = current[1];
        let value = Number(current[2]);
        bacary[deliveryOrSell] = {
            name:[],
            value:[],
        }
                                                        //plant.raitings.push(raiting);
        


        switch (deliveryOrSell) {
            case 'Deliver':
                if(!bacary[deliveryOrSell]){
                    bacary[deliveryOrSell].name.push(name);
                    bacary[deliveryOrSell].value.push(value);
            
                
                    

                } else{
                    let oldvalue = bacary[deliveryOrSell].value;
                    bacary[deliveryOrSell].value = oldvalue+value
                }
            
                break;
        //   case 'Sell':
        //         if(!bacary[deliveryOrSell]){
        //             bacary[deliveryOrSell]={ 
        //             name,
        //             value,
        //             }
                    

        //         } else{
        //             let oldvalue = bacary[deliveryOrSell].value;
        //             bacary[deliveryOrSell].value = oldvalue+value
        //         }
            
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

console.log('-----------------');

monthlyReport(["Deliver North 200.30",
"Deliver Micro 10000.00",
"Deliver North 150.50",
"End"])