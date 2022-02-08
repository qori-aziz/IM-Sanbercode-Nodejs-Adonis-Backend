//Sanbercode Node JS with Adonis
//Tugas 2 - Conditional
//Mohammad Qori Aziz Hakiki


//Soal 1 : If - Else
var nama = "John"
var peran = "Guard"

// Output:

// Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"
if (nama == '' && peran == ''){
    console.log("Nama harus diisi!");
}
//Output untuk Input nama = 'John' dan peran = ''
// "Halo John, Pilih peranmu untuk memulai game!"
else if (nama != '' && peran == '') { 
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}
// //Output untuk Input nama = 'Jane' dan peran 'Penyihir'
// "Selamat datang di Dunia Werewolf, Jane"
// "Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!"
else if (nama != '' && peran == "Penyihir"){
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
    console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
}
//Output untuk Input nama = 'Jenita' dan peran 'Guard'
// "Selamat datang di Dunia Werewolf, Jenita"
// "Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf."
else if (nama != '' && peran == "Guard"){
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
    console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
}
//Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
// "Selamat datang di Dunia Werewolf, Junaedi"
// "Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!"
else if (nama != '' && peran == "Werewolf"){
    console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
    console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
}

// Soal 2 : Switch Case
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, 
// yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. 
// Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. 
// Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

var hari = 21; 
var bulan = 9; 
var tahun = 1945;


// var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch(hari) {
  case 1:   { tanggal = "1"; break; }
  case 2:   { tanggal = "2"; break; }
  case 3:   { tanggal = "3"; break; }
  case 4:   { tanggal = "4"; break; }
  case 5:   { tanggal = "5"; break; }
  case 6:   { tanggal = "6"; break; }
  case 7:   { tanggal = "7"; break; }
  case 8:   { tanggal = "8"; break; }
  case 9:   { tanggal = "9"; break; }
  case 10:   { tanggal = "10"; break; }
  case 11:   { tanggal = "11"; break; }
  case 12:   { tanggal = "12"; break; }
  case 13:   { tanggal = "13"; break; }
  case 14:   { tanggal = "14"; break; }
  case 15:   { tanggal = "15"; break; }
  case 16:   { tanggal = "16"; break; }
  case 17:   { tanggal = "17"; break; }
  case 18:   { tanggal = "18"; break; }
  case 19:   { tanggal = "19"; break; }
  case 20:   { tanggal = "20"; break; }
  case 21:   { tanggal = "21"; break; }
  case 22:   { tanggal = "22"; break; }
  case 23:   { tanggal = "23"; break; }
  case 24:   { tanggal = "24"; break; }
  case 25:   { tanggal = "25"; break; }
  case 26:   { tanggal = "26"; break; }
  case 27:   { tanggal = "27"; break; }
  case 28:   { tanggal = "28"; break; }
  case 29:   { tanggal = "29"; break; }
  case 30:   { tanggal = "30"; break; }
  case 31:   { tanggal = "31"; break; }
}

switch(bulan) {
    case 1:   { bulan = "Januari"; break; }
    case 2:   { bulan = "Februari"; break; }
    case 3:   { bulan = "Maret"; break; }
    case 4:   { bulan = "April"; break; }
    case 5:   { bulan = "Mei"; break; }
    case 6:   { bulan = "Juni"; break; }
    case 7:   { bulan = "Juli"; break; }
    case 8:   { bulan = "Agustus"; break; }
    case 9:   { bulan = "September"; break; }
    case 10:   { bulan = "Oktober"; break; }
    case 11:   { bulan = "November"; break; }
    case 12:   { bulan = "Desember"; break; }
}

console.log(tanggal + ' ' + bulan + ' ' + tahun);