const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { mahasiswaRoutes, clubRoutes } = require("./routes");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/mahasiswa", mahasiswaRoutes);
// app.use("/dosen");
// app.use("/fakultas");
// app.use("/matakuliah");
app.use("/club", clubRoutes);

app.listen(PORT, () => {
  console.log("listening in port", PORT);
});
