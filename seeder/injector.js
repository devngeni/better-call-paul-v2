// Feel free to keep this file or delete it or whatever -> Fred
const  { Schema, model, connect, connection } = require('mongoose')

connect('mongodb+srv://bettercallpaul:sQOkWzfk5e6FTuRW@bcp-dev.el8ezcc.mongodb.net/bcb-dev')
    .then(() => console.log('connected to db successfully'))
    .catch(e => console.log('failed to connect to db', e.message))

const Category =  {
  ToursandExperiences : "TOURS AND EXPERIENCES",
  TravelConcierge : "TRAVEL CONCIERGE",
  Housekeeping : "HOUSEKEEPING",
  PropertyManagement : "PROPERTY MANAGEMENT",
  Drinks : "DRINKS",
  PrivateChefMealPrep : "PRIVATE CHEF & MEAL PREP",
  WellnessAndGrooming : "WELLNESS AND GROOMING",
  ShoppingAndGroceryRuns : "SHOPPING & GROCERY RUNS",
  NannyService : "NANNY SERVICE",
  Giftshop : "GIFTSHOP",
  Rentables : "RENTABLES",
  LauggageShop : "LAUGGAGE SHOP",
}

const ServiceItemSchema= new Schema({
  category: {
    type: Schema.Types.String,
    required: true,
    enum: {
      values: Object.values(Category),
      message: `Category can only be, ${Object.values(Category).join(",")}`,
    },
  },
  subTitle: { type: Schema.Types.String, required: true },
  tag: { type: Schema.Types.String },
  serviceProvider: { type: Schema.Types.String },
  service_id: {
    type: Schema.Types.ObjectId,
    ref: 'ServiceProvider'
  },
  content: [
    {
      name: { type: Schema.Types.String, required: true },
      description: { type: Schema.Types.String },
      imagePath: { type: Schema.Types.String, required: false },
      price: { type: Schema.Types.Number },
    },
  ],
});

const serviceItemsModel = model('ServiceItem', ServiceItemSchema)



async function serviceIdInjector() {
    try {
        const restaurants = await serviceItemsModel.find({category: "PRIVATE CHEF & MEAL PREP"})
        for (const restaurant of restaurants) {
            switch(restaurant.serviceProvider) {
                case "K'Osewe Ranalo Foods":
             
                    const koweseId = restaurant._id
                    const koweseDoc = await serviceItemsModel.findOneAndUpdate(
                        {_id: koweseId},
                        {$set: {service_id: '65ef3dc98a91bcaaf07b594e'}},
                        {new: true}
                    )
                     await koweseDoc.save()
                case 'Mammy Mbuta':
                   
                    const mbutaId = restaurant._id
                    const mbutaDoc = await serviceItemsModel.findOneAndUpdate(
                        {_id: mbutaId},
                        {$set: {service_id: '65ef3dc98a91bcaaf07b594f'}},
                        {new: true}
                    )
                    await mbutaDoc.save()
                case 'Maritas':
                   
                    const maritasId = restaurant._id
                    const maritasDoc = await serviceItemsModel.findOneAndUpdate(
                        {_id: maritasId},
                        {$set: {service_id: '65ef3dc98a91bcaaf07b5950'}},
                        {new: true}
                    )
                    await maritasDoc.save()
                case 'Jajemelo':
                   
                    const jjameloId = restaurant._id
                    const jjameloDoc = await serviceItemsModel.findOneAndUpdate(
                        {_id: jjameloId},
                        {$set: {service_id: '65ef3dc98a91bcaaf07b5951'}},
                        {new: true}
                    )
                    await jjameloDoc.save()

                case 'Chinese & Indian':
                   
                    const chineseIndianId = restaurant._id
                    const chineseIndiandoc = await serviceItemsModel.findOneAndUpdate(
                        {_id: chineseIndianId},
                        {$set: {service_id: '65ef3dc98a91bcaaf07b5952'}},
                        {new: true}
                    )
                    await chineseIndiandoc.save()
                default: 
                    break;
            }
        }
        
        connection.close() // everything went well so far
    }catch(e) {
        console.log(e.message, 'something went wrong')
    }
} 

serviceIdInjector()