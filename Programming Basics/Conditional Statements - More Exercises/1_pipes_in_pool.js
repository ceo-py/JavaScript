function calculatePoolWater(input) {
    const [v, p1, p2, h] = input.map(x => parseFloat((x)))
    const sum_p1 = p1 * h;
    const sum_p2 = p2 * h;
    const sum = sum_p1 + sum_p2;

    if (sum <= v) {
        const percent_full = (sum / v) * 100;
        const first_p1_percent = (sum_p1 / sum) * 100;
        const second_p2_percent = (sum_p2 / sum) * 100;
        console.log(`The pool is ${percent_full.toFixed(2)}% full. Pipe 1: ${first_p1_percent.toFixed(2)}%. Pipe 2: ${second_p2_percent.toFixed(2)}%.`);
    } else {
        const overflows = sum - v;
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${overflows.toFixed(2)} liters.`);
    }
}


calculatePoolWater(['1000', '100', '120', '3'])
