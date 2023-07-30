// assigning variables
const playerContainer = document.getElementById("player-container")
const currentSongIndex = document.getElementById("current-song-index")
const totalSongs = document.getElementById("all-songs-number")
const curentVolumeNumber = document.getElementById("volume-number")
const muteBtn = document.getElementById("mute")
const VolumeSlider = document.getElementById("volume-control")
const songName = document.getElementById("song-name")
const songImg = document.getElementById("song-img")
const artistName = document.getElementById("artist-name")
const prevBtn = document.getElementById("prev")
const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("next")
const autoplayBtn = document.getElementById("autoplay")
const musicSlider = document.getElementById("music-slider")

// create audio element
let track = document.createElement("audio")

let timer;
let isPlaying = false
let songIndex = 0

let allSongs = [
    {
        artist: "Whitney Houston",
        title: "always love you",
        path: "audio/always love you.mp3",
        img: "images/anime_6.jpg"
    },
    {
        artist: "Aqua",
        title: "barbie girl",
        path: "audio/barbie girl.mp3",
        img: "images/anime_7.jpg"
    },
    {
        artist: "Akon",
        title: "blame it on me",
        path: "audio/blame it on me.mp3",
        img: "images/anime_8.jpg"
    },
    {
        artist: "Nelly ft Rolland",
        title: "dilenma",
        path: "audio/dilenma.mp3",
        img: "images/anime_9.jpg"
    },
    {
        artist: "Whitney Houston",
        title: "always love you",
        path: "audio/always love you.mp3",
        img: "images/anime_10.jpg"
    },
    {
        artist: "Amy Grant",
        title: "el shaddai",
        path: "audio/el shaddai.mp3",
        img: "images/anime_11.jpg"
    },
    {
        artist: "Ariana Grande",
        title: "god is a woman",
        path: "audio/god is a woman.mp3",
        img: "images/anime_12.jpg"
    },
    {
        artist: "Beyonce",
        title: "halo",
        path: "audio/halo.mp3",
        img: "images/anime_13.jpg"
    },
    {
        artist: "Beyonce",
        title: "irreplaceable",
        path: "audio/irreplaceable.mp3",
        img: "images/anime_14.jpg"
    },
    {
        artist: "Bruno Mars",
        title: "just the way you are",
        path: "audio/just the way you are.mp3",
        img: "images/anime_15.jpg"
    },
    {
        artist: "Nazareth",
        title: "love hurts",
        path: "audio/love hurts.mp3",
        img: "images/anime_16.jpg"
    },
    {
        artist: "Celine Deon",
        title: "love you more",
        path: "audio/love you more.mp3",
        img: "images/anime_17.jpg"
    },
    {
        artist: "Beyonce",
        title: "single ladies",
        path: "audio/single ladies.mp3",
        img: "images/anime_18.jpg"
    },
    {
        artist: "Celine Deon",
        title: "new day come",
        path: "audio/new day come.mp3",
        img: "images/anime_19.jpg"
    },
    {
        artist: "Zedd ft Alessia Cara",
        title: "stay",
        path: "audio/stay.mp3",
        img: "images/anime_20.jpg"
    },
    {
        artist: "Shania Twain",
        title: "you still the one",
        path: "audio/you still the one.mp3",
        img: "images/anime_2.jpg"
    }
]

// add avent listeners
prevBtn.addEventListener("click", prevSong)
playBtn.addEventListener("click", simplyPlay)
nextBtn.addEventListener("click", nextSong)
autoplayBtn.addEventListener("click", autoplay)
VolumeSlider.addEventListener("change", changeVolume)
musicSlider.addEventListener("change", changeDuration)
muteBtn.addEventListener("click", muteVolume)
track.addEventListener("ended", nextSong)

// function to load music
function loadMusic(songIndex){
    clearInterval(timer)
    resetSlider()
    songName.innerHTML = allSongs[songIndex].title
    artistName.innerText = allSongs[songIndex].artist
    songImg.src = allSongs[songIndex].img
    track.src = allSongs[songIndex].path
    currentSongIndex.innerText = songIndex + 1
    totalSongs.innerText = allSongs.length

    timer = setInterval(updateSlider, 1000)
    track.load()
}
loadMusic(songIndex)

// check if the song is playing or not
function simplyPlay(){
    if(isPlaying == false){
        playMusic()
    }else{
        pauseMusic()
    }
}

// fn to play the song
function playMusic(){
    track.play()
    playerContainer.classList.add("play")
    playBtn.innerHTML = "<i class='fas fa-pause'></i>"    
    isPlaying = true
}
// fn to pause the song
function pauseMusic(){
    track.pause()
    isPlaying = false
    playerContainer.classList.remove("play")
    playBtn.innerHTML = "<i class='fas fa-play'></i>"    
}
// fn to play prev song
function prevSong(){
    songIndex--
    if(songIndex < 0){
        songIndex = allSongs.length -1
        loadMusic(songIndex)
        playMusic()
    }else{
        loadMusic(songIndex)
        playMusic()
    }
}
// fn to play next song
function nextSong(){
    if(songIndex < allSongs.length -1){
        songIndex++
        loadMusic(songIndex)
        playMusic()
    }else{
        songIndex = 0
        loadMusic(songIndex)
        playMusic()
    }
}
// fn for autoplay
function autoplay(){
    track.addEventListener("ended", ()=>{
        nextSong()
    })
    let autoplayToggle = document.querySelector(".autoplay-toggle")
    autoplayToggle.classList.toggle("active")
}
curentVolumeNumber.innerHTML = 90
// fn to change volume
function changeVolume(){
    curentVolumeNumber.innerHTML = VolumeSlider.value
    track.volume = VolumeSlider.value / 100
}
// changing the music slider
function changeDuration(){
    sliderControl = track.duration * (musicSlider.value / 100)
    track.currentTime = sliderControl
}
// updating the slider with the music time
function updateSlider(){
    let currentPosition = 0
    if(!isNaN(track.duration)){
        currentPosition = track.currentTime * (100 / track.duration)
        musicSlider.value = currentPosition
    }
}
// reset music slider
function resetSlider(){
    musicSlider.value = 0
}
// fn to mute volume
function muteVolume(){
    track.volume = 0
    VolumeSlider.value = 0
    curentVolumeNumber.innerHTML = 0
}

