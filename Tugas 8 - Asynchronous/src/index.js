const fs = require('fs')

import {
    readData,
    writeData,
    register
} from './lib/funcLibCallback.js'

import{
    addSiswa,
    login
} from './lib/funcLibPromise.js'

var args = process.argv

switch (args[2]) {
    case "register":
        console.log(register(args[3]));
        break;
    case "login":
        login(args[3]);
        break;
    case "addSiswa":
        addSiswa(args[3]);
        break;
}