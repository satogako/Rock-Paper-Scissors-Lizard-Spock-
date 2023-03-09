/**
 * Wait for the DOM to finish loading before runing the game
 * Get the button elements and add event listeners to them.
 * The listener code was borrowed from Love Math.
 */
document.addEventListener('DOMContentLoaded', function() {

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            let userChoise = this.getAttribute('data-type');

            if(userChoise === 'reset') {
                gameReset();
            } else {
                displayOppoPlayer(userChoise);
            } 
        });
    }
});

/**
 * Display a message about the winner on the page.
 * The timer code was taken on the page 
 * https://www.w3schools.com/jsref/met_win_settimeout.asp
 */
function showResult(result) {

    document.getElementById('answer-text').innerText = '';
    
    setTimeout(showMessage, 1000);
    function showMessage() {
        document.getElementById('answer-text').innerText = result;
    }   
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
            result = 'Player Won!';
            showResult(result);
            playerScore();
    } else if (userChoise === systemChoise) {
            result = 'Nobody Won! A Draw!';
            showResult(result);
    } else {
            result = 'Computer Won!';
            showResult(result);
            computerScore();
    } 
}

/**
 * Gets the name of the image and sets the path to it.
 * Starts the function calculateCorrectAnswer.
 */
function displayOppoPlayer(imageName) {

    document.getElementById('vs-image').src = '';

    setTimeout(vsImage, 500);
    function vsImage() {
        document.getElementById('vs-image').src = 'assets/images/vs.png';
    }
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

/**
 * Gets the current score from the DOM and increments it by 1.
 * The timer code was taken on the page 
 * https://www.w3schools.com/jsref/met_win_settimeout.asp
 */
function playerScore() {

    let oldScore = parseInt(document.getElementById('player-score').innerText);

    setTimeout(score, 1000);
    function score () {
        document.getElementById('player-score').innerText = ++ oldScore;
    }  
}

/**
 * Gets the current score from the DOM and increments it by 1.
 * The timer code was taken on the page 
 * https://www.w3schools.com/jsref/met_win_settimeout.asp
 */
function computerScore() {

    let oldScore = parseInt(document.getElementById('computer-score').innerText);

    setTimeout(score, 1000);
    function score() {
        document.getElementById('computer-score').innerText = ++ oldScore;
    }     
}

/**
 * Erases game message and scores.
 */
function gameReset() {

    document.getElementById('vs-image').src = '';
    document.getElementById('computer-score').innerText = '0';
    document.getElementById('player-score').innerText = '0';
    document.getElementById('answer-text').innerText = '';
}

