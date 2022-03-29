const express = require("express")
const router = express.Router()
const { fakultasControllers } = require("../controllers")

router.get("/", fakultasControllers.getAllFakultas)
router.post("/", )
router.patch("/:id", )
router.delete("/:id", )


module.exports = router;