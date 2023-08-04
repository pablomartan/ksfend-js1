"use strict";
/*
 * AI world domination 'ROCK, PAPER, SCISSORS' game
 */
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const TIE = 'tie';
const WIN = 'win';
const LOSE = 'lose';

const WINS_TO = {
    [ROCK]: SCISSORS,
    [PAPER]: ROCK,
    [SCISSORS]: PAPER
};

const capitalize = string => {
    return string[0].toUpperCase().concat(string.slice(1));
};

// game functions
const computerPlay = (possibleChoicesObject) => {
    const keys = Object.keys(possibleChoicesObject);
    return possibleChoicesObject[keys[Math.floor(Math.random() * keys.length)]];
};

const playRound = (playerSelection, computerSelection, winsTo) => {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }

    if (winsTo[playerSelection] === computerSelection) {
        return `${playerSelection} beats ${computerSelection}, you win!`;
    }

    return `${computerSelection} beats ${playerSelection}, you lose!`;
};

const humanPlay = (winsTo) => {
    const roundPrompt = 'Enter Rock, Paper, or Scissors.';

    let choice = prompt(roundPrompt) || '';
    while (Object.keys(winsTo).indexOf(choice.toLowerCase()) === -1) {
        console.log('Invalid input.');
        choice = prompt(roundPrompt) || '';
    }

    return choice.toLowerCase();
}

const game = (winsTo) => {
    let playerSelection,
        computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = humanPlay(winsTo);
        computerSelection = computerPlay(winsTo);

        console.log(playRound(playerSelection, computerSelection, winsTo));
    }

    console.log('The game is over!');
}

game(WINS_TO);
