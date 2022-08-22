let firstCard = 11
let secondCard = 11

let sum = firstCard + secondCard

if (sum < 21){
    console.log("do you want another card?")
} else if(sum === 21){
    console.log('BLACKJACK!')
} else {
    console.log("game over")
}