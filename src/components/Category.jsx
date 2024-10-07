import React from 'react'
import CategoryCard from './UI/Category/CategoryCard'
import iconContent from '../images/icons/iconContent'
import styles from '../styles/Category.module.css'

const Category = () => {
  return (
    <section className={styles.categories}>
      <div className="container-fluid">
        <div className="box_1 row">
          <div className={`${styles.nav} px-0`}>
            <h2>Browse By Category</h2>
            <div className="icons">
              <button className={styles.btn_arrow}><img src={iconContent.arrow} alt="Arrow Left" id="left" /></button>
              <button className={styles.btn_arrow}><img src={iconContent.arrow} alt="Arrow Right" className={styles.right} /></button>
            </div>
          </div>
          <div className={`${styles.cardBlock} row px-0 mx-0`}>
            <CategoryCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
