import React, { Component } from 'react';

import styles from './horizontallist.css';

export default class ListItem extends Component {

  render(){
    const { posX, index } = this.props;

    return (
      <div className={styles.listitem} style={{left:posX}}>
        {'page ' + posX}
      </div>
    );
  }
}

ListItem.propTypes = {
  index: React.PropTypes.number,
  width: React.PropTypes.number,
  posX: React.PropTypes.number
}
