var express = require('express');
var router = express.Router();
const fs = require('fs');
const { parse } = require("csv-parse");
const { stringify } = require("csv-stringify");



router.get('/', function(req, res, next) {
    var list_folder= fs.readdirSync(folder_playlist);
    res.render({liste_albums: list_folder});
  });


function read_playlist(){
    file_csv=folder_playlist+"/"+"playlist1.csv";

    fs.createReadStream(file_csv)
    .pipe(parse({ delimiter: ",", from_line: 1}))
    .on("data", function (row) {
        console.log(row);
    })
    .on("end", function () {
        console.log("finished");
    })
    .on("error", function (error) {
        console.log(error.message);
    });
}

function create_playlist(){
    file_csv_2=folder_playlist+"/"+"playlist2.csv";
    const writableStream = fs.createWriteStream(file_csv_2);
    const columns = [
    "year_month",
    "month_of_release",
    "passenger_type",
    "direction",
    "sex",
    "age",
    "estimate",
    ];

    const stringifier = stringify({ header: true, columns: columns });
    stringifier.write(["aaaa","aaaaaa","aaaa","aaaa","aaaaa","aaaaaa","aaaaaaaaa"]);

    stringifier.pipe(writableStream);
    console.log("Finished writing data");
}

function rename_playlist(){

}

function add_song_playlist(){

}

  module.exports = router;