function aMinerTask(resources) {
    const result = []
    for (let i = 0; i < resources.length; i += 2) {
        const [resource, quantity] = [resources[i], Number(resources[i + 1])]
        const foundResource = result.filter(x => x.resource === resource)[0]
        if (!foundResource) result.push({resource, quantity})
        else foundResource.quantity += quantity
    }
    result.forEach(x => console.log(`${x.resource} -> ${x.quantity}`))
}

aMinerTask([
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
)