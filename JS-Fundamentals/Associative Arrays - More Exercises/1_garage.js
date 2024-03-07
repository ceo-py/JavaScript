function garage(list) {
        const parking = {}

    for (const elem of list) {
        const [garage, ...car] = elem.split(' - ')

        if (garage in parking) {
            parking[garage].push(...car)
            continue;
        }
        parking[garage] = car

    }

    for (const entry of Object.entries(parking)) {

        console.log(`Garage № ${entry[0]}`)
        for (const elem of entry[1]) {
            console.log(`--- ${elem.replace(/\:/g, ' -')}`);
        }
    }
}

garage([])



// function garage(list) {
//   const parking = {};
//   for (const elem of list) {
//     const [garage, ...car] = elem.split(' - ');
//     if (garage in parking) {
//       parking[garage].push(...car);
//       continue;
//     }
//     parking[garage] = car;
//   }
//   return parking;
// }
//
// // usage
// const parking = garage(list);
// console.log(parking);