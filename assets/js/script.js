/**
 * Wait for the DOM to finish loading before runing the game
 * Get the button elements and add event listeners to them
 */
document.addEventListener('DOMContentLoaded', function() {

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            let userChoise = this.getAttribute('data-type');
            displayOppoPlayer(userChoise);
        });
    }

})

function showResult() {

    
}

/**
 * Gets a random number, assigns the name of the 
 * corresponding image and passes it to the 
 * function displayOppoComputer
 */
function computerChoise() {

    let randomNumber = Math.floor(Math.random() * 5);
    let imageNamePc;

    if (randomNumber === 0) {
        imageNamePc = 'rock';
    } else if (randomNumber === 1) {
        imageNamePc = 'paper';
    } else if (randomNumber === 2) {
        imageNamePc = 'scissors';
    } else if (randomNumber === 3) {
        imageNamePc = 'lizard';
    } else if (randomNumber === 4) {
        imageNamePc = 'spock';
    }

    displayOppoComputer(imageNamePc);
    return imageNamePc;
}

/**
 * Determines the winner and passes the value 
 * to the function showResult.
 * Starts counting functions.
 */
function calculateCorrectAnswer(userChoise) {

    let systemChoise = computerChoise(); 
    let result;
 
    if (userChoise === 'scissors' && systemChoise === 'paper' ||
        userChoise === 'paper' && systemChoise === 'rock' ||
        userChoise === 'rock' && systemChoise === 'lizard' ||
        userChoise === 'lizard' && systemChoise === 'spock' ||
        userChoise === 'spock' && systemChoise === 'scissors' ||
        userChoise === 'scissors' && systemChoise === 'lizard' ||
        userChoise === 'lizard' && systemChoise === 'paper' ||
        userChoise === 'paper' && systemChoise === 'spock' ||
        userChoise === 'spock' && systemChoise === 'rock' ||
        userChoise === 'rock' && systemChoise === 'scissors') {
            result = 'User Won!';
            showResult(result);
    } else if (userChoise === systemChoise) {
            result = 'Nobody Won! A Draw!';
            showResult(result);
    } else {
            result = 'Computer Won!';
            showResult(result);
    }
  
}

/**
 * Gets the name of the image and sets the path to it.
 * Starts the function calculateCorrectAnswer.
 */
function displayOppoPlayer(imageName) {

    document.getElementById('vs-image').src = 'assets/images/vs.png';
    document.getElementById('player-oppo').src = `assets/images/${imageName}.png`;
    document.getElementById('player-oppo').alt = `In the image of the ${imageName} chosen by the user`;
    
    calculateCorrectAnswer(imageName);
}

/**
 * Gets the name of the image from function computerChoise
 * and sets the path to image.
 */
function displayOppoComputer(imageNamePc) {

    document.getElementById('computer-oppo').src = `assets/images/${imageNamePc}.png`;
    document.getElementById('computer-oppo').alt = `In the image of the ${imageNamePc} chosen by the computer`; 
}

