import React, { PureComponent } from 'react';
import Preload from 'react-preload';

import { SERVER } from 'app/Constants';
import styles from './listitem.css';

export default class ListItem extends PureComponent{

	_onClick = ()=>{
		const { onClick, index } = this.props;
		onClick( index );
	}

	_handleImageLoadError(){
	}

	_handleImageLoadSuccess(){
	}

	render(){
		const { posX, data } = this.props;
		const loadingIndicator = ( <div>Loading...</div> );
		const imagePath = SERVER + data.thumbnail;

		return (
			<div className={ styles.listItem } style={{ left:posX }} onClick={ this._onClick }>
				<Preload loadingIndicator={ loadingIndicator } images={ [imagePath] } autoResolveDelay={ 3000 } onError={ this._handleImageLoadError } onSuccess={ this._handleImageLoadSuccess } resolveOnError={ true } mountChildren={ true }>
					<img src={ imagePath } className={ styles.thumbnail } alt={ data.location } />
				</Preload>
				<div className={ styles.listItemCover } />
			</div>
		);
	}
}

ListItem.propTypes = {
	index: React.PropTypes.number,
	width: React.PropTypes.number,
	posX: React.PropTypes.number,
	onClick: React.PropTypes.func.isRequired,
	data: React.PropTypes.object.isRequired,
};
