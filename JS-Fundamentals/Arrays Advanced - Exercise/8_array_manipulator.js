function arrayManipulator(initialArray, manipulations) {
    const commands = {
        add: (index, element) => initialArray.splice(index, 0, element),
        addMany: (index, ...elements) => initialArray.splice(index, 0, ...elements),
        contains: (element) => console.log(initialArray.indexOf(element)),
        remove: (index) => initialArray.splice(index, 1),
        shift: (positions) => {
            for (let i = 0; i < positions; i++) {
                initialArray.push(initialArray.shift())
            }
        },
        sumPairs: () => {
            const output = []
            for (let i = 0; i < initialArray.length; i += 2) {
                const firstNum = initialArray[i]
                const secondNum = initialArray[i + 1] ? initialArray[i + 1] : 0
                output.push(firstNum + secondNum)
            }
            initialArray = output
        },
        print: () => console.log(`[ ${initialArray.join(', ')} ]`)
    }

    manipulations.forEach(x => {
        const [command, ...args] = x.split(' ').map(e => isNaN(e) ? e : Number(e))
        commands[command](...args)
    })
}

arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])


// function manipulateArray(inputArray, commands) {
//     for (const command of commands) {
//         const [action, ...params] = command.split(' ');
//
//         switch (action) {
//             case 'add':
//                 {
//                     const index = Number(params[0]);
//                     const element = Number(params[1]);
//                     inputArray.splice(index, 0, element);
//                 }
//                 break;
//             case 'addMany':
//                 {
//                     const index = Number(params[0]);
//                     const elements = params.slice(1).map(Number);
//                     inputArray.splice(index, 0, ...elements);
//                 }
//                 break;
//             case 'contains':
//                 {
//                     const element = Number(params[0]);
//                     const index = inputArray.indexOf(element);
//                     console.log(index);
//                 }
//                 break;
//             case 'remove':
//                 {
//                     const index = Number(params[0]);
//                     inputArray.splice(index, 1);
//                 }
//                 break;
//             case 'shift':
//                 {
//                     const positions = Number(params[0]);
//                     for (let i = 0; i < positions; i++) {
//                         const shiftedElement = inputArray.shift();
//                         inputArray.push(shiftedElement);
//                     }
//                 }
//                 break;
//             case 'sumPairs':
//                 {
//                     inputArray = inputArray.reduce((acc, curr, index, arr) => {
//                         if (index % 2 === 0) {
//                             acc.push(curr + (arr[index + 1] || 0));
//                         }
//                         return acc;
//                     }, []);
//                 }
//                 break;
//             case 'print':
//                 console.log(`[ ${inputArray.join(', ')} ]`);
//                 break;
//             default:
//                 break;
//         }
//     }
// }
//
// manipulateArray([2, 2, 4, 2, 4],
// ["add 1 4", "sumPairs", "print"])