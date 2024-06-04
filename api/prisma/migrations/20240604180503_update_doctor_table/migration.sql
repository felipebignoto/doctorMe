/*
  Warnings:

  - You are about to drop the column `firstName` on the `Doctor` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Doctor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL DEFAULT 'default_value', -- Adiciona um valor padrão
    "lastName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "availability" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "attendances" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Doctor" ("address", "attendances", "availability", "bio", "city", "createdAt", "experience", "id", "lastName", "picture", "price", "speciality", "state") 
SELECT "address", "attendances", "availability", "bio", "city", "createdAt", "experience", "id", "lastName", "picture", "price", "speciality", "state" 
FROM "Doctor";
DROP TABLE "Doctor";
ALTER TABLE "new_Doctor" RENAME TO "Doctor";
PRAGMA foreign_key_check("Doctor");
PRAGMA foreign_keys=ON;
