//Fungsi utama yang digunakan pada soal no 6

var functions = require('./lib/funcLib.js');


var convert = functions.convert;
var checkScore = functions.checkScore;
var filterData = functions.filterData;
var sapa = functions.sapa;
var data = functions.data;

var args = process.argv

switch (args[2]) {
    case "sapa":
        sapa(args[3]);
        break;
    case "convert":
        convert(args[3], args[4], args[5]);
        break;
    case "checkScore":
        checkScore(args[3]);
        break;
    case "filterData":
        filterData(data, args[3]);
        break;
}