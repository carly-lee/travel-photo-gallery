import { CONFIG_REQUEST, CONFIG_SUCCESS, CONFIG_FAILURE, CONFIG_INITIALISED } from 'actions/ConfigActions';

const initialState = {
	type: '',
	isFetching: false,
	success: false,
	payload: null,
	data: null,
	error: null,
};

export function config( state = initialState, action ){
	const { type, payload, error } = action;

	switch ( type ){
	case CONFIG_REQUEST:
		return Object.assign({}, state, {
			type: type,
			isFetching: true,
			error: null,
		});
	case CONFIG_SUCCESS:
		return Object.assign({}, state, {
			type: type,
			success: true,
			isFetching: false,
			payload: payload,
			data: payload,
		});
	case CONFIG_FAILURE:
		return Object.assign({}, state, {
			type: type,
			isFetching: false,
			success: false,
			payload: null,
			error: error,
		});
	case CONFIG_INITIALISED :
		return Object.assign({}, state, {
			type: type,
		});
	default:
		return state;
	}
}
