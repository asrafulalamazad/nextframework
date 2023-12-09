/*
  Warnings:

  - Added the required column `postcode` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `profile` ADD COLUMN `postcode` VARCHAR(191) NOT NULL;
