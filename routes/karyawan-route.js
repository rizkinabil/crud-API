const router = require('express').Router();
const { karyawan } = require('../controller');

// post data karyawan ke database
router.post('/karyawan/add', karyawan.addDataKaryawan);

module.exports = router;
