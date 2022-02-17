import fspromise from 'fs/promises'
import 'core-js/stable'
import 'regenerator-runtime/runtime'


//Release 1
const path = 'F:/Sanbercode/Node Js/IM-Sanbercode-Nodejs-Adonis-Backend/Tugas 8 - Asynchronous/src/data.json'
export const login = (stringdata) => {
    const arr = stringdata.split(',')
    let [name, password] = arr
    fspromise.readFile(path)
        .then(data => {
            let realData = JSON.parse(data)
            let indexUpdate = realData.findIndex(item => (item.name == name && item.password == password))
            realData[indexUpdate].isLogin = true
            return fspromise.writeFile(path, JSON.stringify(realData))
        })
        .then(() => console.log("Berhasil Login"))
        .catch(err => {
            console.log(err)
        })
}

//Release 2
export const addSiswa = async (stringdata) => {
    const arr = stringdata.split(',')
    let [studentname, trainername] = arr
    let dataRead = await fspromise.readFile(path)
    let realData = JSON.parse(dataRead)
    //Check admin and isLogin
    let indexAdmin = realData.findIndex(item => (item.role == 'admin' && item.isLogin == true))
    if (indexAdmin != -1) {
        let indexTrainer = realData.findIndex(item => (item.name == trainername && item.role == 'trainer'))
        realData[indexTrainer].students =[]
        let obj = {
            name : studentname
        }
        realData[indexTrainer].students.push(obj)
        await fspromise.writeFile(path, JSON.stringify(realData))
        console.log("Berhasil add siswa")
    }
    else {
        console.log ("Gagal add siswa")
    }
}