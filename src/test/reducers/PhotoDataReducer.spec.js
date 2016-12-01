import { PHOTO_DATA_REQUEST, PHOTO_DATA_SUCCESS, PHOTO_DATA_FAILURE } from 'app/actions/PhotoDataActions';
import { photoData } from 'reducers';

import londonJson from '../../data/london.json';
import nyJson from '../../data/ny.json';

describe('PhotoDataReducer', ()=>{

  const initialState = {
    type: '',
    isFetching: false,
    success: false,
    payload: null,
    data: {},
    error: null
  };

  it('should return the initial state', ()=>{
    expect(photoData(undefined, {})).toEqual(initialState);
  });

  it('should handle PHOTO_DATA_REQUEST', ()=>{
    const action = { type: PHOTO_DATA_REQUEST };
    const expectedState = {
        type: PHOTO_DATA_REQUEST,
        isFetching: true,
        success: false,
        payload: null,
        data: {},
        error: null
    };
    expect(photoData(initialState, action)).toEqual(expectedState);
  });

  it('should handle PHOTO_DATA_SUCCESS', ()=>{
    const action = { type: PHOTO_DATA_SUCCESS, payload:londonJson, city:'london' };
    const expectedState = {
        type: PHOTO_DATA_SUCCESS,
        isFetching: false,
        success: true,
        payload: londonJson,
        data: { "london":londonJson.photos },
        error: null
    };
    expect(photoData(initialState, action)).toEqual(expectedState);

    const action2 = { type: PHOTO_DATA_SUCCESS, payload:nyJson, city:'ny' };
    const expectedState2 = {
        type: PHOTO_DATA_SUCCESS,
        isFetching: false,
        success: true,
        payload: nyJson,
        data: { "london":londonJson.photos, "ny":nyJson.photos },
        error: null
    };
    expect(photoData(expectedState, action2)).toEqual(expectedState2);
  });

  it('should handle PHOTO_DATA_FAILURE', ()=>{
    const action = { type: PHOTO_DATA_FAILURE, error: 404 };
    const expectedState = {
        type: PHOTO_DATA_FAILURE,
        isFetching: false,
        success: false,
        payload: null,
        data: {},
        error: 404
    };
    expect(photoData(initialState, action)).toEqual(expectedState);
  });
});
