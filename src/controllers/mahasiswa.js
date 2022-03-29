const dbQuery = require("../database");

const mahasiswaControllers = {
  getAllMahasiswa: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM mahasiswa`;

      const dbResult = await dbQuery(sqlQuery);
      res.status(200).json({
        message: "Find all mahasiswa",
        result: dbQuery,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Server error",
      });
    }
  },
  createNewMahasiswa: (req, res) => {},
  editMahasiswa: (req, res) => {},
  deleteMahasiswa: (req, res) => {},
};
