import React from 'react'
import SlideCard from './SlideCard'
import products from '../utils/sliderDB';
import styles from '../styles/Slider.module.css';
import { Carousel } from 'react-bootstrap';

const SliderBox = () => {
  return (
    <section className="slider">
      <div className="container-fluid">
        <div className="box_2">
            <div className="slider-wrapper">
      
              <Carousel className="d-block d-lg-none">
                {products.map((item) => (
                  <Carousel.Item key={item.id} interval={null} slide={false}>
                    <div className={`${styles.card} w-100 ${styles[`card${item.id}`]}`}>
                      <SlideCard item={item} /> 
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

                <div className="d-none d-lg-flex flex-wrap row justify-content-center">
                  {products.map((item) => (
                    <div
                      className={`${styles.card} col-6 col-xl-3 px-0 ${styles[`card${item.id}`]}`}
                      key={item.id}
                    >
                      <SlideCard item={item} /> 
                    </div>
                  ))}
                </div>

              </div>
        </div>
      </div>
    </section>
  )
}

export default SliderBox 
