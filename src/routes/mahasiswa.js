const express = require("express");
const { mahasiswaControllers } = require("../controllers");
const router = express.Router();

router.get("/", mahasiswaControllers.getAllMahasiswa);
router.post("/", mahasiswaControllers.createNewMahasiswa);
router.patch("/:id", mahasiswaControllers.editMahasiswa);
router.delete("/:id", mahasiswaControllers.deleteMahasiswa);

router.post(
  "/:mahasiswa_id/matakuliah",
  mahasiswaControllers.addMahasiswaToMatakuliah
);

module.exports = router;
