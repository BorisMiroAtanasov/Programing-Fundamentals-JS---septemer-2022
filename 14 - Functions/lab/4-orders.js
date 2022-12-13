function orders( produc, count){
    let result = 0;

    switch (produc) {
        case 'coffee' : result = count * 1.5 ; break;
        case 'water'  : result = count * 1.0 ; break;
        case 'coke' : result = count * 1.4 ; break;
        case 'snacks' : result = count * 2 ; break;
    
        
    }
    console.log(result.toFixed(2));

}
orders ("coke", 2 )