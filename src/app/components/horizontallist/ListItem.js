import React, { Component } from 'react';

import styles from './horizontallist.css';

export default class ListItem extends Component {

  render(){
    const { type, posX, index } = this.props;

    if( type === 'page'){
      return (
        <div className={styles.pageListItem} style={{left:posX}}>
          {'page ' + posX}
        </div>
      );
    }else{
      return (
        <div className={styles.listitem}>
          {index}
        </div>
      );
    }
  }
}

ListItem.propTypes = {
  type: React.PropTypes.string,
  index: React.PropTypes.number,
  width: React.PropTypes.number,
  posX: React.PropTypes.number
}
