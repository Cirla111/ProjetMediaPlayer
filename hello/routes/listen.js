var express = require('express');
var router = express.Router();
const fs = require('fs');

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


/* GET home page. */
router.get('/', function(req, res, next) {
    artiste_musique= current_musique[0];
    album_musique= current_musique[1];
    titre_musique= current_musique[2];
    path="http://localhost:3000/get/song/"+artiste_musique+"/"+album_musique+"/"+titre_musique;
    res.render('listen', { titre: titre_musique, artiste: artiste_musique, album: album_musique, path_musique: path, liste: list_folder});
});


module.exports = router;
