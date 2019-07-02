// Reactのimport
import React, { Component } from "react"
// Propsの定義付け
import PropTypes from 'prop-types'


class SlideItem extends Component {
  render() {
    const { children } = this.props;
    // Slides
    return (
      <li className='swiper-slide'>
        {children}
      </li>
    );
  }
}


SlideItem.propTypes = {
  children: PropTypes.node.isRequired
};


export default SlideItem;
