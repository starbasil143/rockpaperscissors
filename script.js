console.log("What do you want");

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

function getHumanChoice()
{
    let response = prompt('Rock, Paper, or Scissors?', '');
    response = response.toLowerCase();
    if (response == 'rock' || response == 'paper' || response == 'scissors')
    {
        return response;
    }
    else
    {
        alert(`Are you stupid. ${response} is not an option.`);
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
            console.log(`${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}! You win this round!`);
        }
    else if (computerScore - tempComputerScore)
        {
            console.log(`${capitalizeFirstLetter(humanChoice)} loses to ${computerChoice}. You lose this round...`);
        }
    else
        {
            console.log(`${capitalizeFirstLetter(humanChoice)} and ${computerChoice}... A tie!`);
        }
}


let humanScore = 0;
let computerScore = 0;
    
function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(),getComputerChoice());
    }

    alert(`Human: ${humanScore}. Computer: ${computerScore}. ${humanScore > computerScore ? 'Human wins!' : computerScore > humanScore ? 'Computer wins...' : 'A tie.'}`)
}



playGame();