import React, { Component } from 'react';

import styles from './listitem.css';

export default class ListItem extends Component {

  _onClick = ()=>{
    const { onClick, index } = this.props;
    onClick( index );
  }

  render(){
    const { posX, index } = this.props;

    return (
      <div className={styles.listItem} style={{left:posX}} onClick={this._onClick}>
        <div className={styles.temp}>{index}</div>
        <div className={styles.listItemCover} />
      </div>
    );
  }
}

ListItem.propTypes = {
  index: React.PropTypes.number,
  width: React.PropTypes.number,
  posX: React.PropTypes.number,
  onClick: React.PropTypes.func.isRequired
}
