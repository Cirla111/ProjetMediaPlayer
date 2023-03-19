var express = require('express');
var router = express.Router();
const fs = require('fs');
const folderName = '/home/damien/Musique';

router.get('/artist/:artist', function(req, res, next) {
    result=get_albums(req.params.artist)
    res.send({liste_albums: result});
  });

router.get('/album/:artist/:album', function(req, res, next) {
    result=get_songs(req.params.artist,req.params.album)
    res.send({liste_songs: result});
});

router.get('/song', function(req, res, next) {
    res.send( { title: 'Express', liste: "cccccc"});
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({ title: 'Express', liste: "dddddd" });
});

module.exports = router;

function get_albums(artist){
    var list_folder= fs.readdirSync(folderName+"/"+artist);
    return list_folder;
}

function get_songs(artist,album){
    var list_folder= fs.readdirSync(folderName+"/"+artist+"/"+album);
    return list_folder;
}

