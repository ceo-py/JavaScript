function howTomSleept(param) {
    const restDays = Number(param);

    const TOM_PLAYTIME = 30000;
    const PLAYTIME_REST_DAY = 127;
    const PLAYTIME_WORK_DAY = 63;

    const workDays = 365 - restDays;

    const timeWorkDays = workDays * PLAYTIME_WORK_DAY;
    const timeRestDays = restDays * PLAYTIME_REST_DAY;

    const totalPlaytime = timeRestDays + timeWorkDays;
    const result = Math.abs(totalPlaytime - TOM_PLAYTIME);

    const H = Math.floor(result / 60);
    const M = result % 60;

    if (TOM_PLAYTIME > totalPlaytime) {
        console.log("Tom sleeps well");
        console.log(`${H} hours and ${M} minutes less for play`);
    } else {
        console.log("Tom will run away");
        console.log(`${H} hours and ${M} minutes more for play`);
    }

}

howTomSleept(['20'])