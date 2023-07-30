const passwordEl = document.getElementById("password")
const copyEl = document.getElementById("copy")
const lengthEl = document.getElementById("password-length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const generateEl = document.getElementById("generate")

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "~!@#$%^&*()_+{}[]:;/|?<>-="

// functions for generating random text
function getRandomUppercaseLetters(){
    return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
}
function getRandomLowercaseLetters(){
    return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
}
function getRandomNumbers(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getRandomSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// generate password
function generatePassword(){
    const len = lengthEl.value
    let password = ""
    for(let i = 0; i < len; i++){
        const x = generateX()
        password += x
    }
    passwordEl.innerText = password
}

function generateX(){
    const xs = []
    if(uppercaseEl.checked){
        xs.push(getRandomUppercaseLetters())
    }
    if(lowercaseEl.checked){
        xs.push(getRandomLowercaseLetters())
    }
    if(numberEl.checked){
        xs.push(getRandomNumbers())
    }
    if(symbolEl.checked){
        xs.push(getRandomSymbols())
    }
    if (xs.length === 0){
        return ""
    }
    return xs[Math.floor(Math.random() * xs.length)]
}

generateEl.addEventListener("click", generatePassword)

// copy the password being generated
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = passwordEl.innerText

    if(!password){
        return
    }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("password copied to clipboard")
})