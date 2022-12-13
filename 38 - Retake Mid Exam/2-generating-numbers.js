function generatingNumbers(array){
    let arrayForManipulation = array.shift().split(' ');


    let line = array.shift();
    while (line !== 'END') {
       if ( line.includes('add to start')){
        let currentLine = line.split(' ');
        let firstEl = currentLine[3];
        let secondEl = currentLine[4];
        let thirdEl = currentLine[5];
        for ( let i = currentLine.length-1 ; i >= 3 ; i-- ){
            arrayForManipulation.unshift(currentLine[i]);
        } 
        }else if (line.includes('remove greater than')){
            let currentLine = line.split(' ');

            let graterThen = Number(currentLine[3])
            arrayForManipulation = arrayForManipulation.filter( x=> x < graterThen);

       } else if(line.includes('replace')){
         let currentLine = line.split(' ');
         let oldNum = currentLine[1];
         let newNum = currentLine[2];
        let string = arrayForManipulation.join(', ');
        string = string.replace(oldNum,newNum);
        arrayForManipulation = string.split(', ')
         
       } else if(line.includes('remove at index')){
        let currentLine = line.split(' ');
        let remouvedIndex = Number(currentLine[3]);
        if(arrayForManipulation[remouvedIndex]){
            arrayForManipulation.splice(remouvedIndex,1)
        }
        arrayForManipulation;


       }else if(line.includes('find even')){
        let evenArr = [];
        evenArr = arrayForManipulation.filter( x=> x % 2 == 0);
        console.log(evenArr.join(' '));
        
       } else if (line.includes('find odd')){
        let oddArr= [];
        oddArr = arrayForManipulation.filter( x=> x % 2 !== 0);
        console.log(oddArr.join(' '));

       }

        line = array.shift();

    }
    console.log(arrayForManipulation.join(', '));

   

}
generatingNumbers(["1 2 3 10 10 6 4 10",
"add to start 1 2 3",
"remove greater than 5",
"find even",
"END"]);
console.log('---------------------------------------');
generatingNumbers(["1 2 3 10 10 6 4 10",
"replace 10 1",
"remove at index 0",
"add to start 4 2",
"END"]);
