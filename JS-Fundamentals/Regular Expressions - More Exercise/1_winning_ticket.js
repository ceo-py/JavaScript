function winningTicket(tickets) {
    const [symbols, correctTicketLen] = [['@', '#', '$', '^'], 10]

    function findMostSymbols(ticket) {
        return Object.entries(symbols.reduce((count, symbol) => {
            count[symbol] = ticket.split(symbol).length - 1
            return count
        }, {})).reduce((max, current) => current[1] > max[1] ? current : max)[0]
    }

    function findMostInARow(ticket, symbol) {
        return Math.max(...ticket.split('').map(char => char === symbol ? '1' : '0').join('').split('0').map(run => run.length))
    }

    tickets.split(', ').forEach(ticket => {
        ticket = ticket.trim()

        if (ticket.length !== 20) {
            console.log("invalid ticket")
            return;
        }

        const typeSymbol = findMostSymbols(ticket.slice(0, correctTicketLen))
        const winnings = Math.min(findMostInARow(ticket.slice(0, correctTicketLen), typeSymbol),
            findMostInARow(ticket.slice(correctTicketLen), typeSymbol)
        )

        if (winnings === 10)  console.log(`ticket "${ticket}" - 10${typeSymbol} Jackpot!`)
        else if (winnings >= 6) console.log(`ticket "${ticket}" - ${winnings}${typeSymbol}`)
        else console.log(`ticket "${ticket}" - no match`)
    })
}