var express = require('express');
var router = express.Router();
const fs = require('fs');
const folderName = 'C:/Users/33645/Desktop/Jeux/Pokemon Essentials 19/Audio';

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
  res.render('index', { title: 'Express', liste: list_folder});
});



function redirection() {
  
}




module.exports = router;
