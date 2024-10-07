import React from 'react';
import ProductCardBig from './ProductCardBig';
import styles from '../styles/Product.module.css'

const Products = () => {
  return (
    <section className="products">
      <div className="container-fluid">
        <div className="box_1">
          <div className={`${styles.product_list} row`} >
                        
            <ProductCardBig />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
