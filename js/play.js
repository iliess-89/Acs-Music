let jeton = sessionStorage.getItem("token");
let adresse = document.location.href;
let url = new URL(adresse);
let id = url.searchParams.get("id");
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${jeton}`);
let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch("http://musics.logikstik.odns.fr/api/tracks/" + id, requestOptions)
  .then(response => response.json())
  .then(result => {
   
    let titre = document.querySelector("h3");
    titre.textContent = result.name;
    fetch("http://musics.logikstik.odns.fr" + result.album, requestOptions)
      .then(response => response.json())
      .then(albums => {
        let image = document.querySelector("img");
        image.src = albums.picture;
        fetch("http://musics.logikstik.odns.fr" + albums.artist, requestOptions)
          .then(response => response.json())
          .then(art => {
            let artiste = document.querySelector("p");
            artiste.textContent= art.username;

          })
          .catch(error => console.log('error', error));
      })
      .catch(error => console.log("error", error));
  })
  .catch(error => console.log("error", error));