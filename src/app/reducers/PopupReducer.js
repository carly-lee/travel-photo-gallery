import { OPEN_POPUP, CLOSE_POPUP } from 'actions/PopupActions';

const initialState = {
	type: '',
	data: null,
};

export function popup( state = initialState, action ) {
	const { type, data } = action;

	switch (type) {
	case OPEN_POPUP:
		return Object.assign({}, state, { type, data });
	case CLOSE_POPUP:
		return Object.assign({}, state, { type });
	default:
		return state;
	}
}
