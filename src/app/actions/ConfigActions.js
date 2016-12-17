import fetch from 'isomorphic-fetch';
import { getResponse } from 'utils/Fetch';
import { SERVER, DATA_URL } from 'app/Constants';

export const CONFIG_REQUEST = 'CONFIG_REQUEST';
export function configRequest(){
	return {
		type: CONFIG_REQUEST,
	};
}

export const CONFIG_SUCCESS = 'CONFIG_SUCCESS';
export function configSuccess( payload ){
	return {
		type: CONFIG_SUCCESS,
		payload: payload,
	};
}

export const CONFIG_FAILURE = 'CONFIG_FAILURE';
export function configFailure( error ){
	return {
		type: CONFIG_FAILURE,
		error: error,
	};
}

export function requestConfig(){

	return dispatch => {
		dispatch( configRequest());
		const fetchPath = SERVER + DATA_URL.CONFIG;

		return fetch( fetchPath )
			.then( getResponse )
			.then( response =>{
				dispatch( configSuccess( response ));
			})
			.catch( response => {
				dispatch( configFailure( response.status ));
			});
	};
}

export const CONFIG_INITIALISED = 'CONFIG_INITIALISED';
export function configInitialised(){
	return {
		type: CONFIG_INITIALISED,
	};
}
