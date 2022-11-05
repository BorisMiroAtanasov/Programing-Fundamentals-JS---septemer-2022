function storProvision(availabel, delivery){
    let storeProducts = {};
    let availabelLength = availabel.length;
    let deliveryLength = delivery.length;



    for ( let index = 0 ; index <availabelLength; index+=2 ){
        let curentProduct = availabel[index];
        storeProducts[curentProduct] = Number(availabel[index + 1]);
    }

    for (let index = 0 ; index < deliveryLength; index+=2  ){
        let curentProduct = delivery[index];
        if(!storeProducts.hasOwnProperty(curentProduct)){
            storeProducts[curentProduct] = 0

        }
        storeProducts[curentProduct] += Number(delivery[index + 1]);

    }
    for (const key in storeProducts) {
        console.log(`${key} -> ${storeProducts[key]}`);
    }



}
storProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
