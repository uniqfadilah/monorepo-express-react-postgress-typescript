/*
  Warnings:

  - You are about to alter the column `user_id` on the `clients` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.

*/
-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_user_id_fkey";

-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "user_id" SET DATA TYPE VARCHAR(100);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
