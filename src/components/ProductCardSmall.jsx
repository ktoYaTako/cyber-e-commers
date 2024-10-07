import React, { useState } from 'react'
import ProductCard from './UI/Product Card/ProductCard';
import productsData from '../utils/discountProductDB'

const ProductCardSmall = () => {
    const [products, setProducts] = useState(productsData);

    const handleLikeClick = (id) => {
      setProducts(products.map(product =>
        product.id === id ? { ...product, liked: !product.liked } : product
      ));
    };
  
    return (
      <>
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-xl-3 px-0" key={product.id}>
            <ProductCard 
              product={product} 
              onLikeClick={handleLikeClick} 
            />
          </div>
        ))}
      </>
    );
}

export default ProductCardSmall