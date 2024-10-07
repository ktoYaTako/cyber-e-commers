import React from 'react'
import ProductCardSmall from './ProductCardSmall'

const DiscountProduct = () => {
  return (
    <section className="products">
      <div className="container-fluid">
        <div className="box_1">
          <div className={` row`} >
            <h2>Discounts up to -50%</h2>
            
            <ProductCardSmall />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscountProduct