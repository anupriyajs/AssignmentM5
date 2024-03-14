function findWinner(player, computer) {
    if (player == computer) {
        return "Its a tie"
    } else if (player == 'rock') {
        if (computer == 'paper') {
            return 'Computer Won'
        } else {
            return 'Player Won'
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            return 'Computer Won'
        } else {
            return 'Player Won'
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            return 'Computer Won'
        } else {
            return 'Player Won'
        }
    }
}


while (true) {
    let userChoice = prompt("Enter your choice (type: rock/scissors/paper")
    if (userChoice === null) {
        break;
    }

    if (userChoice === "rock" || userChoice === "scissors" || userChoice === "paper") {
        let randomNum = Math.floor(Math.random() * 3);
        let computerChoice 
        switch (randomNum) {
            case 1: computerChoice = "rock"; break;
            case 2: computerChoice = "scissors"; break;
            case 3: computerChoice = "paper"; break;
        }
       
        alert(findWinner(userChoice, computerChoice));
    }
}
