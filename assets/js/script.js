document.addEventListener('DOMContentLoaded', function() {

    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            let userChoise = this.getAttribute('data-type');
            alert(`You press batton "${userChoise}"!`);
            runGame(userChoise);
        });
    }

})

function runGame() {

}

function showResult() {

}

function computerChoise() {

}

function calculateCorrectAnswer() {

}

function displayOppoPlayer() {

}

function displayOppoComputer() {

}

