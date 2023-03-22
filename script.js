function greetingPhase() {
    userName = prompt("Welcome to Rock Paper Scissors Game! Please enter a valid name to continue: ");
    if((userName == null ) || (userName.trim() == "")) {                                                    // Note: trim() method removes whitespace from both sides of a string.
        alert("You didn't enter a valid input. Please refresh the page and start the game again.");
        validRound = 5;
        gameOver(2);
    } else {
        userName = userName.trim();
        let firstLetter = userName.charAt(0).toUpperCase();
        userName = firstLetter + userName.slice(1);
        alert("Are you ready " + userName + "? Game will have 5 rounds. Choose your pick wisely!");
    }
}

function roundControl() {
    while(validRound < 5) {
        roundBegins();
    }
    if (exitFlag == 0) {
        gameOver();
    }
}

function roundBegins() {
    userPlay();
}

function computerChoice() {
    const computerRandomChoice = pickArray[Math.floor(Math.random() * 3)];
    return computerRandomChoice;
}

function userPlay() {
    let userPlay = prompt("Choose your pick: Rock, Paper or Scissors !");
    if(userPlay === null) {
        gameOver(1);
    } else {
        let userPick = userPlay.trim().toLowerCase();
        errorCheck(userPick);
    }
}

function errorCheck(userOption) {
    if(pickArray.includes(userOption)) {
        const computerPick = computerChoice(pickArray);
        playRound(userOption, computerPick);
        validRound++;
        console.log("Round: " + validRound + "- " + userName + ": " + userScore + " vs Computer: " + computerScore);
    } else {
        alert("Error! Please enter a valid choice!");
    } 
}

function playRound(userPick, computerPick) {
    let roundMessage = userName + ": " + userPick + " vs Computer: " + computerPick ;

    switch(userPick) {
        case "rock":
            if(computerPick == "rock") {
                alert(roundMessage);
                alert("Tie!");
            } else if(computerPick == "paper") {
                alert(roundMessage);
                alert("You Lose!");
                computerScore++;
            } else {
                alert(roundMessage);
                alert("You Win!");
                userScore++;
            }
            break;

        case "paper":
            if(computerPick == "paper") {
                alert(roundMessage);
                alert("Tie!");
            } else if(computerPick == "scissors") {
                alert(roundMessage);
                alert("You Lose!");
                computerScore++;
            } else {
                alert(roundMessage);
                alert("You Win!");
                userScore++;
            }
            break;
        
        case "scissors":
            if(computerPick == "scissors") {
                alert(roundMessage);
                alert("Tie!");
            } else if(computerPick == "rock") {
                alert(roundMessage);
                alert("You Lose!");
                computerScore++;
            } else {
                alert(roundMessage);
                alert("You win! 🌟");
                userScore++;
            }
    }
}

function gameOver(flag) {
    if(flag == 1) {
        let confirmExit = confirm("Are you sure you wanna quit?");
        if(confirmExit) {
            alert("You have succesfully quited from the game.");
            console.log(" -> Game finished <- ");
            validRound = 5;
            exitFlag = 1;
        } else {
            alert("You are back at the game.");
            roundControl();
        }
    } else if (flag == 2) {
        console.log("Computer gave up!");
        exitFlag = 2;
    } else {
        let finalScoreMessage = "Final score is - " + userName + ": " + userScore + "vs Computer: " + computerScore;
        if(userScore > computerScore) {
            alert("You win! GG's!");
            alert(finalScoreMessage);
            console.log("-> Game finished <-");
            playAgain();
        } else if(userScore < computerScore) {
            alert("Computer wins! Not your lucky day!");
            alert(finalScoreMessage);
            console.log("-> Game finished <-");
            playAgain();
        } else {
            alert("Tie game! No winner today.");
            alert(finalScoreMessage);
            console.log("-> Game finished <-");
            playAgain();
        }
    }
}

function playAgain() {
    let nextMatch = confirm("Play Again?");
    if (nextMatch) {
        validRound = 0;
        userScore = 0;
        computerScore = 0;
        roundControl();
    } else {
        alert("Maybe next time we play. Bye!");
    }
}

let userName = "";
let userScore = 0;
let computerScore = 0;
let validRound = 0;
let exitFlag = 0;

const pickArray = ["rock", "paper", "scissors"];

greetingPhase();

roundControl();