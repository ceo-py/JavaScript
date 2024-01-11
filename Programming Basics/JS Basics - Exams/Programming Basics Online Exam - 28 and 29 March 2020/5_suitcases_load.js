function suitcaseLoad(param) {
    let luggedCapacity = Number(param.shift());
    let lugged = param.shift();
    let suitcases = 0;

    while (lugged !== "End") {
        lugged = parseFloat(lugged);
        suitcases += 1;
        let addedLuggedSpace = 0;

        if (suitcases % 3 === 0) {
            addedLuggedSpace = lugged * 0.10;
        }

        luggedCapacity -= lugged + addedLuggedSpace;

        if (luggedCapacity <= 0) {
            if (luggedCapacity !== 0) {
                suitcases -= 1;
            }
            console.log("No more space!");
            break;
        }

        lugged = param.shift();
    }

    if (lugged === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
    }

    console.log(`Statistic: ${suitcases} suitcases loaded.`);
}

suitcaseLoad([])