function notation(arr) {
    const stack = [];

    for (const el of arr) {
        if (typeof el === 'number') {
            stack.push(el);
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            if (operand1 === undefined || operand2 === undefined) {
                console.log('Error: not enough operands!');
                return;
            }

            switch (el) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                default:
                    console.log('Error: invalid operator!');
                    return;
            }
        }
    }

    if (stack.length !== 1) {
        console.log('Error: too many operands!');
        return;
    }

    console.log(stack[0]);
}

notation([5, 3, 4, '*', '-']);


// function notation(arr) {
//     const stack = [];
//     const operators = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//         '*': (a, b) => a * b,
//         '/': (a, b) => a / b,
//     };
//
//     for (const el of arr) {
//         if (typeof el === 'number') {
//             stack.push(el);
//         } else if (el in operators) {
//             if (stack.length < 2) {
//                 console.log('Error: not enough operands!');
//                 return;
//             }
//             const [b, a] = [stack.pop(), stack.pop()];
//             stack.push(operators[el](a, b));
//         } else {
//             console.log('Error: invalid operator!');
//             return;
//         }
//     }
//
//     if (stack.length !== 1) {
//         console.log('Error: too many operands!');
//         return;
//     }
//
//     console.log(stack[0]);
// }