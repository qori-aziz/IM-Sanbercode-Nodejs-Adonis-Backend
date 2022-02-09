//Sanbercode Node JS with Adonis
//Tugas 3 - Looping
//Mohammad Qori Aziz Hakiki

var functions = require('./lib/functions.js');

var loopWhile = functions.loopWhile;
var loopFor = functions.loopFor;
var persegiPanjang = functions.persegiPanjang;
var tangga = functions.tangga;
var catur = functions.catur;

var args = process.argv

switch (args[2]) {
    case "while":
        console.log(loopWhile());
        break;
    case "for":
        console.log(loopFor());
        break;
    case "persegiPanjang":
        console.log(persegiPanjang(args[3], args[4]));
        break;
    case "tangga":
        console.log(tangga(args[3]));
        break;
    case "catur":
        console.log(catur(args[3]));
        break;
}


// console.log(teriak()) // "Halo Sanbers!"
// console.log(process.argv)

// var hasilKali = kalikan(num1, num2)
// console.log(hasilKali) // 48

// var perkenalan = introduce(name, age, address, hobby)
// console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di jakarta, dan saya punya hobby yaitu Gaming!" 