import React, { Component } from 'react';

import { ListItem } from 'components/horizontallist';
import styles from './horizontallist.css';

export default class HorizontalList extends Component {

  _getListItems(){
    let data = [1,2,3,4,5,6,7,8,9,10];
    return data.map((val, idx, arr)=>{
      return <ListItem key={idx} index={idx} />;
    });
  }

  render(){
    const { title } = this.props;

    return(
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.listContainer}>
          { this._getListItems() }
        </div>
      </div>
    );
  }
}

HorizontalList.propTypes = {
  title: React.PropTypes.string.isRequired
}
