function negativeOrPositiveNumbers(array){
    let newArray = [];
    let arrayLength = array.length;

    for ( let i = 0 ; i < arrayLength ; i++ ){
        let curentNum = Number(array[i]);

        if (curentNum < 0){
            newArray.unshift(curentNum);
        } else{
            newArray.push(curentNum);

        }
        

   }
   console.log(newArray.join('\n'));
   





}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
