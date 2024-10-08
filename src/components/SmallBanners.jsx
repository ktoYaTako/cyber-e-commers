import React from 'react'
import styles from '../styles/SmallBanners.module.css'
import ButtonBlackBig from './UI/Buttons/Black/ButtonBlackBig'
import imgContent from '../utils/imgContent'

const SmallBanners = () => {
  return (
    <section className={styles.small_banners}>
          <div className="container-fluid">
            <div className="box_2">
            <div className={`${styles.parts_wrapper} row mx-0`}>

              <div className={`${styles.left_part} col-md-6 px-0`}>
                <div className={styles.left_upper_part}>
                  <div className={`${styles.info_left_upper_part} row mx-0`}>
                    <div className={`${styles.img} col-md-5 px-0`}>
                      <img
                        src={imgContent.playstation5}
                        alt="PlayStation"
                        className={styles.img_fluid}
                      />
                    </div>
                    <div className={`${styles.text_info} col-md-7`}>
                      <div className={styles.title_box}>
                        <h1 className={`${styles.pro} display-3`}>PlayStation 5</h1>
                      </div>
                      <p className={styles.description}>
                        Incredibly powerful CPUs, GPUs, and an SSD with
                        integrated I/O will redefine your PlayStation
                        experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`${styles.bottom_part} row mx-0`}>  
                  <div className={`${styles.left_bottom_part} col-md-6 px-0`}>
                    <div className={`${styles.info_left_bottom_part} row`}>
                      <div className={`${styles.img} col-md-4 px-0`}>
                        <img
                          src={imgContent.airPodsPro}
                          alt="AirPods"
                          className={styles.img_fluid}
                        />
                      </div>
                      <div className={`${styles.text_info} col-md-8`}>
                        <div className={`${styles.title_box} ${styles.title_box_bottom}`}>
                          <h1 className="display-3">Apple</h1>
                          <div className={styles.title}>
                            <h1 className="display-3">AirPods</h1>
                            <h1 className={`${styles.pro} display-3 ms-2`}>Pro</h1>
                          </div>
                        </div>
                        <p className={styles.description}>
                        Computational audio. Listen, it's powerful
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.right_bottom_part} col-md-6 px-0`}>
                    <div className={`${styles.info_right_bottom_part} row `}>
                      <div className={`${styles.img} col-md-5 `}>
                        <img
                          src={imgContent.visionPro}
                          alt="Apple Vision"
                          className={styles.img_fluid}
                        />
                      </div>
                      <div className={`${styles.text_info} col-md-7`}>
                        <div className={`${styles.title_box} ${styles.title_box_bottom}`}>
                          <h1 className="display_3_white">Apple</h1>
                          <div className={styles.title}>
                            <h1 className="display_3_white">Vision</h1>
                            <h1 className={`${styles.pro} display_3_white ms-2`}>Pro</h1>
                          </div>
                        </div>
                        <p className={styles.description}>
                          An immersive way to experience entertainment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.right_part} col-md-6 px-0`}>
                <div className={`${styles.info_right_part} row mx-0`}>  
                  <div className={`${styles.text_info} col-md-7 ps-5`}>
                    <div className={styles.title_box}>
                        <h1 className="display-3">MacBook</h1>
                        <h1 className={`${styles.pro} display-3 ms-2`}>Air</h1>
                    </div>
                    <p className={styles.description}>
                      The new 15‑inch MacBook Air makes room for more of what
                      you love with a spacious Liquid Retina display.
                    </p>
                    <ButtonBlackBig className={styles.small_banners_btn}>Shop Now</ButtonBlackBig>
                  </div>
                  <div className={`${styles.img} col-md-5 mx-0 px-0`}>
                    <img
                      src={imgContent.macbookPro}
                      className={styles.img_fluid}
                      alt="MacBook"
                    />
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
  )
}

export default SmallBanners