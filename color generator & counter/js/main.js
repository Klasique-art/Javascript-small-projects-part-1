// challenge 1:
// color generator.
// variables
const color = document.querySelector(".color")
const body = document.querySelector(".container")
const changeColorBtn = document.querySelector(".color-btn")
// storing and array of all the possible characters of a hex number
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// change color on click
changeColorBtn.addEventListener("click", changeColor)
// change the color function
function changeColor() {
    let hexColor = "#"
    // since the color code is six figures, loop through the array 6 times
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum()]
        color.textContent = hexColor
        body.style.backgroundColor = hexColor
    }
}

// get a random index from the array
function getRandomNum() {
    return Math.floor(Math.random() * hex.length)
}
// change color every 5 seconds
setInterval(() => {
    changeColor()
}, 5000);

// project 2 - counter
// variables
const countValue = document.querySelector(".count-value")
const btns = document.querySelectorAll(".btn")
// set initial count
let count = 0
// loops through all the btns and make them function accordingly
btns.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let currentBtn = e.target.classList
        if(currentBtn.contains("decrease")) {
            count--
        } else if (currentBtn.contains("increase")) {
            count++
        } else {
            count = 0
        }
        if(count > 0) {
            countValue.style.color = "green"
        } else if (count === 0) {
            countValue.style.color = "#222"
        } else {
            countValue.style.color = "red"
        }
        countValue.textContent = count
    })
})

