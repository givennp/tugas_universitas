const { dbQuery } = require("../database");

const clubControllers = {
  getAllClubs: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM club`;

      dbResult = await dbQuery(sqlQuery);

      res.status(200).json({
        message: "get all club",
        result,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  createNewClub: async (req, res) => {},
  editClubbyId: async (req, res) => {},
  deleteClubById: async (req, res) => {},
};

module.exports = clubControllers;
