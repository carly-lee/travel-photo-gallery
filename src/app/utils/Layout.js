import config from '../styles/config.css';

export const isDesktop = (window) => {
	return window.innerWidth >= config.desktopWidth.slice(0,-2);
};

export const isTablet = (window) => {
	return window.innerWidth >= config.tabletWidth.slice(0,-2);
};
