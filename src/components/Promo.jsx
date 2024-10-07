import React from 'react'
import styles from '../styles/Promo.module.css'
import ButtonWhiteBig from './UI/Buttons/White/ButtonWhiteBig'
import images from '../utils/imgContent'

const Promo = () => {
  return (
    <section className={styles.promo}>
        <div className="container-fluid">
            <div className="box_1">
                <div className={`${styles.info} d-flex flex-column flex-lg-row justify-content-between`}>
            
                    <div className={`${styles.promo_content} col-lg-6 px-0`}>
                        <h3 className="tagline">Pro.Beyond.</h3>
                            <div className={`${styles.title_box} d-flex align-items-baseline`}>
                                <h1 className="display_3">iPhone 14</h1>
                                <h1 className={`${styles.pro} display_3 ms-2`}>Pro</h1>
                            </div>

                        <p className="description">
                            Created to change everything for the better. For everyone
                        </p>
                        <ButtonWhiteBig>Shop Now</ButtonWhiteBig>

                    </div>

                    <div className={`${styles.promo_image} col-lg-6 d-flex justify-content-end mt-3 mt-md-0`}>
                        <img src={images.iPhonePromo} alt="iPhone 14 Pro" className="img-fluid" />
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Promo