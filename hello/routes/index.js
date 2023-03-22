var express = require('express');
var router = express.Router();
const fs = require('fs');

FolderMusique="C:/Users/33645/Desktop/la fameuse/WEB/MusicMedia/Musique";
FolderImages="C:/Users/33645/Desktop/la fameuse/WEB/MusicMedia/images_app_web";

try {
  if (!fs.existsSync(FolderMusique)) {
    console.log("Le dossier existe pas");
    fs.mkdirSync(FolderMusique);
  }
} catch (err) {
  console.log("COUCOUCCCC");
  console.error(err);
}
var list_folder= fs.readdirSync(FolderMusique);
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




module.exports = router;
