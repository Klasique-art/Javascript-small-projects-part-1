const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const decreaseBtn = document.getElementById("decrease")
const increaseBtn = document.getElementById("increase")
const sizeBox = document.getElementById("size")
const colorPicker = document.getElementById("color")
const clearBtn = document.getElementById("clear")
// size of brush
let size = 15;
// wether the mouse is clicked or not on the drawing board
let isPressed = false
// set color of brush
let color = "black"
// drawing of lines
let x = undefined
let y = undefined

// canvas drawing platform
canvas.addEventListener("mousedown", (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})
canvas.addEventListener("mouseup", (e) => {
    isPressed = false
    x = undefined
    y = undefined
})
canvas.addEventListener("mousemove", (e) => {
    if (isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }
})

// function for drawing circle
function drawCircle(x, y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

// function for drawing line
function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.stroke()
}

// buttons to adjust size of brush
decreaseBtn.addEventListener("click", () => {
    size -= 5
    if (size < 5) {
        size = 5
    }
    adjustSizeOfBrush()
})
increaseBtn.addEventListener("click", () => {
    size += 5
    if (size > 50) {
        size = 50
    }
    adjustSizeOfBrush()
}) 
// color picker
colorPicker.addEventListener("change", (e) => {
    color = e.target.value
})

// display the size
function adjustSizeOfBrush(){
    sizeBox.innerText = size
}

//clear the board
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}) 
