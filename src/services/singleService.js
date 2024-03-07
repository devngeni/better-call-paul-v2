

class SingleService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    async fetchServiceDetails(slug) {
      if (slug === "Toyota Noah" 
      || slug === 'Chauffeured Minivan'
      || slug === 'Toyota Landcruiser V8'
      || slug === 'Toyota Prado'
      || slug === 'Mercedes C200 Saloon'
      || slug === 'Toyota Alphard'
      || slug === 'Chauffeured Toyota Landcruiser V8'
      || slug === 'Toyota Axio Saloon') {
       let imagePath = "" 
       const response = await fetch(`${this.baseUrl}/api/service/category/TRAVEL CONCIERGE`) 
       const data = await response.json()
       const cars = data.category 
       const found = cars.filter((item) => item.content[0].name === slug)
      
       if (found) {
        imagePath = found[0].content[0].imagePath
        return imagePath 
      }
       return null

    }else {
        let imagePath = "" 
        const response = await fetch(`${this.baseUrl}/api/service/category/DRINKS`) 
        const data = await response.json()
        const drinks = data.category  
        const slugTrimmed = slug.trim()
        console.log(slugTrimmed, 'trimmed')
        const found = drinks.filter((item) => item.content[0].name === slugTrimmed)
        console.log(found, 'found')
      
       if (found) {
        imagePath = found[0].content[0].imagePath
        return imagePath 
      }
       return null

    }
    }

   
}


const singleService = new SingleService('http://localhost:3000')

module.exports = {
  singleService
}
