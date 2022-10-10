function vacation(num, group, day){
    let numberOfPeople = Number(num);
    let groupType = group;
    let weekDay = day;

    let price = 0;

    if ( groupType === 'Students'){
        switch (weekDay) {
            case ('Friday'): price = numberOfPeople * 8.45; break;
            case ('Saturday'): price = numberOfPeople * 9.80; break;
            case ('Sunday'): price = numberOfPeople * 10.46; break;
        }
        if (numberOfPeople >= 30){
            price = price * 0.85;
        }
    } else if ( groupType === 'Business'){
        switch (weekDay) {
            case ('Friday'): price = numberOfPeople * 10.90; break;
            case ('Saturday'): price = numberOfPeople * 15.60; break;
            case ('Sunday'): price = numberOfPeople * 16.0; break;
        }
        if (numberOfPeople >= 100){
          price = price * 0.90;
        }
        

    } else if (groupType === 'Regular'){
        switch (weekDay) {
            case ('Friday'): price = numberOfPeople * 15.0; break;
            case ('Saturday'): price = numberOfPeople * 20.0; break;
            case ('Sunday'): price = numberOfPeople * 22.50; break;
        }
        if (numberOfPeople >= 10 && numberOfPeople <= 20){
            price = price * 0.95;
        }

    }
    console.log(`Total price: ${price.toFixed(2)}`);


}
vacation(30,"Students","Sunday");
vacation(101, "Business", "Saturday");
vacation(40, "Regular", "Saturday");
vacation(0, "Regular", "Saturday");
