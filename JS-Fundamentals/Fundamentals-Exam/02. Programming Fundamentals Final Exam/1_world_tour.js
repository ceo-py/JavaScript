function worldTour(input) {
    let rawStringStops = input.shift();
    let command = input.shift();

    while (command !== "Travel") {
        let [commandType, indexOrOldString, endIndexOrString] = command.split(":").map(x => isNaN(x) ? x : parseInt(x));
        if (commandType.includes("Switch") && rawStringStops.includes(indexOrOldString)) {
            rawStringStops = rawStringStops.replace(indexOrOldString, endIndexOrString);
        } else if (commandType.includes("Add Stop") && indexOrOldString >= 0 && indexOrOldString < rawStringStops.length) {
            rawStringStops = rawStringStops.slice(0, indexOrOldString) + endIndexOrString + rawStringStops.slice(indexOrOldString);
        } else if (commandType.includes("Remove Stop") && indexOrOldString >= 0 && indexOrOldString < rawStringStops.length && endIndexOrString >= 0 && endIndexOrString < rawStringStops.length) {
            rawStringStops = rawStringStops.slice(0, indexOrOldString) + rawStringStops.slice(endIndexOrString + 1);
        }
        console.log(rawStringStops);
        command = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${rawStringStops}`);

}