import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from 'reducers';

export default function configureStore(){

	const combinedReducers = combineReducers({
		...reducers,
	});

	const store = createStore( combinedReducers,
                             applyMiddleware( thunk )
                           );

	return store;
}
