-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "email" VARCHAR(10),
ADD COLUMN     "phone" VARCHAR(25);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "phone" VARCHAR(25);
