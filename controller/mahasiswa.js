import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMahasiswa = async (req, res) => {
  try {
    const response = await prisma.mahasiswa.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const createMahasiswa = async (req, res) => {
  const { nim, namamhs, alamat, notlp } = req.body;
  try {
    const mhs = await prisma.mahasiswa.create({
      data: {
        nim: nim,
        namamhs: namamhs,
        alamat: alamat,
        notlp: notlp,
      },
    });

    res.status(200).json(mhs);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const updateMahasiswa = async (req, res) => {
  const { nim, namamhs, alamat, notlp } = req.body;
  try {
    const mhs = await prisma.mahasiswa.update({
      where: {
        nim: nim,
      },
      data: {
        nim: nim,
        namamhs: namamhs,
        alamat: alamat,
        notlp: notlp,
      },
    });

    res.status(200).json(mhs);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const deleteMahasiswa = async (req, res) => {
  const { nim, namamhs, alamat, notlp } = req.body;
  try {
    const mhs = await prisma.mahasiswa.delete({
      where: {
        nim: nim,
      },
      data: {
        nim: nim,
        namamhs: namamhs,
        alamat: alamat,
        notlp: notlp,
      },
    });

    res.status(200).json(mhs);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
