const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
const {
  fakultasRoutes,
  mahasiswaRoutes,
  clubRoutes,
  matakuliahRoutes,
  dosenRoutes,
} = require("./routes");
=======

const { fakultasRoutes, mahasiswaRoutes, clubRoutes, matakuliahRoutes } = require("./routes")
>>>>>>> 02e082d8535ce054e68903e145153b370993998f
app.use("/mahasiswa", mahasiswaRoutes);
app.use("/dosen", dosenRoutes);
app.use("/fakultas", fakultasRoutes);
app.use("/matakuliah", matakuliahRoutes);
app.use("/club", clubRoutes);

app.listen(PORT, () => {
  console.log("listening in port", PORT);
});
