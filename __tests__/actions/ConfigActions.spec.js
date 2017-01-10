import mockStore from 'redux-mock-store';
import nock from 'nock';

import { requestConfig, CONFIG_REQUEST, CONFIG_SUCCESS, CONFIG_FAILURE } from 'app/actions/ConfigActions';
import { SERVER, DATA_URL } from 'app/Constants';

import config from '../../src/data/config.json';

describe( 'ConfigActions', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it( 'creates CONFIG_SUCCESS when fetching config.json has been done', () => {
		nock( SERVER )
      .get( DATA_URL.CONFIG )
      .reply( 200, config );

		const expectedActions = [
      { type: CONFIG_REQUEST },
      { type: CONFIG_SUCCESS, payload: config },
		];

		const store = mockStore({ config:[] });

		return store.dispatch( requestConfig())
                .then(() => { // return of async actions
									expect( store.getActions()).toEqual( expectedActions );
								});
	});
});
