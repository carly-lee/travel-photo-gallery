import React, { Component } from 'react';

import { Scroller, Pagenator } from 'components/horizontallist';
import styles from './horizontallist.css';

export default class HorizontalList extends Component {

  _getList(type){
    if(type==='page'){
      return <Pagenator />;
    }else{
      return <Scroller />;
    }
  }

  render(){
    const { title, type } = this.props;

    return(
      <div>
        <div className={styles.title}>{title}</div>
        { this._getList(type) }
      </div>
    )
  }
}

HorizontalList.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string
}
