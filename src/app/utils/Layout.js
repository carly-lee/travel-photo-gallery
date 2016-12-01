import Modernizr from 'modernizr';

import config from '../styles/config.css';

export const isDesktop = () => {
  return Modernizr.mq('(min-width: ' + config.desktopWidth + ')');
}

export const isTablet = () => {
  return Modernizr.mq('(min-width: ' + config.tabletWidth + ')');
}
