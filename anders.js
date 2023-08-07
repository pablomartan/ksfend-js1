"use strict";
/*
 * AI world domination 'ROCK, PAPER, SCISSORS' game
 */
const validInputs = ['rock', 'paper', 'scissors'];
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const upperCaseFirst = (text) => text.charAt(0).toUpperCase() + text.slice(1);

function computerPlay() {
    return validInputs[random(0, 3)];
}

function humanPlay() {
    const roundPrompt = 'Enter Rock, Paper, or Scissors.';
    const tauntPrompts = [
        'Come on, you can do better than that!',
        'I... I thought I was playing agains the most intelligent species on Earth... 😅',
        'Eehem. Do you need some help?',
        'Am I a joke to you? 🤨',
        'Please, why won\'t you take me seriously? 😩',
        'Well, I have all the time in the world 😕',
        'You will surely tire of this before I do... right? 😒'
    ];

    let choice,
        failures = 0;
    do {
        if (failures >= 3) {
            choice = prompt(tauntPrompts[random(0, tauntPrompts.length)]);
        } else {
            choice = prompt(roundPrompt);
        }

        if (choice === null) {
            console.log('Are you trying to run from me!?');
            choice = '';
            continue;
        }

        failures += 1;
    } while (!validInputs.includes(choice.toLowerCase()))

    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    const winsTo = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    };

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }

    if (winsTo[playerSelection] === computerSelection) {
        return upperCaseFirst(`${playerSelection} beats ${computerSelection}, you win!`);
    }

    return upperCaseFirst(`${computerSelection} beats ${playerSelection}, you lose!`);
}

function game() {
    let playerSelection,
        computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = humanPlay();
        computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }

    console.log('The game is over!');
}

