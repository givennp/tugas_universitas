const dbQuery = require("../database");

const matakuliahControllers = {
  getAllMatakuliah: async (req, res) => {
    try {
      let sqlQuerry = `SELECT * FROM matakuliah`;
      const dbResult = await dbQuery(sqlQuerry);

      res.status(200).json({
        message: "Matakuliah fetched successfully",
        dbResult: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },

  createNewMatakuliah: async (req, res) => {
    try {
      const { matakuliah_name } = req.body;

      let sqlQuery = `INSERT INTO matakuliah VALUES (0, ?);`;

      let replacements = [matakuliah_name];

      const dbResult = await dbQuery(sqlQuery, replacements);

      res.status(201).json({
        message: "matakuliah added successfully",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },

  editMatakuliah: async (req, res) => {
    try {
      const { matakuliah_name } = req.body;
      const matakuliahId = req.params.id;

      let editQuery = "";

      if (matakuliah_name) {
        editQuery += `matakuliah_name = "${matakuliah_name}", `;
      }

      editQuery = editQuery.slice(0, -2);

      let sqlQuery = `UPDATE matakuliah SET ${editQuery} WHERE id=${matakuliahId}`;

      const dbResult = await dbQuery(sqlQuery)

        res.status(201).json({
          message: "Matakuliah editted successfully",
          result: dbResult,
        });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },

  deleteMatakuliah: async (req, res) => {
    try {
      const matakuliahId = req.params.id;
      let sqlQuery = `DELETE FROM matakuliah WHERE id = ?`;

      let replacements = [matakuliahId];

      const dbResult = await dbQuery(sqlQuery, replacements);
      res.status(201).json({
        message: "Deleted matakuliah successfully",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },
};

module.exports = matakuliahControllers;