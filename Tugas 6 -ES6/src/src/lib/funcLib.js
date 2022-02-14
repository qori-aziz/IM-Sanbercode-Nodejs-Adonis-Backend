//Library fungsi fungsi pada tugas 6

//Soal 1
const sapa = (nama) => console.log(`halo selamat pagi, ${nama}`)

// Tes no 1
// sapa("Qori")

//Soal 2 Konversi Object
const convert = (nama, domisili, umur) => {
    umur = parseInt(umur)
    const obj = {nama, domisili, umur}
    console.log(obj)
}

//Tes 2
// convert("qori", "bogor", "25")

//Soal 3 Check Score
const checkScore = (stringdata) => {
    const arr = stringdata.split(',')
    let [namaArr, kelasArr, nilaiArr] = arr
    let [, name] = namaArr.split(':')
    let [, classname] = kelasArr.split(':')
    let [, score] = nilaiArr.split(':')

    score = parseInt(score)
    const obj = {name, classname, score}
    console.log(obj)
}

//Tes 3
// checkScore("name:Ahmad,class:Adonis,score:89")

// Soal 4 Filter Data
const data = [
    { name: "Ahmad", class: "adonis"},
    { name: "Regi", class: "laravel"},
    { name: "Bondra", class: "adonis"},
    { name: "Iqbal", class: "vuejs" },
    { name: "Putri", class: "Laravel" }
]

const filterData = (data, classname) => {
    let result = data.filter(el => el.class == classname)
    console.log(result)
}

//Tes no 4
// filterData(data, "laravel")

module.exports = {
    sapa : sapa,
    convert : convert,
    checkScore : checkScore,
    filterData : filterData,
    data : data,
    filterData : filterData
}