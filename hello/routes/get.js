var express = require('express');
var router = express.Router();
const fs = require('fs');

/* FolderMusique="C:/Users/33645/Desktop/la fameuse/WEB/MusicMedia/Musique";
FolderImages="C:/Users/33645/Desktop/la fameuse/WEB/MusicMedia/images_app_web";*/

/* FolderMusique="/home/damien/Musique"
FolderImages="/home/damien/Images/images_app_web" */





router.get('/artist/:artist', function(req, res, next) {
    result=get_albums(req.params.artist)
    res.send({liste_albums: result});
  });

router.get('/album/:artist/:album', function(req, res, next) {
    result=get_songs(req.params.artist,req.params.album)
    res.send({liste_songs: result});
});

router.get('/song/:artist/:album/:song', function(req, res, next) {
    fileSong=folder_musique+"/"+req.params.artist+"/"+req.params.album+"/"+req.params.song+".ogg";
    res.sendFile(fileSong);
});

router.get('/image/album/:albumid', function(req, res, next) {
    
    fileName=folder_images + "/Covers/"+req.params.albumid+".jpeg";
    res.sendFile(fileName);
});

router.get('/image/artist/:artistid', function(req, res, next) {
    
    fileName=folder_images + "/Artists/"+req.params.artistid+".jpeg";
    res.sendFile(fileName);
});

router.get('/current_song_set/:artist/:album/:song', function(req, res, next) {
    console.log("oui");
    current_musique[0]=req.params.artist;
    current_musique[1]=req.params.album;
    current_musique[2]=req.params.song;
    console.log("oui");
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({ title: 'Express', liste: "dddddd" });
});

function get_albums(artist){
    var list_folder= fs.readdirSync(folder_musique+"/"+artist);
    return list_folder;
}

function get_songs(artist,album){
    var list_folder= fs.readdirSync(folder_musique+"/"+artist+"/"+album);
    return list_folder;
}


module.exports = router;


