function ladybugs(input) {
    let fieldSize = Number(input[0]);
    let field = new Array(fieldSize).fill(0);
    let ladybugIndexes = input[1].split(' ').map(Number);

    for (let i = 0; i < ladybugIndexes.length; i++) {
        let index = ladybugIndexes[i];
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let [ladybugIndex, direction, flyLength] = input[i].split(' ');
        ladybugIndex = Number(ladybugIndex);
        flyLength = Number(flyLength);

        if (ladybugIndex < 0 || ladybugIndex >= fieldSize || field[ladybugIndex] === 0) {
            continue;
        }

        field[ladybugIndex] = 0;
        let newPosition = direction === 'right' ? ladybugIndex + flyLength : ladybugIndex - flyLength;

        while (field[newPosition] === 1) {
            newPosition = direction === 'right' ? newPosition + flyLength : newPosition - flyLength;
        }

        if (newPosition >= 0 && newPosition < fieldSize) {
            field[newPosition] = 1;
        }
    }

    return field.join(' ');
}


// function ladybugs(input) {
//     const fieldSize = input[0];
//     let ladybugIndexes = input[1].split(' ').map(Number);
//     const commands = input.slice(2);
//
//     let field = Array.from({length: fieldSize}, () => 0);
//
//     ladybugIndexes.forEach(index => {
//         if (index >= 0 && index < fieldSize) {
//             field[index] = 1;
//         }
//     });
//
//     for (const command of commands) {
//         const [startIndex, direction, flyLength] = command.split(' ');
//         const initialIndex = Number(startIndex);
//         const length = Number(flyLength);
//
//         if (field[initialIndex] !== 1 || initialIndex < 0 || initialIndex >= fieldSize) {
//             continue;
//         }
//
//         field[initialIndex] = 0;
//
//         let nextIndex = initialIndex + (direction === 'right' ? length : -length);
//
//         while (field[nextIndex] === 1) {
//             nextIndex += (direction === 'right' ? length : -length);
//         }
//
//         if (nextIndex >= 0 && nextIndex < fieldSize) {
//             field[nextIndex] = 1;
//         }
//     }
//
//     console.log(field.join(' '));
// }


//
// function ladybugs(arr) {
//     let sizeOfField = arr[0];
//     let initialIndexes = arr[1];
//     initialIndexes = initialIndexes.split(" ");
//     let commands = arr.slice(2);
//     let field = [];
//
//     for (let i = 0; i < sizeOfField; i++) {
//         field.push(0);
//     }
//
//     for (let i = 0; i < initialIndexes.length; i++) {
//         let position = Number(initialIndexes[i]);
//         if (position > field.length - 1) {
//             continue;
//         }
//         field[position] = 1;
//     }
//
//
//     for (let i = 0; i < commands.length; i++) {
//         let currentCommand = commands[i];
//         currentCommand = currentCommand.split(" ");
//
//         let position = Number(currentCommand[0]);
//         let direction = currentCommand[1];
//         let flyCount = Number(currentCommand[2]);
//
//         if (field[position] === 0 || position < 0 || position > field.length - 1) {
//             continue;
//         }
//
//         field[position] = 0;
//
//         if (flyCount < 0) {
//             direction = direction === "right" ? "left" : "right";
//             flyCount = Math.abs(flyCount);
//         }
//
//         let nextPosition = 0;
//
//         if (direction === "right") {
//             nextPosition = position + flyCount;
//         } else if (direction === "left") {
//             nextPosition = position - flyCount;
//         }
//
//         while (field[nextPosition] === 1) {
//             if (direction === "right") {
//                 nextPosition += flyCount;
//             } else if (direction === "left") {
//                 nextPosition -= flyCount;
//             }
//         }
//
//         if (nextPosition > field.length - 1 || nextPosition < 0) {
//             continue;
//         }
//
//         field[nextPosition] = 1;
//     }
//
//     console.log(field.join(" "));
// }

ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])