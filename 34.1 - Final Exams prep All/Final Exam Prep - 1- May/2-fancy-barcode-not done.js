function fancyBarcode(array){
    let num = array.shift();
    let newArray = array.join(',')
    let pattern = /(@#+)(?<product>[A-Za-z0-9]+)\1/g;
    let productArr = [];


    let matches = newArray.matchAll(pattern);
    for (const match of matches) {
       console.log(match);
        
        
   }
    
 

    // for (let i = 0 ; i < num ; i++){
    //     console.log(array[i]);
    // }


}
fancyBarcode(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);
