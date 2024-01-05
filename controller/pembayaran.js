import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPembayaran = async (req, res) => {
  const { namamhs, nimmhs, jurusan, alamat, tanggal, jumlahbayar } = req.body;

  try {
    const bayar = await prisma.pembayaran.create({
      data: {
        namamhs: namamhs,
        nimmhs: nimmhs,
        jurusan: jurusan,
        alamat: alamat,
        tanggal: tanggal,
        jumlahbayar: jumlahbayar,
      },
    });
    res.status(200).json({
      msg: "Pembayaran Berhasil",
      bayar,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
