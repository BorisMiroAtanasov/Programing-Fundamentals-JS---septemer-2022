function schollGrades(input){
    let sudent = {};

    for (const line of input) {
        let studentArr = line.split(' ');
        let name = studentArr.shift();
        let grade = studentArr.map(x => Number(x));
        
        // if (sudent[name]){
        //     sudent[name] = sudent[name].concat(grade)

        // } else{
        //     sudent[name] = grade;
        // }

        if(!sudent[name]){
            sudent[name] = []
        }
        sudent[name] = sudent[name].concat(grade);
    }
    let sudentEntry = Object.entries(sudent);
    let sortetStudents = sudentEntry.sort((a,b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sortetStudents) {
      
        let sum = 0;
        for (const grade of grades) {
            sum += grade;
            
        }
        let average = sum / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
   
     }





}
schollGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);
