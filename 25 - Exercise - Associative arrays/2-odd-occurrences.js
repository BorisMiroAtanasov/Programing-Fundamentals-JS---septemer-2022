function oddOcurrences(input){

    let result = {};
    let array = input
    .split(' ')
    .map(x => x.toLowerCase());

    for (const word of array) {
        let counter = 0;

       for ( const sameWord of array ){
         if(word ===sameWord ){
            counter++;
            result[word] = counter
         }


       }
            
        
    }
    let resultEntrys = Object.entries(result)
    // for (const key in result) {
    //     if (Number(Object.values(result)) % 2 == 0) {
    //         delete key[result];
    //         console.log(`${key}`);
            
            
    //     }
    // }
    let str = ''
    for (const entrys of resultEntrys) {
        if(entrys[1] % 2 !== 0){
            str+=entrys[0] + " "
            
           
        }
    
        
    }
    
    console.log(str);

    

}
oddOcurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

