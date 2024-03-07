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