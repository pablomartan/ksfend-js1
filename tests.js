/* 
 * TESTS
 */

/*
 * computerPlay
 * No way to test the input without a testing library
 */
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());

/*
 * playRound(playerSelection, computerSelection)
 * TIE, PLAYER_WINS, COMPUTER_WINS
*/
const playRoundTests = [
    [ROCK, ROCK],
    [ROCK, SCISSORS],
    [ROCK, PAPER],
    [PAPER, PAPER],
    [PAPER, ROCK],
    [PAPER, SCISSORS],
    [SCISSORS, SCISSORS],
    [SCISSORS, PAPER],
    [SCISSORS, ROCK]
];

for (let test of playRoundTests) {
    console.log(playRound(test[0], test[1]));
}
