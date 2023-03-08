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
        imageName = 'rock.png'
    } else if (userChoise === 'paper') {
        imageName = 'paper.png'
    } else if (userChoise === 'scissors') {
        imageName = 'scissors.png'
    } else if (userChoise === 'lizard') {
        imageName = 'lizard.png'
    } else if (userChoise === 'spock') {
        imageName = 'spock.png'
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

function displayOppoPlayer(imageName) {

    
}

function displayOppoComputer() {

}

