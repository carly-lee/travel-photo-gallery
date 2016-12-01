import React, { Component } from 'react';

import { ListItem, PageButton, BUTTON_DIRECTION } from 'components/horizontallist';
import { PAGE_SIZE } from 'app/Constants';
import { isDesktop, isTablet } from 'app/utils/Layout';
import styles from './horizontallist.css';

export default class HorizontalList extends Component {
  constructor(props) {
      super(props);

      this.state = {
          currentIndex: 0,
          width: 0
      }
  }

  componentDidMount() {
    this.setState({ width: this._getWidth() });
    window.addEventListener('resize', this._onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onWindowResize);
  }

  _onWindowResize = (event) => {
    this.setState({ width: this._getWidth(), pageSize: this._getPageSize() });
  }

  _getWidth = ()=>{
    return parseInt(window.innerWidth/this._getPageSize());
  }

  _getPageSize(){
    if( isDesktop() ) return PAGE_SIZE.DESKTOP;
    if( isTablet() ) return PAGE_SIZE.TABLET;
    return PAGE_SIZE.MOBILE;
  }

  _onItemClick( index ){
    console.log( 'onItemClick', index );
  }

  _onPageButtonClick( direction ){
    console.log( '_onPageButtonClick', direction );
  }

  _getListItems(){
    let data = [1,2,3,4,5,6,7,8,9,10];
    let posX;
    return data.map((val, idx, arr)=>{
      posX = this.state.width * idx;
      return <ListItem key={idx} index={idx} posX={posX} width={this.state.width} onClick={this._onItemClick} />;
    });
  }

  render(){
    const { title } = this.props;

    return(
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.listContainer}>
          <PageButton direction={BUTTON_DIRECTION.LEFT} onClick={this._onPageButtonClick} />
          <PageButton direction={BUTTON_DIRECTION.RIGHT} onClick={this._onPageButtonClick} />
          { this._getListItems() }
        </div>
      </div>
    );
  }
}

HorizontalList.propTypes = {
  title: React.PropTypes.string.isRequired
}
