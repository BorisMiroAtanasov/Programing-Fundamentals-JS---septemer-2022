function minerTask(input){
    let result = {};

    for ( let index = 0 ; index < input.length; index +=2){
        let curentResours = input[index];
        let currentValue = Number(input[index+1]);

        if(!result[curentResours]){
            result[curentResours] = currentValue

        }else{
            result[curentResours] += currentValue
        }
        
            
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
        
    }
 
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);
