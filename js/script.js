/*****vérification E-mail***********/
let adresseMail = document.querySelector("#inscription");
adresseMail.addEventListener("click", () => {
    let email = document.querySelector("#mail");
    let monEmail = email.value;
    if (!monEmail.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        alert(monEmail + " n'est pas une adresse valide");
    }
})
/**************Vérification de mot de passe************* */
window.onload = () => {
    document.querySelector("#password").addEventListener("input", checkpass);
}

function checkpass() {
    let verification = document.querySelector(".check-pass");
    if(document.querySelector("#password").value != 0){
        verification.style.display = "block";
    }else{
        verification.style.display = "none";
    }
    let score = 0;
    let mdp = this.value;
    let minuscule = document.querySelector("#minuscule");
    let majuscule = document.querySelector("#majuscule");
    let chiffre = document.querySelector("#chiffre");
    let special = document.querySelector("#special");
    let longueur = document.querySelector("#longueur");
    if (/[a-z]/.test(mdp)) {
        minuscule.classList.replace("invalid", "valid");
    } else {
        minuscule.classList.replace("valid", "invalid");
    }
    if (/[A-Z]/.test(mdp)) {
        majuscule.classList.replace("invalid", "valid");
    } else {
        majuscule.classList.replace("valid", "invalid");
    }
    if (/[0-9]/.test(mdp)) {
        chiffre.classList.replace("invalid", "valid");
    } else {
        chiffre.classList.replace("valid", "invalid");
    }
    if (/[*-=!¤?%$#&@*]/.test(mdp)) {

        special.classList.replace("invalid", "valid");
    } else {
        special.classList.replace("valid", "invalid");
    }
    if (mdp.length >= 12) {
        longueur.classList.replace("invalid", "valid");
    } else {
        longueur.classList.replace("valid", "invalid");
    }
}