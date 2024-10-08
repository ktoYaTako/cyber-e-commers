import React from 'react'
import styles from '../styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import category from '../utils/categoryDB.js'
import logo from '../images/logo/logoContent'
import icons from '../images/icons/iconContent'
import { Link } from 'react-router-dom'




const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.main_header} container-fluid`}>
        <div className="box_1">

          <div className={styles.logo}>
            <Link to="/">
              <img src={logo.logoBlack} alt="Logo" />
            </Link>
          </div>

          <div className={styles.search}>
            <img src={icons.search} alt="" />
            <input type="text" placeholder="Search" id={styles.header_input} />
          </div>

          <nav className={styles.navbar}>
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            <Link to="/catalog" className="nav-link">Catalog</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
          </nav>


          <div className={styles.user_action}>
            <div className="img"><img src={icons.favorites} alt="Favorites" /></div>
            <div className="img"><img src={icons.cart} alt="Cart" /></div>
            <div className="img"><img src={icons.user} alt="User" /></div>
          </div>

          <div className={styles.burgerMenu}>
            <img src={icons.burger} alt="Menu" />
          </div> 

        </div>
      </div>

      <div className={`${styles.sub_header} container-fluid`}>
        <div className="box_1">
          <nav className={styles.sub_header_nav}>
            {category.map(item => (
              <div className={styles.nav_category}>
              <Link to={`/catalog/${item.link}`} className={styles.nav_link}>
                <img src={item.icon} alt={item.text} />
                <p className="description">{item.text}</p>
              </Link>
            </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header