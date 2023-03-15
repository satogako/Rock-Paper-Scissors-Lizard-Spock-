/**
 * Wait for the DOM to finish loading before runing the game
 * Get the button elements and add event listeners to them.
 * The listener code was borrowed from Love Math.
 */
document.addEventListener('DOMContentLoaded', function() {

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {

        button.addEventListener('mouseover', function() {
            let buttonHover = this.getAttribute('data-type');

            if (buttonHover === 'rock') {
                rockBorderFontAwesome();
            } else if (buttonHover === 'paper') {
                paperBorderFontAwesome();
            } else if (buttonHover === 'scissors') {
                scissorsBorderFontAwesome();
            } else if (buttonHover === 'lizard') {
                lizardBorderFontAwesome();
            } else if (buttonHover === 'spock') {
                spockBorderFontAwesome();
            }
        });

        button.addEventListener('mouseout', withOutBorderFontAwesome);

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
            result = "Nobody Won! It's Draw!";
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
 * Erases game message, scores and set preview images.
 */
function gameReset() {

    document.getElementById('vs-image').src = '';
    document.getElementById('computer-score').innerText = '0';
    document.getElementById('player-score').innerText = '0';
    document.getElementById('answer-text').innerText = '';
    document.getElementById('computer-oppo').src = 'assets/images/preview.png';
    document.getElementById('computer-oppo').alt = 'In the image together rock, paper, scissors, lizard, spock'; 
    document.getElementById('player-oppo').src = 'assets/images/preview.png';
    document.getElementById('player-oppo').alt = 'In the image together rock, paper, scissors, lizard, spock';
    
}

/**
 * In the header h1, sets the border around the font awesome in the word rock
 */
function rockBorderFontAwesome() {
    let rockFontAwesome = document.getElementsByTagName('h1')[0].children[0].children[0];

    rockFontAwesome.style.border = '4px solid black';
    rockFontAwesome.style.borderRadius = "25%";
    rockFontAwesome.style.transition = '0.5s';
}

/**
 * In the header h1, sets the border around the font awesome in the word paper
 */
function paperBorderFontAwesome() {
    let paperFontAwesome = document.getElementsByTagName('h1')[0].children[1].children[0];

    paperFontAwesome.style.borderTop = '4px solid black';
    paperFontAwesome.style.borderLeft = '4px solid black';
    paperFontAwesome.style.borderBottom = '4px solid black';
    paperFontAwesome.style.borderRadius = '25%';
    paperFontAwesome.style.transition = '0.5s';
}

/**
 * In the header h1, sets the border around the font awesome in the word scissors
 */
function scissorsBorderFontAwesome() {
    let scissorsFontAwesom = document.getElementsByTagName('h1')[0].children[2].children[0];

    scissorsFontAwesom.style.borderTop = '4px solid black';
    scissorsFontAwesom.style.borderLeft = '4px solid black';
    scissorsFontAwesom.style.borderBottom = '4px solid black';
    scissorsFontAwesom.style.borderRadius = '25%';
    scissorsFontAwesom.style.transition = '0.5s';
}

/**
 * In the header h1, sets the border around the font awesome in the word lizard
 */
function lizardBorderFontAwesome() {
    let lizardFontAwesome = document.getElementsByTagName('h1')[0].children[3].children[0];

    lizardFontAwesome.style.borderLeft = '4px solid black';
    lizardFontAwesome.style.borderTop = '4px solid black';
    lizardFontAwesome.style.borderRadius = '25%';
    lizardFontAwesome.style.transition = '0.5s';
}



