import React, { Component } from 'react';

import styles from './carousel.css';

export default class Carousel extends Component {
  render(){
    return(
      <div className={styles.carousel}>
        <h1 className={styles.title}>My travel photo gallery</h1>
        <p className={styles.description}>These are photos I have taken while travel several cities.</p>
      </div>
    );
  }
}
