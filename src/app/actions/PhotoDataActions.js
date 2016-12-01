import fetch from 'isomorphic-fetch';
import { getResponse } from 'utils/Fetch';
import { SERVER } from 'app/Constants';

export const PHOTO_DATA_REQUEST = 'PHOTO_DATA_REQUEST';
export function photoDataRequest() {
  return {
    type: PHOTO_DATA_REQUEST
  }
}

export const PHOTO_DATA_SUCCESS = 'PHOTO_DATA_SUCCESS';
export function photoDataSuccess(payload) {
  return {
    type: PHOTO_DATA_SUCCESS,
    payload: payload
  }
}

export const PHOTO_DATA_FAILURE = 'PHOTO_DATA_FAILURE';
export function photoDataFailure(error) {
  return {
    type: PHOTO_DATA_FAILURE,
    error: error
  }
}

export function requestPhotoData( photoDataUrl, city ) {

  return dispatch => {
    dispatch(photoDataRequest());
    const fetchPath = SERVER + photoDataUrl;

    return fetch(fetchPath)
      .then(getResponse)
      .then(response =>{
        dispatch(photoDataSuccess(response, city));
      })
      .catch(response => {
        dispatch(photoDataFailure(response.status));
      });
  }
}
