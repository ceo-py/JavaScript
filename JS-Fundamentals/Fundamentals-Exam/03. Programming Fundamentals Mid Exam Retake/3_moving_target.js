function movingTarget(input) {
    const targets = input.shift().split(' ').map(x => parseInt(x));
    let dataInfo = input.shift();

    while (dataInfo !== "End") {
        const [command, index, value] = dataInfo.split(' ').map(x => isNaN(x) ? x : parseInt(x));
        let validIndex = true;

        if (!(0 <= index && index < targets.length)) {
            validIndex = false;
        } else if (command === "Shoot") {
            targets[index] -= value;
            if (targets[index] <= 0) {
                targets.splice(index, 1);
            }
        }

        if (command === "Add") {
            if (validIndex) {
                targets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else if (command === "Strike" && validIndex) {
            const startRadius = index - value;
            const endRadius = index + value + 1;
            if (0 <= startRadius && startRadius < endRadius && endRadius <= targets.length) {
                targets.splice(startRadius, endRadius - startRadius);
            } else {
                console.log("Strike missed!");
            }
        }

        dataInfo = input.shift();
    }

    console.log(targets.join('|'));

}