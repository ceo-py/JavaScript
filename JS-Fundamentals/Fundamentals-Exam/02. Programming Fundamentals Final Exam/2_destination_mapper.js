function destinationMapper(mainString) {
    let [patterns, listResult, totalPoints, match] = [/([=/])([A-Z][a-zA-Z]{2,})\1/g, [], 0, null];
    while ((match = patterns.exec(mainString)) !== null) {
        listResult.push(match[2]);
        totalPoints += match[2].length;
    }

    console.log(`Destinations: ${listResult.join(', ')}`);
    console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")