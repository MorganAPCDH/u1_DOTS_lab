/*
 * DOTS: Level Two
 *
 */


let balls = document.querySelectorAll(`.js-ball`)
let scoreDisplay = document.querySelector(`.js-score`)
let levelWinner = document.querySelector(`.level-winner`)
let score = 0
balls.addEventListener(`click`, () => {
    console.log(score + 10);
    scoreDisplay.innerText = score
});
//I keep getting that my event listener isnt a function
//and im not to sure why, if I remove All from, let balls = 
//document.querySelectorAll(`.js-ball`) then it will partially function
//but only with one ball

console.log(levelWinner)
console.log(scoreDisplay)
console.log(ball)
console.log(score)