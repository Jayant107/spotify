let database = [
    {
        id: 0,
        name: "Kadak",
        song: "songs/song1.mp3", 
        cover: "https://images.hungama.com/c/1/b5c/08d/98186826/98186826_300x300.jpg"
    },
    {
        id: 1,
        name: "Dreamer",
        song: "songs/song2.mp3", 
        cover: "https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg"
    },
    {
        id: 2,
        name: "Are You With Me",
        song: "songs/song3.mp3", 
        cover: "https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Royalty",
        song: "songs/song4.mp3", 
        cover: "https://wallpapers.com/images/featured/4k-oaax18kaapkokaro.jpg"
    },
    {
        id: 4,
        name: "Dounut",
        song: "songs/song5.mp3", 
        cover: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    {
        id: 5,
        name: "TVARI - Hawaii Vacation",
        song: "songs/song6.mp3", 
        cover: "https://img.freepik.com/premium-photo/wallpapers-iphone-is-about-blue-red-colors_889868-50.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais"
    },
    {
        id: 6,
        name: "Summer's End",
        song: "songs/song7.mp3", 
        cover: "https://img.freepik.com/premium-photo/beautiful-monitor-geometric-abstract-colorful-art-image-ai-generated-art_843679-2388.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais"
    },
    {
        id: 7,
        name: "More",
        song: "songs/song8.mp3", 
        cover: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/506/325x325/more-1692835249-PrGpaSvcIz.jpg"
    },
    {
        id: 6,
        name: "Summer's End",
        song: "songs/song7.mp3", 
        cover: "https://img.freepik.com/premium-photo/beautiful-monitor-geometric-abstract-colorful-art-image-ai-generated-art_843679-2388.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais"
    },
    {
        id: 7,
        name: "More",
        song: "songs/song8.mp3", 
        cover: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/506/325x325/more-1692835249-PrGpaSvcIz.jpg"
    },
    {
        id: 6,
        name: "Summer's End",
        song: "songs/song7.mp3", 
        cover: "https://img.freepik.com/premium-photo/beautiful-monitor-geometric-abstract-colorful-art-image-ai-generated-art_843679-2388.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=ais"
    },
    {
        id: 7,
        name: "More",
        song: "songs/song8.mp3", 
        cover: "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/506/325x325/more-1692835249-PrGpaSvcIz.jpg"
    },
]

let songPanel = document.querySelector(".song-panel")
let songListPanel = document.querySelector(".song-list-panel")
let recentListPanel = document.querySelector(".recent-tab")
let prev = document.querySelector(".ri-arrow-left-double-line")
let next = document.querySelector(".ri-arrow-right-double-line")
let playPause = document.querySelector(".play-pause")
let progressBar = document.querySelector("input")
let counter = 0
let audioElement  = new Audio(`${database[counter].song}`)
let recent = [];


let flag = false
playPause.addEventListener("click", ()=>{
    // let mainSong = document.getElementById("myAudio")
    
    if(!flag){
        document.querySelector(".ri-play-fill").style.display = "none"
        document.querySelector(".ri-pause-fill").style.display = "block"
        audioElement.play()
        flag = true
    }
    else{
        document.querySelector(".ri-play-fill").style.display = "block"
        document.querySelector(".ri-pause-fill").style.display = "none"
        audioElement.pause()
        flag = false
    }
    if(!(recent.includes(database[counter])) && flag) {
        if(recent.length == 5){
            recent.reverse()
            recent.pop()
            recent.reverse()
        }
        recent.push(database[counter])
        console.log(recent)
        setRecent()
    }
})

next.addEventListener("click", ()=>{
    if(counter < database.length-1) counter++
    audioElement.pause()
    audioElement = new Audio(`${database[counter].song}`)
    let node = document.querySelector("#main-song")
    node.parentNode.removeChild(node)
    if(flag){
        document.querySelector(".ri-play-fill").style.display = "block"
        document.querySelector(".ri-pause-fill").style.display = "none"
        flag = false
    }
    playMainSong()
})


audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value = progress
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100
})

