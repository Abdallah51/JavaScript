let home_score = document.getElementById("homeScore")
let guest_score = document.getElementById("awayScore")

let homeScore = 0
let guestScore = 0
function home1Plus(){
    homeScore +=1
    home_score.textContent = homeScore
}
function home2Plus(){
    homeScore +=2
    home_score.textContent = homeScore
}
function home3Plus(){
    homeScore +=3
    home_score.textContent = homeScore
}

function away1Plus(){
    guestScore += 1
    guest_score.textContent = guestScore
}
function away2Plus(){
    guestScore += 2
    guest_score.textContent = guestScore
}
function away3Plus(){
    guestScore += 3
    guest_score.textContent = guestScore
}

function resetScore(){
    homeScore = 0
    guestScore = 0
    home_score.textContent =homeScore
    guest_score.textContent=guestScore
}