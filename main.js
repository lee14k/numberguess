//generate random number
//take input from user
//look at input and compare it to random number
//push corresponding too high or too low message depending on user guess
//update score and highscore correspondingly

let computerChoice = Math.floor(Math.random() * 20)




document.querySelector('.check').addEventListener('click', gameLogic)

function gameLogic() {
    let userChoice = document.querySelector(".user").value
    //let results = 
    if (!userChoice) {
        document.querySelector('.guess').textContent = ("need to type a number!")
    } else if (userChoice > computerChoice) {
        document.querySelector('.guess').textContent = ("need to type a number!")
    } else if (computerChoice > userChoice) {
        results = 'too low!'
    } else {
        results = 'spot on!'
    }
}
