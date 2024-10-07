import React from 'react';
import ButtonBlackBig from '../Buttons/Black/ButtonBlackBig';
import styles from './ProductCardBig.module.css';
import icons from '../../../images/icons/iconContent.js';

const ProductCard = ({ product, onLikeClick }) => {
    return (
        <div className={styles.card}>
            <div className={styles.like}>
                <span className={styles.like_btn} onClick={() => onLikeClick(product.id)}>
                    <img 
                        src={product.liked ? icons.likeTrue : icons.likeFalse} 
                        alt="favor" 
                    />
                </span>
            </div>

            <div className={styles.img}>
                <img 
                    src={product.image} 
                    alt={product.name}
                />
            </div>

            <div className={styles.info}>
                <h2>{product.name}</h2>
                <p className={styles.price}>${product.price}</p>
            </div>

            <ButtonBlackBig className="btn_card">Buy Now</ButtonBlackBig>
        </div>
    );
};

export default ProductCard;
