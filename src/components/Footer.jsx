import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Footer.module.css'
import logo from '../images/logo/logoContent'
import icons from '../images/icons/iconContent'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="container-fluid">
          <div className="box_1">
            <div className="row">
              
            <div className="col-md-6">
                <div className="logo mb-3">
                  <img src={logo.logoWhite} alt="Cyber Logo" className="mb-2" />
                </div>
                <p className="description">
                  We are a residential interior design firm located in Portland.
                  Our boutique-studio offers more than
                </p>
            </div>
            <div className="col-md-3">
                <h5 className="fw-bold">Services</h5>
                    <ul className="list-unstyled">
                    <li><a href="#" className="description">Bonus program</a></li>
                    <li><a href="#" className="description">Gift cards</a></li>
                    <li><a href="#" className="description">Credit and payment</a></li>
                    <li><a href="#" className="description">Service contracts</a></li>
                    <li><a href="#" className="description">Non-cash account</a></li>
                    <li><a href="#" className="description">Payment</a></li>
                    </ul>
            </div>
            <div className="col-md-3">
                <h5 className="fw-bold">Assistance to the buyer</h5>
                    <ul className="list-unstyled">
                    <li><a href="#" className="description">Find an order</a></li>
                    <li><a href="#" className="description">Terms of delivery</a></li>
                    <li>
                        <a href="#" className="description">
                        Exchange and return of goods
                        </a>
                    </li>
                    <li><a href="#" className="description">Guarantee</a></li>
                    <li>
                        <a href="#" className="description">
                        Frequently asked questions
                        </a>
                    </li>
                    <li>
                        <a href="#" className="description">
                        Terms of use of the site
                        </a>
                    </li>
                    </ul>
            </div>
                
                <div className="social-icons mt-3">
                  <a href="#" className="text-white me-3">
                    <img
                      src={icons.twitter}
                      alt="Twitter"
                      style={{ height: '20px' }} // исправлено
                    />
                  </a>
                  <a href="#" className="text-white me-3">
                    <img
                      src={icons.facebook}
                      alt="Facebook"
                      style={{ height: '20px' }} // исправлено
                    />
                  </a>
                  <a href="#" className="text-white me-3">
                    <img
                      src={icons.tiktok}
                      alt="TikTok"
                      style={{ height: '20px' }} // исправлено
                    />
                  </a>
                  <a href="#" className="text-white">
                    <img
                      src={icons.instagram}
                      alt="Instagram"
                      style={{ height: '20px' }} // исправлено
                    />
                  </a>
                </div>
              </div>

             
             

              
              
          </div>
        </div>
      </footer>
  )
}

export default Footer
