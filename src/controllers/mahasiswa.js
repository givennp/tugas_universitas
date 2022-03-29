const dbQuery = require("../database");

const mahasiswaControllers = {
  getAllMahasiswa: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM mahasiswa`;

      const dbResult = await dbQuery(sqlQuery);
      res.status(200).json({
        message: "Find all mahasiswa",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  createNewMahasiswa: async (req, res) => {
    try {
      const { mahasiswa_name } = req.body;

      let sqlQuery = `INSERT INTO mahasiswa VALUES (0,?)`;
      let replacements = [mahasiswa_name];
      const dbResult = await dbQuery(sqlQuery, replacements);
      res.status(201).json({
        message: "mahasiswa added",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  editMahasiswa: async (req, res) => {
    try {
      const { mahasiswa_name } = req.body;
      const mahasiswaId = req.params.id;

      let sqlQuery = `UPDATE mahasiswa SET mahasiswa_name = "${mahasiswa_name}" WHERE id = ${mahasiswaId}`;
      await dbQuery(sqlQuery);

      res.status(200).json({
        message: "edit success",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  deleteMahasiswa: async (req, res) => {
    try {
      const mahasiswaId = req.params.id;

      let sqlQuery = `DELETE FROM mahasiswa WHERE id = ?`;
      let replacements = [mahasiswaId];

      await dbQuery(sqlQuery, replacements);

      res.status(200).json({
        message: "delete success",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },
  addMahasiswaToMatakuliah: async (req, res) => {
    try {
      const { matakuliah_id } = req.body;
      const { mahasiswa_id } = req.params;

      const findMahasiswaSql = `SELECT * FROM matakuliah_mahasiswa WHERE mahasiswa_id = ? AND matakuliah_id = ?`;

      const replacements = [mahasiswa_id, matakuliah_id];

      const findMahasiswa = await dbQuery(findMahasiswaSql, replacements);

      if (findMahasiswa.length) {
        return res.status(400).json({
          message: "Mahasiswa has already joined the matakuliah",
        });
      }

      const addSql = `INSERT INTO matakuliah_mahasiswa VALUES (0,?,?)`;

      await dbQuery(addSql, replacements);
      return res.status(201).json({
        message: "success add mahasiswa to matakuliaj",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
};

module.exports = mahasiswaControllers;
