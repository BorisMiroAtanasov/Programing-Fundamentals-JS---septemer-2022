function storage(input){
    let storageMap = new Map();

    for (let line of input) {
        let curentLine = line.split(' ');
        let product = curentLine[0];
        let amount = Number(curentLine[1]);

        

         if(storageMap.has(product)){
            let curentQuantity = storageMap.get(product);
            let newQuantity = curentQuantity + amount;
            storageMap.set(product,newQuantity);
         } else {
            storageMap.set(product,amount)
         }

    }

    for (const kvp of storageMap) {
        console.log(`${kvp[0]} -> ${(kvp[1])}`);

    }
    

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);
