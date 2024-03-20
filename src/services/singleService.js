class SingleService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async fetchServiceDetails(slug) {
    if (
      slug === "Toyota Noah" ||
      slug === "Chauffeured Minivan" ||
      slug === "Toyota Landcruiser V8" ||
      slug === "Toyota Prado" ||
      slug === "Mercedes C200 Saloon" ||
      slug === "Toyota Alphard" ||
      slug === "Chauffeured Toyota Landcruiser V8" ||
      slug === "Toyota Axio Saloon" ||
      slug === "Airport Transfer Services"
    ) {
      let imagePath = "";
      const response = await fetch(
        `${this.baseUrl}/api/service/category/TRAVEL CONCIERGE`
      );
      const data = await response.json();
      const cars = data.category;
      const found = cars.filter((item) => item.content[0].name === slug);

      if (found) {
        imagePath = found[0].content[0].imagePath;
        return imagePath;
      }
      return null;
    } else if (
      slug === "Sweedish Massage" ||
      slug === "Couple Massage" ||
      slug === "Face & Scalp Massage" ||
      slug === "Foot Pressure Massage" ||
      slug === "Back Of Legs Neck & Shoulder Massage" ||
      slug === "Haircut Inclusive Wash" ||
      slug === "Manicure" ||
      slug === "Pedicure" ||
      slug === "Braids Plaits" ||
      slug === "Extra services - Wash, Trim, Retouch on request" ||
      slug === "Deep Cleanse Facial 70 Mins" ||
      slug === "Gentleman Facial 60 Mins" ||
      slug === "Teen Facial 45 Mins" ||
      slug === "Full legs 45 Mins" ||
      slug === "Upper Legs 30 Mins" ||
      slug === "Hair Legs 30 Mins" ||
      slug === "Arms 20 Mins" ||
      slug === "Half-arm 15 Mins" ||
      slug === "Under Arm 15 Mins" ||
      slug === "Bikini Line 15 Mins" ||
      slug === "Chin 15 Mins" ||
      slug === "Back 20 Mins" ||
      slug === "Chest 20 Mins"
    ) {
      let imagePath = "";
      const response = await fetch(
        `${this.baseUrl}/api/service/category/WELLNESS AND GROOMING`
      );
      const data = await response.json();
      const wellness = data.category;
      const found = wellness.filter((item) => item.content[0].name === slug);

      if (found) {
        imagePath = found[0].content[0].imagePath;
        return imagePath;
      }
      return null;
    } else if (
      slug === "Nairobi Safari Experience" ||
      slug === "Nairobi Safari Experience" ||
      slug === "Nairobi Heritage Experience" ||
      slug === "Nairobi Museum Experience" ||
      slug === "Nairobi Museum Experience" ||
      slug === "Out Of Africa Experience" ||
      slug === "Nairobi Cultural & Wildlife Experience" ||
      slug === "Out Of Town Experience"
    ) {
      let imagePath = "";
      const response = await fetch(
        `${this.baseUrl}/api/service/category/TOURS AND EXPERIENCES`
      );
      const data = await response.json();
      const wellness = data.category;
      const found = wellness.filter((item) => item.content[0].name === slug);

      if (found) {
        imagePath = found[0].content[0].imagePath;
        return imagePath;
      }
      return null;
    } else {
      let imagePath = "";
      const response = await fetch(
        `${this.baseUrl}/api/service/category/DRINKS`
      );
      const data = await response.json();
      const wellness = data.category;
      const found = wellness.filter((item) => item.content[0].name === slug);

      if (found) {
        imagePath = found[0].content[0].imagePath;
        return imagePath;
      }
      return null;
    }
  }
}

const singleService = new SingleService(process.env.NEXT_PUBLIC_BASE_URL);

module.exports = {
  singleService,
};
