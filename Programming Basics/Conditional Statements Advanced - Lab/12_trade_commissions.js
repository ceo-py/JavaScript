function findCommission(array) {
    const [town, sales] = array.map(x => isNaN(x) ? x : Number(x))
    let commission = 0

    if (town === 'Sofia') {
        if (sales >= 0 && sales <= 500) {
            commission = 0.05
        } else if (sales <= 1000) {
            commission = 0.07
        } else if (sales <= 10000) {
            commission = 0.08
        } else if (sales > 10000) {
            commission = 0.12
        }
    } else if (town === 'Varna') {
        if (sales >= 0 && sales <= 500) {
            commission = 0.045
        } else if (sales <= 1000) {
            commission = 0.075
        } else if (sales <= 10000) {
            commission = 0.10
        } else if (sales > 10000) {
            commission = 0.13
        }
    } else if (town === 'Plovdiv') {
        if (sales >= 0 && sales <= 500) {
            commission = 0.055
        } else if (sales <= 1000) {
            commission = 0.08
        } else if (sales <= 10000) {
            commission = 0.12
        } else if (sales > 10000) {
            commission = 0.145
        }
    }

    if (commission && sales > 0) {
        console.log((sales * commission).toFixed(2))
    } else {
        console.log('error')
    }
}


// function findCommission(array) {
//     let [town, sales, commission] = [...array.map(x => isNaN(x) ? x : Number(x)), 0]
//     const commissionData = {
//         Sofia: [0.05, 0.07, 0.08, 0.12],
//         Varna: [0.045, 0.075, 0.10, 0.13],
//         Plovdiv: [0.055, 0.08, 0.12, 0.145],
//         range: [500, 1_000, 10_000, 1_000_000]
//     }
//     for (let i = 0; i < 4; i += 1) {
//         if (!commissionData.hasOwnProperty(town) || sales <= 0) break
//         if (sales <= commissionData.range[i]) {
//             commission = commissionData[town][i]
//             break
//         }
//     }
//     console.log(commission? (sales * commission).toFixed(2): 'error')
// }



findCommission(["Kaspichan", "-50"])
