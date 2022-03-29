const dbQuery = require("../database");

const fakultasControllers = {
  getAllFakultas: async (req, res) => {
    try {
      let sqlQuerry = `SELECT * FROM fakultas`;
      const dbResult = await dbQuery(sqlQuerry);

      res.status(200).json({
        message: "Fakultas fetched successfully",
        dbResult: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },

  createNewFakultas: async (req, res) => {
    try {
      const { fakultas_name } = req.body;

      let sqlQuery = `INSERT INTO fakultas VALUES (0, ?);`;

      let replacements = [fakultas_name];

      const dbResult = await dbQuery(sqlQuery, replacements);

      res.status(201).json({
        message: "fakultas added successfully",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },

  editFakultas: async (req, res) => {
    try {
      const { fakultas_name } = req.body;
      const fakultasId = req.params.id;

      let editQuery = "";

      if (fakultas_name) {
        editQuery += `fakultas_name = "${fakultas_name}", `;
      }

      editQuery = editQuery.slice(0, -2);

      let sqlQuery = `UPDATE fakultas SET ${editQuery} WHERE id=${fakultasId}`;

      const dbResult = await dbQuery(sqlQuery, (err, result) => {
        if (err) throw err;

        res.status(201).json({
          message: "Fakultas editted successfully",
          result: dbResult,
        });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server Error",
      });
    }
  },

  deleteFakultas: async (req, res) => {
    try {
      const fakultasId = req.params.id;
      let sqlQuery = `DELETE FROM fakultas WHERE id = ?`;

      let replacements = [fakultasId];

      const dbResult = await dbQuery(sqlQuery, replacements);
      res.status(201).json({
        message: "Deleted fakultas successfully",
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

module.exports = fakultasControllers;
