const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
  console.error(err);
});

module.exports = {
  getDataKaryawan(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
            SELECT * FROM tabel_karyawan;
            `,
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: 'Berhasil ambil data!',
            data: results,
          });
        }
      );
      connection.release();
    });
  },
  addDataKaryawan(req, res) {
    let data = {
      karyawan_nama: req.body.nama,
      karyawan_umur: req.body.umur,
      karyawan_alamat: req.body.alamat,
      karyawan_jabatan: req.body.jabatan,
    };
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `INSERT INTO table_karyawan SET ?`,
        [data],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: 'success adding data karyawan!',
          });
        }
      );
      connection.release();
    });
  },
  editDataKaryawan(req, res) {
    let dataEdit = {
      karyawan_nama: req.body.nama,
      karyawan_umur: req.body.umur,
      karyawan_alamat: req.body.alamat,
      karyawan_jabatan: req.body.jabatan,
    };
    let id = req.body.id;
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(
        `
            UPDATE tabel_karyawan SET ? WHERE karyawan_id = ?;
            `,
        [dataEdit, id],
        function (error, results) {
          if (error) throw error;
          res.send({
            success: true,
            message: 'Berhasil edit data!',
          });
        }
      );
      connection.release();
    });
  },
};
