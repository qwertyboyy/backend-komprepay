import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mahasiswaRoute from "./routes/mahasiswa.js";
import userRoute from "./routes/user.js";
import pembayaranRoute from "./routes/pembayaran.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(mahasiswaRoute);
app.use(userRoute);
app.use(pembayaranRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("server running..");
});
