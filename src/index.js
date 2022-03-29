const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());


const { fakultasRoutes, mahasiswaRoutes, clubRoutes } = require("./routes")
app.use("/mahasiswa", mahasiswaRoutes);
// app.use("/dosen");
app.use("/fakultas", fakultasRoutes);
// app.use("/matakuliah");
app.use("/club", clubRoutes);


app.listen(PORT, () => {
  console.log("listening in port", PORT);
});
