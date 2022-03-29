const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
<<<<<<< HEAD
const {
  mahasiswaRoutes,
  clubRoutes,
  dosenRoutes,
  fakultasRoutes,
} = require("./routes");
=======
>>>>>>> 38a288f0f6a940c0561a28b266382f9d2eef3cbb

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
=======

const { fakultasRoutes, mahasiswaRoutes, clubRoutes, matakuliahRoutes } = require("./routes")
>>>>>>> 38a288f0f6a940c0561a28b266382f9d2eef3cbb
app.use("/mahasiswa", mahasiswaRoutes);
app.use("/dosen", dosenRoutes);
app.use("/fakultas", fakultasRoutes);
app.use("/matakuliah", matakuliahRoutes);
app.use("/club", clubRoutes);

app.listen(PORT, () => {
  console.log("listening in port", PORT);
});
