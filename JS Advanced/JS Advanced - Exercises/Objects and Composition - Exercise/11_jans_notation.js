function jansNotation(arr) {
    const stack = [];

    for (const el of arr) {
        if (typeof el === 'number') {
            stack.push(el);
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            if (operand1 === undefined || operand2 === undefined) {
                return console.log('Error: not enough operands!');
            }

            switch (el) {
                case '+': stack.push(operand1 + operand2); break;
                case '-': stack.push(operand1 - operand2); break;
                case '*': stack.push(operand1 * operand2); break;
                case '/': stack.push(operand1 / operand2); break;
                default: return console.log('Error: invalid operator!');
            }
        }
    }

    return stack.length === 1 ? console.log(stack[0]) : console.log('Error: too many operands!');


}