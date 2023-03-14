import styles from './slider.module.css';
import React, { useState } from 'react';
import one from '../Images/Gallery/1.jpg';
import two from '../Images/Gallery/2.jpg';
import three from '../Images/Gallery/3.jpg';



const Slider = () => {
    
    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]")
    
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
    
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
      })
    })


    return (
        <div className={styles.carousel} data-carousel>
            <button></button>
            <button className={styles.carouselbuttonprev} data-carousel-button="next">&#8656;</button>
            <button className={styles.carouselbuttonnext} data-carousel-button="prev">&#8658;</button>  
            <div className={styles.centerslider}>
                <ul data-slides>
                    <li className={styles.slide} data-active>
                        <img className={styles.images} src={one} alt="one" />
                    </li>
                    <li className={styles.slide}>
                        <img className={styles.images} src={two} alt="two" />
                    </li>
                    <li className={styles.slide}>
                        <img className={styles.images} src={three} alt="three" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Slider;