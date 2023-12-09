/*
  Warnings:

  - You are about to alter the column `col2` on the `datatimetype` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `col4` on the `datatimetype` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to drop the column `name` on the `profile1` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `profile1` table. All the data in the column will be lost.
  - You are about to drop the column `postcode` on the `profile1` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users1` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `profile1` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fName` to the `profile1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lName` to the `profile1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `profile1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `profile1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users1` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `profile1_phone_key` ON `profile1`;

-- AlterTable
ALTER TABLE `datatimetype` MODIFY `col2` DATETIME NOT NULL,
    MODIFY `col4` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `profile1` DROP COLUMN `name`,
    DROP COLUMN `phone`,
    DROP COLUMN `postcode`,
    ADD COLUMN `fName` VARCHAR(191) NOT NULL,
    ADD COLUMN `lName` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobile` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users1` DROP COLUMN `name`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `profile1_userId_key` ON `profile1`(`userId`);

-- AddForeignKey
ALTER TABLE `profile1` ADD CONSTRAINT `profile1_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users1`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users1`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
