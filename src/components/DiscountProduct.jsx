import React from 'react'
import ProductCardSmall from './ProductCardSmall'

const DiscountProduct = () => {
  return (
    <section className="products">
      <div className="container-fluid">
        <div className="box_1">
          <div className="row ">
            <div className="title_box">
            <h2 className="title_box">Discounts up to -50%</h2>
            </div>
            
            
            <ProductCardSmall />
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscountProduct