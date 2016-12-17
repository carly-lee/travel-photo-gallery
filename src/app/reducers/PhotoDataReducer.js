import { PHOTO_DATA_REQUEST, PHOTO_DATA_SUCCESS, PHOTO_DATA_FAILURE } from 'actions/PhotoDataActions';

const initialState = {
	type: '',
	isFetching: false,
	success: false,
	payload: null,
	data: null,
	error: null,
};

export function photoData( state = initialState, action ){
	const { type, payload, error } = action;

	switch ( type ){
	case PHOTO_DATA_REQUEST:
		return Object.assign({}, state, {
			type: type,
			isFetching: true,
			error: null,
		});
	case PHOTO_DATA_SUCCESS:
		const newData = { [payload.id]:payload.photos };
		return Object.assign({}, state, {
			type: type,
			success: true,
			isFetching: false,
			payload: payload,
			data: Object.assign({}, state.data, newData ),
		});
	case PHOTO_DATA_FAILURE:
		return Object.assign({}, state, {
			type: type,
			isFetching: false,
			success: false,
			payload: null,
			error: error,
		});
	default:
		return state;
	}
}
