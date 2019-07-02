import React, { Component } from "react"
// import Swiper Compornents
import SwiperSlider from "./swiper/SwiperSlider.js";
import SlideItem from "./swiper/SwiperItem.js";

class Slider extends Component {
  render() {
    // Create slider containers.
    const { data } = this.props;

    const slideItemList = data.map((data,index) =>
      <SlideItem key={index}>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <h3>{data.title}</h3>
          {data.image &&
          <img src={ data.image } alt={data.alt ? data.alt : data.title} />
          }
        </a>
      </SlideItem>
    );

    return(
      <SwiperSlider options={this.props}>
        {slideItemList}
      </SwiperSlider>
    )
  }
}

Slider.defaultProps = {
  speed: 600,
  effect: 'slide',
  loop: true,
  autoplay: false,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
  mousewheel: false,
  grabCursor: true,
  freeMode: false,
  parallax: false,
  buttonPrev: false,
  buttonNext: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: false,
  addClass: {
    container: false,
    wrapper: false,
    scrollbar: false,
    pagination: false,
    navigation: {
      next: false,
      prev: false
    }
  },
};


export default Slider;
