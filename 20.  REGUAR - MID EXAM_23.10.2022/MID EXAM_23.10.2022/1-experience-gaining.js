function experienceGaining(input) {
    let neededExperiece = input.shift();
    let battles = input.shift();
    let inputLength = input.length;
    let totalExperience = 0;


    for (let i = 1; i <= battles; i++) {
        let currentExperience = input[i-1];
        
        if (i % 3 === 0 && i !=0) {
            currentExperience = currentExperience * 1.15;
            
        }else{
            totalExperience += currentExperience;

        }
        totalExperience += currentExperience;
        
        

        if ( i % 5 === 0 && i !== 0 ){
            currentExperience = currentExperience * 1.10;
        }

    }

    console.log(totalExperience);

}
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30]);
