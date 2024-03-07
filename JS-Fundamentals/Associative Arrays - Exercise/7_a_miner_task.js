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



// function aMinerTask(resources) {
//     const result = new Map();
//     for (let i = 0; i < resources.length; i += 2) {
//         const resource = resources[i];
//         const quantity = Number(resources[i + 1]);
//         const currentQuantity = result.get(resource) || 0;
//         result.set(resource, currentQuantity + quantity);
//     }
//     result.forEach((quantity, resource) => console.log(`${resource} -> ${quantity}`));
// }