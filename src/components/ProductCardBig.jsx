import React from 'react';
import ProductCard from './UI/Product Card/ProductCard.jsx';
import useProducts from './hooks/useProduct.js';

const ProductCardBig = () => {

  const { products, toggleLike } = useProducts();

  return (
    <>
      {products.map(product => (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3 px-0" key={product.id}>
          <ProductCard 
            product={product} 
            onLikeClick={() => toggleLike(product.id)} 
          />
        </div>
      ))}
    </>
  );
};

export default ProductCardBig;