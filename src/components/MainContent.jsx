import React from 'react'
import DiscountProduct from './DiscountProduct'
import Category from './Category'
import Tabs from './UI/Tab/Tabs'
import Promo from './Promo'
import SmallBanners from './SmallBanners'
import SaleBanner from './SaleBanner'

import SliderBox from './SliderBox'

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