function randomOneToHundred() {
    return Math.floor(Math.random() * 100);
}

const randomNum = randomOneToHundred();
console.log(randomNum)

function checkGuess(guess) {
    if (guess == randomNum){
        console.log('You Win')
    }   else if (guess < randomNum) {
        console.log('Too Low')
    } else {
        console.log('Too High')
    }
}



const guess = document.querySelector('.userInput')
const action = document.querySelector('.userButton').addEventListener('click', (e) => {
    checkGuess(guess.value)    // console log user's guess
})