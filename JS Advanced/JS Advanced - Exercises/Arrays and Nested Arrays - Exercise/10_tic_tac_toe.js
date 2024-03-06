function ticTacToe(moves) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let players = ['X', 'O'];

    // moves = moves.filter((move, i) => {
    //     let [row, col] = move.split(' ').map(Number);
    //     if (dashboard[row][col] !== false) {
    //         console.log("This place is already taken. Please choose another!");
    //         return false;
    //     }
    //     dashboard[row][col] = players[i % 2];
    //     return true;
    // });

    for (let i = 0; i < moves.length; i++) {
        let [row, col] = moves[i].split(' ').map(Number);
        let player = players[i % 2];
        dashboard[row][col] = player;

        for (let j = 0; j < 3; j++) {
            if (
                dashboard[j][0] === player && dashboard[j][1] === player && dashboard[j][2] === player ||
                dashboard[0][j] === player && dashboard[1][j] === player && dashboard[2][j] === player
            ) {
                console.log(`Player ${player} wins!`);
                console.log(dashboard.map(row => row.join('\t')).join('\n'));
                return;
            }
        }

        if (dashboard[0][0] === player && dashboard[1][1] === player && dashboard[2][2] === player ||
            dashboard[0][2] === player && dashboard[1][1] === player && dashboard[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            console.log(dashboard.map(row => row.join('\t')).join('\n'));
            return;
        }
    }

    console.log("The game ended! Nobody wins :(");
    console.log(dashboard.map(row => row.join('\t')).join('\n'));
}

ticTacToe(["0 1",
 "0 0",
 "0 2",
 "2 0",
 "1 0",
 "1 2",
 "1 1",
 "2 1",
 "2 2",
 "0 0"])