const {clubControllers} = require("../controllers")
const router = require("express").Router()

router.get("/", clubControllers.getAllClubs)
router.post("/", clubControllers.createNewClub)
router.patch("/:id", clubControllers.editClubbyId)
router.delete("/:id", clubControllers.deleteClubById)

module.exports = router