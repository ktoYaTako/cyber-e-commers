import React, { useState } from 'react';
import Products from '../../Products';
import styles from './Tabs.module.css';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("newArrivals");

  return (
    <div className={`${styles.tabs} container-fluid `}>
        <div className={`${styles.content} box_1`}>
            <div className={styles.tubBtnGroup}>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'newArrivals' ? styles.active : ''}`} 
                    onClick={() => setActiveTab("newArrivals")}
                >
                    New Arrivals
                </button>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'bestseller' ? styles.active : ''}`} 
                    onClick={() => setActiveTab("bestseller")}
                >
                    Bestseller
                </button>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'featured' ? styles.active : ''}`} 
                    onClick={() => setActiveTab("featured")}
                >
                    Featured Products
                </button>
            </div>
        </div>
      
        <div>
            {activeTab === 'bestseller' && ( 
                <Products />
            )}
            {activeTab === 'featured' && (
                <Products />
            )}
            {activeTab === 'newArrivals' && (
                <Products />
            )}
        </div>
    </div>
    
  );
};

export default Tabs;
