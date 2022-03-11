
let albums = document.querySelector(".carousel");
let template = document.querySelector("#albums");
let listenedMusic =document.querySelector(".listened-music");
let template1 =document.querySelector("#listened");

let jeton = sessionStorage.getItem("token");

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${jeton}` );


let requestOptions = {
  method: 'GET',
  headers: myHeaders,

};

fetch("http://musics.logikstik.odns.fr/api/albums", requestOptions)
  .then(response => response.json())
  .then(result => {
    for(let album=0; album<20; album++){
     
      let clone = document.importNode(template.content, true);
      let titre = clone.querySelector("h2");
      let image = clone.querySelector("img");
   
      let lien = clone.querySelector("a");
      lien.href="details-album.html?id=" + result[album].id;
      titre.textContent = result[album].name;
    image.src = result[album].picture;
    
      albums.appendChild(clone);
    }
  })
  .catch(error => console.log('error', error));


  /********afficher les 8 dernieres musiques écoutées ******** */


  fetch("http://musics.logikstik.odns.fr/api/albums/?order=recently_played", requestOptions)
  .then(response => response.json())
  .then(result => {
    for(let music=0; music<8; music++){
      let clone =document.importNode(template1.content, true);
      let image = clone.querySelector("img");
      let titre = clone.querySelector("p");
     
      image.src = result[music].picture;
      titre.textContent = result[music].name;
     
      listenedMusic.appendChild(clone);
    }
  })
  .catch(error => console.log('error', error));

  

  