// project 1 - review slider
// storing all the data in an array
const reviews = [
    {
        name: "Klasique",
        job: "front-end developer",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quasi error rerum officia sequi, deserunt atque dignissimos quidem sapiente eius inventore velit saepe laboriosam suscipit quas quam recusandae voluptate ea?",
        img: "images/per1.jpg"
    },
    {
        name: "Eritten Gyau",
        job: "back-end developer",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati quibusdam placeat alias minima molestias natus repudiandae at quam laudantium rem quod quaerat, totam autem dolorum commodi maxime non quas?",
        img: "images/per2.jpg"
    },
    {
        name: "Rena Klasique",
        job: "technical engineer",
        msg: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, temporibus ad. Consequatur placeat, ducimus architecto unde rem nulla eaque eligendi nesciunt dolores culpa distinctio commodi veniam error consequuntur aperiam fugiat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum autem unde incidunt hic animi iste at vitae numquam qui eaque velit, ea atque fugiat sapiente dolore illo in nihil?",
        img: "images/per3.jpg"
    },
    {
        name: "Rose Owusuwaa",
        job: "quality assurance",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sunt amet veniam est totam labore voluptatibus magnam ratione, tenetur ut deserunt sint quos, nam atque. Excepturi dolorem quia delectus blanditiis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem iusto ut enim debitis consectetur est repellendus, quam quidem repudiandae deserunt provident qui delectus minima molestias, sit blanditiis voluptatum natus ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia ratione officiis itaque dicta, vel expedita sapiente error in. Illo dolorum saepe nisi eligendi mollitia excepturi? Eius unde eos debitis.",
        img: "images/per4.jpg"
    },
]
// variables
const img = document.querySelector("#img")
const name = document.querySelector(".name")
const job = document.querySelector(".job")
const msg = document.querySelector(".msg")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
// set initial data of person
let currentData = 0

// show 1st person review when loaded
window.addEventListener("DOMContentLoaded", showPerson)

function showPerson() {
    let data = reviews[currentData]
    img.src = data.img
    name.textContent = data.name
    job.textContent = data.job
    msg.textContent = data.msg
}

// the next and prev btn
prev.addEventListener("click", prevPerson)
next.addEventListener("click", nextPerson)

function prevPerson() {
    currentData--
    if(currentData < 0) {
        currentData = reviews.length -1
    }
    showPerson()
}
function nextPerson() {
    currentData++
    if(currentData > reviews.length -1) {
        currentData = 0
    }
    showPerson()
}

// change review every 10secs
setInterval(() => {
    nextPerson()
}, 10000);

// project 2 - modal
// variables
const popup = document.querySelector(".popup-bg")
const modalBtn = document.querySelector(".modal-btn")
const closeBtn = document.querySelector(".close-btn")

modalBtn.addEventListener("click", showPopup)
closeBtn.addEventListener("click", closePopup)

function showPopup() {
    popup.classList.add("active")
}
function closePopup() {
    popup.classList.remove("active")
}