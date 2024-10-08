import { useState } from 'react';
import productsData from '../../utils/productDB.js';

const useProducts = () => {
  const [products, setProducts] = useState(productsData);

  const toggleLike = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, liked: !product.liked } : product
    ));
  };

  return { products, toggleLike };
};

export default useProducts;