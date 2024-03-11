import { connectDB } from "@/utils/db-connection";
import { NextApiRequest, NextApiResponse } from "next";
import ServiceProviderModel from "../../../../models/ServiceProvider.model";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
    if (req.method === "GET") {
      const providerItems = await ServiceProviderModel.find({})

      if (providerItems.length > 0) {

      return res.status(200).json({
        message: "Provider",
        data: providerItems
      });

      }else {
        return res.json({message: "No providers found", data: []})
      }
    } else if (req.method === "POST") {
      const newServiceProvider = new ServiceProviderModel({
        
      })
    } else {
      res.status(405).json({success: false, message: "Method Not Allowed" });
    }
  } catch (error: any) {
    return res.status(500).json({ err: error.message });
  }
}
