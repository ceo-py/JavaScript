function beatingTheWorldRecord(array) {
    const [record, distance_meters, time_in_sec_per_meter] = array.map(x => Number(x));

    const slowing_time_per_fifthen_meter = 12.5;
    const slowing_time_meters = 15;
    const distance_need_to_swim = distance_meters * time_in_sec_per_meter;
    const slowing_time = Math.floor(distance_meters / slowing_time_meters) * slowing_time_per_fifthen_meter;
    const total_time = distance_need_to_swim + slowing_time;

    if (record > total_time) {
        console.log(`Yes, he succeeded! The new world record is ${total_time.toFixed(2)} seconds.`);
    } else {
        const diff = total_time - record;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

beatingTheWorldRecord(["10464", "1500", "20"])


// function beatingTheWorldRecord([record, distance_meters, time_in_sec_per_meter]) {
//   record = Number(record);
//   distance_meters = Number(distance_meters);
//   time_in_sec_per_meter = Number(time_in_sec_per_meter);
//
//   const slowing_time_per_fifthen_meter = 12.5;
//   const slowing_time_meters = 15;
//
//   const distance_need_to_swim = distance_meters * time_in_sec_per_meter;
//   const slowing_time = Math.floor(distance_meters / slowing_time_meters) * slowing_time_per_fifthen_meter;
//
//   const total_time = distance_need_to_swim + slowing_time;
//
//   if (record > total_time) {
//     console.log(`Yes, he succeeded! The new world record is ${total_time.toFixed(2)} seconds.`);
//   } else {
//     const diff = total_time - record;
//     console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
//   }
// }