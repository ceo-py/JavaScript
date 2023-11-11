function tseamAccount(list) {
    const gamesOnAccount = list.shift().split(' ')
    const commands = {
        Install: (game) => {
            if (gamesOnAccount.indexOf(game) === - 1) gamesOnAccount.push(game)
        },
        Uninstall: (game) => {
            if (gamesOnAccount.indexOf(game) !== - 1) gamesOnAccount.splice(gamesOnAccount.indexOf(game), 1)
        },
        Update: (game) => {
            if (gamesOnAccount.indexOf(game) !== - 1) gamesOnAccount.push(gamesOnAccount.splice(gamesOnAccount.indexOf(game), 1)[0])
        },
        Expansion: (game, expansion) => {
            if (gamesOnAccount.indexOf(game) !== - 1) gamesOnAccount.splice(gamesOnAccount.indexOf(game) + 1, 0, `${game}:${expansion}`)
        }
    }
    for (const data of list) {
        if (data === 'Play!') break
        const [command, item] = data.split(' ')
        commands[command](...(item.includes('-') ? item.split('-') : [item]))
    }
    console.log(gamesOnAccount.join(' '))
}

tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])