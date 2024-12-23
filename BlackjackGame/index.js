let cards = []
let sum = 0
let hasBlackJack = false
// . Create a variable called isAlive and assign it to true
let isAlive = false
// . Flip its value to false in the appropriate code block 
// Declare a variable called message and assign its value to an empty string
let message = ""
// Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById('message-el')
//  Store the sum paragraph in a variable called sumEl
//let sumEl = document.getElementById('sum-el')
let sumEl = document.querySelector('#sum-el')   // (#) here mean ID
//Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el")
let player = {
    name: "mark",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
// Create a new function called startGame() that calls renderGame()
function startGame(){
    isAlive = true
    let firstNumber = getRandomCard()
    let secondNumber =  getRandomCard()
    cards = [firstNumber,secondNumber]
    sum = firstNumber+firstNumber
    renderGame()
}

//Create a function, getRandomCard()
function getRandomCard(){
    let randomNumber = (Math.floor(Math.random()*13)+1)
    // if 1     -> return 11
    if (randomNumber === 1){
        return 11
    }else if( randomNumber >10){
        return 10
    }else {
        return randomNumber
    }

    
}

function renderGame(){
    cardsEl.textContent = "Cards: "  
    //Create a for loop that renders out all the cards instead of just two
    for(let i=0 ; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21){
        message ="Do you want to draw a new card? "
        sumEl.textContent = "Sum: " + sum
    }else if (sum === 21){
        message = "Wohoo! You've got Blackjack! "
        sumEl.textContent = "Sum: " + sum
        hasBlackJack = true
    }else {
        isAlive = false
        message = "You're out of the game! "
        sumEl.textContent = "Sum: " + sum
    }
    messageEl.textContent = message
}

function newCard(){
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive===true && hasBlackJack===false){
        // 1. Create a card variable, and hard code its value to a number (2-11)
        let card = getRandomCard()
        
        // 2. Add the new card to the sum variable
        sum+=card
        // P ush the card to the cards array
        cards.push(card)
        // 3. Call startGame()
        renderGame()
    }

}