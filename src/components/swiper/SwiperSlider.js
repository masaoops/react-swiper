import React, { Component } from "react"
import PropTypes from 'prop-types'
// import swiper.js & swiper.css
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';


class SwiperSlider extends Component {
  componentDidMount() {
    const { options } = this.props;
    new Swiper ('.swiper-container', {
      // set options
      effect: options.effect,
      speed: options.speed,
      loop: options.loop,
      autoplay: options.autoplay,
      slidesPerView: options.slidesPerView,
      spaceBetween: options.spaceBetween,
      centeredSlides: options.centeredSlides,
      mousewheel: options.mousewheel,
      grabCursor: options.grabCursor,
      freeMode: options.freeMode,
      parallax: options.parallax,
      buttonPrev: options.buttonPrev,
      buttonNext: options.buttonNext,
      pagination: options.pagination,
      navigation: options.navigation,
      scrollbar: options.scrollbar,
    })
  }


  render() {
    const { children, options } = this.props;
    const { addClass } = this.props.options;

    const containerClass = `swiper-container ${addClass.container ? addClass.container : ''}`
    const wrapperClass = `swiper-wrapper ${addClass.wrapper ? addClass.wrapper : ''}`
    const paginationClass = `swiper-pagination ${options.pagination}`
    const navigationNextClass = `swiper-button-next ${options.navigation.next}`
    const navigationPrevClass = `swiper-button-prev ${options.navigation.prev}`
    const scrollbarClass = `swiper-scrollbar ${options.addClass.scrollbar}`

    return (
      // Swiper
      <div className={containerClass}>
        <ul className={wrapperClass}>
          {/* Slider */}
          { children }
        </ul>
        {/* Pagination */}
        { options.pagination &&
        <div className={paginationClass}/>
        }
        {/* Arrows */}
        { options.navigation &&
        <div>
          <div className={navigationNextClass} />
          <div className={navigationPrevClass} />
        </div>
        }
        {/* Scrollbar */}
        { options.scrollbar &&
          <div className={scrollbarClass} />
        }
      </div>
    );
  }
}

SwiperSlider.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.object,
};


export default SwiperSlider;
