// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

let firstCard = 6
let secondCard = 9
// 2. Create a variable, sum, and set it to the sum of the two cards

let sum = firstCard + secondCard
let hasBlackJack = false

// . Create a variable called isAlive and assign it to true
let isAlive = true
// . Flip its value to false in the appropriate code block 
// Declare a variable called message and assign its value to an empty string
let message = ""
if (sum < 21){
    message ="Do you want to draw a new card? 🙂"
}else if (sum === 21){
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
}else {
    isAlive = false
    message = "You're out of the game! 😭"
}

console.log(isAlive)