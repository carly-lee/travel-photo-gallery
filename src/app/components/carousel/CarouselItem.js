import React, { Component } from 'react';
import Preload from 'react-preload';

import { SERVER } from 'app/Constants';
import styles from './carousel.css';

export default class CarouselItem extends Component{

	_handleImageLoadError(){
	}

	_handleImageLoadSuccess(){
	}

	render(){
		const { data } = this.props;
		const loadingIndicator = ( <div>Loading...</div> );
		const imagePath = SERVER + data.src;

		return(
      <Preload loadingIndicator={loadingIndicator} images={[imagePath]} autoResolveDelay={3000} onError={this._handleImageLoadError} onSuccess={this._handleImageLoadSuccess} resolveOnError={true} mountChildren={true}>
        <div className={styles.carouselBackground} style={{ backgroundImage:'url('+imagePath+')' }}>
        </div>
      </Preload>
		);
	}
}

CarouselItem.propTypes = {
	data: React.PropTypes.object.isRequired,
};
