import { connectDB } from "@/utils/db-connection";
import { NextApiRequest, NextApiResponse } from "next";
import ServiceProviderModel from '.././../../../models/ServiceProvider.model'
import ServicesModel from '.././../../../models/service.model'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
    if (req.method === "GET") {
        const { id  } = req.query
        //65ef3dc98a91bcaaf07b594e
        if (!id) return res.status(400).json({error: false, message: "can't proceed with no ID"})
        const serviceProvider = await ServiceProviderModel.findById(id)        
        if (!serviceProvider) return res.status(400).json({message: "provider was not found"})

        try {
          const chains = await ServicesModel.find({service_id: id }).populate('service_id')
          return res.status(200).json({success: true, data: chains})
        }catch(e) {}
      }  else {
      return res.status(405).json({success: false, message: "Method Not Allowed" });
    }
  } catch (error: any) {
    return res.status(500).json({ err: error.message });
  }
}
