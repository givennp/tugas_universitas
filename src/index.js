const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/mahasiswa");
app.use("/dosen");
app.use("/fakultas");
app.use("/matakuliah");
app.use("/club");

app.listen(PORT, () => {
  console.log("listening in port", PORT);
});
