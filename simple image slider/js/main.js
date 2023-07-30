// assign variables
const slideImage = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

slideImage.forEach((image,index)=>{
    image.style.left = `${index * 100}%`
})

let counter = 0

prevBtn.addEventListener("click", ()=>{
    counter--
    carousel()
})
nextBtn.addEventListener("click", nextImage)

function nextImage() {
    counter++
    carousel()
}

// function to move the images. this will be called by the buttons
function carousel(){
    if(counter < 0){
        counter = slideImage.length - 1
    }
    if (counter > slideImage.length - 1){
        counter = 0
    }
    slideImage.forEach(image=>{
        image.style.transform = `translateX(-${counter * 100}%)`
    })
}

// change image automatically
setInterval(() => {
    nextImage()
}, 5000);