import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export const getAllRestaurants = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const client = new PrismaClient();

  try {
    const restaurants = await client.restaurant.findMany();

    return res.status(200).json({ data: restaurants });
  } catch (error) {
    console.error(error);
  } finally {
    client.$disconnect();
  }
};
