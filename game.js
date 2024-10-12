// JavaScript for Rock, Paper, Scissors Game

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById('result-text').textContent = result;
    document.getElementById('player-choice').textContent = `Player's Choice: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer's Choice: ${computerChoice}`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function resetGame() {
    document.getElementById('result-text').textContent = "";
    document.getElementById('player-choice').textContent = "";
    document.getElementById('computer-choice').textContent = "";
}
