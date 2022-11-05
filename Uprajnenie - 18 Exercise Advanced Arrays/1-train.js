function train(array){
    let passangerInTrain = array
        .shift()
        .split(' ')
        .map(Number);
        let maxPassanger = Number(array.shift());
        let arrayLength = array.length
        
        for (let i = 0 ; i <arrayLength; i++ ){
            let currentRow = array[i].split(' ');
         

            if ( currentRow[0] === 'Add'){
                let newWaganPassanger = Number(currentRow[1]);
                passangerInTrain.push(newWaganPassanger);

            }else{
                for ( let j = 0; j < passangerInTrain.length ; j++){
                    let passangerInCurentWagon = passangerInTrain[j]
                    if ((passangerInCurentWagon + Number(currentRow[0]) <= maxPassanger ) ){
                        passangerInTrain[j] += Number(currentRow[0]);
                            break;
                    }
                }

            }

       }
    console.log(passangerInTrain.join(' '));

        

}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);
