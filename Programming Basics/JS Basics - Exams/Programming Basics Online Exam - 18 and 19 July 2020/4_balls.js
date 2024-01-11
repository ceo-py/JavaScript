function balls(param) {
    const ballNumbers = Number(param.shift());

    let totalPoints = 0;
    let ballRed = 0;
    let ballOrange = 0;
    let ballYellow = 0;
    let ballWhite = 0;
    let otherColors = 0;
    let dividedBlack = 0;

    for (let ball = 0; ball < ballNumbers; ball++) {
        const ballColor = param.shift();

        if (ballColor === 'red') {
            totalPoints += 5;
            ballRed += 1;
        } else if (ballColor === 'orange') {
            totalPoints += 10;
            ballOrange += 1;
        } else if (ballColor === 'yellow') {
            totalPoints += 15;
            ballYellow += 1;
        } else if (ballColor === 'white') {
            totalPoints += 20;
            ballWhite += 1;
        } else if (ballColor === 'black') {
            dividedBlack += 1;
            totalPoints -= Math.ceil(totalPoints / 2);
        } else {
            otherColors += 1;
        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${ballRed}`);
    console.log(`Orange balls: ${ballOrange}`);
    console.log(`Yellow balls: ${ballYellow}`);
    console.log(`White balls: ${ballWhite}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${dividedBlack}`);

}

balls([])