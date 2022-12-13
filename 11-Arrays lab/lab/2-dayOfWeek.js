function dayOfWeek(number) {
    let weekArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (number < 0 || number > 7){
        console.log('Invalid day!');
    } else {
        console.log( weekArray[number - 1])

    }
   


}
dayOfWeek(-1)