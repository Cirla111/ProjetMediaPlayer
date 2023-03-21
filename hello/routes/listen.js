var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    artiste_musique= current_musique[0];
    album_musique= current_musique[1];
    titre_musique= current_musique[2];
    console.log("Current song: ",current_musique);
    res.render('listen', { titre: titre_musique, artiste: artiste_musique, album: album_musique});
});


module.exports = router;
