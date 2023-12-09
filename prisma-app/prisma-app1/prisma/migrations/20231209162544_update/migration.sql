/*
  Warnings:

  - You are about to drop the column `col4` on the `chartype` table. All the data in the column will be lost.
  - You are about to alter the column `col2` on the `datatimetype` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `col4` on the `datatimetype` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `chartype` DROP COLUMN `col4`;

-- AlterTable
ALTER TABLE `datatimetype` MODIFY `col2` DATETIME NOT NULL,
    MODIFY `col4` TIMESTAMP NOT NULL;
