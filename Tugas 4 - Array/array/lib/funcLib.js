//List Fungsi Pada Tugas 4 - Array
//Soal 1 : Range
/*
    Contoh Perintah & output
    $ node array range 1 10 
    Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function range(startNum, finishNum){
    var output = [];
    var start = parseInt(startNum);
    var finish = parseInt(finishNum);
    if (startNum == '' || finishNum==''){
        return output;
    } else if (start <= finish ){
        for (var i = start; i <= finish; i++ ){
            output.push(i);
        }
    } else if (start > finish){
        for (var i = start; i >= finish; i-- ){
            output.push(i);
        }
    }
    return output;
}

//Soal 2 : Range with Step
/*
    Contoh Perintah & output
    $ node array rangeWithStep 1 10 2 
    Output: [1, 3, 5, 7, 9]
*/

function rangeWithStep(startNum, finishNum, step){
    var output = [];
    var start = parseInt(startNum);
    var finish = parseInt(finishNum);
    var step = parseInt(step);
    if (startNum == '' || finishNum==''){
        return output;
    } else if (start <= finish ){
        var i = start;
        while (i <= finish){
            output.push(i);
            i = i + step;
        }
    } else if (start > finish){
        var i = start;
        while (i >= finish){
            output.push(i);
            i = i - step;
        }
    }
    return output;
}

//Soal 3 : Sum of Range
/*
    Contoh Perintah & output
    $ node array sum 1 10
    Output : 55
    node array sum 5 50 2
    Output : 621
*/

function sum(startNum, finishNum, step){
    var sumRange = 0;
    if (step === undefined){
        step = 1;
    }

    var start = parseInt(startNum);
    var finish = parseInt(finishNum);
    var step = parseInt(step);

    if (finishNum==''){
        sumRange = start;
    } else if (start <= finish ){
        var i = start;
        while (i <= finish){
            sumRange += i;
            i += step;
        }
    } else if (start > finish){
        var i = start;
        while (i >= finish){
            sumRange += i;
            i -= step;
        }
    }
    return sumRange;
}

//Soal No. 4 (Array Multidimensi)
//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(array){
    var tampung = ""
    for (var i = 0; i < array.length; i++) {
        tampung += `Nomor ID:   ${array[i][0]} \nNama Lengkap:  ${array[i][1]}\nTTL:   ${array[i][2]} ${array[i][3]}\nHobi:   ${array[i][4]}\n\n\n`

    }
    return tampung
}

//Soal 5 Balik kata
/*
    Contoh Perintah & output
    $ node array balikKata SanberCode 
    Output: edoCrebnaS
*/
function balikKata(kata){
    var output = "";
    for (var i = kata.length-1; i>=0; i--){
        output+=kata[i];
    }
    return output;
}

module.exports = {
    range : range,
    rangeWithStep : rangeWithStep,
    sum : sum,
    dataHandling : dataHandling,
    balikKata : balikKata,
    input : input
}

//Testing fungsi
// console.log(range(54,50));
// console.log(rangeWithStep(1,10,2));
// console.log(rangeWithStep(5,2,1));
// console.log(sum(1, 10, ''))
// console.log(sum(5, 50, 2))
// console.log(sum(1, '', ''))
// console.log(dataHandling(input))
// console.log(balikKata("I am Sanbers"))