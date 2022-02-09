//Sanbercode Node JS with Adonis
//Tugas 3 - Functions
//Mohammad Qori Aziz Hakiki

var functions = require('./lib/functions.js');

var teriak = functions.teriak;
var kalikan = functions.kalikan;
var introduce = functions.introduce;

var args = process.argv

switch (args[2]) {
    case "teriak":
        console.log(teriak());
        break;
    case "kalikan":
        console.log(kalikan(args[3], args[4]));
        break;
    case "introduce":
        console.log(introduce(args[3], args[4], args[5], args[6]));
        break;
}


// console.log(teriak()) // "Halo Sanbers!"
// console.log(process.argv)

// var hasilKali = kalikan(num1, num2)
// console.log(hasilKali) // 48

// var perkenalan = introduce(name, age, address, hobby)
// console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di jakarta, dan saya punya hobby yaitu Gaming!" 