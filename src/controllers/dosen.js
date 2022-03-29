const dbQuery = require("../database");

const dosenControllers = {
  getAllDosen: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM dosen`;

      const dbResult = await dbQuery(sqlQuery);
      res.status(200).json({
        message: "Find all dosen",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  createNewDosen: async (req, res) => {
    try {
      const { dosen_name } = req.body;

      let sqlQuery = `INSERT INTO dosen VALUES (0,?)`;
      let replacements = [dosen_name];
      const dbResult = await dbQuery(sqlQuery, replacements);
      res.status(201).json({
        message: "dosen added",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  editDosen: async (req, res) => {
    try {
      const { dosen_name } = req.body;
      const dosenId = req.params.id;

      let sqlQuery = `UPDATE dosen SET dosen_name = "${dosen_name}" WHERE id = ${dosenId}`;
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
  deleteDosen: async (req, res) => {
    try {
      const dosenId = req.params.id;

      let sqlQuery = `DELETE FROM dosen WHERE id = ?`;
      let replacements = [dosenId];

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
};

module.exports = dosenControllers;
