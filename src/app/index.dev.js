import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'store';
import App from 'containers/App';
import DevTools from 'app/DevTools';
import './index.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={ store }>
		<div>
			<App />
			<DevTools />
		</div>
	</Provider>,
  document.getElementById( 'root' )
);
