function movieDay(param) {
    const [time_for_pictures, number_scenes, time_for_a_scenes] = param.map(Number);

    const prepering_terrain = time_for_pictures * 0.15;
    const time_take_to_shoot_the_scenes = number_scenes * time_for_a_scenes;
    const time_needed = time_take_to_shoot_the_scenes + prepering_terrain;

    const time_left = Math.abs(time_for_pictures - time_needed);

    if (time_for_pictures <= time_needed) {
        console.log(`Time is up! To complete the movie you need ${Math.round(time_left)} minutes.`);
    } else {
        console.log(`You managed to finish the movie on time! You have ${Math.round(time_left)} minutes left!`);
    }

}

movieDay([])