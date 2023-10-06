let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function game() {
    let ran = Math.floor(Math.random()*hands.length) + 1 
    if (ran  === 1) {
        return hands[0] 
    } else if ( ran === 2) {
        return hands[1]
    } else {
        return hands[2]
    }
}

console.log(game())

