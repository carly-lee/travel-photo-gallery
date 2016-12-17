import { OPEN_POPUP, CLOSE_POPUP } from 'actions/PopupActions';
import { popup } from 'reducers';

describe( 'ConfigReducer', ()=>{

	const initialState = {
		type: '',
		data: null,
	};

	it( 'should return the initial state', ()=>{
		expect( popup( undefined, {})).toEqual( initialState );
	});

	it( 'should handle OPEN_POPUP', ()=>{
		const action = { type: OPEN_POPUP, data: { 'src':'/images/LD/LD_0.jpg', 'location':'Oxford Circus', 'city':'London' }};
		const expectedState = {
			type: OPEN_POPUP,
			data: action.data,
		};
		expect( popup( initialState, action )).toEqual( expectedState );
	});

	it( 'should handle CLOSE_POPUP', ()=>{
		const action = { type: CLOSE_POPUP };
		const expectedState = {
			type: CLOSE_POPUP,
			data: null,
		};
		expect( popup( initialState, action )).toEqual( expectedState );
	});

});
