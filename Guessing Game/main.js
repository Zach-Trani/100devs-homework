function randomOneToHundred() {
    return Math.floor(Math.random() * 100);
}

const randomNum = randomOneToHundred();
console.log(randomNum)

function checkGuess(guess) {
    if (guess == randomNum){
        return 'You Win'
    }   else if (guess < randomNum) {
        return 'Too Low'
    } else {
        return 'Too High'
    }
}



const guess = document.querySelector('.userInput')
const action = document.querySelector('.userButton').addEventListener('click', (e) => {
    const userFeedback = checkGuess(guess.value);
    document.querySelector('#placeToSee').innerHTML = userFeedback;

})