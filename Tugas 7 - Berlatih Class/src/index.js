//import class
import Bootcamp from "./lib/bootcamp";
import Kelas from "./lib/kelas";
import Student from "./lib/student";

//Release 0
const sanber = new Bootcamp("sanbercode")

sanber.createClass("Laravel", "beginner", "abduh")

sanber.createClass("React", "beginner", "abdul")
console.log(sanber._classes)
// console.log(sanber)

//Release 1
let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
    console.log(nama)
    let newStud = new Student(nama)
    let kelas = sanber._classes[index % 2]._name
    sanber.register(kelas, newStud)
})
// sanber.register("React", "Tes")
// menampilkan data kelas dan student nya
sanber._classes.forEach(kelas => {
    console.log(kelas)
});

sanber._classes.forEach(kelas=>{
    kelas.assignNilai()
    console.log(kelas)
});

//Release 2 Graduate
sanber._classes.forEach(kelas=>{
    console.log(kelas.graduate())
});

//Release 3 runBatch
console.log("release 3")
console.log(sanber.runBatch())
