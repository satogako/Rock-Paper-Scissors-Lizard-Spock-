/**
 * Wait for the DOM to finish loading before runing the game
 * Get the button elements and add event listeners to them
 */
document.addEventListener('DOMContentLoaded', function() {

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            let userChoise = this.getAttribute('data-type');
            runGame(userChoise);
        });
    }

})

/**
 * Receives a data-type from the event listener,
 * determines the name of the image and passes it to
 * function displayOppoPlayer.
 * Starts the function computerChoise.
 */
function runGame(userChoise) {

    let imageName;

    if (userChoise === 'rock') {
        imageName = 'rock'
    } else if (userChoise === 'paper') {
        imageName = 'paper'
    } else if (userChoise === 'scissors') {
        imageName = 'scissors'
    } else if (userChoise === 'lizard') {
        imageName = 'lizard'
    } else if (userChoise === 'spock') {
        imageName = 'spock'
    }

    displayOppoPlayer(imageName);
    computerChoise();

}

function showResult() {

}

function computerChoise() {

}

function calculateCorrectAnswer() {

}

/**
 * Gets the name of the image and sets the path to it.
 */
function displayOppoPlayer(imageName) {

    document.getElementById('vs-image').src = 'assets/images/vs.png';
    document.getElementById('player-oppo').src = `assets/images/${imageName}.png`;
    document.getElementById('player-oppo').alt = `In the image of the ${imageName} chosen by the user`;
    
}

function displayOppoComputer() {

}

