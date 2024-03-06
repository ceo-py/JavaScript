function roadRadar(speed, area) {
    function speeding(kmLimit, where) {
        if (speed <= kmLimit) {
            console.log(`Driving ${speed} km/h in a ${kmLimit} zone`)
        } else {
            let status = 'reckless driving'
            if (speed - kmLimit <= 20) {
                status = 'speeding'
            } else if (speed - kmLimit <= 40) {
                status = 'excessive speeding'
            }
            console.log(`The speed is ${speed - kmLimit} km/h faster than the allowed speed of ${kmLimit} - ${status}`)
        }
    }

    if (area === 'motorway') {
        speeding(130, 'motorway')
    } else if (area === 'interstate') {
        speeding(90, 'interstate')
    } else if (area === 'city') {
        speeding(50, 'city')
    } else if (area === 'residential') {
        speeding(20, 'residential')
    }
}


// function roadRadar(speed, area) {
//     let limit = 0;
//     switch (area) {
//         case 'motorway': limit = 130; break;
//         case 'interstate': limit = 90; break;
//         case 'city': limit = 50; break;
//         case 'residential': limit = 20; break;
//     }
//
//     let overSpeed = speed - limit;
//
//     if (overSpeed <= 0) {
//         console.log(`Driving ${speed} km/h in a ${limit} zone`);
//     } else if (overSpeed > 0 && overSpeed <= 20) {
//         console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - speeding`);
//     } else if (overSpeed > 20 && overSpeed <= 40) {
//         console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//     } else {
//         console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - reckless driving`);
//     }
// }