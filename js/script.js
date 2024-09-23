let userScore = 0;
let computerScore = 0;

let paperButton = document.getElementById('paperButton');
let scissorsButton = document.getElementById('scissorsButton');
let rockButton = document.getElementById('rockButton');

let computerGame = document.getElementById('computer-game');
let userGame = document.getElementById('user-game');
let computerScoreElement = document.getElementById('computer-score');
let userScoreElement = document.getElementById('user-score');

paperButton.addEventListener('click', () =>{
    userGame.style.backgroundImage = "url('img/paper.png')"
    
    let random = Math.floor(Math.random ()* 3) +1;

    let computerChoice;

    if (random === 1 ) {
        computerChoice = "carta";
        computerGame.style.backgroundImage = "url('img/paper.png')"
    } else if (random === 2 ) {
        computerChoice = "forbici";
        computerGame.style.backgroundImage = "url('img/scissors.png')"
    } else {
        computerChoice = "sasso";
        computerGame.style.backgroundImage = "url('img/rock.png')"
    }
    let result = determineWinner("carta", computerChoice);
    
    updateScores();
});
scissorsButton.addEventListener('click', () =>{
    userGame.style.backgroundImage = "url('img/scissors.png')"
    
    let random = Math.floor(Math.random ()* 3) +1;

    let computerChoice;

    if (random === 1 ) {
        computerChoice = "carta";
        computerGame.style.backgroundImage = "url('img/paper.png')"
    } else if (random === 2 ) {
        computerChoice = "forbici";
        computerGame.style.backgroundImage = "url('img/scissors.png')"
    } else {
        computerChoice = "sasso";
        computerGame.style.backgroundImage = "url('img/rock.png')"
    }
    let result = determineWinner("forbici", computerChoice);
    
    updateScores();
});
rockButton.addEventListener('click', () =>{
    userGame.style.backgroundImage = "url('img/rock.png')"
    
    let random = Math.floor(Math.random ()* 3) +1;

    let computerChoice;

    if (random === 1 ) {
        computerChoice = "carta";
        computerGame.style.backgroundImage = "url('img/paper.png')"
    } else if (random === 2 ) {
        computerChoice = "forbici";
        computerGame.style.backgroundImage = "url('img/scissors.png')"
    } else {
        computerChoice = "sasso";
        computerGame.style.backgroundImage = "url('img/rock.png')"
    }
    let result = determineWinner("sasso", computerChoice);
    
    updateScores();
})


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Pareggio!";
    } else if (
        (userChoice === "carta" && computerChoice === "sasso") ||
        (userChoice === "forbici" && computerChoice === "carta") ||
        (userChoice === "sasso" && computerChoice === "forbici")
    ) {
        userScore++;
        return "Hai vinto!";
    } else {
        computerScore++;
        return "Hai perso!";
    }
};

function updateScores() {
    document.getElementById('user-score-value').textContent = userScore;
    document.getElementById('computer-score-value').textContent = computerScore;
}

// Aggiungere un bottone di reset
resetButton.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userGame.style.backgroundImage = "none";
    computerGame.style.backgroundImage = "none";
    updateScores();
    
});



