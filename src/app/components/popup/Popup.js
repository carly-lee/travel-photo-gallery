import React, { Component } from 'react';
import Preload from 'react-preload';

import { IconTypes, Icon } from 'components/icon';
import { SERVER } from 'app/Constants';
import styles from './popup.css';

export default class Popup extends Component{

	_getScrollY(){
		const supportPageOffset = window.pageXOffset !== undefined;
		const isCSS1Compat = (( document.compatMode || '' ) === 'CSS1Compat' );

		return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	}

	_handleImageLoadError(){
	}

	_handleImageLoadSuccess(){
	}

	render(){
		const{ closePopup, data } = this.props;
		const imagePath = SERVER + data.src;
		const loadingIndicator = ( <div>Loading...</div> );

		return(
      <div className={styles.container} style={{ top:this._getScrollY() }} onClick={closePopup}>
        <div className={styles.content}>
        <Preload loadingIndicator={loadingIndicator} images={[imagePath]} autoResolveDelay={3000} onError={this._handleImageLoadError} onSuccess={this._handleImageLoadSuccess} resolveOnError={true} mountChildren={true}>
          <img src={imagePath} alt={data.location} />
        </Preload>
          <Icon className={styles.close} iconType={IconTypes.X} />
        </div>
      </div>
		);
	}
}

Popup.propTypes = {
	closePopup: React.PropTypes.func.isRequired,
	data: React.PropTypes.object.isRequired,
};
