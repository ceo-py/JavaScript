function gameNumberWaRS(param) {
    let [playerOne, playerTwo, playerOneCard, playerOneScore, playerTwoScore, winner, winnerPoints] = [param.shift(), param.shift(), param.shift(), 0, 0, null, null]
    while (playerOneCard !== 'End of game') {
        playerOneCard = Number(playerOneCard)
        const playerTwoCard = Number(param.shift())

        const differenceScore = Math.abs(playerOneCard - playerTwoCard)

        if (playerOneCard > playerTwoCard) playerOneScore += differenceScore
        else if (playerOneCard < playerTwoCard) playerTwoScore += differenceScore

        else {
            playerOneCard = Number(param.shift())
            const playerTwoCard = Number(param.shift())


            if (playerOneCard > playerTwoCard) {
                winner = playerOne
                winnerPoints = playerOneScore + differenceScore
            } else if (playerOneCard < playerTwoCard) {
                winner = playerTwo
                winnerPoints = playerTwoScore + differenceScore
            }
            console.log('Number wars!')
            console.log(`${winner} is winner with ${winnerPoints} points`)
            break
        }
        playerOneCard = param.shift()
    }
    if (!winner) {
        console.log(`${playerOne} has ${playerOneScore} points`)
        console.log(`${playerTwo} has ${playerTwoScore} points`)
    }
}

gameNumberWaRS(['Elena', 'Simeon', 6, 3, 2, 5, 8, 9, 'End of game'])