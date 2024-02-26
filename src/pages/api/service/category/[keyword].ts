import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../db-connection";
import ServiceItemModel from "../../models/service.model";
import { Service } from "@/services/inserter";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();

    const { keyword } = req.query;

    if (req.method === "GET") {
      if (!keyword) return;
      const instance = new Service(null);
      const response = await instance.getByCategoryAndSubTitle(keyword);
      return res.status(200).json({ success: true, category: response });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error: any) {
    return res.status(500).json({ err: error.message });
  }
}
