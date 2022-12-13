function experienceGaining(input) {
    let neededExperiece = input.shift();
    let battles = input[0];
    let inputLength = input.length;
    let currentBattle = input[0]
    let totalExperience = 0;
    let battlesCount = 0;



    for (let i = 1; i <= battles; i++) {
        let currentExperience = input[i]
        
        
        if (i % 3 == 0  ) {
            currentExperience = currentExperience * 1.15;
            
        }else{
            currentExperience ;
        }
       
        if ( i % 5 == 0 ){
            currentExperience = currentExperience * 0.9;
        }else{
            currentExperience;
        }

        if ( i % 3 == 0 && i % 3 == 0 && i % 15 == 0 ){
            currentExperience = currentExperience * 1.5;
        }else{
            currentExperience;
        }
        totalExperience += currentExperience;
        battlesCount++;
        
        if ( totalExperience >= neededExperiece){
            console.log(`Player successfully collected his needed experience for ${battlesCount} battles.`)
            break;
        }
        
            
        
    }
    if (totalExperience < neededExperiece){
        console.log(`Player was not able to collect the needed experience, ${(neededExperiece-totalExperience).toFixed(2)} more needed.`)
    }

    

}
experienceGaining([400,
    5,
    50,
    100,
    200,
    100,
    20]);
