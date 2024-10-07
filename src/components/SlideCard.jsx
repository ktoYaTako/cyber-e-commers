import React from 'react'
import ButtonBlackBig from './UI/Buttons/Black/ButtonBlackBig'
import products from '../utils/sliderDB'
import styles from '../styles/Slider.module.css'
import ButtonWhiteBig from './UI/Buttons/White/ButtonWhiteBig'
import { Carousel } from 'react-bootstrap'

const SlideCard = () => {
  return (
    <div>
      {/* Карусель для разрешения меньше 992px */}
      <Carousel className="d-block d-lg-none">
        {products.map(item => (
          <Carousel.Item key={item.id}>
            <div className={`${styles.card} px-0 ${styles[`card${item.id}`]}`}>
              <div className={styles.img}>
                <img src={item.image} alt="" />
              </div>

              <div className={styles.info}>
                <div className={styles.text_box}>
                    <h2 className={item.id === 4
                        ?
                        "display_3_white"
                        :
                        "display_3"}>{item.name}
                    </h2>
                  <p className="description">{item.description}</p>
                </div> 
                {item.id === 4
                ?
                <ButtonWhiteBig>Shop Now</ButtonWhiteBig>
                :
                <ButtonBlackBig>Shop Now</ButtonBlackBig>}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Сетка карточек для разрешений больше 992px */}
      <div className="d-none d-lg-flex flex-wrap justify-content-center">
        {products.map(item => (
          <div className={`${styles.card} col-md-6 col-lg-3 px-0 ${styles[`card${item.id}`]}`} key={item.id}>
            <div className={styles.img}>
              <img src={item.image} alt="" />
            </div>

            <div className={styles.info}>
              <div className={styles.text_box}>
                  <h2 className={item.id === 4
                      ?
                      "display_3_white"
                      :
                      "display_3"}>{item.name}
                  </h2>
                <p className="description">{item.description}</p>
              </div> 
              {item.id === 4
              ?
              <ButtonWhiteBig>Shop Now</ButtonWhiteBig>
              :
              <ButtonBlackBig>Shop Now</ButtonBlackBig>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SlideCard
