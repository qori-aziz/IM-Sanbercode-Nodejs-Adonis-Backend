//List Fungsi

//Soal 1 : While
/*
    Contoh Perintah & output
    $ node looping while 
*/

function loopWhile() {
    var jawaban1 = "";
    // Code kamu di sini, lakukan looping dengan while
    i=0;
    while(i<20){
        i=i+2;
        jawaban1 += i + " - I love coding" + "\n";
    }
    while(i>0){
        jawaban1 += i + " -  I will become a mobile developer" + "\n";
        i=i-2;
    }
    return jawaban1;
}

//Soal 2 For
/*
    contoh perintah $ node looping for 
*/
// SYARAT:
// A. Jika angka ganjil maka tampilkan Santai
// B. Jika angka genap maka tampilkan Berkualitas
// C. Jika angka yang sedang ditampilkan adalah kelipatan 3 DAN angka ganjil maka tampilkan I Love Coding.
function loopFor() {
    var jawaban2 = "";
    // Code kamu di sini, lakukan looping dengan while
    for (var i = 1; i <= 20; i++){
        if ((i % 3 == 0) && ( i%2 != 0) ){
            jawaban2 += `${i} - I Love Coding\n`;
        } else if ( i%2 != 0){
            jawaban2 += `${i} - Santai\n`;
        } else {
            jawaban2 += `${i} - Berkualitas\n`;
        }
    }
    return jawaban2;
}

//Soal 3 : Persegi Panjang
function persegiPanjang(panjang, lebar) {
    var jawaban3 = "";
    for (var l = 0; l < lebar; l++){
        for (var p = 0; p < panjang; p++){
            jawaban3 += "#";
        }
        jawaban3+= "\n";
    }
    return jawaban3;
}

//Soal 4 : Tangga
function tangga(sisi) {
    var jawaban4 = "";
    for (var i = 1; i <= sisi; i++){
        for (var j = 1; j <= i; j++){
            jawaban4 += "#";
        }
        jawaban4+= "\n";
    }
    return jawaban4;
}

//Soal 5 
function catur(sisi){
    var jawaban5 = "";
    var isBlack = false;
    for (var i = 1; i <= sisi; i++){
        for (var j = 1; j <= sisi; j++){
            if (isBlack) {
                jawaban5 += "#";
                isBlack = false;
            } else if (!isBlack) {
                jawaban5 += " ";
                isBlack = true;
            }
        }
        isBlack = !isBlack;
        jawaban5 += "\n";
    }
    return jawaban5;
}

module.exports = {
    loopWhile : loopWhile,
    loopFor : loopFor,
    persegiPanjang : persegiPanjang,
    tangga : tangga,
    catur : catur
}