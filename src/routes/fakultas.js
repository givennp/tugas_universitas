const express = require("express")
const router = express.Router()
const { fakultasControllers } = require("../controllers")

router.get("/", fakultasControllers.getAllFakultas)
router.post("/", fakultasControllers.createNewFakultas)
router.patch("/:id", fakultasControllers.editFakultas)
router.delete("/:id", fakultasControllers.deleteFakultas)


module.exports = router;