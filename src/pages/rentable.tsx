import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import RentableSection from '@/components/rentables/RentableSection'
import { Layout } from '@/layout'
import React from 'react'
import BottomNavigation from "@/components/Navbar/BottomNav";



const Rentable = () => {
  return (
    <Layout
    title="Rentables"
    description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
    navbar={<Navbar />}
    footer={<Footer />}
    bottomNav={<BottomNavigation />}

  >
    <RentableSection />
  </Layout>
  )
}

export default Rentable