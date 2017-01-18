import React, { PureComponent } from 'react';

import { ListItem, PageButton, BUTTON_DIRECTION } from 'components/horizontallist';
import { PAGE_SIZE } from 'app/Constants';
import { isDesktop, isTablet } from 'app/utils/Layout';
import styles from './horizontallist.css';

export default class HorizontalList extends PureComponent{
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		date: React.PropTypes.string,
		photos: React.PropTypes.array.isRequired,
		id: React.PropTypes.string.isRequired,
		onPhotoClick: React.PropTypes.func.isRequired,
	}

	constructor( props ){
		super( props );

		this.state = {
			currentIndex: 0,
			width: 0,
			currentPage: 0,
			pageSize: 0,
			maxPage: 0,
		};
	}

	componentWillMount(){
		this.setState({ width: this._getWidth(), pageSize: this._getPageSize(), maxPage: this._getMaxPage() });
		window.addEventListener( 'resize', this._onWindowResize );
	}

	componentWillUnmount(){
		window.removeEventListener( 'resize', this._onWindowResize );
	}

	_onWindowResize = () => {
		this.setState({ width: this._getWidth(), currentPage:0,
			pageSize: this._getPageSize(),
			maxPage: this._getMaxPage() });
	}

	_getWidth = ()=>{
		return parseInt( window.innerWidth/this._getPageSize());
	}

	_getMaxPage = ()=>{
		const maxPage = this.props.photos.length/this._getPageSize();
		return maxPage % 1 === 0 ? maxPage-1 : parseInt( maxPage );
	}

	_getPageSize(){
		if( isDesktop()){return PAGE_SIZE.DESKTOP;}
		if( isTablet()){return PAGE_SIZE.TABLET;}
		return PAGE_SIZE.MOBILE;
	}

	_onItemClick = ( index )=>{
		const { id, onPhotoClick } = this.props;
		onPhotoClick({ id, index });
	}

	_onPageButtonClick = ( direction )=>{
		const { currentPage, maxPage } = this.state;

		if( direction === BUTTON_DIRECTION.NEXT ){
			if( -1*currentPage < maxPage ){
				this.setState({ currentPage: currentPage+direction });
			}
		}else{
			if( currentPage ){
				this.setState({ currentPage: currentPage+direction });
			}
		}
	}

	_getListItems = ()=>{
		const { currentPage, width, pageSize } = this.state;
		let posX;
		return this.props.photos.map(( val, idx )=>{
			posX = width * ( idx + pageSize*currentPage );
			return <ListItem key={ idx } index={ idx } posX={ posX } width={ width } data={ val } onClick={ this._onItemClick } />;
		});
	}

	render(){
		const { title, date } = this.props;

		return(
			<div>
				<div className={ styles.titleContainer }>
					<span className={ styles.title }>{title}</span>
					<span className={ styles.date }> {date}</span>
				</div>
				<div className={ styles.listContainer }>
					<PageButton direction={ BUTTON_DIRECTION.PREV } onClick={ this._onPageButtonClick } />
					<PageButton direction={ BUTTON_DIRECTION.NEXT } onClick={ this._onPageButtonClick } />
					{ this._getListItems() }
				</div>
			</div>
		);
	}
}

