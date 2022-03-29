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
};

module.exports = dosenControllers;
