import express from "express";
import {
  getMahasiswa,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} from "../controller/mahasiswa.js";

const router = express.Router();

router.get("/mahasiswa", getMahasiswa);
router.post("/mahasiswa", createMahasiswa);
router.patch("/mahasiswa/:nim", updateMahasiswa);
router.delete("/mahasiswa/:nim", deleteMahasiswa);

export default router;
