function angryCat(array, point, string){
    let leftSum = 0;
    let rigthSum = 0;

    let checkValue = array[point];

    let leftArray = array.slice(0, point); //[-2, 2, 1, 5, 9, 3]
    //console.log(leftArray);
    let rigthArray = array.slice(point+1); //[-2, 1, -1, -3, 3]
   // console.log(rigthArray);

    let entryPoint = array[point];
   // console.log(entryPoint);

    switch(string){
        case 'cheap': 
        for ( let i = 0 ; i < leftArray.length ; i++ ){
            let curentleftCheapItem = leftArray[i];
            if(curentleftCheapItem < entryPoint) {
                leftSum += curentleftCheapItem;
            }
        }
        for ( let i = 0 ; i < rigthArray.length ; i++ ){
            let curentrigthCheapItem = rigthArray[i];
            if(curentrigthCheapItem < entryPoint) {
                rigthSum += curentrigthCheapItem;
            }
        }

        break;
        case 'expensive': 
        for (let i= 0; i < leftArray.length ; i++){
            let curentleftItem = leftArray[i];

            if (curentleftItem >= entryPoint ){
                leftSum +=curentleftItem;
            }

        }
        for (let i = 0 ; i < rigthArray.length ; i++){
            let curentRigthItem = leftArray[i];
            if (curentRigthItem >= entryPoint ){
                rigthSum +=curentRigthItem;
            }

        }
        break;

    }
    // console.log(leftSum);
    // console.log(rigthSum);
    if ( leftSum > rigthSum){
        console.log(`Left - ${leftSum}`);
    } else if( leftSum < rigthSum){
        console.log(`Right - ${rigthSum}`);
    }else if(leftSum = rigthSum ){
        console.log(`Left - ${leftSum}`);
    }

}
angryCat([1, 5, 1],
    1,
    "cheap");