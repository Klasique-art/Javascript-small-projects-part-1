const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const colorBox = document.querySelector(".pallete")
const color = document.querySelector(".color")
const button = document.getElementById("generate-btn")

button.addEventListener("click", function(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    // hexColor += hex[getRandomNumber()];
    console.log(hexColor);
    color.textContent = hexColor;
    colorBox.style.backgroundColor = hexColor;
    // document.body.style.backgroundColor = hexColor;
});

// function to get random number 
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}