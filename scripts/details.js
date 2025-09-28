addEventListener("DOMContentLoaded", async function(){
    //grab search params from url after "?"
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    console.log(songID)

    const response = await fetch("https://backend-255-fa25-m6.onrender.com/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h3>Artist = ${song.artist} </h3>
        <p>Popularity = ${song.popularity} </p>
        <p>ReleaseDate = ${song.releaseDate} </p>
    `
    document.querySelector("div").innerHTML = html

})