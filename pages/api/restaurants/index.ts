import type { NextApiRequest, NextApiResponse } from "next";
import { getAllRestaurants } from "../../../services";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getAllRestaurants(req, res);

    default:
      return res.status(400).json("Invalid HTTP method");
  }
}
