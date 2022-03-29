const express = require("express");
const { dosenControllers } = require("../controllers");
const router = express.Router();

router.get("/", dosenControllers.getAllDosen);
router.post("/", dosenControllers.createNewDosen);
router.patch("/:id", dosenControllers.editDosen);
router.delete("/:id", dosenControllers.deleteDosen);

module.exports = router;
