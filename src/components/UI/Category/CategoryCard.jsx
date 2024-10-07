import React from 'react'
import category from '../../../utils/categoryDB.js'
import styles from './CategoryCard.module.css'

const CategoryCard = () => {
  return (
    
    category.map(item => (
        <div className={`${styles.cardBlock} col-6 col-md-4 col-lg-2 px-0`}>
            <a href="#" className={styles.category}>
                <div className="img">
                    <img src={item.icon} alt="" />
                </div>
                <h5 className="text">
                    {item.text}
                </h5>
            </a> 
        </div>
   ))

)}

export default CategoryCard