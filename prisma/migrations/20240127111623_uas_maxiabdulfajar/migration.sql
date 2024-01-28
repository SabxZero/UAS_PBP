-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `menu_makanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaMakanan` VARCHAR(191) NOT NULL,
    `jenisMakanan` VARCHAR(191) NOT NULL,
    `pembuatMakanan` VARCHAR(191) NOT NULL,
    `namaRestoran` VARCHAR(191) NOT NULL,
    `waktuPembuatan` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
