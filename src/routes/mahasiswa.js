const express = require("express");
const { mahasiswaControllers } = require("../controllers");
const router = express.Router();

router.get("/", mahasiswaControllers.getAllMahasiswa);
router.post("/");
router.patch("/");
router.delete("/");

module.exports = router;
