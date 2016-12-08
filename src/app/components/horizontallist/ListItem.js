import React, { Component } from 'react';

import { SERVER } from 'app/Constants';
import styles from './listitem.css';

export default class ListItem extends Component {

  _onClick = ()=>{
    const { onClick, index } = this.props;
    onClick( index );
  }

  render(){
    const { posX, index, data } = this.props;

    return (
      <div className={styles.listItem} style={{left:posX}} onClick={this._onClick}>
        <img src={ SERVER + data.thumbnail } className={styles.thumbnail} />
        <div className={styles.listItemCover} />
      </div>
    );
  }
}

ListItem.propTypes = {
  index: React.PropTypes.number,
  width: React.PropTypes.number,
  posX: React.PropTypes.number,
  onClick: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired
}
