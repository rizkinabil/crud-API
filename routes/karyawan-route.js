const router = require('express').Router();
const { karyawan } = require('../controller');

// get data karyawan
router.get('/karyawan', karyawan.getDataKaryawan);

// get data karyawan by id
router.get('/karyawan/:id', karyawan.getDataKaryawanByID);

// add data karyawan ke database
router.post('/karyawan/add', karyawan.addDataKaryawan);

// update data karyawan
router.post('/karyawan/update', karyawan.editDataKaryawan);

module.exports = router;
