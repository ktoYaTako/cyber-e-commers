import React from 'react';
import ButtonWhiteBig from './UI/Buttons/White/ButtonWhiteBig';
import styles from '../styles/SaleBanner.module.css';
import images from '../utils/imgContent';
import { Link } from 'react-router-dom';

const SaleBanner = () => {
  return (
    <section className={styles.banner_2}>
      <div className="container-fluid">
        <div className="box_2 position-relative">
          <div className={`${styles.left_img} d-none`}>
            <img src={images.macBook12} alt="MacBook" />
            <img src={images.laptop} alt="Laptop" />
            <img src={images.jbl} alt="JBL Speaker" />
          </div>
          <div className={styles.info}>
            <div className={styles.title_box}>
              <h1 className="display_3_white">Big Summer</h1>
              <h1 className={`${styles.pro} display_3_white ms-2`}>Sale</h1>
            </div>
            <p className="description">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
            <Link to="/catalog">
              <ButtonWhiteBig>Shop Now</ButtonWhiteBig>
            </Link>
          </div>
          <div className={`${styles.right_img} d-none`}>
            <img src={images.iPhonePurple} alt="iPhone" />
            <img src={images.appleWatchPink} alt="Apple Watch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
