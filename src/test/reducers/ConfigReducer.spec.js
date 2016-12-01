import { CONFIG_REQUEST, CONFIG_SUCCESS, CONFIG_FAILURE } from 'app/actions/ConfigActions';
import { config } from 'reducers';

import configJson from '../../data/config.json';

describe('ConfigReducer', ()=>{

  const initialState = {
      type: '',
      isFetching: false,
      success: false,
      payload: null,
      data: null,
      error: null
  };

  it('should return the initial state', ()=>{
    expect(config(undefined, {})).toEqual(initialState);
  });

  it('should handle CONFIG_REQUEST', ()=>{
    const action = { type: CONFIG_REQUEST };
    const expectedState = {
        type: CONFIG_REQUEST,
        isFetching: true,
        success: false,
        payload: null,
        data: null,
        error: null
    };
    expect(config(initialState, action)).toEqual(expectedState);
  });

  it('should handle CONFIG_SUCCESS', ()=>{
    const action = { type: CONFIG_SUCCESS, payload:configJson };
    const expectedState = {
        type: CONFIG_SUCCESS,
        isFetching: false,
        success: true,
        payload: configJson,
        data: configJson,
        error: null
    };
    expect(config(initialState, action)).toEqual(expectedState);
  });

  it('should handle CONFIG_FAILURE', ()=>{
    const action = { type: CONFIG_FAILURE, error:404 };
    const expectedState = {
        type: CONFIG_FAILURE,
        isFetching: false,
        success: false,
        payload: null,
        data: null,
        error: 404
    };
    expect(config(initialState, action)).toEqual(expectedState);
  });
});
