//List Fungsi
//Soal 1 : Teriak
/*
    Contoh Perintah & output
    $ node functions teriak
*/

function teriak() {
    return "Halo Sanbers!";
}

//Soal 2 kalikan
/*
    Contoh Perintah & Output
    $ node functions kalikan 4 12
    48 // Output nya 4 x 12 = 48
*/

function kalikan(angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua;
}

//Soal 3 : Introduce
 /* 
    Contoh Perintah & Output 
    $ node function kenalan Agus 30 Gaming
*/

function introduce(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

module.exports = {
    teriak : teriak,
    kalikan : kalikan,
    introduce : introduce
}