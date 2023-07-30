// blackjack game BJ stangs for blackjack fn stands for function in comments
// object to store information about you and the dealer
let BJgame = {
    'you': {'scoreSpan': '#your-result', 'div': '#your-BJ-platform', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-result', 'div': '#dealer-BJ-platform', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q','K', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'money': 0,
    'resultShow': false,
    'isStand': false,
    'turnIsOver': false
}
// assigning your info to a variable
const YOU = BJgame['you']
const DEALER = BJgame['dealer']

// assigning your sounds to a variable
const hitSound = new Audio("sounds/swish.m4a")
const winSound = new Audio("sounds/cash.mp3")
const bustSound = new Audio("sounds/aww.mp3")

// assigning buttons variables
const hitBtn = document.getElementById("bj-hit-btn") 
const standBtn = document.getElementById("bj-stand-btn") 
const dealBtn = document.getElementById("bj-deal-btn") 

// getting the buttons to perform functions onclick
hitBtn.addEventListener("click", BJHit)
standBtn.addEventListener("click", dealerLogic)
// dealBtn.addEventListener("click", BJDeal)

// adding keypress to the document so that player can activate the Hit button by pressing h and the stand button by pressing s on the keyboard
document.addEventListener("keypress", function(e){
    presskey(e.key)
})

// function to detect keypress
function presskey(key){
    if(key == "h"){
        BJHit()
    }
    else if(key == "s"){
        dealerLogic()
    }
}

// fn for the hit button
function BJHit() {

    if(BJgame['isStand'] === false && (BJgame['resultShow'] === false)){

        let card = randomCard()
        drawCard(card, YOU)
        updateScore(card, YOU)
        showScore(YOU)
    }

}
// fn to get a random number from 0-13 to so random cards are drawn
function randomCard(){
    let randomIndex =Math.floor(Math.random() * 13)
    return BJgame['cards'][randomIndex]
}
// fn to reset the game after each round
function BJDeal() {
   
    if(BJgame['turnIsOver'] === true){

        BJgame['isStand'] = false

        // remove all images
        let yourImages = document.querySelector("#your-BJ-platform").querySelectorAll("img")
        let dealerImages = document.querySelector("#dealer-BJ-platform").querySelectorAll("img")
    
        for(let i = 0; i < yourImages.length; i++){
            yourImages[i].remove()
        }
        for(let i = 0; i < dealerImages.length; i++){
            dealerImages[i].remove()
        }
        // reset the scores to zero
        YOU["score"] = 0 
        DEALER["score"] = 0 

        document.getElementById("your-result").textContent = 0
        document.getElementById("dealer-result").textContent = 0

        document.getElementById("your-result").style.color = "#fff"
        document.getElementById("dealer-result").style.color = "#fff"

        document.getElementById("result-display").textContent = "Let's Play"
        document.getElementById("result-display").style.color = "black"

        BJgame['turnIsOver'] = true

    }

}

// fn to draw card
function drawCard(card, activePlayer){
    if(activePlayer['score'] <= 21){
        let cardImg = document.createElement("img")
        cardImg.src = `images/${card}.png`
        cardImg.style.background = "white"
        cardImg.height = "150"
        document.querySelector(activePlayer['div']).appendChild(cardImg)
        hitSound.play()
    }
}

// fn to update the score of the cards drawn
function updateScore(card, activePlayer){
    // rule of Ace: if adding 11 keeps you below 21, add 11 else add 1
    if(card === 'A'){
        if(activePlayer['score'] + BJgame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += BJgame['cardsMap'][card][1]
        } else {
            activePlayer['score'] += BJgame['cardsMap'][card][0]
        } 
    } else {
        activePlayer['score'] += BJgame['cardsMap'][card]
    }
}

// fn to show the score updated
function showScore(activePlayer){
    
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent =  "BUST!"
        document.querySelector(activePlayer['scoreSpan']).style.color = "rgb(77, 2, 2)"
        setTimeout(dealerLogic, 1000)
    }
    else if(activePlayer['score'] === 21){
        document.querySelector(activePlayer['scoreSpan']).textContent =  "21 Perfect!"
        document.querySelector(activePlayer['scoreSpan']).style.color = "#ff8c3b"
        document.getElementById("money").textContent = BJgame['money'] + 200000
        setTimeout(dealerLogic, 1000)
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}

// the BOT fn to wait for a second and play automatically bit by bit
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

// fn to create the dealer player logic. This fn is called by the stand button

async function dealerLogic(){

    BJgame['resultShow'] === false
    BJgame['isStand'] = true

    while(DEALER['score'] < 16 && (BJgame['isStand'] === true)){

        if(BJgame['resultShow'] === false){

            let card = randomCard()
            drawCard(card, DEALER)
            updateScore(card, DEALER)
            showScore(DEALER)
            await wait(1000)
        }

    }

    BJgame["turnIsOver"] = true;
    BJgame['isStand'] = false
    let winner = determineWinner()
    showResult(winner)

    setTimeout(BJDeal, 2800)

}
// fn to compute winner and return who won
function determineWinner(){

    let winner

    if(YOU['score'] <= 21){

        // If you have higher score than dealer OR when dealer busts but you have 21 or less
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            winner = YOU
            BJgame['wins']++
            BJgame['money'] += 100000

        } else if(YOU['score'] < DEALER['score']){
            winner = DEALER
            BJgame['losses']++
            BJgame['money'] += -20000

        } else if(YOU['score'] === DEALER['score']){
            BJgame['draws']++
        }

        // if you busts but dealer doesn't
    }
    else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        BJgame['losses']++
        winner = DEALER
        BJgame['money'] += -20000

        // if you and the dealer bust
    }
    else if(YOU['score'] > 21 && DEALER['score'] > 21){
        BJgame['draws']++

        // if you get exactly 21
    }
    else if(YOU['score'] === 21){
        BJgame['money'] += 200000
    }


    return winner
}

