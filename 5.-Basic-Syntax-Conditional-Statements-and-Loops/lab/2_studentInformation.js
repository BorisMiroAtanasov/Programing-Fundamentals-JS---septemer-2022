function studentInformation(name, age, grade) {
    let studentName = name;
    let studentAge = Number(age);
    let studentGrade = Number(grade);

    console.log(`Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`);

}
studentInformation('John', 15, 5.54678);