import mockStore from 'redux-mock-store';
import nock from 'nock';

import { requestPhotoData, PHOTO_DATA_REQUEST, PHOTO_DATA_SUCCESS, PHOTO_DATA_FAILURE } from 'app/actions/PhotoDataActions';
import { SERVER, DATA_URL } from 'app/Constants';

import london from '../../src/data/london.json';

describe( 'PhotoDataActions', () => {
	afterEach(() => {
		nock.cleanAll();
	});

	it( 'creates PHOTO_DATA_SUCCESS when fetching data has been done', () => {
		nock( SERVER )
      .get( DATA_URL.CONFIG )
      .reply( 200, london );
		console.log( 'url: ', SERVER + DATA_URL.CONFIG );

		const expectedActions = [
      { type: PHOTO_DATA_REQUEST },
      { type: PHOTO_DATA_SUCCESS, payload: london },
		];

		const store = mockStore({ photoData:[]});

		return store.dispatch( requestPhotoData( DATA_URL.CONFIG ))
                .then(() => { // return of async actions
	expect( store.getActions()).toEqual( expectedActions );
});
	});
});
