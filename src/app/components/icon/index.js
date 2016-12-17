import React from 'react';
import octicons from 'octicons';

import styles from './icon.css';

export const IconTypes = {
	ARROW_LEFT: 'chevron-left',
	ARROW_RIGHT: 'chevron-right',
	X: 'x',
};

export class Icon extends React.Component {

	render(){
		const { iconType, className } = this.props;

		if(process.env.NODE_ENV==='test' )
			return <div className={iconType}></div>;


		if( iconType ){
			const svg = octicons[iconType].toSVG({ 'class':styles.icon });
			return <div className={className || ''} dangerouslySetInnerHTML={{ __html:svg }} />;
		}else
	return <div>Missing icon</div>;

	}
}

Icon.propTypes = {
	iconType: React.PropTypes.string.isRequired,
	className: React.PropTypes.string,
};
