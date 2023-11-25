
const choices=['rock','paper','scissors'];
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
    do{
        playerSelection = prompt("Please enter your choice", "rock or paper or scissors");
        if ((playerSelection.toUpperCase() != choices[0].toUpperCase()) && (playerSelection.toUpperCase() != choices[1].toUpperCase()) 
                && (playerSelection.toUpperCase() != choices[2].toUpperCase()))
            {
                console.log("Invalid choice, choose again");
                flag=0;
            }
        else{
                flag =1;
            }
            
    }
    while((playerSelection == null) ||  (playerSelection == undefined) || flag == 0)
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
        case "draw" : console.log(`It's a draw`);
        break;
        case "lose" : console.log(`You ${result}! ${computerSelection} beats ${playerSelection}`);
        computerWins++;
        break;
        case "win"  : console.log(`You ${result}! ${playerSelection} beats ${computerSelection}`);
        playerWins++;
        break;
    }
}

function game()
{
    console.log("Let's play a 5 round game of Rock, Paper and Scissors");
    for(i=1;i<=5;i++)
    {
    computerSelection = getComputerChoice();
    getPlayerChoice();
    playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
    getRoundResult(result);
    }

    if ( playerWins > computerWins)
    {
        console.log(`Player wins the series with ${playerWins} wins`);        
    }
    else
    {
        console.log(`Computer wins the series with ${computerWins} wins`); 
    }

}

game();



 
