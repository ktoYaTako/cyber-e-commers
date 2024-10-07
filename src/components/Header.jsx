import React from 'react'
import styles from '../styles/Header.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../images/logo/logoContent'
import icons from '../images/icons/iconContent'



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.main_header} container-fluid`}>
        <div className="box_1">

          <div className={styles.logo}>
            <img src={logo.logoBlack} alt="Logo" />
          </div>

          <div className={styles.search}>
            <img src={icons.search} alt="" />
            <input type="text" placeholder="Search" id={styles.header_input} />
          </div>

          <nav className={styles.navbar}>
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Contact Us</a>
            <a className="nav-link" href="#">Blog</a>
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
            <div className={styles.nav_category}>
              <a href="#" className={styles.nav_link}>
                <img src={icons.phones} alt="Phones" />
                <p className="description">Phones</p>
              </a>
            </div>
            <div className={styles.nav_category}>
              <a href="#" className={styles.nav_link}>
                <img src={icons.computers} alt="Computers" />
                <p className="description">Computers</p>
              </a>
            </div>
            <div className={styles.nav_category}>
              <a href="#" className={styles.nav_link}>
                <img src={icons.smartWatches} alt="Smart Watches" />
                <p className="description">Smart Watches</p>
              </a>
            </div>
            <div className={styles.nav_category}>
              <a href="#" className={styles.nav_link}>
                <img src={icons.cameras} alt="Cameras" />
                <p className="description">Cameras</p>
              </a>
            </div>
            <div className={styles.nav_category}>
              <a href="#" className={styles.nav_link}>
                <img src={icons.headPhones} alt="Headphones" />
                <p className="description">Headphones</p>
              </a>
            </div>
            <div className={styles.nav_category}>
              <a href="#" className={styles.nav_link}>
                <img src={icons.gaming} alt="Gaming" />
                <p className="description">Gaming</p>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header