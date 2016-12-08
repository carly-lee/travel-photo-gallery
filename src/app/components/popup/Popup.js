import React, { Component } from 'react';

import { IconTypes, Icon } from 'components/icon';
import styles from './popup.css';

export default class Popup extends Component {

  _getScrollY(){
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }

  render(){
    const{ closePopup, data } = this.props;

    return(
      <div className={styles.container} style={{top:this._getScrollY()}} onClick={closePopup}>
        <div className={styles.content}>
          <img src={data.src} />
          <Icon className={styles.close} iconType={IconTypes.X} />
        </div>
      </div>
    )
  }
}

Popup.propTypes = {
  closePopup: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired
}
