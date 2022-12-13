function formatGrade(grade) {
    let formatedGrade = '';

    if (grade < 3 ) {
        formatedGrade = 'Fail';
    } else if (grade < 3.5) {
        formatedGrade = 'Poor';
    } else if (grade < 4.5) {
        formatedGrade = 'Good';
    } else if (grade < 5.5) {
        formatedGrade = 'Very good';
    } else {
        formatedGrade = 'Excellent';
    }

    if ( formatedGrade === 'Fail'){
        console.log(`${formatedGrade} (2)`);
    }else{
        console.log(`${formatedGrade} (${(grade.toFixed(2))})`);

    }

}
formatGrade(6);
formatGrade(3.5);
formatGrade(5.5);
