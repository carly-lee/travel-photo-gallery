import React, { Component } from 'react';

import styles from './carousel.css';

export default class CarouselItem extends Component {
  render(){
    const { data } = this.props;

    return(
      <div className={styles.carouselItem}>
        <img src={data.src} />
      </div>
    );
  }
}

CarouselItem.propTypes = {
  data: React.PropTypes.object.isRequired
}
