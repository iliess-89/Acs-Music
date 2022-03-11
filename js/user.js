let btnUser = document.querySelector("#inscription");
let pseudo = document.querySelector("#name");
let mail = document.querySelector("#mail");
let password = document.querySelector("#password")
btnUser.addEventListener("click", function () {

 

    fetch('http://musics.logikstik.odns.fr/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( {
               name: pseudo.value,
               email: mail.value,
               password: password.value,
             })
        })

        .then(function (response) {
            return response.json();
        })
        
})