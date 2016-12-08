import React, { Component } from 'react';

import { SERVER } from 'app/Constants';
import styles from './carousel.css';

export default class CarouselItem extends Component {
  render(){
    const { data } = this.props;

    return(
      <div className={styles.carouselBackground} style={{backgroundImage:"url("+SERVER+data.src+")"}}>
      </div>
    );
  }
}

CarouselItem.propTypes = {
  data: React.PropTypes.object.isRequired
}
