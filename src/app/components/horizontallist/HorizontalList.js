import React, { Component } from 'react';

import { Scroller, Pagenator } from 'components/horizontallist';
import styles from './horizontallist.css';

export default class HorizontalList extends Component {

  _getScrollList(){
    return <Scroller />;
  }

  _getPageList(){
    return <Pagenator />;
  }

  render(){
    const { title, type } = this.props;

    return(
      <div>
        <div className={styles.title}>{title}</div>
        {type==='page' ? this._getPageList() : this._getScrollList()}
      </div>
    )
  }
}

HorizontalList.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string
}
