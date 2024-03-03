function shootForTheWin(input) {

    const targets = input.shift().split(' ').map(x => parseInt(x));
    let shoot = input.shift();
    const targetsLen = targets.length;

    while (shoot !== "End") {
        shoot = parseInt(shoot);

        if (0 <= shoot && shoot < targetsLen) {
            const target = targets[shoot];
            targets[shoot] = -1;

            for (let i = 0; i < targetsLen; i++) {
                if (targets[i] === -1) {
                    continue;
                }

                if (targets[i] > target) {
                    targets[i] -= target;
                } else {
                    targets[i] += target;
                }
            }
        }

        shoot = input.shift();
    }

    const shotTargets = targets.filter(x => x === -1).length;
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);

}