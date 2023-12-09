/*
  Warnings:

  - Added the required column `user` to the `StringDataType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stringdatatype` ADD COLUMN `user` ENUM('new', 'existing', 'broken', 'condenm') NOT NULL;
