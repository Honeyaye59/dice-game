const winnerMsg = document.getElementById("winner-msg");
const playerOneDiceImg = document.getElementById("playerOne-dice-img");
const playerTwoDiceImg = document.getElementById("playerTwo-dice-img");
const diceBtn = document.getElementById("dice-btn");
function getRandomNumber(){
    return Math.floor(Math.random() * 6) + 1;
}
let playerOneDice = 1;
let playerTwoDice = 1;
function rollDice(){
    diceBtn.innerText = "Play Again"
    playerOneDice = getRandomNumber();
    playerTwoDice = getRandomNumber();
    playerOneDiceImg.src = "img/dice" + playerOneDice + ".png";
    playerTwoDiceImg.src = "img/dice" + playerTwoDice + ".png"
    if(playerOneDice > playerTwoDice){
        winnerMsg.innerText = "Player 1 is winner 🥳"
    }else if(playerOneDice === playerTwoDice){
        winnerMsg.innerText = "Match Draw"
    }else{
        winnerMsg.innerText = "Player 2 is winner 🥳"
    }
    
}
console.log(playerOneDiceImg)