function buildAWall(input) {
    let pesos = 0;
    const concreteUsedEachDay = [];

    while (input.some(height => height < 30)) {
        const dailyConcreteUsed = input.reduce((total, height, index) => {
            if (height < 30) {
                input[index]++;
                total += 195;
                pesos += 195 * 1900;
            }
            return total;
        }, 0);

        if (dailyConcreteUsed > 0) {
            concreteUsedEachDay.push(dailyConcreteUsed);
        }
    }

    console.log(concreteUsedEachDay.join(', '));
    console.log(pesos + ' pesos');
}


// function buildAWall(input) {
// 	let pesos = 0;
// 	const concreteUsedEachDay = [];
//
// 	while (input.length !== 0) {
// 		for (let i = 0; i < input.length; i++) {
// 			if (input[i] === 30) {
// 				input.splice(input.indexOf(input[i]), 1);
// 				i -=  1
// 			} else {
// 				input[i]++;
// 				pesos += 195 * 1900;
// 			}
// 		}
// 		if (input.length === 0) {
// 			break
// 		} else {
// 			concreteUsedEachDay.push(195 * input.length);
// 		}
// 	}
//
// 	console.log(concreteUsedEachDay.join(', '));
// 	console.log(pesos + ' pesos');
// }


// function buildAWall(input) {
//     let pesos = 0;
//     const concreteUsedEachDay = [];
//
//     while (input.some(height => height < 30)) {
//         const dailyConcreteUsed = input.reduce((total, height, index) => {
//             if (height < 30) {
//                 input[index]++;
//                 total += 195;
//                 pesos += 195 * 1900;
//             }
//             return total;
//         }, 0);
//
//         concreteUsedEachDay.push(dailyConcreteUsed);
//     }
//
//     console.log(concreteUsedEachDay.join(', '));
//     console.log(pesos + ' pesos');
// }

buildAWall([21, 25, 28])