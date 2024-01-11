function seriesCalculator(param) {
    const [movie_serial, movie_seasons, movie_episodes, movie_length] = param.map(x => isNaN(x) ? x : Number(x));

    const eposod_with_ads = 0.20 * movie_length;
    const episode_full_time = eposod_with_ads + movie_length;
    const extra_time_per_season = movie_seasons * 10;

    const total_watch_time = ((episode_full_time * movie_episodes) * movie_seasons) + extra_time_per_season;

    console.log(`Total time needed to watch the ${movie_serial} series is ${Math.floor(total_watch_time)} minutes.`);

}

seriesCalculator([])