function heartDelivery(input) {
    let [neighborhood, jumpData, length, text] = [input.shift().split("@").map(Number), input.shift(), 0, null];

    while (jumpData !== "Love!") {
        length += parseInt(jumpData.split(" ")[1]);
        if (length >= neighborhood.length) length = 0;
        if (neighborhood[length] > 2) neighborhood[length] -= 2;
        else {
            if (neighborhood[length] !== 0) {
                neighborhood[length] -= 2;
                text = 'has'
            } else text = 'already had'
            console.log(`Place ${length} ${text} Valentine's day.`);
        }
        jumpData = input.shift();
    }

    console.log(`Cupid's last position was ${length}.`);

    const failedHouses = neighborhood.filter(x => x !== 0).length;

    console.log(failedHouses? `Cupid has failed ${failedHouses} places.`: "Mission was successful.");

}