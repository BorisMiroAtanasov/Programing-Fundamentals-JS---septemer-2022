function race(raceDataArray){
    let racersArrary = raceDataArray.shift().split(', ');
    let raceOjekt = {};
    const patternName = /[A-Za-z]+/g;
    const patternDist = /[0-9]+/g;

    let command = raceDataArray.shift();
    while(command !== 'end of race'){
        const currentName = command.match(patternName).join('');
        const currentDist = command.match(patternDist).join('');
        if (racersArrary.includes(currentName)){
            let distance = 0;

            for (const digit of currentDist) {
                distance += Number(digit);
                
            }
            if ( !raceOjekt.hasOwnProperty(currentName)){
                raceOjekt[currentName] = distance;
               
            }else{
                raceOjekt[currentName] += distance;
        
        }

            
        }

        command = raceDataArray.shift();
    }
    let sortedRacers = Object.entries(raceOjekt).sort((a,b) => b[1] - a[1]);

    const firstPalce = sortedRacers[0][0];
    const secondPalce = sortedRacers[1][0];
    const thirdPlase = sortedRacers[2][0];


    console.log(`1st place: ${firstPalce}`);
    console.log(`2nd place: ${secondPalce}`);
    console.log(`3rd place: ${thirdPlase}`);
    
    
    
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
