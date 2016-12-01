import React from 'react';
import octicons from 'octicons';

import styles from './icon.css';

export const IconTypes = {
  ARROW_LEFT: 'chevron-left',
  ARROW_RIGHT: 'chevron-right'
}

export class Icon extends React.Component {

  render(){
    const { iconType } = this.props;

    if(process.env.NODE_ENV==='test' ) {
      return <div className={iconType}></div>
    }

    if( iconType ){
      const svg = octicons[iconType].toSVG({"class":styles.icon});
      return <div className={styles.iconContainer} dangerouslySetInnerHTML={{ __html:svg }} />;
    }else{
      return <div>Missing icon</div>;
    };
  }
}

Icon.propTypes = {
  iconType: React.PropTypes.string.isRequired
}
