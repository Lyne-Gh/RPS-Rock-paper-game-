const options = ['rock', 'paper', 'scissors'];
let draws = 0;
let wins = 0;
let compWins = 0;
let round = 1;

function updateResultDisplay(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML += `<p>${message}</p>`;
}

function playRound(playerChoice) {
    if (playerChoice === 'quit') {
        updateResultDisplay("See you next time!");
        determineWinner();
        updateResultDisplay(`You won ${wins} times.`);
        updateResultDisplay(`Computer won ${compWins} times.`);
        updateResultDisplay(`You tied ${draws} times`);
        return;
    }

    const computerChoice = getRandomChoice();

    if (playerChoice === computerChoice) {
        updateResultDisplay(`You chose ${playerChoice}, the computer chose ${computerChoice}. It's a draw!`);
        draws++;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
               (playerChoice === 'paper' && computerChoice === 'rock') ||
               (playerChoice === 'scissors' && computerChoice === 'paper')) {
        updateResultDisplay(`You chose ${playerChoice}, the computer chose ${computerChoice}. You win!`);
        wins++;
    } else {
        updateResultDisplay(`You chose ${playerChoice}, the computer chose ${computerChoice}. Computer wins!`);
        compWins++;
    }

    round++;

    if (round === 11) {
        updateResultDisplay("From now on, the computer will start considering your past choices!");
    }
    updateRoundNumber();
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
document.getElementById('quit').addEventListener('click', () => playRound('quit'));

function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateRoundNumber() {
    document.getElementById('roundNumber').textContent = 'Round ' + round;
}

function determineWinner() {
    if (wins > compWins) {
        updateResultDisplay("YOU WIN!");
    } 
    if (wins < compWins) {
        updateResultDisplay("The computer won! Better luck next time!");
    } else {
        updateResultDisplay("No winners and no loosers, You tied!!");
    }

    
}