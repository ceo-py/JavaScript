function needForSpeedIII(input) {

    const [numberOfCars, carsInfo] = [parseInt(input.shift()), {}];

    for (let car = 0; car < numberOfCars; car++) {
        const [carName, ...info] = input.shift().split("|").map(x => isNaN(x) ? x : parseInt(x));
        carsInfo[carName] = info;
    }

    const commands = {
        Drive: (carName, distance, fuel) => {
            if (carsInfo[carName][1] >= fuel) {
                carsInfo[carName][1] -= fuel;
                carsInfo[carName][0] += parseInt(distance);
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (carsInfo[carName][0] >= 100000) {
                    delete carsInfo[carName];
                    console.log(`Time to sell the ${carName}!`);
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }
        },
        Refuel: (carName, fuel) => {
            if (carsInfo[carName][1] + parseInt(fuel) > 75) {
                fuel = 75 - carsInfo[carName][1];
            }
            carsInfo[carName][1] += parseInt(fuel);
            console.log(`${carName} refueled with ${fuel} liters`);
        },
        Revert: (carName, kilometers) => {
            carsInfo[carName][0] -= parseInt(kilometers);
            if (carsInfo[carName][0] < 10000) {
                carsInfo[carName][0] = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }

    let command = input.shift();
    while (command !== "Stop") {
        const [commandType, ...info] = command.split(" : ").map(x => isNaN(x) ? x : parseInt(x));
        commands[commandType](...info);
        command = input.shift();
    }

    for (let car in carsInfo) {
        console.log(`${car} -> Mileage: ${carsInfo[car][0]} kms, Fuel in the tank: ${carsInfo[car][1]} lt.`);
    }

}