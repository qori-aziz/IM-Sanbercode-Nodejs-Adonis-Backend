var express = require('express');
var router = express.Router();

const KaryawanController = require('../controllers/karyawan.js')


/* karyawan listing. */
router.get('/karyawan', KaryawanController.findAll)
router.post('/register', KaryawanController.register)
router.post('/login', KaryawanController.login)
router.post('/karyawan/:name/siswa', KaryawanController.addSiswa)


module.exports = router;
