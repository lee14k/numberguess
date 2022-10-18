//generate random number
//take input from user
//look at input and compare it to random number
//push corresponding too high or too low message depending on user guess
//update score and highscore correspondingly
function getCompChoice(n) {
    return Math.floor(Math.random() * n) + 1
}

let computerChoice = getCompChoice(20)
console.log(computerChoice)
let score = 20
let scoreDisplay = document.querySelector('.score')
scoreDisplay.textContent = score
document.querySelector('.again').addEventListener('click', playAgain)
let guess = document.querySelector('.guess')
let userChoice
document.querySelector('.check').addEventListener('click', gameLogic)
let highScore = 0

function gameLogic() {
    userChoice = document.querySelector(".user").value
    let newChoice = parseInt(userChoice)

    if (!newChoice) {
        guess.textContent = ("need to type a number!")
    } else if (newChoice > computerChoice) {
        if (score > 1) {
            guess.textContent = ("high")
            score--
            scoreDisplay.textContent = score
        } else {
            guess.textContent = ('you lost')
            scoreDisplay.textContent = 0
        }

    } else if (computerChoice > newChoice) {
        if (score > 1) {
            guess.textContent = ("low")
            score--
            scoreDisplay.textContent = score
        } else {
            guess.textContent = ('you lost')
            scoreDisplay.textContent = 0
        }



    } else if (computerChoice === newChoice) {

        document.querySelector('.number').textContent = computerChoice
        guess.textContent = ("perfect")
        document.querySelector("body").style.backgroundColor = '#0AFF00'
        if (highScore < score) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    }
}



function playAgain() {
    score = 20
    scoreDisplay.textContent = score
    document.querySelector('.user').value = ''
    guess.textContent = "Make your Guess!"

    computerChoice = getCompChoice(20)
    document.querySelector('body').style.backgroundColor = '#FFFFFF'

    document.querySelector(".number").textContent = "?"
}

