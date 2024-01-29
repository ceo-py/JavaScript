function flightSchedule(array) {
    const [sectorFlights, statusChange, status, allFlights] = [...array, {}]

    sectorFlights.forEach(x => {
        const [flightCode, ...Destination] = x.split(' ')
        allFlights[flightCode] = {Destination: Destination.join(' '), Status: null}
    })
    statusChange.forEach(x => {
        const [flightCode, Status] = x.split(' ')
        if (allFlights[flightCode]) allFlights[flightCode] = {...allFlights[flightCode], Status}
    })

    status.forEach(s => {
        Object.values(allFlights).forEach(x => {
            if (s === x.Status) console.log(x)
            else if (s === 'Ready to fly' && !x.Status) {
                x.Status = s
                console.log(x)
            }
        })
    })
}

flightSchedule([['WN269 Delaware',
   'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK330 Cancelled'],
	['Ready to fly']
])