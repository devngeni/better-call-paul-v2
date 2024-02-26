// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Service } from "@/services/inserter";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "./db-connection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
    const service = new Service(req.body);
    const result = await service.post();
    console.log(result);
    return res.json(result);
  } catch (e: any) {
    console.log(e.message);
  }
}
