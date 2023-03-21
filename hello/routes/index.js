var express = require('express');
var router = express.Router();
const fs = require('fs');

try {
  if (!fs.existsSync(folderName)) {
    console.log("Le dossier existe pas");
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.log("COUCOUCCCC");
  console.error(err);
}
var list_folder= fs.readdirSync(folderName);
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
