function songs(array) {
    array.shift()
    const [songsToShow, songsArray] = [array.pop(), []]

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    array.forEach(x => songsArray.push(new Song(...x.split('_'))))
    Object.keys(songsArray).forEach(x => songsArray[x].typeList === songsToShow || songsToShow === 'all'? console.log(songsArray[x].name): '')
}

songs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite'])