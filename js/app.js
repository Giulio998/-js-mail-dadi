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





/* Bonus */

const opzioni = ["sasso","carta","forbice"]

function game() {

let resultsContainer = document.getElementById("risultato-morra");
let randomValue = Math.floor(Math.random() * 3);
let sceltaPlayer = document.getElementById("opzioni-user").value
let sceltaComputer = opzioni[randomValue];


    if (sceltaPlayer == "sasso" && sceltaComputer == "carta") {
        resultsContainer.append(" HAI PERSO ")
    } else if (sceltaPlayer == "carta" && sceltaComputer == "sasso") {
        resultsContainer.append(" HAI VINTO ")
    } else if (sceltaPlayer == "sasso" && sceltaComputer == "sasso") {
        resultsContainer.append(" HAI PAREGGIATO ")
    } else if (sceltaPlayer == "sasso" && sceltaComputer == "forbice"){
        resultsContainer.append(" HAI VINTO ")
    } else if (sceltaPlayer == "carta" && sceltaComputer == "carta"){
        resultsContainer.append(" HAI PAREGGIATO ")
    } else if (sceltaPlayer == "carta" && sceltaComputer == "forbice"){
        resultsContainer.append(" HAI PERSO ")
    } else if (sceltaPlayer == "forbice" && sceltaComputer == "carta") {
        resultsContainer.append(" HAI VINTO ")
    } else if (sceltaPlayer == "forbice" && sceltaComputer == "sasso") {
        resultsContainer.append(" HAI PERSO ")
    } else {
        resultsContainer.append(" HAI PAREGGIATO ")
    }
        
}

document.getElementById("invio").addEventListener("click", game)
