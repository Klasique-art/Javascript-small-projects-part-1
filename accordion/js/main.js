// accordion
// variables
const title = document.querySelectorAll(".accordion-box")

title.forEach((heading)=>{
    const accordBtn = heading.querySelector(".acc-btn")
    accordBtn.addEventListener("click", ()=>{
        title.forEach((item)=>{
            item.classList.toggle("show-text")
            if(item !== heading){
                item.classList.remove("show-text")
            }
        })
    })

})

// using travesing the DOM
// accordBtn.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         let currentBtn = e.target.parentElement.parentElement
//         currentBtn.classList.toggle("show-text")
//     })
// })

