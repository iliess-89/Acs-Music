let detailsAlbum = document.querySelector(".song-liste");
let templateDetails = document.querySelector("#details-album")
let jeton = sessionStorage.getItem("token");

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${jeton}`);

let adresse = document.location.href;
let url = new URL(adresse);
let id = url.searchParams.get("id");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'

};
fetch("http://musics.logikstik.odns.fr/api/albums/" + id, requestOptions)
  .then(response => response.json())
  .then(result => {


    let image = document.querySelector("img");
    let titre = document.querySelector("h1");

    fetch("http://musics.logikstik.odns.fr" + result.artist, requestOptions)
      .then(response => response.json())
      .then(art => {
        let artist = document.querySelector("p");
        artist.textContent = art.é;
      })
      .catch(error => console.log('error', error));
    let pistes = result.tracks;
  
 
   
    for( let track of pistes){

      fetch("http://musics.logikstik.odns.fr" + track, requestOptions)
      .then(response => response.json())
      .then(piste => {
          
         
  
            let clone = document.importNode(templateDetails.content, true);
  
            let name = clone.querySelector("h3");
            let time = clone.querySelector("span");
            let lien = clone.querySelector("a");
            lien.href ="ecoute-music.html?id=" + piste.id;
  
            name.textContent = piste.name;
            let minute= Math.floor(piste.time/ 60000)
            if (minute < 10){
              minute = "0" + minute;
            }
            let seconde =Math.floor((piste.time %60000)/ 1000)
            if(seconde < 10){
              seconde = "0" + seconde;
            }
           

            time.textContent = minute + ":" + seconde;
            detailsAlbum.appendChild(clone);
          
         
        })
        .catch(error => console.log('error', error));
    }
    image.src = result.picture;
    titre.textContent = result.name;

  })
  .catch(error => console.log('error', error));