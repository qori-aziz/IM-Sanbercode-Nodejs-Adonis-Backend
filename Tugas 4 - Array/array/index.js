//Sanbercode Node JS with Adonis
//Tugas 4 - Array
//Mohammad Qori Aziz Hakiki

var functions = require('./lib/funcLib.js');

var range = functions.range;
var rangeWithStep = functions.rangeWithStep;
var sum = functions.sum;
var dataHandling = functions.dataHandling;
var balikKata = functions.balikKata;
var input = functions.input;

var args = process.argv

switch (args[2]) {
    case "range":
        console.log(range(args[3], args[4]));
        break;
    case "rangeWithStep":
        console.log(rangeWithStep(args[3], args[4], args[5]));
        break;
    case "sum":
        console.log(sum(args[3], args[4], args[5]));
        break;
    case "dataHandling":
        console.log(dataHandling(input));
        break;
    case "balikKata":
        console.log(balikKata(args[3]));
        break;
}