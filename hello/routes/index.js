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
