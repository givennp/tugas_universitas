const express = require("express");
const { dosenControllers } = require("../controllers");
const router = express.Router();

router.get("/", dosenControllers.getAllDosen);
router.post("/");
router.patch("/:id");
router.delete("/:id");

module.exports = router;
