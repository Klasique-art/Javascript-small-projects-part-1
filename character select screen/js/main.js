const imgBtn = document.querySelectorAll(".select-wrapper .img-box")
const charImage = document.querySelectorAll(".card")
const swish = document.querySelector(".swish")

imgBtn.forEach(btn=>{
    btn.addEventListener("mouseover", ()=>{
        charImage.forEach(image=>{
            image.className = "card"
        })
        document.getElementById(btn.dataset.id).className = "card active"
        swish.play()
        imgBtn.forEach(btn=>{
            btn.className = "img-box"
        })
        btn.className = "img-box active"
    })
})

// for(var i = 0; i < imgBtn.length; i++) {
//     imgBtn[i].addEventListener("mouseover",()=>{
//         for(var i = 0; i < charImage.length; i++){
//             charImage[i].className = "card"
//         }
//         console.log(imgBtn[i])
//     })
// }

