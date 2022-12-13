function schollGrades(input){

    let gradesMap = new Map();
    for (let  line of input) {
        let currentLine = line.split(' ');
        
        let name = currentLine[0]
        let gradesSum = 0;
        let counterGrades = 0;
        
        if (gradesMap.has(name)){
            let currentGrade = gradesMap.get(name);
            let finalGrade = (currentGrade + gradesSum)/counterGrades;
            gradesMap.set(name,finalGrade);
        } else{
            let finalGradesSecond = gradesSum/counterGrades
            gradesMap.set(name,finalGradesSecond);
        }
        for ( let i = 1 ; i<currentLine.length ; i++){
            let index = Number(currentLine[i]);
            gradesSum +=index;
            counterGrades++;

            
            
        }


    }
    console.log(gradesMap)
    


}
schollGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
