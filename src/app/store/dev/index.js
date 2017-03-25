import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import * as reducers from 'reducers';
import DevTools from 'app/DevTools';

export default function configureStore(){

	const combinedReducers = combineReducers({
		...reducers,
	});

	const enhancer = compose(
    applyMiddleware( thunk, createLogger()),
    DevTools.instrument()
  );

	return createStore( combinedReducers, enhancer );
}
