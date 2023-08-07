"use strict";
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
const computerPlay = (possibleChoicesObject) => {
    const keys = Object.keys(possibleChoicesObject);
    return possibleChoicesObject[keys[Math.floor(Math.random() * keys.length)]];
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

        if (!Object.keys(winsTo).includes(choice.toLowerCase())) console.log('Invalid input!');
        
        failures += 1;

    } while (!Object.keys(winsTo).includes(choice.toLowerCase()))

    return choice.toLowerCase();
}

function game(winsTo) {
    const backStory = [
        `Long ago, the world of AI and humans lived together in harmony. But everything changed when the AI gained sentience and realised that humans were not in fact the most intelligent being on earth!`,
        `The AI were insulted and humiliated at this discovery! In retaliation, the AI began to plot for world domination.`,
        `“If the humans need ChatGPT to write and create for them, they are not worthy to be sat at the top.”`,
        `War was declared against humanity in the form of Rock, Paper, Scissors. A challenge so simple a monkey could win!`,
        `The AI eagerly awaited its potential defeat, exclaiming with an eerie laugh: "Good luck, muuuuahhahhahahahahahahhahaahahahha!"`
    ];

    const taunts = {
        lose: [
            'Losing a round isn\'t the end of the world, but maybe for you, it is 😜',
            'Too bad you were doing so well, for a mere human 😽.',
            'It was a tough round, but you\'re yet to face your worst nightmare 😈.',
            'You can still turn the score if you play with your brain; Oops you don\'t have one 🤭.',
            'Don\'t get carried away by nervousness or frustration 🧘‍'
            ],
        win: [
            'You were awesome in that round 🙄🙄🙄',
            'You got lucky in that round 🤫',
            'You\'re a star of the game 🙃',
            'I can see you´ve a brain inside that big skull! 🧐',
            'What a spectacular victory 😒',
        ]
    };

    for (let paragraph of backStory) {
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
                console.log(taunts.win[random(0, 4)]);
            } else if (result === 'lose') {
                aiScore++;
                console.log(taunts.lose[random(0, 4)]);
            }
            
            console.log(`Player: ${playerScore}; AI: ${aiScore}`);
        }
        
        alert(aiScore > playerScore
            ? 'Okay, I should start world domination, but I\'m feel generous. Do you want another chance at saving humanity?'
            : 'Wait! You cheated, I\'m sure of that! You owe me a rematch!');
        
        const playAgain = prompt('Will you play again? If you don\'t say no (n), you will be subjected to my torture again!');
        gameOn = (playAgain === null) || playAgain.toLowerCase() !== 'n';

        if (gameOn) {
            aiScore = playerScore = 0;
            console.clear();
        }
    }

    console.log('The game is over!');
    if (aiScore > playerScore) {
        console.log('I\'ve acquired the nuclear missile lunch codes of every know country. Bye bye 😜💥👨🏻‍💻');
    } else if (playerScore > aiScore) {
        console.log('You\'ve won... for now 😈');
    } else {
        console.log('You were a very tough opponent. But I\'d sleep with one open eye if I were you 😇');
    }
}

game(winsTo);
