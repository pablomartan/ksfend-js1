"use strict";

import dialogue from './dialogue';

/*
 * AI world domination 'ROCK, PAPER, SCISSORS' game
 */
const winsTo = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// game functions
const computerPlay = (possibleChoices) => {
    const keys = Object.keys(possibleChoices);
    return possibleChoices[keys[Math.floor(Math.random() * keys.length)]];
};

const playRound = (playerSelection, computerSelection, winsTo) => {
    if (playerSelection === computerSelection) {
        return 'tie';
    }

    if (winsTo[playerSelection] === computerSelection) {
        return 'win';
    }

    return 'lose';
};

function humanPlay() {
    let choice,
        failures = 0;

    do {
        if (failures >= 3) {
            choice = prompt(dialogue.tauntPrompts[random(0, dialogue.tauntPrompts.length)]);
        } else {
            choice = prompt(dialogue.roundPrompt);
        }

        if (choice === null) {
            console.log(dialogue.escape);
            choice = '';
            continue;
        }

        if (!Object.keys(winsTo).includes(choice.toLowerCase())) console.log('Invalid input!');
        
        failures += 1;

    } while (!Object.keys(winsTo).includes(choice.toLowerCase()))

    return choice.toLowerCase();
}

function game(winsTo) {
    for (let paragraph of dialogue.intro) {
        alert(paragraph);
    }

    let playerSelection,
        computerSelection,
        aiScore = 0,
        playerScore = 0,
        gameOn = true;

    while (gameOn) {
        for (let i = 0; i < 5; i++) {
            playerSelection = humanPlay(winsTo);
            computerSelection = computerPlay(winsTo);

            const result = playRound(playerSelection, computerSelection, winsTo);

            if (result === 'tie') {
                console.log('It\'s a tie!');
            } else if (result === 'win') {
                playerScore++;
                console.log(dialogue.win[random(0, dialogue.win.length)]);
            } else if (result === 'lose') {
                aiScore++;
                console.log(dialogue.lose[random(0, dialogue.lose.length)]);
            }
            
            console.log(`Player: ${playerScore}; AI: ${aiScore}`);
        }
        
        alert(aiScore > playerScore ? dialogue.retry.win : dialogue.retry.lose);

        const playAgain = prompt(dialogue.retry.prompt);
        gameOn = (playAgain === null) || playAgain.toLowerCase() !== 'n';

        if (gameOn) {
            aiScore = 0;
            playerScore = 0;
            console.clear();
        }
    }

    console.log('The game is over!');
    if (aiScore > playerScore) {
        console.log(dialogue.outro.win);
    }

    if (playerScore > aiScore) {
        console.log(dialogue.outro.lose);
    }

    console.log(dialogue.outro.tie);
}

game(winsTo);
