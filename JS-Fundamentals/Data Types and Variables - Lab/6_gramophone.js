function gramophone(band, album, song) {
    const rotations = Math.ceil(((band.length * album.length) * song.length / 2) / 2.5)
    console.log(`The plate was rotated ${rotations} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')