//Sanbercode Node JS with Adonis
//Tugas 5 - Object
//Mohammad Qori Aziz Hakiki


//Soal 1 Array of Object
function arrayToObject(array){
    var now = new Date();
    var thisYear = now.getFullYear();
    for (var i = 0; i < array.length; i++){
        var obj = {
            firstName : array[i][0],
            lastName : array[i][1],
            gender : array[i][2],
            age : thisYear - array[i][3]
        }
        if (array[i][3] === undefined) obj.age = "Invalid Birth Year";
        // console.log(obj)
        console.log(`${i+1}. ${array[i][0]+ ' ' + array[i][1]} : `, obj)
    }
}

var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]]
arrayToObject(people)

//Soal 2 Shopping Time

var items = [
    {
        name : 'Sepatu Stacattu',
        price : 1500000
    },
    {
        name : 'Baju Zoro',
        price : 500000
    },
    {
        name : 'Baju H&N',
        price : 250000
    },
    {
        name : 'Sweater Uniklooh',
        price : 175000
    },
    {
        name : 'Casing Handphone',
        price : 50000
    }
]
function shoppingTime(memberId, money) {
    // you can only write your code here!
    if (memberId == '' || memberId === undefined){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    } else if (money == '' || parseInt(money) < 50000 || memberId === undefined){
        return "Mohon maaf, uang tidak cukup";
    }

    var listPurchased = [];
    var changeMoney = money
    for (var i = 0; i < items.length; i++){
        if (items[i].price <= money){
            listPurchased.push(items[i].name);
            changeMoney -= items[i].price;
        }
    }
    var obj = {
        memberId : memberId,
        money : money,
        listPurchased : listPurchased,
        changeMoney : changeMoney
    }
    return obj
  }
   
//   // TEST CASES
//   console.log(shoppingTime('1820RzKrnWn08', 2475000));
//     //{ memberId: '1820RzKrnWn08',
//     // money: 2475000,
//     // listPurchased:
//     //  [ 'Sepatu Stacattu',
//     //    'Baju Zoro',
//     //    'Baju H&N',
//     //    'Sweater Uniklooh',
//     //    'Casing Handphone' ],
//     // changeMoney: 0 }
//   console.log(shoppingTime('82Ku8Ma742', 170000));
//   //{ memberId: '82Ku8Ma742',
//   // money: 170000,
//   // listPurchased:
//   //  [ 'Casing Handphone' ],
//   // changeMoney: 120000 }
//   console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
//   console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
//   console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


//Soal 3 naikAngkot

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arrObj = [];
    // console.log(arrPenumpang.length)
    for (var i=0; i < arrPenumpang.length; i++){
        // console.log(arrPenumpang[i], arrPenumpang[i+1])
        var obj = {
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2]
        };
        for (var i=0; i < rute.length; i++){
            if (rute[i] == obj.naikDari){
                naikDariIndex = i;
            }
            if (rute[i] == obj.tujuan){
                tujuanIndex = i;
            }
        }
        // console.log(obj)
        obj.bayar = (tujuanIndex - naikDariIndex) * 2000;
        arrObj.push(obj);
    }

    return arrObj
  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]

  //Soal 4 Nilai Tertinggi
  function nilaiTertinggi(siswa) {
    // Code disini
    var obj = {};
    for (var i = 0; i < siswa.length; i++){
        if (siswa[i].class in obj){
            console.log("has key1 in obj");
        } else {
            obj =  {
                class : siswa[i].class,
                name : siswa[i].name,
                score : siswa[i].score
            }
        }
    }
    return obj
  }
  
  // TEST CASE
  console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]));
  
  // OUTPUT:
  
  // {
  //   adonis: { name: 'Asep', score: 90 },
  //   vuejs: { name: 'Ahmad', score: 85 },
  //   reactjs: { name: 'Afrida', score: 78}
  // }
  