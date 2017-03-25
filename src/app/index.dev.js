import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from 'store';
import App from 'containers/App';
import DevTools from 'app/DevTools';
import './index.css';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
		<AppContainer>
			<Provider store={ store }>
				<div>
					<App />
					<DevTools />
				</div>
			</Provider>
		</AppContainer>,
		document.getElementById( 'root' )
	);
};

render( App );

if( module.hot ){
  module.hot.accept( 'containers/App', () => {
		// const nextApp = require('containers/App').default;
		// render( nextApp ); 
		render( App );
	});
}