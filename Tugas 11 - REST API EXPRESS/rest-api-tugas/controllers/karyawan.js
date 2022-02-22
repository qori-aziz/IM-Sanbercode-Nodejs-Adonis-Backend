const fs = require('fs')

class KaryawanController {
    static register(req, res){
        fs.readFile('data.json', (err,data)=> {
            if(err){
                res.status(400).json({errorbos : "error baca data"})
            } else {
                let arrData  = JSON.parse(data)
                console.log(arrData)
                let {name, password, role} = req.body 
                let isLogin = false
                let newData = {name, password, role, isLogin}
                arrData.push(newData)
                console.log(arrData)
                fs.writeFile('data.json', JSON.stringify(arrData), (err) => {
                    if (err){
                        res.status(400).json({errorbos : "error register"})
                    } else {
                        res.status(200).json({message: "Berhasil register"})
                    }
                })
            }
        })
    }
    static findAll(req, res){
        fs.readFile('data.json', (err,data)=> {
            if(err){
                res.status(400).json({errorbos : "error baca data"})
            } else {
                let realData  = JSON.parse(data)
                res.status(200).json({message: "Berhasil get karyawan", data : realData })
            }
        })
    }
    static login(req, res){
        let {name, password} = req.body
        // let newKaryawan = {name, password, role, isLogin}
        fs.readFile('data.json', (err,data)=> {
            if(err){
                res.status(400).json({errorbos : "error baca data"})
            } else {
                let realData  = JSON.parse(data)
                let indexUpdate = realData.findIndex(item => (item.name == name && item.password == password))
                realData[indexUpdate].isLogin = true
                fs.writeFile('data.json', JSON.stringify(realData), (err) => {
                    if (err){
                        res.status(400).json({errorbos : "error login"})
                    } else {
                        res.status(200).json({message: "Berhasil login"})
                    }
                })
            }
        })
    }
    static addSiswa(req, res){
        let trainerName = req.params.name
        console.log(trainerName)
        let {name, kelas} = req.body
        let student = {name, kelas}
        fs.readFile('data.json', (err,data)=> {
            if(err){
                res.status(400).json({errorbos : "error baca data"})
            } else {
                let realData  = JSON.parse(data)
                console.log(realData)
                let indexUpdate = realData.findIndex(item => (item.name == trainerName && item.role == 'trainer'))
                // realData[indexUpdate].isLogin = true
                console.log(indexUpdate)
                if (indexUpdate != -1){
                    if (realData[indexUpdate].students === undefined){
                        realData[indexUpdate].students = []
                    }
                    realData[indexUpdate].students.push(student)
                    fs.writeFile('data.json', JSON.stringify(realData), (err) => {
                        if (err){
                            res.status(400).json({errorbos : "error add siswa"})
                        } else {
                            res.status(200).json({message: "Berhasil add siswa"})
                        }
                    })
                }
                else {
                    res.status(400).json({errorbos : "error add siswa, trainer tidak ada"})
                }
            }
        })
    }
}


module.exports = KaryawanController