const router = require('express').Router();
const { karyawan } = require('../controller');

// add data karyawan ke database
router.post('/karyawan/add', karyawan.addDataKaryawan);

// update data karyawan
router.post('/karyawan/update', karyawan.editDataKaryawan);

module.exports = router;
