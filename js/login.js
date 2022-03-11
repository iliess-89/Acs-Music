let btnLogin = document.querySelector("#connecter");
let userName = document.querySelector("#login-mail");
let motDepasse = document.querySelector("#login-password");
btnLogin.addEventListener("click", function () {

    fetch('http://musics.logikstik.odns.fr/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
               
            },
            body: JSON.stringify({
                username: userName.value,
                password: motDepasse.value,
            })
        })


        .then(function (response) {
      
            return response.json();
        })
        .then(function (json) {
            
            sessionStorage.setItem("token", json.token);
            
           if(json.token != "undefined"){
         
               window.location.href = "./accueil.html";
           }
         })
         .catch(error => console.log('error', error));
})