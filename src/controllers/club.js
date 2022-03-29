const dbQuery = require("../database");

const clubControllers = {
  getAllClubs: async (req, res) => {
    try {
      let sqlQuery = `SELECT * FROM club;`;

      dbResult = await dbQuery(sqlQuery);

      res.status(200).json({
        message: "get all club",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  createNewClub: async (req, res) => {
    try {
      const { club_name } = req.body;

      let sqlQuery = `INSERT INTO club VALUES (0, ?)`;
      let replacement = [club_name];

      const dbResult = await dbQuery(sqlQuery, replacement);

      res.status(200).json({
        message: "club added",
        result: dbResult,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "server error",
      });
    }
  },
  editClubbyId: async (req, res) => {
      try {
          const {club_name} = req.body
          const clubId = req.params.id

          let sqlQuery = `UPDATE club SET club_name = "${club_name}" WHERE id = ${clubId}`
          
          const dbResult = await dbQuery(sqlQuery);

          res.status(200).json({
            message: "club edited",
            result: dbResult,
          });
      } catch (err) {
       console.log(err);
       res.status(500).json({
         message: "server error",
       });   
      }
  },
  deleteClubById: async (req, res) => {
      try {
        const clubId = req.params.id;

        let sqlQuery = `DELETE FROM club WHERE id = ${clubId}`;

        const dbResult = await dbQuery(sqlQuery);

        res.status(200).json({
          message: "club deleted",
          result: dbResult,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({
          message: "server error",
        });
      }
  },
};

module.exports = clubControllers;
