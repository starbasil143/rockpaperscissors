function capitalizeFirstLetter(input)
{
    return (input.charAt(0)).toUpperCase() + input.substr(1);
}

function getComputerChoice()
{
    let rng = Math.floor(Math.random()*3)
    switch (rng)
    {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return undefined;
    }
}

function playRound(humanChoice, computerChoice)
{
    let tempHumanScore = humanScore;
    let tempComputerScore = computerScore;
    switch (humanChoice)
    {
        case 'rock':
            humanScore += (computerChoice == 'scissors');
            computerScore += (computerChoice == 'paper');
            break;

        case 'paper':
            humanScore += (computerChoice == 'rock');
            computerScore += (computerChoice == 'scissors');
            break;

        case 'scissors':
            humanScore += (computerChoice == 'paper');
            computerScore += (computerChoice == 'rock');
            break;
    }
    
    if (humanScore - tempHumanScore)
        {
            messageSlot.textContent = (`${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}! You win this round!`);
        }
    else if (computerScore - tempComputerScore)
        {
            messageSlot.textContent = (`${capitalizeFirstLetter(humanChoice)} loses to ${computerChoice}. You lose this round...`);
        }
    else
        {
            messageSlot.textContent = (`${capitalizeFirstLetter(humanChoice)} and ${computerChoice}... A tie!`);
        }
    humanScoreDisplay.textContent = `Human: ${humanScore}`
    computerScoreDisplay.textContent = `Computer: ${computerScore}`
    if(humanScore >= 5)
    {
        humanScoreDisplay.textContent = `Human Wins! ${humanScore} - ${computerScore}`
        computerScoreDisplay.textContent = '';
        gameOver = true;
    }
    else if (computerScore >= 5)
    {
        humanScoreDisplay.textContent = `Computer Wins. ${humanScore} - ${computerScore}`
        computerScoreDisplay.textContent = '';
        gameOver = true;
    }
}


let humanScore = 0;
let computerScore = 0;
    
let gameOver = false;

const buttons = document.querySelectorAll('.choiceButton');
const messageSlot = document.querySelector('h3');
const humanScoreDisplay = document.querySelector('#humanScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

buttons.forEach((currentButton)=>{
    currentButton.addEventListener('click',()=>{
        if(gameOver === false)
        {
            playRound((currentButton.textContent).toLowerCase(), getComputerChoice());
        }
    })
})