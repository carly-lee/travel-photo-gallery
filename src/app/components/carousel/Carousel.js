import React, { Component } from 'react';

import { CarouselItem } from 'components/carousel';
import styles from './carousel.css';

export default class Carousel extends Component {

  _getItems( list ){
    return list.map(( obj, idx, array )=>{
      return <CarouselItem key={idx} data={obj} />;
    });
  }

  render(){
    const { list } = this.props;
    return(
      <div className={styles.carousel}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>My travel photo gallery</h1>
          <p className={styles.description}>These are photos I have taken while travel several cities.</p>
        </div>
        <div className={styles.itemContainer}>{ this._getItems( list )}</div>
      </div>
    );
  }
}

Carousel.propTypes = {
  list: React.PropTypes.array.isRequired
}
