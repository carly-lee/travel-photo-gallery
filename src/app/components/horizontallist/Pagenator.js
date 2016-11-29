import React, { Component } from 'react';

import { ListItem } from 'components/horizontallist';
import { UIConstants } from 'app/Constants';

import styles from './horizontallist.css';

export default class Pagenator extends Component {
  _getListItems(){
    let data = [1,2,3,4,5,6,7,8,9,10];
    return data.map((val, idx, arr)=>{
      return <ListItem key={idx} index={idx} type={'page'}/>;
    });
  }

  render(){
    return(
      <div className={styles.listContainer}>
        { this._getListItems() }
      </div>
    );
  }
}

Pagenator.propTypes = {
}
