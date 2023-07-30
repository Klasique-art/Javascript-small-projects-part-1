// declaring variables
const musicContainer = document.querySelector('.music-player-container')
const title = document.querySelector('#title')
const img = document.querySelector('#music-image')
const nextBtn = document.querySelector('.next')
const playBtn = document.querySelector('.play')
const prevBtn = document.querySelector('.prev')
const music = document.querySelector('#audio')
const progress = document.querySelector(".progress-inner")
const progressContainer = document.getElementById("progress")
const comment = document.getElementById("commentary")
const currentSong = document.getElementById("song")


let musicIndex = 3;
let songs = ['alicia keys - no one', 'juice wrld - feeling', 'sark - baby', 'Jidenna - bambi','alicia keys - secret']

// click events on buttons
// play
playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains("play")
    if(isPlaying){
        pauseMusic()
    }else{
        playMusic()
    }
})
// prev
prevBtn.addEventListener("click", prevSong)
// next
nextBtn.addEventListener("click", nextSong)
loadMusic(songs[musicIndex])
function loadMusic(song){
    title.innerText = song
    img.src =`images/${song}.jpg`
    music.src = `audio/${song}.mp3`
}

function playMusic(){
    // change the play btn to pause
    musicContainer.classList.add("play")
    playBtn.querySelector('.playing').classList.remove('fa-play')
    playBtn.querySelector('.playing').classList.add('fa-pause')
    comment.innerText = "now playing"
    currentSong.innerText = songs[musicIndex]
    music.play()
}
function pauseMusic(){
    // change the pause btn to play
    musicContainer.classList.remove("play")
    playBtn.querySelector('.playing').classList.add('fa-play')
    playBtn.querySelector('.playing').classList.remove('fa-pause')
    comment.innerText = "paused"
    currentSong.innerText = songs[musicIndex]
    music.pause()
}

function nextSong(){
    musicIndex++

    if(musicIndex > songs.length -1){
        musicIndex = 0
    }
    loadMusic(songs[musicIndex])
    playMusic()
}

function prevSong(){
    musicIndex--
    if(musicIndex < 0){
        musicIndex = songs.length -1
    }
    loadMusic(songs[musicIndex])
    playMusic()

}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressUpdate = (currentTime / duration) *100
    progress.style.width = `${progressUpdate}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = music.duration
    music.currentTime = (clickX / width) * duration
}

// should play next song when song ends
music.addEventListener("ended", nextSong)
// update progressbar when song plays
music.addEventListener("timeupdate", updateProgress)
// change progress anytime you want
progressContainer.addEventListener("click", setProgress)
