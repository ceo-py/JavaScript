function trekkingMania(param) {
    const numberClaimingGroup = Number(param.shift());

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let group = 0; group < numberClaimingGroup; group++) {
        const peopleInGroup = Number(param.shift());

        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            monblan += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kilimanjaro += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else if (peopleInGroup >= 41) {
            everest += peopleInGroup;
        }
    }

    const totalPeople = musala + monblan + kilimanjaro + k2 + everest;

    const percentMusala = (musala / totalPeople) * 100;
    const percentMonblan = (monblan / totalPeople) * 100;
    const percentKilimanjaro = (kilimanjaro / totalPeople) * 100;
    const percentK2 = (k2 / totalPeople) * 100;
    const percentEverest = (everest / totalPeople) * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentKilimanjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);

}

trekkingMania([])