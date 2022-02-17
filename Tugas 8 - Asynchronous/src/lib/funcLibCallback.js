const fs = require('fs')

const path = 'F:/Sanbercode/Node Js/IM-Sanbercode-Nodejs-Adonis-Backend/Tugas 8 - Asynchronous/src/data.json'
export const readData = () => {
    fs.readFile(path, (err, data) => {
        if (err) console.log(err)
        console.log(JSON.parse(data))
    })
}

export const writeData = (newData) => {
    fs.readFile(path, (err, data) => {
        if (err) console.log(err)
        // console.log(JSON.parse(data))
        let dataArr = JSON.parse(data)
        dataArr.push(newData)
        fs.writeFile(path, JSON.stringify(dataArr), {encoding: 'utf-8'}, (err) => {
            if (err) console.log(err)
        })
    })
}
// jalankan readData
// readData()

//Release 0
export const register = (stringdata) => {
    const arr = stringdata.split(',')
    let [name, password, role] = arr
    const obj = {
        name : name,
        password : password,
        role : role,
        isLogin : false,
    }
    writeData(obj)
    return "Berhasil register"
}

//Testing
// console.log(register("Bondra,123456,admin"))

//Release 1
export const login = (stringdata) => {
    
}