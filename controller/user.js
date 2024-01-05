import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  const { namalengkap, username, password, confPass } = req.body;
  const hashPass = await bcrypt.hash(password, 10);
  const hashConfPass = await bcrypt.hash(confPass, 10);

  if (password !== confPass) {
    return res
      .status(400)
      .json({ msg: "Password dan Konfirmasi Password Tidak Sesuai!" });
  }

  try {
    const checkUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (checkUser) {
      res.status(400).json({
        msg: "Username sudah digunakan!",
      });
    } else {
      const user = await prisma.user.create({
        data: {
          namalengkap: namalengkap,
          username: username,
          password: hashPass,
          confPass: hashConfPass,
        },
      });
      res.status(200).json({ user });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const users = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!users) {
      return res.status(404).json({ error: "Invalid Username!" });
    }
    const passMatch = await bcrypt.compare(password, users.password);
    if (passMatch) {
      res.status(200).json({
        msg: "Login Successful",
        users,
      });
    } else {
      res.status(401).json({
        msg: "Password Salah!",
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
