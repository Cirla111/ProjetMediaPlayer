var express = require('express');
var router = express.Router();
const fs = require('fs');

/* folder_musique="C:/Users/33645/Desktop/la fameuse/WEB/MusicMedia/Musique";
folder_images="C:/Users/33645/Desktop/la fameuse/WEB/MusicMedia/images_app_web"; */

/* folder_musique="/home/damien/Musique"
folder_images="/home/damien/Images/images_app_web" */

try {
  if (!fs.existsSync(folder_musique)) {
    console.log("Le dossier existe pas");
    fs.mkdirSync(folder_musique);
  }
} catch (err) {
  console.log("COUCOUCCCC");
  console.error(err);
}
var list_folder= fs.readdirSync(folder_musique);
var length_folder= list_folder.length;
for (let i=0; i<length_folder; i++){
  
}

/* GET home page. */
router.get('/', function(req, res, next) {
  max_art=list_folder.length;
  nbr_art=max_art;
  while(nbr_art===max_art){
    nbr_art = Math.floor(Math.random() * max_art);
  }
  var list_album= fs.readdirSync(folder_musique + "/" + list_folder[nbr_art]);
  max_alb=list_album.length;
  nbr_alb=max_alb;
  while(nbr_alb===max_alb){
    nbr_alb = Math.floor(Math.random() * max_alb);
  }
  var list_song= fs.readdirSync(folder_musique + "/" + list_folder[nbr_art] + "/" + list_album[nbr_alb]);
  max_sg=list_song.length;
  nbr_sg=max_sg;
  while(nbr_sg===max_sg){
    nbr_sg = Math.floor(Math.random() * max_sg);
  }
  console.log(list_folder[nbr_art]);
  console.log(list_album[nbr_alb]);
  console.log(list_song[nbr_sg]);
  current_musique=[list_folder[nbr_art],list_album[nbr_alb],list_song[nbr_sg]]
  artiste_musique= current_musique[0];
  album_musique= current_musique[1];
  titre_musique= current_musique[2];
  res.render('index', { titre: titre_musique, artiste: artiste_musique, album: album_musique, liste: list_folder});
});



function redirection() {
  
}

function httpGet(theUrl) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false);
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
  }



module.exports = router;
