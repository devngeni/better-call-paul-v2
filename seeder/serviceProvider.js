// Feel free to keep the seeder file or delete it or whatever -> Fred
const mongoose = require('mongoose')

mongoose.connect('')
    .then(() => console.log('connected to db successfully'))
    .catch(e => console.log('failed to connect to db', e.message))

const ServiceProviderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
   
});

const ServiceProvider = mongoose.model("ServiceProvider", ServiceProviderSchema);


const RestaurantData  = [
  {
    image: "https://res.cloudinary.com/doy6lpk48/image/upload/v1710175900/kosewe_cbmhyr.jpg",
    title: "K'Osewe Ranalo Foods",
    description: `Something fishy is always cooking! from Tilapia, Nile perch, Cat fish to sardins (omena)
      Variety of organic traditional vegetables
      Acompany it with Ugali, Chapati, Rice or chips.`,
  },
  {
    image: "https://res.cloudinary.com/doy6lpk48/image/upload/v1710176433/mamymbuta_z4u5xw.webp",
    title: "Mammy Mbuta",
    description: `Savour the essence of West Africa at Mammy Mbuta, where "Taste De Kinshasa" invites you to indulge in an authentic culinary experience, celebrating the rich and diverse flavours of the region.`,
  },
  {
    image: "https://res.cloudinary.com/doy6lpk48/image/upload/v1710175900/maritas_qsulzt.jpg",
    title: "Maritas",
    description: `"The only way to eat wings: with messy hands and a satisfied smile." -Paul.<br>   
    Kenyas famous Bahjia Potatoes now served with a varrity of finger licking wings in 10 different flavours.`,
  },
  {
    image: "https://res.cloudinary.com/doy6lpk48/image/upload/v1710175737/hyvmtsusfyudjzxolepu.jpg",
    title: "Jajemelo",
    description: `Indulge in the Jajemel Hot Feast Pizza for a delightful pizza experience`,
  },
  {
    image: "https://res.cloudinary.com/doy6lpk48/image/upload/v1710176432/CHINESE_TAKEOUT_k2wag9.webp",
    title: "Chinese & Indian",
    description: `Discover an exquisite blend of Chinese and Indian cuisines that Nairobi has to offer.
    Call us on 0794 701 568 for a culinary journey like no other.`,
  },
];


const seedProviders = async () => {
  await ServiceProvider.deleteMany({})
  await ServiceProvider.insertMany(RestaurantData)
}

seedProviders()
  .then(() =>{
    mongoose.connection.close()
  }).catch(() => console.log('summ went while seeding'))

