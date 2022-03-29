const { dbQuery, db } = require("../database")

const fakultasControllers = {
    getAllFakultas: async (req, res) => {
        try {
            let sqlQuerry = `SELECT * FROM fakultas`
            const dbResult = await dbQuery(sqlQuerry)

            res.status(200).json({
                message: "Fakultas fetched successfully", 
                dbResult: dbResult
            })

        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: "Server Error"
            })
        }
    }
}

module.exports = fakultasControllers