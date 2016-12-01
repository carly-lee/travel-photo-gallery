import React, { Component } from 'react';

import { IconTypes, Icon } from 'components/icon';
import styles from './horizontallist.css';

export const BUTTON_DIRECTION = { LEFT: -1, RIGHT:1 };

export default class PageButton extends Component {

  _onClick = ()=>{
    const { onClick, direction } = this.props;
    onClick( direction );
  }

  render(){
    const { direction } = this.props;

    if( direction === BUTTON_DIRECTION.LEFT ){
      return(
        <div className={styles.pageButtonLeft} onClick={this._onClick}>
          <Icon iconType={IconTypes.ARROW_LEFT} />
        </div>
      )
    }else{
      return(
        <div className={styles.pageButtonRight} onClick={this._onClick}>
          <Icon iconType={IconTypes.ARROW_RIGHT} />
        </div>
      )
    }
  }
}

PageButton.propTypes = {
  direction: React.PropTypes.number,
  onClick: React.PropTypes.func.isRequired
}
