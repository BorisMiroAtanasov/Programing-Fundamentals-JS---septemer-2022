function listOfProducts(array){

    let sortedArray = array.sort();
    

    for ( let i = 0 ; i < sortedArray.length ; i++ ){
        let result = `${i+1}.${sortedArray[i]}`
        console.log(result)
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
