-- CreateEnum
CREATE TYPE "RestaurantStatus" AS ENUM ('CLOSED', 'OPEN');

-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "status" "RestaurantStatus" NOT NULL DEFAULT E'CLOSED',
    "postalAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_name_key" ON "Restaurant"("name");
