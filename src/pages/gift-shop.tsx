import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import GiftSection from '@/components/giftShop/GiftSection'
import { Layout } from '@/layout'
import React from 'react'
import BottomNavigation from "@/components/Navbar/BottomNav";


const GiftShop = () => {
  return (
    <Layout
    title="Drinks"
    description="Embark on an African adventure with the OUT OF AFRICA EXPERIENCE!"
    navbar={<Navbar />}
    footer={<Footer />}
    bottomNav={<BottomNavigation />}

  >
    <GiftSection />
  </Layout>
  )
}

export default GiftShop