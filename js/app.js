const emailsArray = ["pippo@outlook.it","giovanni@homtail.it,franco@hotmail.it"]

function emailCheck() {

    let userEmail = document.getElementById("input-user-email").value
    let verified = false;

    for (let i = 0; i < emailsArray.length; i++) {

        let email = emailsArray[i]

        if (userEmail === email) {
            verified = true
        } 

    }

    verified == true ? console.log("la email è gia presente nell'array") : console.log("la email non è presente nell'array");
    /* if (verified == true) {
        console.log("la email è gia presente nell'array");
        
    } else {
        console.log("la email non è presente nell'array");
    } */
}

document.getElementById("email-button").addEventListener("click", emailCheck)


function diceGame() {

 const resultsContainer = document.getElementById("risultato");   

let playerDice = Math.floor(Math.random() * 6) + 1;
let computerDice = Math.floor(Math.random() * 6) + 1;

if (playerDice < computerDice) {
    resultsContainer.append(" HAI PERSO "," PLAYER ", playerDice ," COMPUTER ", computerDice )
    
} else if (playerDice > computerDice) {
    resultsContainer.append(" HAI VINTO "," PLAYER ", playerDice ," COMPUTER ", computerDice )
} else {
    resultsContainer.append(" HAI PAREGGIATO "," PLAYER ", playerDice ," COMPUTER ", computerDice )
}

}

document.getElementById("dice-button").addEventListener("click", diceGame)