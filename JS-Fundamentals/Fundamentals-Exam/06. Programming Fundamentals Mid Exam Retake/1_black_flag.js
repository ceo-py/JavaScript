function blackFlag(input) {
    const [days, dailyPlunder, expectedPlunder] = input.map(Number)
    let currentPlunder = 0;

    for (let day = 1; day <= days; day++) {
        let [thirdDay, fifthDay] = [0, 1];

        if (day % 3 === 0) thirdDay = dailyPlunder * 0.50;
        if (day % 5 === 0) fifthDay = 0.70;

        currentPlunder = (dailyPlunder + currentPlunder + thirdDay) * fifthDay;
    }

    if (currentPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${currentPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(currentPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }

}


//
// function solve(arr){
//     let plunderDays = Number(arr[0]);
//     let dailyPlunder = Number(arr[1]);
//     let goal = Number(arr[2]);
//
//     let curPlunder = 0;
//
//     for(let i = 1; i <= plunderDays; i++){
//         curPlunder += dailyPlunder;
//         if(i % 3 == 0){
//             curPlunder += dailyPlunder * 0.5;
//         }if(i % 5 == 0){
//             curPlunder = curPlunder * 0.7;
//         }
//
//     }
//
//     if( curPlunder >= goal){
//         console.log(`Ahoy! ${curPlunder.toFixed(2)} plunder gained.`);
//     }else{
//         let precentage = curPlunder / goal * 100;
//         precentage = precentage.toFixed(2)
//         console.log(`Collected only ${precentage}% of the plunder.`);
//     }
//
// }
