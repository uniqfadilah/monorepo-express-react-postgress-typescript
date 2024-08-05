/*
  Warnings:

  - You are about to drop the column `client_name` on the `clients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "clients_client_name_key";

-- AlterTable
ALTER TABLE "clients" DROP COLUMN "client_name",
ADD COLUMN     "name" VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clients_name_key" ON "clients"("name");
