import React from 'react';
import ButtonBlackBig from './UI/Buttons/Black/ButtonBlackBig';
import ButtonWhiteBig from './UI/Buttons/White/ButtonWhiteBig';
import styles from '../styles/Slider.module.css';

const SlideCard = ({ item }) => {
  return (
    <div>
      <div className={styles.img}>
        <img src={item.image} alt={item.name} className="w-100" />
      </div>

      <div className={styles.info}>
        <div className={styles.text_box}>
          <h2 className={item.id === 4 ? "display_3_white" : "display_3"}>
            {item.name}
          </h2>
          <p className="description">{item.description}</p>
        </div>
        {item.id === 4 ? (
          <ButtonWhiteBig>Shop Now</ButtonWhiteBig>
        ) : (
          <ButtonBlackBig>Shop Now</ButtonBlackBig>
        )}
      </div>
    </div>
  );
};

export default SlideCard;
