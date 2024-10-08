import React from 'react'
import DiscountProduct from '../components/DiscountProduct'
import Category from '../components/Category'
import Tabs from '../components/UI/Tab/Tabs'
import Promo from '../components/Promo'
import SmallBanners from '../components/SmallBanners'
import SaleBanner from '../components/SaleBanner'

import SliderBox from '../components/SliderBox'

const MainContent = () => {
  return (
    <main className="main">
      <Promo />
      <SmallBanners />
      <Category />
      <Tabs />
      <SliderBox/>
      <DiscountProduct />
      <SaleBanner />
  </main>
  )
}

export default MainContent