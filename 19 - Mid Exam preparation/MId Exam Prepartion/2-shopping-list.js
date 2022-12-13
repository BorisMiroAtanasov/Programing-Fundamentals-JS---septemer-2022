function shoppingList(array) {
    let shopingList = array
        .shift()
        .split('!');
    let arrayLength = array.length;
    

    for (let i = 0; i < arrayLength - 1; i++) {
        let [command, product, secondProduct] = array[i].split(' ');
        //let shoppingCommand = command;
        let shoppingProduct = product;
        let replaceShoppingProduct = secondProduct;

        switch (command) {
            case 'Urgent': addOrSkip(shoppingProduct); break;
            case 'Unnecessary': removeOrSkip(shoppingProduct); break;
            case 'Correct': replace(shoppingProduct, replaceShoppingProduct); break;
            case 'Rearrange': rearrange(shoppingProduct); break;
        }

    }
    function addOrSkip(element){
        if (!shopingList.includes(element) ){
            shopingList.unshift(element)
        }else{
            shopingList
        }
    }
    function removeOrSkip(element){
        let removeProduct = shopingList.indexOf(element);
        if(shopingList.includes(element)){
            shopingList.splice(removeProduct,1); 
        }else{
            shopingList;
        } 
    }
    function replace(element , otherElement){
        let removeProduct = shopingList.indexOf(element);
        if (shopingList.includes(element) ){
            shopingList.splice(removeProduct,1,otherElement); 
        }else{
            shopingList;
        } 
    }
    function rearrange(element){
        let rearrangeProduct = shopingList.indexOf(element);
        if(shopingList.includes(element)){
            shopingList.splice(rearrangeProduct,1);
            shopingList.push(element);
        }
    }
    console.log(shopingList.join(', '));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);
