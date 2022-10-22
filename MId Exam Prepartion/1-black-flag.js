function blakFlag(array) {
    let pirateArray = array.map(Number);
    let days = pirateArray[0];
    let daylyPlunder = pirateArray[1];
    let target = array[2];
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        let curentPlunder = daylyPlunder;

        
        if ( i % 3 ===0 ){
            curentPlunder = daylyPlunder * 1.5;
        } else { 
            curentPlunder = daylyPlunder;
        }
        totalPlunder +=curentPlunder

        if ( i % 5 === 0){
            totalPlunder  = totalPlunder *0.7
        }
       
    }

    if ( totalPlunder >= target){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    }else{
        console.log(`Collected only ${((totalPlunder/target )* 100).toFixed(2)}% of the plunder.`)
    }


}
blakFlag(["5", "40", "100"]);
blakFlag(["10","20","380"]);
