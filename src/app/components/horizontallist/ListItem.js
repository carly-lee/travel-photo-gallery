import React, { Component } from 'react';

import styles from './horizontallist.css';

export default class ListItem extends Component {

  _onClick = ()=>{
    const { onClick, index } = this.props;
    onClick( index );
  }

  render(){
    const { posX, index } = this.props;

    return (
      <div className={styles.listitem} style={{left:posX}} onClick={this._onClick}>
        {index}
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
