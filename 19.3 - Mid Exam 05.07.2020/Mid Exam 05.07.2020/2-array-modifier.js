function arrayModifier(array){

    let newArray = array.shift().split(' ').map(Number);
    newArray.map(Number)
    //console.log(newArray);

    let line = array.shift();
    while (line !== 'end') {
       let [command, firstIndex , secondIndex] = line.split(' ');
       firstIndex = Number(firstIndex);
       secondIndex = Number(secondIndex);

       switch (command) {
        case 'swap':
             let firstParam = newArray[firstIndex];
             let secondParam = newArray[secondIndex];
              newArray.splice(firstIndex, 1,secondParam);
              newArray.splice(secondIndex, 1,firstParam);
            
            break;
       case 'multiply':
             let firstNum = newArray[firstIndex];
             let secondNum = newArray[secondIndex];
             let newValue = firstNum * secondNum;
             newArray.splice(firstIndex, 1,newValue)
            
            break;

         case 'decrease':
            newArray = newArray.map(x => x-1);
             
            break;

       }
      
        line = array.shift();
        
    }
    console.log(newArray.join(', '));
    



}
arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);
