function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var answer = prompt.toLowerCase();
    return answer;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return "rock";
    } 
    else if (randomNumber < 0.66) {
      return "paper";
    } 
    else {
      return "scissors";
    }
}

function getPlayerMove() {
    var move = getInput();
    if(move == "rock" || move == "paper" || move == "scissors"){
      return move;
    }
    else{
      console.log("try again");
    }
}

function getComputerMove() {
    var move = randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove == "rock" && computerMove == "paper"){
      winner = "Computer";    
    }
    else if(playerMove == "rock" && computerMove == "scissors"){
      winner = "Player";
    }
    else if(playerMove == "paper" && computerMove == "rock"){
      winner = "Player";
    }
    else if(playerMove == "paper" && computerMove == "scissors"){
      winner = "Computer";
    }
    else if(playerMove == "scissors" && computerMove == "rock"){
      winner = "Computer";
    }
    else if(playerMove == "scissors" && computerMove == "paper"){
      winner = "Player";
    }
    else if(playerMove === computerMove){
      winner = "Tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while(playerWins < 5 && computerWins < 5){
      var Player = getPlayerMove();
      var Computer = getComputerMove();
      if(getWinner(Player, Computer)=="Player"){
        playerWins += 1;
        console.log("Player is " + Player + '\n'+"Computer is "+ Computer+ '\n'+"Congratulations!" + '\n' + "Player won " + playerWins + " times");
        
      }
      else if(getWinner(Player,Computer)=="Computer"){
        computerWins += 1;
        console.log("Player is " + Player + '\n'+"Computer is "+ Computer+ '\n'+"Don't give up!" + '\n' + "Computer won " + computerWins + " times");
      }
      else {
        console.log("Tie!" + '\n' + " Computer won "+ computerWins + " times and Player won " + playerWins + " times till now" );
      }
    }
  }

  function playTo(x) {
    console.log("Let's Play Rock, Paper, Scissors. Winner times decided by you.");
    var playerWins = 0;
    var computerWins = 0;
    
    while(playerWins < x && computerWins < x){
      var Player = getPlayerMove();
      var Computer = getComputerMove();
      if(getWinner(Player, Computer)=="Player"){
        playerWins += 1;
        console.log("Player is " + Player + '\n'+"Computer is "+ Computer+ '\n'+"Congratulations!" + '\n' + "Player won " + playerWins + " times");
        
      }
      else if(getWinner(Player,Computer)=="Computer"){
        computerWins += 1;
        console.log("Player is " + Player + '\n'+"Computer is "+ Computer+ '\n'+"Don't give up!" + '\n' + "Computer won " + computerWins + " times");
      }
      else {
        console.log("Tie!" + '\n' + " Computer won "+ computerWins + " times and Player won " + playerWins + " times till now" );
      }
    }


  }

