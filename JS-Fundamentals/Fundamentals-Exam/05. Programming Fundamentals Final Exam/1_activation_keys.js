function activationKeys(input) {
    let [rawActivationKey, commandData] = [input.shift(), input.shift()];

    while (commandData !== 'Generate') {
        let [command, ...data] = commandData.split('>>>').map(x => isNaN(x) ? x : parseInt(x));

        if (command === 'Contains') {
            let substring = String(data[0]);
            if (rawActivationKey.includes(substring)) {
                console.log(`${rawActivationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        }

        if (command === 'Flip') {
            let [caseType, startIndex, endIndex] = data;
            let change;
            if (caseType === 'Upper') {
                change = rawActivationKey.substring(startIndex, endIndex).toUpperCase();
            } else {
                change = rawActivationKey.substring(startIndex, endIndex).toLowerCase();
            }
            rawActivationKey = rawActivationKey.substring(0, startIndex) + change + rawActivationKey.substring(endIndex);
            console.log(rawActivationKey);
        }

        if (command === 'Slice') {
            let [startIndex, endIndex] = data;
            rawActivationKey = rawActivationKey.substring(0, startIndex) + rawActivationKey.substring(endIndex);
            console.log(rawActivationKey);
        }

        commandData = input.shift();
    }

    console.log(`Your activation key is: ${rawActivationKey}`);

}