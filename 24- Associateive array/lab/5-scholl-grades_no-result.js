function schollGrades(input){

    let grades = {};
    for (let  line of input) {
        let currentLine = line.split(' ');
        
        let name = currentLine[0]
        let gradesSum = 0
        
        for ( let i = 1 ; i<currentLine.length ; i++){
            let index = Number(currentLine[i]);
            gradesSum +=index;
            
            
        }

        if (grades.hasOwnProperty(name)){
            let currentGrade = Object.values(grades[name]);
            let finalGrade = currentGrade + gradesSum;
            grades[name] = finalGrade
        } else{
            grades[name] = gradesSum
        }

    }
    console.log(grades)
    


}
schollGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
