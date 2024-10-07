import React from 'react'
import ButtonWhiteBig from './UI/Buttons/White/ButtonWhiteBig'
import styles from '../styles/SaleBanner.module.css'
import images from '../utils/imgContent'

const SaleBanner = () => {
  return (
    <section className={styles.banner_2}>
        <div className="container-fluid">
            <div className="box_2">
                <div className={styles.left_img}>
                    <img src={images.macBook12} alt="" />
                    <img src={images.laptop} alt="" />
                    <img src={images.jbl} alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.title_box}>
                        <h1 className="display_3_white">Big Summer</h1>
                        <h1 className={`${styles.pro} display_3_white ms-2`}>Sale</h1>
                    </div>
                    <p className="description">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <ButtonWhiteBig>Shop Now</ButtonWhiteBig>
                </div>
                <div className={styles.right_img}>
                <img src={images.iPhonePurple} alt="" />
                <img src={images.appleWatchPink} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default SaleBanner