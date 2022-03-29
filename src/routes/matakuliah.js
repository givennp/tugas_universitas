const express = require("express")
const router = express.Router()
const { matakuliahControllers } = require("../controllers")

router.get("/", matakuliahControllers.getAllMatakuliah)
router.post("/", matakuliahControllers.createNewMatakuliah)
router.patch("/:id", matakuliahControllers.editMatakuliah)
router.delete("/:id", matakuliahControllers.deleteMatakuliah)


module.exports = router;