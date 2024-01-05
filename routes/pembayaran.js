import express from "express";
import { createPembayaran } from "../controller/pembayaran.js";

const router = express.Router();

router.post("/pay", createPembayaran);

export default router;
