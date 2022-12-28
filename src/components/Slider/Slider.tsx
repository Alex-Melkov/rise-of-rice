import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Slider.module.scss';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true
    };
    return (
      <div className={styles.sliderContainer}>
        <Slider {...settings} className={styles.slider}>
          <div className={styles.sliderBlock}>
            <img src="/img/slider/1.png" alt="set" />
          </div>
          <div className={styles.sliderBlock}>
            <img src="/img/slider/2.png" alt="roll" />
          </div>
          <div className={styles.sliderBlock}>
            <img src="/img/slider/3.png" alt="fish-set" />
          </div>
        </Slider>
      </div>
    );
  }
}
