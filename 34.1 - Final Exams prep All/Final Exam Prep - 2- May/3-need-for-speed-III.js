function needForSpeed(array) {
    let carNum = array.shift();
    let cars = {};

    for (let i = 0; i < carNum; i++) {
        let currentCar = array.shift();
        let [brand, distance, fuel] = currentCar.split('|');
        cars[brand] = {
            distance,
            fuel
        }
    }
    let line = array.shift();



    while (line !== 'Stop') {
        let currentLine = line.split(' : ');
        let command = currentLine[0];
        let brand = currentLine[1];
        let distance = Number(currentLine[2]);
        let fuel = Number(currentLine[3])

        switch (command) {
            case 'Drive':
                if (cars[brand]) {
                    cars[brand].distance = Number(cars[brand].distance) + distance;
                    cars[brand].fuel = Number(cars[brand].fuel) - fuel;

                    if (cars[brand].fuel >= 0) {
                        console.log(`${brand} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    } else {
                        cars[brand].distance = Number(cars[brand].distance) - distance;
                        cars[brand].fuel = Number(cars[brand].fuel) + fuel;

                        console.log(`Not enough fuel to make that ride`);
                    }
                    if (cars[brand].distance > 100000){
                        console.log(`Time to sell the ${brand}!`);
                        delete cars[brand];

                    }

                }
                break;
            case 'Refuel':
                let curentFuelInCar = Number(cars[brand].fuel);
                let fuelInTank = 0;
                let maxFuel  = 75;
                //cars[brand].fuel = 
                if (cars[brand]) {
                    fuelInTank = curentFuelInCar + distance;
                    // console.log(curentFuelInCar);
                    if (fuelInTank > maxFuel) {
                        cars[brand].fuel = 75
                        console.log(`${brand} refueled with ${maxFuel - curentFuelInCar } liters`);
                    }else{
                        cars[brand].fuel = fuelInTank
                        console.log(`${brand} refueled with ${(distance)} liters`);
                    }
                }

                break;
            case 'Revert':
                let kmTorevert = Number(currentLine[2]);
                if (cars[brand]){
                    cars[brand].distance =   Number(cars[brand].distance) - kmTorevert;
                    if(cars[brand].distance > 10000){
                        console.log(`${brand} mileage decreased by ${kmTorevert} kilometers`);
                    }else{
                        cars[brand].distance = 10000;
                    }
                }

        }

        line = array.shift();
    }
    for (const brand in cars) {
        console.log(`${brand} -> Mileage: ${cars[brand].distance} kms, Fuel in the tank: ${cars[brand].fuel} lt.`);
        
    }


}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);
