function gramophone(bandName, albumName, songname){
    let count = (bandName.length * albumName.length) * (songname.length)/2
    let rotation = Math.ceil(count/2.5)


    console.log(`The plate was rotated ${rotation} times.`);


}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')