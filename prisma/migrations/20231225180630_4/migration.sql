-- CreateTable
CREATE TABLE `Pembayaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namamhs` VARCHAR(191) NOT NULL,
    `nimmhs` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `jumlahbayar` INTEGER NOT NULL,

    UNIQUE INDEX `Pembayaran_id_key`(`id`),
    UNIQUE INDEX `Pembayaran_nimmhs_key`(`nimmhs`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pembayaran` ADD CONSTRAINT `Pembayaran_nimmhs_fkey` FOREIGN KEY (`nimmhs`) REFERENCES `Mahasiswa`(`nim`) ON DELETE RESTRICT ON UPDATE CASCADE;
