-- CreateTable
CREATE TABLE `Mahasiswa` (
    `nim` VARCHAR(191) NOT NULL,
    `namamhs` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `notlp` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Mahasiswa_nim_key`(`nim`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