// the money still displays even when you refresh the page
let chipsFromLocalStorage = JSON.parse( localStorage.getItem("chips") )
if(chipsFromLocalStorage){
    chips = chipsFromLocalStorage
    document.getElementById("money").textContent = JSON.parse( localStorage.getItem("chips") )

    changeMoneyColor()

}

// fn to show result
function showResult(winner){

    BJgame['resultShow'] = true
    let message, messageColor
    if(BJgame['turnIsOver'] === true){
        
        if(winner === YOU){
            document.getElementById("wins").textContent = BJgame['wins']
            document.getElementById("money").textContent = BJgame['money'] + 100000
            if(YOU['score'] === 21){
            document.getElementById("money").textContent = BJgame['money'] + 200000

            }
            message = "You Won!"
            messageColor = "green"
            winSound.play()
    
        } 
        else if(winner === DEALER){
            document.getElementById("losses").textContent = BJgame['losses']
            document.getElementById("money").textContent = BJgame['money'] + -50000
            message = "You Bust!"
            messageColor = "red"
            bustSound.play()
    
        } 
        else{
            document.getElementById("draws").textContent = BJgame['draws']
            document.getElementById("money").textContent = BJgame['money'] + 2000
            message = "Push!"
            messageColor = "#ffeb3b"
        }
    
        document.getElementById("result-display").textContent = message
        document.getElementById("result-display").style.color = messageColor

    }
    
    changeMoneyColor()
    local()
    // after result is shown, you can't Hit
    // BJgame['resultShow'] = false

    // after 3 secs, then you can now Hit
    setTimeout(()=>{
        BJgame['resultShow'] = false
    }, 3000)
}
// fn to store money in local storage
function local(){
    let chip = document.getElementById("money")
    let chipGot = chip.textContent
    let chips = `[]`
    chips = JSON.parse(chips)
    chips.push(chipGot)

    localStorage.setItem("chips", JSON.stringify(chips))
}

    // fn that changes color of money depending on amount
function changeMoneyColor(){
    let moneyMsg = document.getElementById("money-msg")
    let chip = document.getElementById("money")
    let chipGot = chip.textContent

    if(chipGot < 0) {
        chip.style.color = "red"
        moneyMsg.textContent = "You owe the dealer"
    }else if(chipGot > 1000000) {
        chip.style.color = "#ff8c3b"
        moneyMsg.style.display = "none"
    }else{
        chip.style.color = "black"
        moneyMsg.style.display = "none"
    }

}