prev.addEventListener("click", ()=>{
    if(counter > 0) counter--
    audioElement.pause()
    audioElement = new Audio(`${database[counter].song}`)
    let node = document.querySelector("#main-song")
    node.parentNode.removeChild(node)
    if(flag){
        document.querySelector(".ri-play-fill").style.display = "block"
        document.querySelector(".ri-pause-fill").style.display = "none"
        flag = false
    }
    playMainSong()
})

songListPanel.addEventListener("click", (e)=>{
    console.log(e.target.id)
    counter = Number(e.target.id)
    audioElement.pause()
    audioElement = new Audio(`${database[counter].song}`)
    let node = document.querySelector("#main-song")
    node.parentNode.removeChild(node)
    if(flag){
        document.querySelector(".ri-play-fill").style.display = "block"
        document.querySelector(".ri-pause-fill").style.display = "none"
        flag = false
    }
    playMainSong()
})
// recentListPanel.addEventListener("click", (e)=>{
//     console.log(e)
//     counter = Number(e.target.id)
//     audioElement.pause()
//     audioElement = new Audio(`${database[counter].song}`)
//     let node = document.querySelector("#main-song")
//     node.parentNode.removeChild(node)
//     if(flag){
//         document.querySelector(".ri-play-fill").style.display = "block"
//         document.querySelector(".ri-pause-fill").style.display = "none"
//         flag = false
//     }
//     playMainSong()
// })


const playMainSong = () =>{
    let div = document.createElement("div")
    div.setAttribute("id","main-song")
    let img = document.createElement("img")
    img.setAttribute("src", `${database[counter].cover}`)
    img.setAttribute("id", "cover-img")
    // let audio = document.createElement("audio")
    // audio.setAttribute("id", "myAudio")
    // let source = document.createElement('source')
    // source.setAttribute("src", `${database[counter].song}`)
    // audio.appendChild(source)
    div.appendChild(img)
    // div.appendChild(audio)
    songPanel.appendChild(div)
}

const renderSongs = () =>{
    database.map((e, idx)=>{
        let div = document.createElement("div")
        div.classList.add("song-item")
        let img = document.createElement("img")
        img.setAttribute("src", `${e.cover}`)
        let span = document.createElement("span")
        span.innerHTML = `${e.name}`
        let layer = document.createElement("div")
        layer.setAttribute("id", `${idx}`)
        layer.setAttribute("class", "layer")
        div.appendChild(img)
        div.appendChild(span)
        div.appendChild(layer)
        songListPanel.appendChild(div)
    })
}


const renderRecentSongs = () =>{
    recent.map((e, idx) =>{
        let div = document.createElement("div")
        div.classList.add("song-item")
        let img = document.createElement("img")
        img.setAttribute("src", `${e.cover}`)
        let span = document.createElement("span")
        span.innerHTML = `${e.name}`
        let layer = document.createElement("div")
        layer.setAttribute("id", `${idx}`)
        layer.setAttribute("class", "layer")
        div.appendChild(img)
        div.appendChild(span)
        div.appendChild(layer)
        recentListPanel.appendChild(div)
    })
}

const getRecent = () =>{
    let saved = JSON.parse(localStorage.getItem("key"))
    if(saved && saved != 0){
        recent = saved
    }
    console.log("get recent called")

}
let check = false
document.querySelector(".ri-history-fill").addEventListener("click", ()=>{
    if(!check) {
        recentListPanel.style.display = "block";
        check = true
    }
    else {
        recentListPanel.style.display = "none";
        check = false
    }
})
   

const setRecent = () =>{
    localStorage.setItem("key", JSON.stringify(recent))
    console.log("set recent called")
}

getRecent()

renderRecentSongs()
renderSongs()
playMainSong()
