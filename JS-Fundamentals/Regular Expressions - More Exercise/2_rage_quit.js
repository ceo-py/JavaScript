function processString(mainString) {
    const matches = mainString.match(/[a-zA-Z]+|\d+/g);

    let currentResult = "";
    let resultShow = "";

    for (const match of matches) {
        if (isNaN(match)) {
            currentResult += match.toUpperCase();
        } else {
            resultShow += currentResult.repeat(Number(match));
            currentResult = "";
        }
    }

    console.log(`Unique symbols used: ${[...new Set(resultShow)].length}`);
    console.log(resultShow);
}

// Example usage:
const mainString = "aSd2&5s@1";
processString(mainString);
