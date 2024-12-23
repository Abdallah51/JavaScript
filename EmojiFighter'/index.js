let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

function randEmoji(){
    Emoji_index = Math.floor(Math.random()*fighters.length)
    Emoji = fighters[Emoji_index]
    return Emoji
}


fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    Emo1 = randEmoji()
    Emo2 = randEmoji()
    stageEl.textContent = Emo1 + " vs " + Emo2

})
