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
          width: 0,
          currentPage: 0
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
    if( isDesktop(window) ) return PAGE_SIZE.DESKTOP;
    if( isTablet(window) ) return PAGE_SIZE.TABLET;
    return PAGE_SIZE.MOBILE;
  }

  _onItemClick( index ){
    console.log( 'onItemClick', index );
  }

  _onPageButtonClick = ( direction )=>{
    const { currentPage } = this.state;
    if( direction ){
      this.setState({currentPage: currentPage-direction });
    }else{
      if( currentPage ){
        this.setState({currentPage: currentPage-direction });
      }
    }
    console.log( '_onPageButtonClick', direction, currentPage+direction );
  }

  _getListItems = ()=>{
    const { currentPage, width } = this.state;
    let posX;
    return this.props.photos.map((val, idx, arr)=>{
      posX = width * (idx + this._getPageSize()*currentPage);
      return <ListItem key={idx} index={idx} posX={posX} width={width} data={val} onClick={this._onItemClick} />;
    });
  }

  render(){
    const { title, date } = this.props;

    return(
      <div>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.date}> {date}</span>
        </div>
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
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string,
  photos: React.PropTypes.array.isRequired
}
