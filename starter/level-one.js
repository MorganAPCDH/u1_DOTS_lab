/*
 * DOTS: Level One
 *
 */

let score = 0
let scoreDisplay = document.querySelector(`.js-score`)
let levelWinner = document.querySelector(`.level-winner`)
let ball = document.querySelector(`.js-ball`)

ball.addEventListener('click', () => {
    score = score + 10
    console.log(`Ten Points`)
    scoreDisplay.innerText = score
    console.log(`Score Again`)
    if (score >= 100) {
        //Not sure how to get it to go to 100, blanking completely 
        //on what to write
    };
    levelWinner.style.opacity = 1;
})

//console.log(score)
//console.log(scoreDisplay)



    
