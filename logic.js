
const choices=['Rock','Paper','Scissors'];
var flag = 1;
var result;
var computerSelection;
var playerSelection;
var playerWins=0;
var computerWins= 0; 

function getComputerChoice(){
    
    return choices[random(3)];
    //console.log(choices[random(3)]);
}

function random(number){
    return Math.floor(Math.random()*number);
}

function getPlayerChoice()
{
    let pSelection = document.querySelector('#player-selection');

    pSelection.addEventListener('click', (event) =>{
        let target = event.target;
        computerSelection = getComputerChoice();       

        switch(target.id)
        {
            case 'rock': playerSelection= target.textContent;
            break;
            case 'paper': playerSelection= target.textContent;
            break;
            case 'scissors': playerSelection= target.textContent;
            break;
        }
        playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
        getRoundResult(result);
        game();
    } )
}


function playRound(pSelection, cSelection)
{
    switch(pSelection)
    {   
        case "ROCK" : 
            if (cSelection == "ROCK")
                result = "draw";
            else
            {
                if(cSelection =="PAPER")
                    result = "lose";
                else
                    result = "win";
            }
            break;
        case "PAPER" : 
            if (cSelection== "PAPER")
                result = "draw";
            else
            {
                if(cSelection =="SCISSORS")
                    result = "lose";
                else
                    result = "win";
            }
            break;
        case "SCISSORS" : 
            if (cSelection== "SCISSORS")
                result = "draw";
            else
            {
                if(cSelection=="ROCK")
                    result = "lose";
                else
                    result = "win";
            }
            break;
    }
}

function getRoundResult(result)
{
    switch(result)
    {
        case "draw" : document.querySelector('#round-result').innerHTML += "It is a draw <br>" ;
        break;
        case "lose" : document.querySelector('#round-result').innerHTML += `You ${result}! ${computerSelection} beats ${playerSelection}<br>`;
        computerWins++;
        break;
        case "win"  : document.querySelector('#round-result').innerHTML += `You ${result}! ${playerSelection} beats ${computerSelection}<br>`;
        playerWins++;
        break;
    }
    document.querySelector('#game-result').textContent = `Computer: ${computerWins}  Player: ${playerWins}`;
}

function game()
{  
        
    if ( playerWins == 5 && computerWins <5)
    {
       const matchResult = document.createElement('p');
       matchResult.textContent ='You Win!!'
       document.querySelector('#result').appendChild(matchResult);
       playerWins =0;
       computerWins =0;              
    }
    else 
    {
        if(computerWins == 5 && playerWins < 5)
        {
            const matchResult = document.createElement('p');
            matchResult.textContent ='You Lose!!' 
            document.querySelector('#result').appendChild(matchResult);
            playerWins = 0;
            computerWins =0; 
        }
         
    }

}



getPlayerChoice();

 
