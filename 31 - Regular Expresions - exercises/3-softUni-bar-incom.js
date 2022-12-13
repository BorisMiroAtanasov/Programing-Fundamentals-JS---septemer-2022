function softUniBarIncom(customerArray){

    const pattern = /%(?<customer>[A-z][a-z]+)%[^|%$.]*<(?<product>\w+)>[^|%$.]*\|(?<count>[0-9]+)\|[^0-9\|%$.]*(?<price>[0-9|\.]+)\$/g;

    let totalIncom = 0;
    let command = customerArray.shift();

    while(command !=='end of shift' ){
        let currentData = pattern.exec(command);

        if(currentData){
            let currentCustomer = currentData.groups['customer'];
            let currentProduct = currentData.groups['product'];
            let currentCount = Number(currentData.groups['count']);
            let currentPrice = Number(currentData.groups['price']);
            let totalProductPrice= currentCount * currentPrice;

            console.log(`${currentCustomer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`);
            totalIncom +=totalProductPrice;

            command = customerArray.shift();
            currentData = pattern.exec(command);

        } else{
            command = customerArray.shift();

        }
       

    }
    console.log(`Total income: ${totalIncom.toFixed(2)}`);
   

}
softUniBarIncom(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
